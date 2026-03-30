// ===== Omer's Sleep Data - Parsed from יומן לילה CSV =====
// Each night contains structured data + pre-computed metrics

const NIGHTS_DATA = [
  {
    date: '2026-03-10', displayDate: '10/03', stage: 1,
    bedtime: '18:10', fellAsleep: '20:25', settledBy: 'דור',
    wakings: [
      { time: '20:58', asleep: '21:43', by: 'דור', nursed: true },
      { time: '00:40', asleep: '05:00', by: 'דור', nursed: true },
    ],
    morningWake: '07:00',
    settlingMin: 135, pickups: 3, longestStretchMin: 177,
    nursingIntervalMin: 168, totalSleepMin: 330,
    wakingCount: 2, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-11', displayDate: '11/03', stage: 1,
    bedtime: '20:22', fellAsleep: '20:30', settledBy: 'דור',
    wakings: [
      { time: '02:45', asleep: '03:05', by: 'דור', nursed: true },
    ],
    morningWake: '05:45',
    settlingMin: 8, pickups: 1, longestStretchMin: 375,
    nursingIntervalMin: 383, totalSleepMin: 535,
    wakingCount: 1, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-12', displayDate: '12/03', stage: 1,
    bedtime: '18:50', fellAsleep: '19:12', settledBy: 'דור',
    wakings: [
      { time: '00:33', asleep: '00:54', by: 'דור', nursed: true },
    ],
    morningWake: '06:10',
    settlingMin: 22, pickups: 6, longestStretchMin: 321,
    nursingIntervalMin: 343, totalSleepMin: 637,
    wakingCount: 1, hadAlarm: false, independentSettle: false,
  },
  {
    date: '2026-03-13', displayDate: '13/03', stage: 1,
    bedtime: '18:19', fellAsleep: '18:39', settledBy: 'דור',
    wakings: [
      { time: '23:54', asleep: '00:11', by: 'דור', nursed: true },
      { time: '03:34', asleep: '04:00', by: 'דור', nursed: true },
    ],
    morningWake: '05:40',
    settlingMin: 20, pickups: 3, longestStretchMin: 315,
    nursingIntervalMin: 335, totalSleepMin: 541,
    wakingCount: 2, hadAlarm: false, independentSettle: false,
  },
  {
    date: '2026-03-14', displayDate: '14/03', stage: 1,
    bedtime: '17:54', fellAsleep: '18:03', settledBy: 'דור',
    wakings: [
      { time: '01:51', asleep: '02:15', by: 'דור', nursed: true },
    ],
    morningWake: '05:25',
    settlingMin: 9, pickups: 2, longestStretchMin: 468,
    nursingIntervalMin: 477, totalSleepMin: 658,
    wakingCount: 1, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-15', displayDate: '15/03', stage: 1,
    bedtime: '17:53', fellAsleep: '18:13', settledBy: 'דור',
    wakings: [
      { time: '22:12', asleep: '22:22', by: 'דור', nursed: true },
      { time: '01:16', asleep: '01:27', by: 'דור', nursed: true },
      { time: '03:50', asleep: '04:00', by: 'דור', nursed: false },
    ],
    morningWake: '04:52',
    settlingMin: 20, pickups: 3, longestStretchMin: 239,
    nursingIntervalMin: 259, totalSleepMin: 608,
    wakingCount: 3, hadAlarm: false, independentSettle: false,
  },
  {
    date: '2026-03-16', displayDate: '16/03', stage: 1,
    bedtime: '18:01', fellAsleep: '18:13', settledBy: 'דור',
    wakings: [
      { time: '23:35', asleep: '23:41', by: 'דור', nursed: true },
      { time: '01:55', asleep: '02:15', by: 'דור', nursed: false },
    ],
    morningWake: '05:00',
    settlingMin: 12, pickups: 0, longestStretchMin: 322,
    nursingIntervalMin: 334, totalSleepMin: 621,
    wakingCount: 2, hadAlarm: false, independentSettle: false,
  },
  {
    date: '2026-03-17', displayDate: '17/03', stage: 1,
    bedtime: '17:32', fellAsleep: '17:41', settledBy: 'דור',
    wakings: [
      { time: '18:10', asleep: '18:30', by: 'דור', nursed: false },
      { time: '23:42', asleep: '23:48', by: 'דור', nursed: true },
      { time: '02:39', asleep: '03:20', by: 'דור', nursed: true },
    ],
    morningWake: '05:16',
    settlingMin: 9, pickups: 1, longestStretchMin: 312,
    nursingIntervalMin: 370, totalSleepMin: 628,
    wakingCount: 3, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-18', displayDate: '18/03', stage: 1,
    bedtime: '18:08', fellAsleep: '18:18', settledBy: 'דור',
    wakings: [
      { time: '01:08', asleep: '01:14', by: 'דור', nursed: true },
      { time: '03:13', asleep: '05:04', by: 'דור', nursed: false },
      { time: '05:39', asleep: '05:57', by: 'דור', nursed: true },
    ],
    morningWake: '08:02',
    settlingMin: 10, pickups: 0, longestStretchMin: 410,
    nursingIntervalMin: 420, totalSleepMin: 689,
    wakingCount: 3, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-19', displayDate: '19/03', stage: 1,
    bedtime: '19:31', fellAsleep: '19:43', settledBy: 'דור',
    wakings: [
      { time: '02:45', asleep: '02:53', by: 'דור', nursed: true },
    ],
    morningWake: '05:40',
    settlingMin: 12, pickups: 0, longestStretchMin: 422,
    nursingIntervalMin: 434, totalSleepMin: 589,
    wakingCount: 1, hadAlarm: false, independentSettle: false,
  },
  {
    date: '2026-03-20', displayDate: '20/03', stage: 1,
    bedtime: '19:06', fellAsleep: '19:36', settledBy: 'דור',
    wakings: [
      { time: '22:10', asleep: '22:22', by: 'דור', nursed: false },
      { time: '02:10', asleep: '02:25', by: 'דור', nursed: true },
    ],
    morningWake: '05:01',
    settlingMin: 30, pickups: 0, longestStretchMin: 228,
    nursingIntervalMin: 424, totalSleepMin: 538,
    wakingCount: 2, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-21', displayDate: '21/03', stage: 1,
    bedtime: '17:45', fellAsleep: '18:12', settledBy: 'דור',
    wakings: [
      { time: '18:46', asleep: '18:49', by: 'דור', nursed: false },
      { time: '21:46', asleep: '22:10', by: 'דור+אמיר', nursed: false },
      { time: '00:28', asleep: '00:38', by: 'דור', nursed: true },
      { time: '03:40', asleep: '03:50', by: 'דור', nursed: true },
    ],
    morningWake: '06:35',
    settlingMin: 27, pickups: 3, longestStretchMin: 182,
    nursingIntervalMin: 403, totalSleepMin: 696,
    wakingCount: 4, hadAlarm: false, independentSettle: false,
  },
  {
    date: '2026-03-22', displayDate: '22/03', stage: 1,
    bedtime: '18:52', fellAsleep: '19:00', settledBy: 'אמיר',
    wakings: [
      { time: '19:42', asleep: '19:43', by: 'אמיר', nursed: false },
      { time: '22:21', asleep: '22:27', by: 'דור', nursed: false },
      { time: '01:53', asleep: '02:03', by: 'דור', nursed: true },
    ],
    morningWake: '05:42',
    settlingMin: 8, pickups: 5, longestStretchMin: 219,
    nursingIntervalMin: 421, totalSleepMin: 625,
    wakingCount: 3, hadAlarm: false, independentSettle: false,
  },
  {
    date: '2026-03-23', displayDate: '23/03', stage: 2,
    bedtime: '17:34', fellAsleep: '18:04', settledBy: 'דור',
    wakings: [
      { time: '18:31', asleep: '18:34', by: 'דור', nursed: false },
      { time: '19:34', asleep: '19:36', by: 'דור', nursed: false },
      { time: '02:31', asleep: '02:41', by: 'דור', nursed: true },
    ],
    morningWake: '06:05',
    settlingMin: 30, pickups: 1, longestStretchMin: 415,
    nursingIntervalMin: 537, totalSleepMin: 706,
    wakingCount: 3, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-24', displayDate: '24/03', stage: 2,
    bedtime: '17:53', fellAsleep: '18:07', settledBy: 'דור',
    wakings: [
      { time: '23:04', asleep: '23:06', by: 'דור', nursed: false },
      { time: '23:49', asleep: '23:51', by: 'אמיר', nursed: false },
      { time: '00:43', asleep: '00:52', by: 'דור', nursed: true },
    ],
    morningWake: '04:54',
    settlingMin: 14, pickups: 0, longestStretchMin: 297,
    nursingIntervalMin: 410, totalSleepMin: 634,
    wakingCount: 3, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-25', displayDate: '25/03', stage: 2,
    bedtime: '19:18', fellAsleep: '19:32', settledBy: 'דור',
    wakings: [
      { time: '03:13', asleep: '03:21', by: 'דור', nursed: true },
    ],
    morningWake: '06:15',
    settlingMin: 14, pickups: 0, longestStretchMin: 461,
    nursingIntervalMin: 475, totalSleepMin: 635,
    wakingCount: 1, hadAlarm: true, independentSettle: true,
  },
  {
    date: '2026-03-26', displayDate: '26/03', stage: 2,
    bedtime: '17:40', fellAsleep: '17:53', settledBy: 'דור',
    wakings: [
      { time: '18:24', asleep: '18:26', by: 'דור', nursed: false },
      { time: '22:55', asleep: '23:10', by: 'אמיר', nursed: false },
      { time: '23:29', asleep: '23:52', by: 'דור', nursed: false },
      { time: '04:29', asleep: '04:40', by: 'דור', nursed: true },
    ],
    morningWake: '07:44',
    settlingMin: 13, pickups: 0, longestStretchMin: 277,
    nursingIntervalMin: 649, totalSleepMin: 780,
    wakingCount: 4, hadAlarm: true, independentSettle: false,
  },
  {
    date: '2026-03-27', displayDate: '27/03', stage: 2,
    bedtime: '19:49', fellAsleep: '20:03', settledBy: 'דור',
    wakings: [
      { time: '23:14', asleep: '23:16', by: 'דור', nursed: false },
      { time: '03:15', asleep: '03:24', by: 'דור', nursed: true },
      { time: '05:40', asleep: '05:48', by: 'דור', nursed: false },
    ],
    morningWake: '06:45',
    settlingMin: 14, pickups: 0, longestStretchMin: 239,
    nursingIntervalMin: 446, totalSleepMin: 623,
    wakingCount: 3, hadAlarm: true, independentSettle: true,
  },
  {
    date: '2026-03-28', displayDate: '28/03', stage: 2,
    bedtime: '19:42', fellAsleep: '20:03', settledBy: 'דור',
    wakings: [
      { time: '00:55', asleep: '01:22', by: 'אמיר', nursed: false },
      { time: '05:30', asleep: '06:31', by: 'דור', nursed: true },
    ],
    morningWake: '08:25',
    settlingMin: 21, pickups: 0, longestStretchMin: 292,
    nursingIntervalMin: 588, totalSleepMin: 654,
    wakingCount: 2, hadAlarm: false, independentSettle: true,
  },
  {
    date: '2026-03-29', displayDate: '29/03', stage: 2,
    bedtime: '18:10', fellAsleep: '18:25', settledBy: 'דור',
    wakings: [
      { time: '23:55', asleep: '00:10', by: 'אמיר', nursed: false },
      { time: '03:01', asleep: '03:12', by: 'דור', nursed: true },
    ],
    morningWake: '07:02',
    settlingMin: 15, pickups: 0, longestStretchMin: 330,
    nursingIntervalMin: 531, totalSleepMin: 731,
    wakingCount: 2, hadAlarm: false, independentSettle: false,
  },
];

