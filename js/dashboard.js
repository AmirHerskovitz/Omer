// ===== Dashboard Module - Charts & Summary Stats =====

const CHART_COLORS = {
  primary: '#6366f1',
  primaryLight: 'rgba(99, 102, 241, 0.15)',
  accent: '#f472b6',
  accentLight: 'rgba(244, 114, 182, 0.15)',
  success: '#34d399',
  successLight: 'rgba(52, 211, 153, 0.15)',
  warning: '#fbbf24',
  warningLight: 'rgba(251, 191, 36, 0.15)',
  danger: '#f87171',
  grid: 'rgba(0,0,0,0.06)',
  stageAnnotation: 'rgba(139, 92, 246, 0.5)',
};

// RTL-aware Chart.js defaults
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.tooltip.rtl = true;
Chart.defaults.plugins.tooltip.textDirection = 'rtl';

// Register annotation plugin
try {
  const annotationPlugin = window['ChartAnnotation'] || window['chartjs-plugin-annotation'];
  if (annotationPlugin) Chart.register(annotationPlugin);
} catch(e) { /* annotation plugin optional */ }

let charts = {};

function getStageAnnotationPlugin(nights) {
  const idx = nights.findIndex(n => n.stage === 2);
  if (idx < 0) return {};
  return {
    annotation: {
      annotations: {
        stageLine: {
          type: 'line',
          xMin: idx - 0.5,
          xMax: idx - 0.5,
          borderColor: CHART_COLORS.stageAnnotation,
          borderWidth: 2,
          borderDash: [6, 4],
          label: {
            display: true,
            content: 'שלב 2 →',
            position: 'start',
            backgroundColor: 'rgba(139, 92, 246, 0.8)',
            color: '#fff',
            font: { size: 10, weight: 'bold' },
            padding: 4,
          }
        }
      }
    }
  };
}

function getChartPlugins(nights) {
  try {
    return getStageAnnotationPlugin(nights);
  } catch(e) {
    return {};
  }
}

function createGradient(ctx, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 260);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}

// ===== Summary Stats =====
function renderSummaryStats(nights) {
  const grid = document.getElementById('summaryGrid');
  const last7 = nights.slice(-7);
  const first7 = nights.slice(0, 7);

  const avgSettlingNow = Math.round(getAverageMetric(last7, 'settlingMin'));
  const avgSettlingBefore = Math.round(getAverageMetric(first7, 'settlingMin'));
  const settlingImprovement = avgSettlingBefore > 0
    ? Math.round(((avgSettlingBefore - avgSettlingNow) / avgSettlingBefore) * 100) : 0;

  const avgStretchNow = (getAverageMetric(last7, 'longestStretchMin') / 60).toFixed(1);
  const avgStretchBefore = (getAverageMetric(first7, 'longestStretchMin') / 60).toFixed(1);

  const avgPickupsNow = getAverageMetric(last7, 'pickups').toFixed(1);
  const avgPickupsBefore = getAverageMetric(first7, 'pickups').toFixed(1);

  const avgNursingNow = (getAverageMetric(last7, 'nursingIntervalMin') / 60).toFixed(1);
  const avgNursingBefore = (getAverageMetric(first7, 'nursingIntervalMin') / 60).toFixed(1);

  const independentNights = last7.filter(n => n.independentSettle).length;
  const currentStage = nights[nights.length - 1]?.stage || 1;

  grid.innerHTML = `
    <div class="stat-card">
      <div class="stat-icon">📅</div>
      <div class="stat-value">${nights.length}</div>
      <div class="stat-label">לילות בתהליך</div>
      <div class="stat-trend neutral">שלב ${currentStage}</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">⏱️</div>
      <div class="stat-value">${avgSettlingNow}<small style="font-size:0.5em"> דק׳</small></div>
      <div class="stat-label">זמן הרדמה ממוצע</div>
      <div class="stat-trend positive">↓ ${settlingImprovement}% שיפור</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">😴</div>
      <div class="stat-value">${avgStretchNow}<small style="font-size:0.5em"> שע׳</small></div>
      <div class="stat-label">רצף שינה ממוצע</div>
      <div class="stat-trend ${parseFloat(avgStretchNow) > parseFloat(avgStretchBefore) ? 'positive' : 'negative'}">
        לפני: ${avgStretchBefore} שע׳
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">🤲</div>
      <div class="stat-value">${avgPickupsNow}</div>
      <div class="stat-label">הרמות ממוצע (7 אחרונים)</div>
      <div class="stat-trend ${parseFloat(avgPickupsNow) < parseFloat(avgPickupsBefore) ? 'positive' : 'negative'}">
        לפני: ${avgPickupsBefore}
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">🍼</div>
      <div class="stat-value">${avgNursingNow}<small style="font-size:0.5em"> שע׳</small></div>
      <div class="stat-label">מרווח הנקה ראשונה</div>
      <div class="stat-trend ${parseFloat(avgNursingNow) > parseFloat(avgNursingBefore) ? 'positive' : 'negative'}">
        לפני: ${avgNursingBefore} שע׳
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">⭐</div>
      <div class="stat-value">${independentNights}<small style="font-size:0.5em">/${last7.length}</small></div>
      <div class="stat-label">הרדמות עצמאיות</div>
      <div class="stat-trend ${independentNights > 0 ? 'positive' : 'neutral'}">
        ${independentNights > 0 ? 'ללא מגע כלל!' : 'עובדים על זה'}
      </div>
    </div>
  `;
}

