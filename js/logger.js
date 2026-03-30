// ===== Logger Module - Smart Sleep Form =====

let wakingCounter = 0;

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== Toggle Groups =====
function setupToggleGroup(containerId, allowMultiple = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-btn');
    if (!btn) return;

    if (allowMultiple) {
      btn.classList.toggle('active');
    } else {
      container.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  });
}

function getToggleValue(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return null;
  const active = container.querySelector('.toggle-btn.active');
  return active ? active.dataset.value : null;
}

function getMultiToggleValues(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return [];
  return Array.from(container.querySelectorAll('.toggle-btn.active'))
    .map(b => b.dataset.value);
}

// ===== Stepper =====
function setupSteppers() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.stepper-btn');
    if (!btn) return;

    const targetId = btn.dataset.target;
    const valueEl = document.getElementById(targetId);
    if (!valueEl) return;

    let val = parseInt(valueEl.textContent) || 0;
    if (btn.dataset.action === 'inc') val++;
    if (btn.dataset.action === 'dec' && val > 0) val--;
    valueEl.textContent = val;
  });
}

// ===== Waking Blocks =====
function createWakingBlock(index) {
  const id = `waking_${index}`;
  const div = document.createElement('div');
  div.className = 'waking-block';
  div.id = id;
  div.innerHTML = `
    <div class="waking-header">
      <span class="waking-number">יקיצה ${index}</span>
      <button class="waking-remove" data-waking="${id}" title="הסר יקיצה">✕</button>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>שעת יקיצה</label>
        <input type="time" class="waking-time" data-waking="${id}">
      </div>
      <div class="form-group">
        <label>מתי נרדם</label>
        <input type="time" class="waking-asleep" data-waking="${id}">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>מי הרדים</label>
        <div class="toggle-group waking-settler" data-waking="${id}">
          <button class="toggle-btn active" data-value="דור">דור</button>
          <button class="toggle-btn" data-value="אמיר">אמיר</button>
        </div>
      </div>
      <div class="form-group">
        <label>הרמות</label>
        <div class="stepper">
          <button class="stepper-btn" data-action="dec" data-target="${id}_pickups">−</button>
          <span class="stepper-value" id="${id}_pickups">0</span>
          <button class="stepper-btn" data-action="inc" data-target="${id}_pickups">+</button>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>פעולות</label>
        <div class="toggle-group waking-flags" data-waking="${id}">
          <button class="toggle-btn" data-value="nursed">🍼 הנקה</button>
          <button class="toggle-btn" data-value="touch">✋ מגע</button>
          <button class="toggle-btn" data-value="selfSoothed">⭐ עצמאי</button>
          <button class="toggle-btn" data-value="morning">🌅 בוקר</button>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group" style="flex:2">
        <label>הערות</label>
        <textarea class="waking-notes" data-waking="${id}" placeholder="פירוט..."></textarea>
      </div>
    </div>
  `;

  // Setup toggle groups within the waking block
  div.querySelectorAll('.toggle-group').forEach(group => {
    group.addEventListener('click', (e) => {
      const btn = e.target.closest('.toggle-btn');
      if (!btn) return;
      // For settler: single select. For flags: multi select
      if (group.classList.contains('waking-settler')) {
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        btn.classList.toggle('active');
      }
    });
  });

  return div;
}

function addWaking() {
  wakingCounter++;
  const container = document.getElementById('wakingsContainer');
  container.appendChild(createWakingBlock(wakingCounter));
}

function removeWaking(wakingId) {
  const block = document.getElementById(wakingId);
  if (block) {
    block.remove();
    renumberWakings();
  }
}

function renumberWakings() {
  const blocks = document.querySelectorAll('.waking-block');
  blocks.forEach((block, i) => {
    block.querySelector('.waking-number').textContent = `יקיצה ${i + 1}`;
  });
}