// ===== Helper Functions =====

function timeToMinutes(timeStr) {
  if (!timeStr) return null;
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function minutesDiff(startTime, endTime) {
  let start = timeToMinutes(startTime);
  let end = timeToMinutes(endTime);
  if (end < start) end += 1440; // cross midnight
  return end - start;
}

function formatMinutesAsHours(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m} דק׳`;
  if (m === 0) return `${h} שע׳`;
  return `${h}:${String(m).padStart(2, '0')} שע׳`;
}

function formatMinutes(min) {
  if (min < 60) return `${min} דק׳`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m > 0 ? `${h} שע׳ ${m} דק׳` : `${h} שע׳`;
}

function timeToDecimalHours(timeStr) {
  if (!timeStr) return null;
  const [h, m] = timeStr.split(':').map(Number);
  return h + m / 60;
}

// ===== Data Access =====

// Live data source (populated by csv-parser.js fetch)
let _liveNights = null;

function setLiveNights(nights) {
  _liveNights = nights;
}

function getAllNights() {
  // Priority: live data > hardcoded + localStorage entries
  const base = _liveNights || NIGHTS_DATA;
  const stored = JSON.parse(localStorage.getItem('omer_nights') || '[]');

  // Merge: use live data, then add any localStorage entries for dates not in live data
  const baseDates = new Set(base.map(n => n.date));
  const extras = stored.filter(n => !baseDates.has(n.date));

  return [...base, ...extras].sort((a, b) => a.date.localeCompare(b.date));
}

function getLastNNights(n) {
  const all = getAllNights();
  return all.slice(-n);
}

function getAverageMetric(nights, key) {
  const values = nights.map(n => n[key]).filter(v => v != null);
  if (values.length === 0) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function getStageTransitionIndex() {
  const all = getAllNights();
  return all.findIndex(n => n.stage === 2);
}

// ===== Derived Analytics =====

function getNightAnalytics(night) {
  const n = night;
  const nursingCount = n.wakings.filter(w => w.nursed).length;
  const amirWakings = n.wakings.filter(w => w.by === 'אמיר').length;
  const dorWakings = n.wakings.filter(w => w.by === 'דור').length;
  const bedtimeDecimal = timeToDecimalHours(n.bedtime);
  const totalSleepHours = +(n.totalSleepMin / 60).toFixed(1);
  // Compute re-settling times per waking
  const resettleTimes = n.wakings
    .filter(w => w.time && w.asleep)
    .map(w => minutesDiff(w.time, w.asleep));
  const avgResettleMin = resettleTimes.length > 0
    ? Math.round(resettleTimes.reduce((a,b) => a+b, 0) / resettleTimes.length) : 0;

  return {
    ...n,
    nursingCount,
    amirWakings,
    dorWakings,
    amirSettled: n.settledBy === 'אמיר' ? 1 : 0,
    dorSettled: n.settledBy === 'דור' ? 1 : 0,
    bedtimeDecimal,
    totalSleepHours,
    resettleTimes,
    avgResettleMin,
  };
}

function getAllNightsAnalytics() {
  return getAllNights().map(getNightAnalytics);
}

function getSettlerStats(nights) {
  const analytics = nights.map(getNightAnalytics);
  let dorBedtime = 0, amirBedtime = 0;
  let dorWakingTotal = 0, amirWakingTotal = 0;

  analytics.forEach(n => {
    if (n.settledBy === 'דור') dorBedtime++; else amirBedtime++;
    dorWakingTotal += n.dorWakings;
    amirWakingTotal += n.amirWakings;
  });

  return {
    dorBedtime, amirBedtime,
    dorWakingTotal, amirWakingTotal,
    dorTotal: dorBedtime + dorWakingTotal,
    amirTotal: amirBedtime + amirWakingTotal,
  };
}

function getAlarmImpact(nights) {
  const analytics = nights.map(getNightAnalytics);
  const withAlarm = analytics.filter(n => n.hadAlarm);
  const withoutAlarm = analytics.filter(n => !n.hadAlarm);

  return {
    withAlarm: {
      count: withAlarm.length,
      avgWakings: withAlarm.length ? +(withAlarm.reduce((s,n)=>s+n.wakingCount,0)/withAlarm.length).toFixed(1) : 0,
      avgSettling: withAlarm.length ? Math.round(withAlarm.reduce((s,n)=>s+n.settlingMin,0)/withAlarm.length) : 0,
      avgSleep: withAlarm.length ? +(withAlarm.reduce((s,n)=>s+n.totalSleepHours,0)/withAlarm.length).toFixed(1) : 0,
    },
    withoutAlarm: {
      count: withoutAlarm.length,
      avgWakings: withoutAlarm.length ? +(withoutAlarm.reduce((s,n)=>s+n.wakingCount,0)/withoutAlarm.length).toFixed(1) : 0,
      avgSettling: withoutAlarm.length ? Math.round(withoutAlarm.reduce((s,n)=>s+n.settlingMin,0)/withoutAlarm.length) : 0,
      avgSleep: withoutAlarm.length ? +(withoutAlarm.reduce((s,n)=>s+n.totalSleepHours,0)/withoutAlarm.length).toFixed(1) : 0,
    },
  };
}

function getStageComparison(nights) {
  const analytics = nights.map(getNightAnalytics);
  const s1 = analytics.filter(n => n.stage === 1);
  const s2 = analytics.filter(n => n.stage === 2);
  const avg = (arr, key) => arr.length ? +(arr.reduce((s,n)=>s+n[key],0)/arr.length).toFixed(1) : 0;

  return {
    stage1: {
      count: s1.length,
      avgSettling: avg(s1, 'settlingMin'),
      avgPickups: avg(s1, 'pickups'),
      avgWakings: avg(s1, 'wakingCount'),
      avgStretch: avg(s1, 'longestStretchMin'),
      avgNursing: avg(s1, 'nursingCount'),
    },
    stage2: {
      count: s2.length,
      avgSettling: avg(s2, 'settlingMin'),
      avgPickups: avg(s2, 'pickups'),
      avgWakings: avg(s2, 'wakingCount'),
      avgStretch: avg(s2, 'longestStretchMin'),
      avgNursing: avg(s2, 'nursingCount'),
    },
  };
}