// ===== Chart Renderers =====

function renderSettlingChart(nights) {
  const ctx = document.getElementById('settlingChart').getContext('2d');
  const gradient = createGradient(ctx, CHART_COLORS.primaryLight, 'rgba(99,102,241,0.01)');

  charts.settling = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: nights.map(n => n.settlingMin),
        borderColor: CHART_COLORS.primary,
        backgroundColor: gradient,
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: nights.map(n =>
          n.settlingMin <= 15 ? CHART_COLORS.success :
          n.settlingMin <= 30 ? CHART_COLORS.warning : CHART_COLORS.danger
        ),
        borderWidth: 2.5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'דקות', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.raw} דקות`,
            afterLabel: (ctx) => {
              const n = nights[ctx.dataIndex];
              return `שלב ${n.stage} | ${n.settledBy}`;
            }
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderPickupsChart(nights) {
  const ctx = document.getElementById('pickupsChart').getContext('2d');

  charts.pickups = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: nights.map(n => n.pickups),
        backgroundColor: nights.map(n =>
          n.pickups === 0 ? CHART_COLORS.success + '90' :
          n.pickups <= 2 ? CHART_COLORS.warning + '90' : CHART_COLORS.danger + '90'
        ),
        borderRadius: 4,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
          title: { display: true, text: 'הרמות', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.raw} הרמות`,
            afterLabel: (ctx) => nights[ctx.dataIndex].pickups === 0 ? '⭐ ללא הרמות!' : '',
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderWakingsChart(nights) {
  const ctx = document.getElementById('wakingsChart').getContext('2d');

  charts.wakings = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: nights.map(n => n.wakingCount),
        backgroundColor: CHART_COLORS.accent + '80',
        borderColor: CHART_COLORS.accent,
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
          title: { display: true, text: 'יקיצות', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.raw} יקיצות`,
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderStretchChart(nights) {
  const ctx = document.getElementById('stretchChart').getContext('2d');
  const gradient = createGradient(ctx, CHART_COLORS.successLight, 'rgba(52,211,153,0.01)');

  charts.stretch = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: nights.map(n => +(n.longestStretchMin / 60).toFixed(1)),
        borderColor: CHART_COLORS.success,
        backgroundColor: gradient,
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: CHART_COLORS.success,
        borderWidth: 2.5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'שעות', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const min = nights[ctx.dataIndex].longestStretchMin;
              return formatMinutesAsHours(min);
            }
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderNursingChart(nights) {
  const ctx = document.getElementById('nursingChart').getContext('2d');
  const gradient = createGradient(ctx, CHART_COLORS.warningLight, 'rgba(251,191,36,0.01)');

  charts.nursing = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: nights.map(n => +(n.nursingIntervalMin / 60).toFixed(1)),
        borderColor: CHART_COLORS.warning,
        backgroundColor: gradient,
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: CHART_COLORS.warning,
        borderWidth: 2.5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'שעות', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const min = nights[ctx.dataIndex].nursingIntervalMin;
              return formatMinutesAsHours(min);
            }
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderMorningChart(nights) {
  const ctx = document.getElementById('morningChart').getContext('2d');

  const morningTimes = nights.map(n => {
    if (!n.morningWake) return null;
    return timeToDecimalHours(n.morningWake);
  });

  charts.morning = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: morningTimes,
        borderColor: CHART_COLORS.accent,
        backgroundColor: CHART_COLORS.accentLight,
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: CHART_COLORS.accent,
        borderWidth: 2.5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 4,
          max: 9,
          title: { display: true, text: 'שעה', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
          ticks: {
            callback: (v) => {
              const h = Math.floor(v);
              const m = Math.round((v - h) * 60);
              return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
            },
            stepSize: 0.5,
          }
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const n = nights[ctx.dataIndex];
              return `יקיצת בוקר: ${n.morningWake}`;
            }
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

// ===== Init =====
function initDashboard() {
  const nights = getAllNights();

  // Destroy existing charts
  Object.values(charts).forEach(c => c?.destroy?.());
  charts = {};

  renderSummaryStats(nights);
  renderSettlingChart(nights);
  renderPickupsChart(nights);
  renderWakingsChart(nights);
  renderStretchChart(nights);
  renderNursingChart(nights);
  renderMorningChart(nights);
}

// ===== Analysis Tab Charts =====

function renderSettlerPie(nights) {
  const stats = getSettlerStats(nights);
  const ctx = document.getElementById('settlerPieChart').getContext('2d');

  charts.settlerPie = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['דור 💜', 'אמיר 💙'],
      datasets: [{
        data: [stats.dorBedtime, stats.amirBedtime],
        backgroundColor: [CHART_COLORS.accent + 'cc', CHART_COLORS.primary + 'cc'],
        borderWidth: 2,
        borderColor: '#fff',
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'bottom', rtl: true, textDirection: 'rtl' },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const total = stats.dorBedtime + stats.amirBedtime;
              const pct = Math.round((ctx.raw / total) * 100);
              return `${ctx.label}: ${ctx.raw} לילות (${pct}%)`;
            }
          }
        }
      }
    }
  });
}

function renderWakingSettlerChart(nights) {
  const stats = getSettlerStats(nights);
  const ctx = document.getElementById('wakingSettlerChart').getContext('2d');

  charts.wakingSettler = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['דור 💜', 'אמיר 💙'],
      datasets: [{
        data: [stats.dorWakingTotal, stats.amirWakingTotal],
        backgroundColor: [CHART_COLORS.accent + 'cc', CHART_COLORS.primary + 'cc'],
        borderWidth: 2,
        borderColor: '#fff',
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'bottom', rtl: true, textDirection: 'rtl' },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const total = stats.dorWakingTotal + stats.amirWakingTotal;
              const pct = Math.round((ctx.raw / total) * 100);
              return `${ctx.label}: ${ctx.raw} יקיצות (${pct}%)`;
            }
          }
        }
      }
    }
  });
}

function renderBedtimeChart(nights) {
  const ctx = document.getElementById('bedtimeChart').getContext('2d');

  const bedtimes = nights.map(n => {
    const [h, m] = n.bedtime.split(':').map(Number);
    return h + m / 60;
  });

  charts.bedtime = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: bedtimes,
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: '#8b5cf6',
        borderWidth: 2.5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 17, max: 21,
          title: { display: true, text: 'שעה', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
          ticks: {
            callback: (v) => {
              const h = Math.floor(v);
              const m = Math.round((v - h) * 60);
              return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
            },
            stepSize: 0.5,
          }
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: { label: (ctx) => `השכבה: ${nights[ctx.dataIndex].bedtime}` }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderTotalSleepChart(nights) {
  const ctx = document.getElementById('totalSleepChart').getContext('2d');
  const gradient = createGradient(ctx, 'rgba(99,102,241,0.15)', 'rgba(99,102,241,0.01)');
  const analytics = nights.map(getNightAnalytics);

  charts.totalSleep = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: analytics.map(n => n.totalSleepHours),
        backgroundColor: analytics.map(n =>
          n.totalSleepHours >= 11 ? CHART_COLORS.success + '90' :
          n.totalSleepHours >= 10 ? CHART_COLORS.primary + '90' :
          CHART_COLORS.warning + '90'
        ),
        borderRadius: 4,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          min: 5,
          title: { display: true, text: 'שעות', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const min = nights[ctx.dataIndex].totalSleepMin;
              return `${formatMinutesAsHours(min)} שינה`;
            }
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderNursingCountChart(nights) {
  const ctx = document.getElementById('nursingCountChart').getContext('2d');
  const analytics = nights.map(getNightAnalytics);

  charts.nursingCount = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: analytics.map(n => n.nursingCount),
        backgroundColor: CHART_COLORS.warning + '80',
        borderColor: CHART_COLORS.warning,
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
          title: { display: true, text: 'הנקות', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.raw} הנקות`,
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderIndependentChart(nights) {
  const ctx = document.getElementById('independentChart').getContext('2d');

  // Track cumulative independent settling (including waking self-soothing)
  const data = nights.map(n => {
    const analytics = getNightAnalytics(n);
    let score = 0;
    if (n.independentSettle) score += 2;    // fully independent bedtime
    if (n.pickups === 0) score += 1;        // no pickups needed
    // Wakings that resolved without nursing
    const nonNursedWakings = n.wakings.filter(w => !w.nursed).length;
    score += nonNursedWakings * 0.5;
    return score;
  });

  charts.independent = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nights.map(n => n.displayDate),
      datasets: [{
        data: data,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: data.map(d =>
          d >= 3 ? '#10b981' : d >= 1.5 ? CHART_COLORS.warning : CHART_COLORS.danger
        ),
        borderWidth: 2.5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'ציון עצמאות', font: { size: 11 } },
          grid: { color: CHART_COLORS.grid },
        },
        x: { grid: { display: false } }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const n = nights[ctx.dataIndex];
              const parts = [];
              if (n.independentSettle) parts.push('הרדמה עצמאית ⭐');
              if (n.pickups === 0) parts.push('ללא הרמות');
              return parts.length ? parts.join(' | ') : 'עם מגע';
            }
          }
        },
        ...getChartPlugins(nights),
      }
    }
  });
}