// ===== Collect Form Data =====
function collectFormData() {
  const date = document.getElementById('logDate').value;
  const stage = parseInt(getToggleValue('stageToggle')) || 2;
  const bedtime = document.getElementById('logBedtime').value;
  const fellAsleep = document.getElementById('logFellAsleep').value;
  const settledBy = getToggleValue('settlerToggle') || 'דור';
  const pickups = parseInt(document.getElementById('pickupCount').textContent) || 0;
  const cryLevel = getToggleValue('cryToggle');
  const touchType = getToggleValue('touchToggle');
  const position = getToggleValue('positionToggle');
  const flags = getMultiToggleValues('flagsToggle');
  const notes = document.getElementById('logSettlingNotes').value;

  if (!date || !bedtime || !fellAsleep) {
    showToast('⚠️ יש למלא תאריך, שעת השכבה ושעת הירדמות');
    return null;
  }

  // Collect wakings
  const wakingBlocks = document.querySelectorAll('.waking-block');
  const wakings = [];
  let morningWake = null;

  wakingBlocks.forEach(block => {
    const id = block.id;
    const wakeTime = block.querySelector('.waking-time')?.value;
    const asleepTime = block.querySelector('.waking-asleep')?.value;
    const settler = block.querySelector('.waking-settler .toggle-btn.active')?.dataset.value || 'דור';
    const wakingPickups = parseInt(document.getElementById(`${id}_pickups`)?.textContent) || 0;
    const wakingFlags = Array.from(block.querySelectorAll('.waking-flags .toggle-btn.active'))
      .map(b => b.dataset.value);
    const wakingNotes = block.querySelector('.waking-notes')?.value || '';

    if (wakeTime) {
      const isMorning = wakingFlags.includes('morning');
      if (isMorning) {
        morningWake = wakeTime;
      }
      wakings.push({
        time: wakeTime,
        asleep: asleepTime || null,
        by: settler,
        nursed: wakingFlags.includes('nursed'),
        selfSoothed: wakingFlags.includes('selfSoothed'),
        pickups: wakingPickups,
        isMorning,
        notes: wakingNotes,
      });
    }
  });

  // Compute metrics
  const settlingMin = minutesDiff(bedtime, fellAsleep);
  const independentSettle = flags.includes('selfSoothed');
  const hadAlarm = flags.includes('alarm');

  // Longest stretch
  let longestStretchMin = 0;
  let prevAsleep = fellAsleep;
  wakings.forEach(w => {
    if (w.time && prevAsleep) {
      const stretch = minutesDiff(prevAsleep, w.time);
      if (stretch > longestStretchMin) longestStretchMin = stretch;
    }
    if (w.asleep) prevAsleep = w.asleep;
  });

  // First nursing interval
  let nursingIntervalMin = 0;
  const firstNursing = wakings.find(w => w.nursed);
  if (firstNursing) {
    nursingIntervalMin = minutesDiff(bedtime, firstNursing.time);
  }

  // Total sleep (approximate)
  let totalSleepMin = 0;
  prevAsleep = fellAsleep;
  for (const w of wakings) {
    if (w.time && prevAsleep) {
      totalSleepMin += minutesDiff(prevAsleep, w.time);
    }
    if (w.asleep) prevAsleep = w.asleep;
  }
  // Add last stretch to morning
  if (morningWake && prevAsleep) {
    totalSleepMin += minutesDiff(prevAsleep, morningWake);
  }

  // Format date for display
  const [y, m, d] = date.split('-');
  const displayDate = `${d}/${m}`;

  return {
    date,
    displayDate,
    stage,
    bedtime,
    fellAsleep,
    settledBy,
    wakings,
    morningWake: morningWake || wakings[wakings.length - 1]?.time || null,
    settlingMin,
    pickups,
    longestStretchMin,
    nursingIntervalMin,
    totalSleepMin,
    wakingCount: wakings.filter(w => !w.isMorning).length,
    hadAlarm,
    independentSettle,
    // Extra fields for logger
    cryLevel,
    touchType,
    position,
    settlingNotes: notes,
  };
}

