// ===== Live CSV Parser — Fetches & Parses Google Sheet =====

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7QMUWVJ9FSyIDtphI0nhCw_pTjbC1p1VeiwtdfP0V8Ass6R8pdAGVljuB419BsnJ4p5T-oYIy2sc4/pub?output=csv';

const LIVE_DATA_KEY = 'omer_live_data';
const LIVE_TIMESTAMP_KEY = 'omer_live_timestamp';

// ===== CSV Parsing =====

/**
 * Parse a CSV string that may contain quoted multi-line fields.
 * Returns an array of arrays (rows × columns).
 */
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < text.length && text[i + 1] === '"') {
          // Escaped quote
          field += '"';
          i += 2;
        } else {
          // End of quoted field
          inQuotes = false;
          i++;
        }
      } else {
        field += ch;
        i++;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
        i++;
      } else if (ch === ',') {
        row.push(field.trim());
        field = '';
        i++;
      } else if (ch === '\n' || ch === '\r') {
        row.push(field.trim());
        field = '';
        if (ch === '\r' && i + 1 < text.length && text[i + 1] === '\n') i++;
        rows.push(row);
        row = [];
        i++;
      } else {
        field += ch;
        i++;
      }
    }
  }

  // Last field/row
  if (field || row.length > 0) {
    row.push(field.trim());
    rows.push(row);
  }

  return rows;
}

/**
 * Extract a clean time string (HH:MM) from a cell that may contain extra text.
 * E.g., "18:00 זו השעה שבעצם..." → "18:00"
 *        "18:30 - זו השעה..." → "18:30"
 *        "05:45" → "05:45"
 */
function extractTime(cell) {
  if (!cell) return null;
  const match = cell.match(/(\d{1,2}:\d{2})/);
  return match ? match[1] : null;
}

/**
 * Parse date from DD.MM format to ISO YYYY-MM-DD (assuming year 2026).
 */
function parseDate(cell) {
  if (!cell) return null;
  const match = cell.match(/(\d{1,2})\.(\d{1,2})/);
  if (!match) return null;
  const day = match[1].padStart(2, '0');
  const month = match[2].padStart(2, '0');
  return `2026-${month}-${day}`;
}

/**
 * Count pickups from free-text description using Hebrew patterns.
 */
function extractPickups(text) {
  if (!text) return 0;
  const t = text.toLowerCase();

  // "לא הרמתי" / "לא הייתה הרמה" / "בלי הרמ" / "ללא הרמ" / "לא נגעתי"
  if (/לא הרמתי|לא הייתה הרמה|בלי הרמ|ללא הרמ|לא נגעתי|לא הרמתי כלל/.test(t)) return 0;

  // "הרמתי X פעמים" or "X הרמות"
  let m = t.match(/הרמתי.*?(\d+)\s*פעמ/);
  if (m) return parseInt(m[1]);

  m = t.match(/(\d+)\s*הרמות/);
  if (m) return parseInt(m[1]);

  // "הרמתי פעם אחת" / "הרמתי אותו פעם"
  if (/הרמתי.*פעם אחת|הרמתי אותו פעם(?!\s*\d)/.test(t)) return 1;

  // "הרמתי פעם או פעמיים"
  if (/הרמתי פעם או פעמיים|פעם-פעמיים/.test(t)) return 2;

  // "הרמתי פעמיים"
  if (/הרמתי.*פעמיים/.test(t)) return 2;

  // Generic "הרמתי" without count — assume 1
  if (/הרמתי/.test(t)) return 1;

  // "סך הכול X הרמות"
  m = t.match(/סך\s*ה?כ[וו]ל\s*(\d+)/);
  if (m) return parseInt(m[1]);

  return 0;
}

/**
 * Check if text mentions an alarm/אזעקה.
 */
function hasAlarm(text) {
  if (!text) return false;
  return /אזעקה|אזעקות/.test(text);
}

/**
 * Check if text indicates nursing.
 */
function hasNursing(text) {
  if (!text) return false;
  return /הנקתי|ינק|אכל|ציצי|האכלתי|נתתי.*לאכול|נתתי.*ציצי|האכלה/.test(text);
}

/**
 * Check if text indicates independent settling.
 */
function isIndependent(text) {
  if (!text) return false;
  return /נרדם עצמאי|בלי מגע|ללא מגע|לא נגעתי|ללא התערבות/.test(text);
}

/**
 * Parse a single data row into a structured night object.
 * Columns: 0=label, 1=date, 2=stage, 3=bedtime, 4=fellAsleep, 5=settledBy, 6=howSettled
 * Then repeating groups of 4 for each waking: time, asleep, who, how
 * Note: there's an extra empty column (index 15) between waking 2 and 3.
 */