function renderAlarmImpact(nights) {
  const impact = getAlarmImpact(nights);
  const el = document.getElementById('alarmImpactTable');

  el.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr><th>מדד</th><th>🚨 עם אזעקה (${impact.withAlarm.count})</th><th>✅ ללא אזעקה (${impact.withoutAlarm.count})</th></tr>
      </thead>
      <tbody>
        <tr>
          <td class="metric-name">יקיצות ממוצע</td>
          <td class="${impact.withAlarm.avgWakings > impact.withoutAlarm.avgWakings ? 'worse' : ''}">${impact.withAlarm.avgWakings}</td>
          <td class="${impact.withoutAlarm.avgWakings < impact.withAlarm.avgWakings ? 'better' : ''}">${impact.withoutAlarm.avgWakings}</td>
        </tr>
        <tr>
          <td class="metric-name">זמן הרדמה ממוצע</td>
          <td>${impact.withAlarm.avgSettling} דק׳</td>
          <td>${impact.withoutAlarm.avgSettling} דק׳</td>
        </tr>
        <tr>
          <td class="metric-name">שינה כוללת ממוצעת</td>
          <td>${impact.withAlarm.avgSleep} שע׳</td>
          <td>${impact.withoutAlarm.avgSleep} שע׳</td>
        </tr>
      </tbody>
    </table>
  `;
}

function renderStageComparison(nights) {
  const comp = getStageComparison(nights);
  const el = document.getElementById('stageCompareTable');

  const better = (v1, v2, lowerIsBetter = true) => {
    if (lowerIsBetter) return v1 < v2 ? 'better' : v1 > v2 ? 'worse' : '';
    return v1 > v2 ? 'better' : v1 < v2 ? 'worse' : '';
  };

  el.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr><th>מדד</th><th>שלב 1 (${comp.stage1.count} לילות)</th><th>שלב 2 (${comp.stage2.count} לילות)</th></tr>
      </thead>
      <tbody>
        <tr>
          <td class="metric-name">זמן הרדמה ממוצע</td>
          <td>${comp.stage1.avgSettling} דק׳</td>
          <td class="${better(comp.stage2.avgSettling, comp.stage1.avgSettling)}">${comp.stage2.avgSettling} דק׳</td>
        </tr>
        <tr>
          <td class="metric-name">הרמות ממוצע</td>
          <td>${comp.stage1.avgPickups}</td>
          <td class="${better(comp.stage2.avgPickups, comp.stage1.avgPickups)}">${comp.stage2.avgPickups}</td>
        </tr>
        <tr>
          <td class="metric-name">יקיצות ממוצע</td>
          <td>${comp.stage1.avgWakings}</td>
          <td class="${better(comp.stage2.avgWakings, comp.stage1.avgWakings)}">${comp.stage2.avgWakings}</td>
        </tr>
        <tr>
          <td class="metric-name">רצף שינה ארוך (דק׳)</td>
          <td>${comp.stage1.avgStretch}</td>
          <td class="${better(comp.stage2.avgStretch, comp.stage1.avgStretch, false)}">${comp.stage2.avgStretch}</td>
        </tr>
        <tr>
          <td class="metric-name">הנקות ממוצע</td>
          <td>${comp.stage1.avgNursing}</td>
          <td class="${better(comp.stage2.avgNursing, comp.stage1.avgNursing)}">${comp.stage2.avgNursing}</td>
        </tr>
      </tbody>
    </table>
  `;
}