// ===== Save & Export =====
function saveNight() {
  const data = collectFormData();
  if (!data) return;

  const stored = JSON.parse(localStorage.getItem('omer_nights') || '[]');

  // Check for duplicate date
  const existingIdx = stored.findIndex(n => n.date === data.date);
  if (existingIdx >= 0) {
    if (!confirm('כבר קיים רישום לתאריך הזה. להחליף?')) return;
    stored[existingIdx] = data;
  } else {
    stored.push(data);
  }

  stored.sort((a, b) => a.date.localeCompare(b.date));
  localStorage.setItem('omer_nights', JSON.stringify(stored));

  showToast('✅ הלילה נשמר בהצלחה!');

  // Refresh dashboard
  initDashboard();

  // Show relevant tips
  if (typeof renderRelevantTips === 'function') {
    renderRelevantTips(data);
  }
}

function clearForm() {
  document.getElementById('logDate').value = '';
  document.getElementById('logBedtime').value = '';
  document.getElementById('logFellAsleep').value = '';
  document.getElementById('logSettlingNotes').value = '';
  document.getElementById('pickupCount').textContent = '0';
  document.getElementById('wakingsContainer').innerHTML = '';
  wakingCounter = 0;

  // Reset toggles
  document.querySelectorAll('.form-section .toggle-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Re-set defaults
  document.querySelector('#settlerToggle .toggle-btn[data-value="דור"]')?.classList.add('active');
  document.querySelector('#stageToggle .toggle-btn[data-value="2"]')?.classList.add('active');

  showToast('🗑️ הטופס נוקה');
}

function exportCSV() {
  const allNights = getAllNights();
  if (allNights.length === 0) {
    showToast('⚠️ אין נתונים לייצוא');
    return;
  }

  // Build CSV header
  const headers = [
    'תאריך', 'שלב', 'שעת השכבה', 'מתי נרדם', 'מי הרדים',
    'הרמות', 'זמן הרדמה (דק)', 'יקיצות', 'רצף ארוך (דק)',
    'מרווח הנקה (דק)', 'שינה כוללת (דק)', 'יקיצת בוקר',
    'אזעקה', 'הרדמה עצמאית'
  ];

  const rows = allNights.map(n => [
    n.displayDate || n.date,
    n.stage,
    n.bedtime,
    n.fellAsleep,
    n.settledBy,
    n.pickups,
    n.settlingMin,
    n.wakingCount,
    n.longestStretchMin,
    n.nursingIntervalMin,
    n.totalSleepMin,
    n.morningWake || '',
    n.hadAlarm ? 'כן' : 'לא',
    n.independentSettle ? 'כן' : 'לא',
  ]);

  const csvContent = '\uFEFF' + // BOM for Hebrew
    [headers, ...rows].map(r => r.join(',')).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `sleep_data_omer_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);

  showToast('📥 הקובץ הורד בהצלחה');
}

// ===== Init =====
function initLogger() {
  // Set default date to today
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById('logDate').value = today;

  // Setup toggle groups
  setupToggleGroup('stageToggle');
  setupToggleGroup('settlerToggle');
  setupToggleGroup('cryToggle');
  setupToggleGroup('touchToggle');
  setupToggleGroup('positionToggle');
  setupToggleGroup('flagsToggle', true); // multi-select

  // Setup steppers
  setupSteppers();

  // Add waking button
  document.getElementById('addWakingBtn').addEventListener('click', addWaking);

  // Remove waking delegation
  document.getElementById('wakingsContainer').addEventListener('click', (e) => {
    const btn = e.target.closest('.waking-remove');
    if (btn) removeWaking(btn.dataset.waking);
  });

  // Action buttons
  document.getElementById('saveNightBtn').addEventListener('click', saveNight);
  document.getElementById('clearFormBtn').addEventListener('click', clearForm);
  document.getElementById('exportCsvBtn').addEventListener('click', exportCSV);
}