function parseNightRow(cols) {
  const dateStr = parseDate(cols[1]);
  if (!dateStr) return null;

  const stage = parseInt(cols[2]) || 1;
  const bedtime = extractTime(cols[3]);
  const fellAsleep = extractTime(cols[4]);
  const settledBy = (cols[5] || '').trim() || 'דור';
  const settlingNotes = cols[6] || '';

  if (!bedtime || !fellAsleep) return null;

  // Parse wakings — column layout:
  // 7,8,9,10 = waking 1 (time, asleep, who, how)
  // 11,12,13,14 = waking 2
  // 15 = EMPTY separator
  // 16,17,18,19 = waking 3
  // 20,21,22,23 = waking 4
  // 24,25,26,27 = waking 5
  // ... and so on every 4

  const wakingStarts = [7, 11, 16, 20, 24, 28, 32, 36, 40, 44];
  const wakings = [];
  let morningWake = null;
  let allNotes = settlingNotes;

  for (const startIdx of wakingStarts) {
    const wakeTime = extractTime(cols[startIdx]);
    if (!wakeTime) continue;

    const asleepTime = extractTime(cols[startIdx + 1]);
    const who = (cols[startIdx + 2] || '').trim() || settledBy;
    const how = cols[startIdx + 3] || '';
    const nursed = hasNursing(how);

    allNotes += ' ' + how;

    // Check if this is the morning wake (last waking with no asleep time, or text says "יקיצת בוקר")
    const isMorning = !asleepTime || /יקיצת בוקר|פתחנו יום|יצאנו.*ליום|התחלנו.*יום/.test(how);

    if (isMorning && !asleepTime) {
      morningWake = wakeTime;
    }

    wakings.push({
      time: wakeTime,
      asleep: asleepTime || null,
      by: who,
      nursed,
    });
  }

  // If no explicit morning wake, use last waking time
  if (!morningWake && wakings.length > 0) {
    const last = wakings[wakings.length - 1];
    if (!last.asleep) morningWake = last.time;
  }

  // Compute metrics
  const settlingMin = minutesDiff(bedtime, fellAsleep);
  const pickups = extractPickups(settlingNotes);
  const alarm = hasAlarm(allNotes);
  const independent = isIndependent(settlingNotes);

  // Longest stretch
  let longestStretchMin = 0;
  let prevAsleep = fellAsleep;
  for (const w of wakings) {
    if (w.time && prevAsleep) {
      const stretch = minutesDiff(prevAsleep, w.time);
      if (stretch > longestStretchMin && stretch < 900) longestStretchMin = stretch;
    }
    if (w.asleep) prevAsleep = w.asleep;
  }

  // Nursing interval (first nursing waking)
  let nursingIntervalMin = 0;
  const firstNursing = wakings.find(w => w.nursed);
  if (firstNursing) {
    nursingIntervalMin = minutesDiff(bedtime, firstNursing.time);
    if (nursingIntervalMin > 900) nursingIntervalMin = minutesDiff(fellAsleep, firstNursing.time);
  }

  // Total sleep (approximate)
  let totalSleepMin = 0;
  prevAsleep = fellAsleep;
  for (const w of wakings) {
    if (w.time && prevAsleep) {
      const s = minutesDiff(prevAsleep, w.time);
      if (s < 900) totalSleepMin += s;
    }
    if (w.asleep) prevAsleep = w.asleep;
  }
  if (morningWake && prevAsleep && prevAsleep !== morningWake) {
    const s = minutesDiff(prevAsleep, morningWake);
    if (s < 900) totalSleepMin += s;
  }

  // Display date
  const [, m, d] = dateStr.split('-');
  const displayDate = `${d}/${m}`;

  return {
    date: dateStr,
    displayDate,
    stage,
    bedtime,
    fellAsleep,
    settledBy,
    wakings,
    morningWake,
    settlingMin,
    pickups,
    longestStretchMin,
    nursingIntervalMin,
    totalSleepMin,
    wakingCount: wakings.filter(w => w.asleep != null).length, // exclude morning
    hadAlarm: alarm,
    independentSettle: independent,
    _source: 'live',
  };
}

// ===== Fetch & Parse Pipeline =====

async function fetchLiveData() {
  try {
    const url = SHEET_CSV_URL + '&_t=' + Date.now(); // cache bust
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    const rows = parseCSV(text);

    // Skip header row (0) and example row (1), parse data rows
    const nights = [];
    for (let i = 2; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.length < 5) continue;
      // Skip rows without a date
      if (!row[1] || !row[1].match(/\d+\.\d+/)) continue;

      const night = parseNightRow(row);
      if (night) nights.push(night);
    }

    // Sort by date
    nights.sort((a, b) => a.date.localeCompare(b.date));

    // Cache in localStorage
    localStorage.setItem(LIVE_DATA_KEY, JSON.stringify(nights));
    localStorage.setItem(LIVE_TIMESTAMP_KEY, new Date().toISOString());

    return { nights, fromCache: false };
  } catch (err) {
    console.warn('Failed to fetch live data, using cache:', err);
    // Try cache
    const cached = localStorage.getItem(LIVE_DATA_KEY);
    if (cached) {
      return { nights: JSON.parse(cached), fromCache: true };
    }
    // Fall back to hardcoded
    return { nights: null, fromCache: false };
  }
}

function getLiveDataTimestamp() {
  const ts = localStorage.getItem(LIVE_TIMESTAMP_KEY);
  if (!ts) return null;
  return new Date(ts);
}

function formatTimestamp(date) {
  if (!date) return '';
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const h = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');
  return `${d}/${m} ${h}:${min}`;
}