function initAnalysis() {
  const nights = getAllNights();
  renderSettlerPie(nights);
  renderWakingSettlerChart(nights);
  renderBedtimeChart(nights);
  renderTotalSleepChart(nights);
  renderNursingCountChart(nights);
  renderIndependentChart(nights);
  renderAlarmImpact(nights);
  renderStageComparison(nights);
}

// ===== Tips Tab =====

let tipsActiveCategory = null;
let tipsStatusFilter = 'all'; // 'all' | 'not-started' | 'working' | 'mastered'

function initTips() {
  const catsContainer = document.getElementById('tipsCategories');
  const listContainer = document.getElementById('tipsList');
  const searchInput = document.getElementById('tipsSearch');

  catsContainer.innerHTML = '';

  // ---- Status filter bar ----
  const filterBar = document.getElementById('tipsStatusFilter');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.status-filter-btn');
      if (!btn) return;
      tipsStatusFilter = btn.dataset.status;
      filterBar.querySelectorAll('.status-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      refreshTipsList();
    });
  }

  // ---- Category buttons ----
  const categories = getCategorySummary();
  const allTips = getAllTips();

  const allBtn = document.createElement('button');
  allBtn.className = 'tip-cat-btn active';
  allBtn.dataset.cat = '__all__';
  allBtn.innerHTML = `הכל <span class="tip-cat-count">${allTips.length}</span>`;
  allBtn.addEventListener('click', () => {
    tipsActiveCategory = null;
    catsContainer.querySelectorAll('.tip-cat-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    refreshTipsList();
  });
  catsContainer.appendChild(allBtn);

  categories.forEach(cat => {
    const mastery = getCategoryMastery(cat.key);
    const btn = document.createElement('button');
    btn.className = 'tip-cat-btn';
    btn.dataset.cat = cat.key;
    btn.innerHTML = `${cat.icon} ${cat.title} <span class="tip-cat-count">${cat.count}</span>${
      mastery.mastered > 0 ? ` <span class="tip-cat-mastery">${mastery.pct}%</span>` : ''
    }`;
    btn.addEventListener('click', () => {
      tipsActiveCategory = cat.key;
      catsContainer.querySelectorAll('.tip-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      refreshTipsList();
    });
    catsContainer.appendChild(btn);
  });

  // ---- Search ----
  searchInput.addEventListener('input', () => refreshTipsList());

  // ---- Event delegation for tip interactions ----
  listContainer.addEventListener('click', handleTipClick);
  listContainer.addEventListener('input', handleTipInput);

  // ---- Initial render ----
  renderTipsSummary();
  refreshTipsList();
}

function refreshTipsList() {
  const listContainer = document.getElementById('tipsList');
  const searchInput = document.getElementById('tipsSearch');
  renderTipsList(listContainer, tipsActiveCategory, searchInput.value, tipsStatusFilter);
  renderTipsSummary();
  refreshCategoryMasteryBadges();
}

function renderTipsSummary() {
  const el = document.getElementById('tipsSummary');
  if (!el) return;
  const statuses = getAllTipStatuses();
  const allTips = getAllTips();
  const mastered = Object.values(statuses).filter(s => s === 'mastered').length;
  const working = Object.values(statuses).filter(s => s === 'working').length;
  const notStarted = allTips.length - mastered - working;
  const pct = Math.round((mastered / allTips.length) * 100);

  el.innerHTML = `
    <div class="tips-summary-cards">
      <div class="tips-summary-item">
        <span class="tips-summary-val">${allTips.length}</span>
        <span class="tips-summary-label">טיפים סה״כ</span>
      </div>
      <div class="tips-summary-item mastered">
        <span class="tips-summary-val">${mastered}</span>
        <span class="tips-summary-label">🟢 הוטמעו</span>
      </div>
      <div class="tips-summary-item working">
        <span class="tips-summary-val">${working}</span>
        <span class="tips-summary-label">🟡 בעבודה</span>
      </div>
      <div class="tips-summary-item not-started">
        <span class="tips-summary-val">${notStarted}</span>
        <span class="tips-summary-label">⚪ לא התחלנו</span>
      </div>
      <div class="tips-summary-item progress">
        <div class="tips-progress-bar">
          <div class="tips-progress-fill" style="width:${pct}%"></div>
        </div>
        <span class="tips-summary-label">${pct}% הושלם</span>
      </div>
    </div>
  `;
}

function refreshCategoryMasteryBadges() {
  const catsContainer = document.getElementById('tipsCategories');
  catsContainer.querySelectorAll('.tip-cat-btn').forEach(btn => {
    const catKey = btn.dataset.cat;
    if (!catKey || catKey === '__all__') return;
    const mastery = getCategoryMastery(catKey);
    let badge = btn.querySelector('.tip-cat-mastery');
    if (mastery.mastered > 0) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'tip-cat-mastery';
        btn.appendChild(badge);
      }
      badge.textContent = `${mastery.pct}%`;
      badge.classList.toggle('complete', mastery.pct === 100);
    } else if (badge) {
      badge.remove();
    }
  });
}

function renderTipsList(container, categoryKey, searchQuery, statusFilter) {
  let tips;

  if (categoryKey) {
    const catData = TIPS_DATA[categoryKey];
    if (catData) {
      tips = catData.tips.map(t => ({
        ...t, category: catData.title, categoryKey, icon: catData.icon,
      }));
    } else {
      tips = [];
    }
  } else {
    // Add categoryKey to each tip
    tips = [];
    for (const [key, cat] of Object.entries(TIPS_DATA)) {
      for (const tip of cat.tips) {
        tips.push({ ...tip, category: cat.title, categoryKey: key, icon: cat.icon });
      }
    }
  }

  // Apply search filter
  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    tips = tips.filter(t =>
      t.he.toLowerCase().includes(q) ||
      (t.tag && t.tag.toLowerCase().includes(q)) ||
      (t.category && t.category.includes(q))
    );
  }

  // Apply status filter
  if (statusFilter && statusFilter !== 'all') {
    tips = tips.filter(t => getTipStatus(t.id) === statusFilter);
  }

  if (tips.length === 0) {
    container.innerHTML = `<div class="tips-empty">
      ${statusFilter !== 'all' ? '🔍 אין טיפים בסטטוס הזה' : '🔍 לא נמצאו טיפים מתאימים'}
    </div>`;
    return;
  }

  // Sort: critical first, then important, then normal. Within same priority: working > not-started > mastered
  const priorityOrder = { critical: 0, important: 1, normal: 2 };
  const statusOrder = { working: 0, 'not-started': 1, mastered: 2 };
  tips.sort((a, b) => {
    const ma = getTipMeta(a.id), mb = getTipMeta(b.id);
    const sa = getTipStatus(a.id), sb = getTipStatus(b.id);
    const pa = priorityOrder[ma.priority] ?? 2, pb = priorityOrder[mb.priority] ?? 2;
    if (pa !== pb) return pa - pb;
    const soa = statusOrder[sa] ?? 1, sob = statusOrder[sb] ?? 1;
    return soa - sob;
  });

  container.innerHTML = tips.map(tip => {
    const meta = getTipMeta(tip.id);
    const status = getTipStatus(tip.id);
    const note = getTipNote(tip.id);
    const dateDisplay = tip.date ? tip.date.split('-').reverse().slice(0, 2).join('/') : '';

    const stageBadge = meta.stage === 1
      ? '<span class="tip-stage-badge stage-1">שלב 1</span>'
      : meta.stage === 2
      ? '<span class="tip-stage-badge stage-2">שלב 2</span>'
      : '';

    const priorityClass = meta.priority === 'critical' ? 'tip-critical'
      : meta.priority === 'important' ? 'tip-important' : '';

    const statusIcon = status === 'mastered' ? '🟢'
      : status === 'working' ? '🟡' : '⚪';

    const nextStatus = status === 'not-started' ? 'working'
      : status === 'working' ? 'mastered' : 'not-started';

    const hasNote = note.length > 0;

    return `
      <div class="tip-card ${priorityClass} tip-status-${status}" data-tip-id="${tip.id}">
        <div class="tip-card-header">
          <div class="tip-card-right">
            <button class="tip-status-toggle" data-tip-id="${tip.id}" data-next="${nextStatus}" title="שנה סטטוס">
              ${statusIcon}
            </button>
            <span class="tip-card-category">${tip.icon || '💡'} ${tip.category || ''}</span>
            ${stageBadge}
            ${meta.priority === 'critical' ? '<span class="tip-priority-badge">⭐</span>' : ''}
          </div>
          <div class="tip-card-left">
            <span class="tip-card-date">${dateDisplay}</span>
            <button class="tip-note-toggle ${hasNote ? 'has-note' : ''}" data-tip-id="${tip.id}" title="${hasNote ? 'יש הערה' : 'הוסף הערה'}">
              ${hasNote ? '📝' : '✏️'}
            </button>
          </div>
        </div>
        <div class="tip-card-text">${tip.he}</div>
        <div class="tip-note-area ${hasNote ? 'open' : ''}" data-tip-id="${tip.id}">
          <textarea class="tip-note-input" data-tip-id="${tip.id}" placeholder="ההערה שלנו...">${note}</textarea>
        </div>
      </div>
    `;
  }).join('');
}

function handleTipClick(e) {
  // Status toggle
  const statusBtn = e.target.closest('.tip-status-toggle');
  if (statusBtn) {
    const tipId = statusBtn.dataset.tipId;
    const nextStatus = statusBtn.dataset.next;
    setTipStatus(tipId, nextStatus);
    refreshTipsList();
    return;
  }

  // Note toggle
  const noteBtn = e.target.closest('.tip-note-toggle');
  if (noteBtn) {
    const tipId = noteBtn.dataset.tipId;
    const noteArea = document.querySelector(`.tip-note-area[data-tip-id="${tipId}"]`);
    if (noteArea) {
      noteArea.classList.toggle('open');
      if (noteArea.classList.contains('open')) {
        const textarea = noteArea.querySelector('textarea');
        if (textarea) textarea.focus();
      }
    }
    return;
  }
}

function handleTipInput(e) {
  const textarea = e.target.closest('.tip-note-input');
  if (textarea) {
    const tipId = textarea.dataset.tipId;
    setTipNote(tipId, textarea.value);
    // Update note toggle icon
    const toggleBtn = document.querySelector(`.tip-note-toggle[data-tip-id="${tipId}"]`);
    if (toggleBtn) {
      const hasNote = textarea.value.trim().length > 0;
      toggleBtn.textContent = hasNote ? '📝' : '✏️';
      toggleBtn.classList.toggle('has-note', hasNote);
    }
  }
}

// ===== Relevant Tips Widget (for Logger) =====

function renderRelevantTips(nightData) {
  const container = document.getElementById('relevantTipsContainer');
  if (!container) return;

  const tips = getRelevantTips(nightData);
  if (tips.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="relevant-tips-card">
      <div class="relevant-tips-title">💡 טיפים רלוונטיים ללילה הזה</div>
      ${tips.map(tip => {
        const meta = getTipMeta(tip.id);
        return `
          <div class="relevant-tip-item ${meta.priority === 'critical' ? 'tip-critical' : ''}">
            <span class="relevant-tip-icon">${tip.icon || '💡'}</span>
            <span class="relevant-tip-text">${tip.he}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}
