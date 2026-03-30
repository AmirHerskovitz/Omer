// ============================================================
// Sleep Consultant Tips Database
// Extracted from WhatsApp chat with ניב אפשטיין (Niv Epstein)
// Sleep consultant & parenting guide
// Process started: 09/03/2026
// ============================================================

const TIPS_DATA = {
  // ──────────────────────────────────────────────────────────
  // 1. הרדמה - Settling / Bedtime Routine
  // ──────────────────────────────────────────────────────────
  bedtime_routine: {
    title: "הרדמה",
    titleEn: "Settling / Bedtime Routine",
    icon: "🌙",
    tips: [
      {
        id: "br-01",
        date: "2026-03-11",
        tag: "ritual-order",
        he: "טקס שינה: מקלחת, סיפור אחד, הנקה בחדר אחר, לילה טוב, כניסה לחדר שינה, שיר, הנחה במיטה"
      },
      {
        id: "br-02",
        date: "2026-03-11",
        tag: "one-story-enough",
        he: "לא צריך הרבה סיפורים – אחד מספיק. בגיל הזה ריבוי סיפורים עלול להציף ולעורר"
      },
      {
        id: "br-03",
        date: "2026-03-15",
        tag: "song-transition",
        he: "השיר לפני השינה חשוב – העיקרון הוא שאין ניתוק מיידי מההורה למיטה"
      },
      {
        id: "br-04",
        date: "2026-03-15",
        tag: "check-diaper",
        he: "לבדוק חיתול לפני ההרדמה תמיד כחלק מטקס השינה, גם אם לא צריך להחליף"
      },
      {
        id: "br-05",
        date: "2026-03-15",
        tag: "mini-massage",
        he: "אפשר לעשות עיסוי קטן על הגוף לפני ההנקה כחלק מהטקס"
      },
      {
        id: "br-06",
        date: "2026-03-15",
        tag: "consistent-order",
        he: "רצוי שסדר הטקס יהיה עקבי. אם פוספס שלב – זה בסדר, אבל לשמור על עקביות"
      },
      {
        id: "br-07",
        date: "2026-03-15",
        tag: "flow-to-crib",
        he: "רצוי זרימה בטקס עד ההנחה במיטה. לא להשאיר הרבה זמן על הידיים לפני ההנחה – עלול ליצור תחושה של ניסיון הרדמה על הידיים"
      },
      {
        id: "br-08",
        date: "2026-03-15",
        tag: "exit-after-sleep",
        he: "אחרי שנרדם – לא להישאר הרבה זמן. לוודא שישן, דקה מספיקה ולצאת"
      },
      {
        id: "br-09",
        date: "2026-03-15",
        tag: "tidy-toys",
        he: "אפשר לסדר משחקים שעל המשטח כחלק מטקס לפני שינה – התינוק רואה ומבין"
      },
      {
        id: "br-10",
        date: "2026-03-15",
        tag: "light-ok-for-reading",
        he: "בחדר הסיפור וההנקה זה בסדר שיהיה אור רגיל"
      },
      {
        id: "br-11",
        date: "2026-03-17",
        tag: "nursing-in-ritual",
        he: "להשאיר את ההנקה לפני השינה כחלק מטקס השינה – זה מרגיע ומספק"
      },
      {
        id: "br-12",
        date: "2026-03-19",
        tag: "split-nursing",
        he: "אפשר לפצל את ההנקה – חלק לפני המקלחת וחלק אחרי – ליצירת הפרדה מוחלטת יותר משינה"
      },
      {
        id: "br-13",
        date: "2026-03-24",
        tag: "no-audience",
        he: "לא להיות קהל ואטרקציות לתינוק במיטה – לענות לבכי, להיות סבלניים, ולחכות שירדם"
      },
      {
        id: "br-14",
        date: "2026-03-23",
        tag: "dont-avert-gaze",
        he: "לא להסיט לגמרי את הראש ולא לעצום עיניים – זה מעלה רמות סטרס. להסתכל על המזרן או הרגל במקום בעיניים"
      },
      {
        id: "br-15",
        date: "2026-03-30",
        tag: "out-of-routine-settling",
        he: "ביציאה מהשגרה (חג/אירוע): לעשות טקס ערב בבית, אפשר להרדים במקום אחר בעגלה/מנשא. בחזרה – ישר לחדר בלי טקס מחודש"
      },
      {
        id: "br-16",
        date: "2026-03-30",
        tag: "worst-case-no-nap",
        he: "במקרה הכי גרוע – אם לא נרדם מחוץ לבית, שיהיה ערני, זה ערב חריג והכל בסדר"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 2. בכי ומענה - Crying & Response
  // ──────────────────────────────────────────────────────────
  crying_response: {
    title: "בכי ומענה",
    titleEn: "Crying & Response",
    icon: "😢",
    tips: [
      {
        id: "cr-01",
        date: "2026-03-11",
        tag: "pick-up-protocol",
        he: "כשבוכה: להרים, לעמוד בשקט בלי לזוז הרבה, לנשום עמוק, לאפשר לו לבכות עד הירגעות"
      },
      {
        id: "cr-02",
        date: "2026-03-11",
        tag: "complete-put-down",
        he: "כשנרגע – להניח במיטה. גם אם מתחיל לבכות שוב מיד, להשלים את ההנחה עם מגע, לחכות כמה שניות, ורק אז להרים שוב"
      },
      {
        id: "cr-03",
        date: "2026-03-12",
        tag: "wait-2-3-seconds",
        he: "בהנחה במיטה – לתת 2-3 שניות עם מגע לפני שמרימים שוב"
      },
      {
        id: "cr-04",
        date: "2026-03-13",
        tag: "only-real-crying",
        he: "להרים רק בבכי אמיתי – לא כשקצת לא נינוח או מתבכיין. חשוב לאפשר התמודדות"
      },
      {
        id: "cr-05",
        date: "2026-03-11",
        tag: "no-sleep-on-shoulder",
        he: "לשים לב שהתינוק לא נרדם על הכתף/ידיים – ברגע שכמעט נרדם, להניח מיד במיטה"
      },
      {
        id: "cr-06",
        date: "2026-03-15",
        tag: "brief-cry-wait",
        he: "הרבה פעמים בכי של כמה שניות נרגע מעצמו – לא להרים מיד, לתת כמה שניות"
      },
      {
        id: "cr-07",
        date: "2026-03-19",
        tag: "put-down-when-calm",
        he: "להוריד מההרגעה כשמרגישים שנרגע. לא להניח אחרי זמן ממושך – אם הבכי נעצר, לחכות קצת ולהניח"
      },
      {
        id: "cr-08",
        date: "2026-03-19",
        tag: "no-lingering-on-arms",
        he: "המטרה שלא יתחיל בכי שוב על הידיים – להוריד בזמן"
      },
      {
        id: "cr-09",
        date: "2026-03-23",
        tag: "stage2-touch-before-pickup",
        he: "שלב 2: קודם מגע כמענה לבכי, אם לא מרגיע אז להרים. להניח ולשבת ללא מגע"
      },
      {
        id: "cr-10",
        date: "2026-03-22",
        tag: "distinguish-fuss-vs-cry",
        he: "להבחין בין בכי של תסכול/אי-נוחות לבין בכי אמיתי – בתסכול לנסות מגע/טפיחות לפני הרמה"
      },
      {
        id: "cr-11",
        date: "2026-03-30",
        tag: "pickup-still-ok",
        he: "זה בסדר להרים אם צריך – הוא תינוק. חשוב שהמענה יינתן בהתאם לצורך"
      },
      {
        id: "cr-12",
        date: "2026-03-30",
        tag: "dont-let-prolonged-cry",
        he: "לא להשאיר את התינוק הרבה זמן במצב של ניסיון הרגעה כשממש בוכה – אפשר להרים"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 3. מגע - Touch
  // ──────────────────────────────────────────────────────────
  touch: {
    title: "מגע",
    titleEn: "Touch",
    icon: "🤲",
    tips: [
      {
        id: "to-01",
        date: "2026-03-11",
        tag: "present-touch",
        he: "מגע נוכח שמאפשר לתינוק לנוע, אך נותן תחושת נוכחות"
      },
      {
        id: "to-02",
        date: "2026-03-13",
        tag: "static-vs-patting",
        he: "לשים לב לסוג המגע: טפיחות או סטטי – לכוון לכמה שפחות מגע או יותר מגע סטטי בהדרגה"
      },
      {
        id: "to-03",
        date: "2026-03-16",
        tag: "pat-bottom-static-back",
        he: "טפיחות על הטוסיק + יד סטטית על הגב העליון, בצורה שמאפשרת תזוזה"
      },
      {
        id: "to-04",
        date: "2026-03-16",
        tag: "end-with-static",
        he: "לקראת סוף ההרדמה – לנסות להישאר עם יד סטטית על הטוסיק בלבד"
      },
      {
        id: "to-05",
        date: "2026-03-16",
        tag: "back-hand-optional",
        he: "יד על הגב זה בסדר, ואם מרגיש שלא נחוץ – להוריד"
      },
      {
        id: "to-06",
        date: "2026-03-13",
        tag: "dont-fixate-head",
        he: "לא לקבע את הראש של התינוק במגע – לאפשר לו להמשיך לעשות תנועות ולעצור בעצמו"
      },
      {
        id: "to-07",
        date: "2026-03-23",
        tag: "stage2-touch-as-response",
        he: "שלב 2: מגע נכנס רק כמענה לבכי, לא באופן יזום. היד נכנסת רק כשבוכה"
      },
      {
        id: "to-08",
        date: "2026-03-23",
        tag: "stage2-touch-hierarchy",
        he: "שלב 2: להתחיל מגע סטטי, אם לא עוזר – מגע עמוק יותר (טפיחות), אם לא עוזר – הרמה"
      },
      {
        id: "to-09",
        date: "2026-03-25",
        tag: "reduce-patting-gradually",
        he: "להפחית טפיחות: להאט קצב, להגדיל מרווחים (מאחת לשנייה לאחת ל-2-3 שניות), ואז להפסיק"
      },
      {
        id: "to-10",
        date: "2026-03-25",
        tag: "no-sleep-with-patting",
        he: "העיקר שלא ירדם עם טפיחות – להפסיק לפני ההירדמות הסופית"
      },
      {
        id: "to-11",
        date: "2026-03-26",
        tag: "patting-is-sedating",
        he: "טפיחות זה דבר מאוד מרגיע ומרדים – להיזהר שלא ליצור תלות. לתת מספר טפיחות ולעזוב"
      },
      {
        id: "to-12",
        date: "2026-03-25",
        tag: "dont-insert-touch-early",
        he: "לא להכניס מגע לפני הבכי – גם אם יש התנעה של בכי או חוסר נוחות"
      },
      {
        id: "to-13",
        date: "2026-03-29",
        tag: "touch-only-for-crying",
        he: "היד נכנסת רק ברגעי בכי – לא ברגעים בהם חושבים שזה פשוט יעזור לו להתכנס לשינה"
      },
      {
        id: "to-14",
        date: "2026-03-24",
        tag: "touch-over-blanket",
        he: "אפשר לתת מגע מעל השמיכה אם היא על התינוק – לא חייבים להוריד"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 4. הנקה - Nursing
  // ──────────────────────────────────────────────────────────
  nursing: {
    title: "הנקה",
    titleEn: "Nursing",
    icon: "🤱",
    tips: [
      {
        id: "nu-01",
        date: "2026-03-10",
        tag: "nurse-dont-sleep",
        he: "להניק כמה שרוצה – רק לוודא שלא נרדם על הציצי"
      },
      {
        id: "nu-02",
        date: "2026-03-15",
        tag: "detach-by-pace",
        he: "לנתק לפי קצב יניקה ולא לפי עיניים. ברגע שהקצב נחלש – זה הזמן לנתק"
      },
      {
        id: "nu-03",
        date: "2026-03-15",
        tag: "pace-over-eyes",
        he: "תינוק יכול לאכול עם עיניים עצומות אבל בקצב אחיד – לכן הקצב קריטי יותר מהעיניים"
      },
      {
        id: "nu-04",
        date: "2026-03-11",
        tag: "detach-switch-sides",
        he: "לנתק מצד ראשון, להעביר לצד שני, ולנתק שוב לפני שנרדם"
      },
      {
        id: "nu-05",
        date: "2026-03-22",
        tag: "detach-first-faster",
        he: "עדיף לנתק בצד הראשון קצת יותר מהר ולהעביר לצד השני"
      },
      {
        id: "nu-06",
        date: "2026-03-18",
        tag: "count-from-last-feed",
        he: "ספירת שעות הנקה – מההנקה האחרונה, כולל ההנקה שלפני השינה"
      },
      {
        id: "nu-07",
        date: "2026-03-12",
        tag: "morning-nursing-separate",
        he: "הנקת בוקר: בהפרדה מוחלטת מהשינה. להוציא מהמיטה, לפתוח תריסים, להחליף חיתול ורק אז להניק"
      },
      {
        id: "nu-08",
        date: "2026-03-17",
        tag: "morning-wait-before-feed",
        he: "ביקיצת בוקר: לשים לב שיש פעולות עקביות שחוזרות לפני ההנקה (חיתול, אור, וכו')"
      },
      {
        id: "nu-09",
        date: "2026-03-16",
        tag: "no-early-morning-feed",
        he: "לפנות בוקר (סביב 4-5) מערכת העיכול מתחילה לפעול – ההמלצה לא להניק כי זה מפעיל עוד יותר ומקשה על חזרה לשינה"
      },
      {
        id: "nu-10",
        date: "2026-03-29",
        tag: "no-feed-after-430am",
        he: "בשעה 4:30-5:00 בבוקר – עדיף לא לתת הנקה בכלל. להחזיר לשינה, ולתת הנקה בהפרדה מהשינה ביקיצת הבוקר"
      },
      {
        id: "nu-11",
        date: "2026-03-29",
        tag: "even-if-didnt-eat",
        he: "גם אם לא אכל כל הלילה – בשעה 4:30-5 לא להאכיל. לחזור לשינה ולהפריד את ההנקה מהשינה"
      },
      {
        id: "nu-12",
        date: "2026-03-18",
        tag: "push-nursing-after-bath",
        he: "אפשר לגרור את ההנקה לאחרי המקלחת ליצירת הפרדה יותר ברורה משינה"
      },
      {
        id: "nu-13",
        date: "2026-03-11",
        tag: "nurse-in-sitting",
        he: "הנקה בלילה – בישיבה מוחלטת, לא בשכיבה, כדי לא להירדם יחד"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 5. חלונות עירות - Wake Windows
  // ──────────────────────────────────────────────────────────
  wake_windows: {
    title: "חלונות עירות",
    titleEn: "Wake Windows",
    icon: "⏰",
    tips: [
      {
        id: "ww-01",
        date: "2026-03-10",
        tag: "prefer-tiredness-signs",
        he: "עדיף ללכת לפי סימני עייפות ולא לפי טווח זמן קבוע"
      },
      {
        id: "ww-02",
        date: "2026-03-10",
        tag: "age-based-windows",
        he: "בגיל הזה (~6 חודשים): בבוקר שעה/שעה וחצי, ואחר כך בטווחים של שעתיים עד שעתיים וחצי גג"
      },
      {
        id: "ww-03",
        date: "2026-03-12",
        tag: "good-night-longer-window",
        he: "אחרי לילה טוב עם שינה רציפה – חלון הערות הראשון יכול להיות למעלה משעה וחצי"
      },
      {
        id: "ww-04",
        date: "2026-03-16",
        tag: "last-window-longest",
        he: "חלון הערות האחרון בין השינות הוא הארוך ביותר"
      },
      {
        id: "ww-05",
        date: "2026-03-13",
        tag: "long-nap-longer-window",
        he: "אחרי שינה ארוכה – חלון הערות יכול להיות ארוך יותר, אפילו לכיוון 3 שעות"
      },
      {
        id: "ww-06",
        date: "2026-03-22",
        tag: "growing-windows",
        he: "התינוק גדל – חלון הערות הראשון מתרחב טבעית לשעה וחצי עד שעתיים"
      },
      {
        id: "ww-07",
        date: "2026-03-13",
        tag: "dont-rush-to-settle",
        he: "לא למהר להשכיב – לחכות לסימני עייפות מובהקים ולבחון עוד סימנים"
      },
      {
        id: "ww-08",
        date: "2026-03-16",
        tag: "dont-fear-overtiredness",
        he: "אל תחששו מעייפות יתר – לפעמים צריך לאפשר אותה"
      },
      {
        id: "ww-09",
        date: "2026-03-15",
        tag: "no-consistency-at-this-age",
        he: "לא תמיד בגיל הזה יש עקביות ורצף – אל תחפשו סיבות, לפעמים זה סתם קורה"
      },
      {
        id: "ww-10",
        date: "2026-03-29",
        tag: "active-wake-windows",
        he: "לתת הרבה זמן על הריצפה, שינוי מנחים ותנוחות, יציאה החוצה – מה שהיה מספק בעבר לא מספיק עכשיו"
      },
      {
        id: "ww-11",
        date: "2026-03-23",
        tag: "insufficient-tiredness",
        he: "אם נכנס לא עייף מספיק – יפרוק אנרגיה במיטה ויתסכל. הרציונל: לא להיכנס להרדמה קשה בגלל חוסר עייפות"
      },
      {
        id: "ww-12",
        date: "2026-03-11",
        tag: "floor-time-important",
        he: "לוודא שבמהלך זמן הערות הוא הרבה בזמן משטח – חשוב שיתרגל שם ולא ירגיש חסך ויעשה זאת באמצע הלילה"
      },
      {
        id: "ww-13",
        date: "2026-03-22",
        tag: "overtiredness-signs",
        he: "תנועות ראש על המזרן, זריקת מוצץ, חוסר נוחות במיטה – יכולים להיות סימן לעייפות גדולה"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 6. שנות יום - Daytime Naps
  // ──────────────────────────────────────────────────────────
  daytime_naps: {
    title: "שנות יום",
    titleEn: "Daytime Naps",
    icon: "☀️",
    tips: [
      {
        id: "dn-01",
        date: "2026-03-10",
        tag: "more-naps-if-short",
        he: "אם לא מצליח לישון שינה ארוכה – לתת יותר שנות יום (למשל 4 במקום 3)"
      },
      {
        id: "dn-02",
        date: "2026-03-13",
        tag: "back-to-3-naps",
        he: "כשתהיה לו שינה אחת שהיא למעלה משעה ביום – אפשר לחזור ל-3 שנות יום"
      },
      {
        id: "dn-03",
        date: "2026-03-13",
        tag: "max-3-hours-nap",
        he: "לא לתת שינת יום מעל 3 שעות. לקראת שעתיים וחצי – לפתוח דלת, אורות, לתת לו להתעורר טבעית"
      },
      {
        id: "dn-04",
        date: "2026-03-18",
        tag: "dont-fight-short-naps",
        he: "אם מתעורר אחרי חצי שעה – להוציא. לא להילחם על חיבור מחזורי שינה. נרצה שילמד בעצמו"
      },
      {
        id: "dn-05",
        date: "2026-03-18",
        tag: "extending-naps-naturally",
        he: "האריכות שנות יום תקרה באופן טבעי. זה כבר קרה – לתת לו זמן לעשות זאת מעצמו"
      },
      {
        id: "dn-06",
        date: "2026-03-19",
        tag: "4th-nap-may-fail",
        he: "יכול להגיע היום שהשינה הרביעית תהיה בלתי אפשרית עם התנגדות – אז להסתפק ב-3 שנות יום קצרות"
      },
      {
        id: "dn-07",
        date: "2026-03-22",
        tag: "30-min-rule-reset",
        he: "אם התעורר מהפרעה (אזעקה) אחרי 20 דקות וחזר לישון – ספירת חוק החצי שעה מתחילה מחדש"
      },
      {
        id: "dn-08",
        date: "2026-03-26",
        tag: "25-min-dont-insist",
        he: "אם ישן 25 דקות – לא להתעקש על הרדמה מחדש"
      },
      {
        id: "dn-09",
        date: "2026-03-17",
        tag: "no-over-sleeping",
        he: "לא לתת לתינוק לישון יותר מידי במהלך היום (אובר שינה)"
      },
      {
        id: "dn-10",
        date: "2026-03-26",
        tag: "latest-3rd-nap",
        he: "השעה המאוחרת ביותר לשנצ שלישי – סביב 16:30"
      },
      {
        id: "dn-11",
        date: "2026-03-25",
        tag: "dont-wake-before-1730",
        he: "עד 17:30 לא להעיר משנצ"
      },
      {
        id: "dn-12",
        date: "2026-03-26",
        tag: "skip-3rd-if-2-long",
        he: "אם ישן 2 שנות יום ארוכות – אפשר לדלג על שינה שלישית ולתת שינת לילה מוקדמת"
      },
      {
        id: "dn-13",
        date: "2026-03-29",
        tag: "dont-sleep-in-room",
        he: "לא לישון ליד התינוק במהלך שנות היום – לתת עצמאות מוחלטת ולצאת מהחדר"
      },
      {
        id: "dn-14",
        date: "2026-03-17",
        tag: "nap-at-home-mostly",
        he: "רוב שנות היום יהיו בבית. אבל אפשר מידי פעם להרדים בעגלה או מנשא"
      },
      {
        id: "dn-15",
        date: "2026-03-29",
        tag: "dont-wake-unnecessarily",
        he: "להימנע מלהעיר תינוק משינה אלא אם מקרה חריג ממש"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 7. יקיצות לילה - Night Wakings
  // ──────────────────────────────────────────────────────────
  night_wakings: {
    title: "יקיצות לילה",
    titleEn: "Night Wakings",
    icon: "🌃",
    tips: [
      {
        id: "nw-01",
        date: "2026-03-11",
        tag: "no-feed-under-2hrs",
        he: "אם התעורר פחות משעתיים מהנקה אחרונה – להחזיר לשינה ללא הנקה"
      },
      {
        id: "nw-02",
        date: "2026-03-22",
        tag: "same-parent-rule",
        he: "אותו הורה מטפל בכל היקיצות באותו הלילה – לא להחליף באמצע"
      },
      {
        id: "nw-03",
        date: "2026-03-29",
        tag: "same-parent-short-wake",
        he: "אם התעורר 20 דקות אחרי שנרדם – אותו הורה שהרדים צריך לגשת שוב (אותה חוויית הרדמה)"
      },
      {
        id: "nw-04",
        date: "2026-03-22",
        tag: "stretch-first-interval",
        he: "טווח ההנקה הראשון הוא זה שצריך להתארך – כי התינוק מסוגל. החלון הראשון: 6.5-7 שעות"
      },
      {
        id: "nw-05",
        date: "2026-03-22",
        tag: "one-feed-per-night",
        he: "המטרה: הנקה אחת בלילה. חלון ראשון 6.5-7 שעות, ההנקה הבאה רק ביקיצת הבוקר בהפרדה מהשינה"
      },
      {
        id: "nw-06",
        date: "2026-03-16",
        tag: "dont-go-backward",
        he: "לא להחזיר אחורה – אם כבר ינק פעם אחת בלילה, לא לחזור ל-2 הנקות"
      },
      {
        id: "nw-07",
        date: "2026-03-22",
        tag: "same-position-return",
        he: "תמיד להחזיר לאותו המנח ממנו הוצא – אם היה על הגב, להחזיר לגב"
      },
      {
        id: "nw-08",
        date: "2026-03-22",
        tag: "position-change-creates-expectation",
        he: "שינוי מנח (למשל הפיכה לבטן) גורם לתינוק לצפות שתעשו זאת – ויקום יותר בשביל זה"
      },
      {
        id: "nw-09",
        date: "2026-03-23",
        tag: "wait-before-approaching",
        he: "אם קם בטוב ולא בוכה – לא לגשת מיד. לחכות ולראות לאן זה מתגלגל"
      },
      {
        id: "nw-10",
        date: "2026-03-19",
        tag: "before-5am-return-sleep",
        he: "אם מתעורר לפני 5 בבוקר – לנסות להחזיר לשינה ללא הנקה"
      },
      {
        id: "nw-11",
        date: "2026-03-15",
        tag: "minimal-night-intervention",
        he: "כמה שפחות התערבות בלילה – לא לתקן ידיים, לא להזיז, לא לשנות תנוחות. לחזק עצמאות מתוך שינה"
      },
      {
        id: "nw-12",
        date: "2026-03-16",
        tag: "early-morning-light-sleep",
        he: "בשעות לפנות בוקר השינה דרוכה וקלה – רמות מלטונין נמוכות, קשה יותר לחזור לשינה"
      },
      {
        id: "nw-13",
        date: "2026-03-13",
        tag: "overtired-causes-wakings",
        he: "כניסה לשינה בעייפות יתר גורמת ליקיצות בסמוך להרדמה"
      },
      {
        id: "nw-14",
        date: "2026-03-17",
        tag: "habit-vs-hunger",
        he: "יקיצה שעתיים אחרי הנקה – זה הרגל ולא רעב. הזדמנות ללמידת הירדמות ללא הנקה"
      },
      {
        id: "nw-15",
        date: "2026-03-29",
        tag: "blanket-minimal",
        he: "כמה שפחות התערבות עם שמיכה בלילה – לא לכסות כל הזמן, שהתינוק לא יצפה לזה"
      },
      {
        id: "nw-16",
        date: "2026-03-30",
        tag: "night-feed-timing",
        he: "הטווח הנכון לתינוק: ההנקה הראשונה אחרי 7+ שעות. אם ריווח ל-9 שעות – עדיף לא להחזיר אחורה"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 8. תנוחה - Sleep Position
  // ──────────────────────────────────────────────────────────
  sleep_position: {
    title: "תנוחה",
    titleEn: "Sleep Position",
    icon: "🔄",
    tips: [
      {
        id: "sp-01",
        date: "2026-03-12",
        tag: "default-on-back",
        he: "כברירת מחדל תמיד להניח על הגב – שהתינוק יבחר בעצמו אם להתהפך"
      },
      {
        id: "sp-02",
        date: "2026-03-11",
        tag: "help-flip-with-guidance",
        he: "אם נתקע על הבטן ולא מצליח לחזור – לעזור בהובלת התנועה (לא להרים ולהפוך)"
      },
      {
        id: "sp-03",
        date: "2026-03-12",
        tag: "tummy-day-only",
        he: "על הבטן בשנות יום – בהשגחה בלבד, לא בלילה (כל עוד לא יודע להתהפך בעצמו)"
      },
      {
        id: "sp-04",
        date: "2026-03-13",
        tag: "always-same-position-return",
        he: "תמיד להחזיר לאותו המנח ממנו הוצא – אם הוצא מהגב, מחזירים לגב"
      },
      {
        id: "sp-05",
        date: "2026-03-24",
        tag: "dont-choose-for-baby",
        he: "הנחה על הבטן היא החלטה שלכם על הגוף שלו – עדיף שהתינוק יבחר את תנוחת השינה בעצמו"
      },
      {
        id: "sp-06",
        date: "2026-03-29",
        tag: "stop-tummy-if-flips-back",
        he: "אם תמיד מסתובב מבטן לגב – להפסיק להניח על הבטן ולהניח על הגב"
      },
      {
        id: "sp-07",
        date: "2026-03-16",
        tag: "help-complete-roll",
        he: "אם ניתקע באמצע סיבוב – לעזור לו בהשלמת הסיבוב דרך הובלת התנועה"
      },
      {
        id: "sp-08",
        date: "2026-03-15",
        tag: "dont-push-bottom-down",
        he: "לא להתערב בהרמת טוסיק – לתת לתינוק לעשות. יש שלב שישנים עם טוסיק מורם וזה טבעי"
      },
      {
        id: "sp-09",
        date: "2026-03-24",
        tag: "encourage-rolling",
        he: "לעודד התהפכויות – אם תעשו במקומו הוא לא יעשה לעצמו. זה חלק מהתהליך ולא ריגרסיה"
      },
      {
        id: "sp-10",
        date: "2026-03-17",
        tag: "let-baby-stick-to-side",
        he: "תינוקות אוהבים להיצמד לדפנות – אם לא בוכה ולא מסוכן, לתת לו להישאר"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 9. סביבת שינה - Sleep Environment
  // ──────────────────────────────────────────────────────────
  sleep_environment: {
    title: "סביבת שינה",
    titleEn: "Sleep Environment",
    icon: "🛏️",
    tips: [
      {
        id: "se-01",
        date: "2026-03-10",
        tag: "clean-crib",
        he: "במיטה לא יהיו גירויים כלל – רק שמיכה ומוצצים. נקייה מגירויים"
      },
      {
        id: "se-02",
        date: "2026-03-10",
        tag: "no-toys-in-crib",
        he: "לא לפתח תלות לגירוי חיצוני. גם שלא יתחיל לזרוק דברים מהמיטה ולצפות שתביאו"
      },
      {
        id: "se-03",
        date: "2026-03-13",
        tag: "background-noise-ok",
        he: "רעשי רקע מהבית – ממש בסדר. נרצה שהתינוק יתרגל ויהיה פחות רגיש לשינויים"
      },
      {
        id: "se-04",
        date: "2026-03-12",
        tag: "white-noise-for-events",
        he: "רעש לבן יכול לעזור בזמן הפרעות (כמו אזעקות) – להפעיל ואז לכבות אחרי האירוע"
      },
      {
        id: "se-05",
        date: "2026-03-10",
        tag: "blanket-once",
        he: "שמיכה: לכסות בפעם הראשונה וזהו. אם מזיז – לא לכסות שוב עד שנרדם. שלא תהיה תלות"
      },
      {
        id: "se-06",
        date: "2026-03-11",
        tag: "skip-blanket-if-wakes",
        he: "אם השמיכה מעירה אותו באופן עקבי – לעזוב אותה לגמרי. לדאוג ללבוש טוב וחימום החדר"
      },
      {
        id: "se-07",
        date: "2026-03-29",
        tag: "minimal-blanket-intervention",
        he: "כמה שפחות התערבות עם שמיכה – לא לכסות כל פעם שניגשים. אם לבוש טוב, להתעלם מהשמיכה"
      },
      {
        id: "se-08",
        date: "2026-03-13",
        tag: "pacifiers-in-crib",
        he: "מוצצים: להשאיר כמה מוצצים במיטה, לא להתייחס אליהם בהרדמות"
      },
      {
        id: "se-09",
        date: "2026-03-12",
        tag: "pacifier-rejection",
        he: "אם התינוק פולט את המוצץ מספר פעמים – לשחרר ולאפשר הירדמות בלעדיו"
      },
      {
        id: "se-10",
        date: "2026-03-22",
        tag: "larger-crib-better",
        he: "מרחב תנועה חשוב במיטה – אם קטן, לשקול לקנות מיטה גדולה יותר"
      },
      {
        id: "se-11",
        date: "2026-03-10",
        tag: "finger-sucking-ok",
        he: "מציצת אצבע: כרגע לא לדאוג. לבחון כמה משתמש ואם משחרר אחרי הירדמות"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 10. שלבים בתהליך - Process Stages
  // ──────────────────────────────────────────────────────────
  process_stages: {
    title: "שלבים בתהליך",
    titleEn: "Process Stages",
    icon: "📈",
    tips: [
      {
        id: "ps-01",
        date: "2026-03-10",
        tag: "stage1-touch-settling",
        he: "שלב 1: הרדמה עם מגע – ידיים על התינוק לאורך ההרדמה (טפיחות + סטטי)"
      },
      {
        id: "ps-02",
        date: "2026-03-16",
        tag: "stage1-transition-signs",
        he: "מעבר לשלב 2: כשמרגישים שהמגע לא כל כך קריטי ואולי גם בלעדיו היה נרדם"
      },
      {
        id: "ps-03",
        date: "2026-03-20",
        tag: "stage2-readiness",
        he: "סימני בשלות לשלב 2: נרדם בקלות, במהירות, כמעט ללא התנגדויות, מגע סטטי מספיק"
      },
      {
        id: "ps-04",
        date: "2026-03-23",
        tag: "stage2-rules",
        he: "שלב 2: מרגע ההנחה במיטה – לשבת לידו ללא מגע. מגע רק כמענה לבכי"
      },
      {
        id: "ps-05",
        date: "2026-03-23",
        tag: "stage2-response-ladder",
        he: "שלב 2 סולם תגובה: 1) מגע סטטי 2) מגע עמוק/טפיחות 3) הרמה. אחרי הרגעה – חזרה לללא מגע"
      },
      {
        id: "ps-06",
        date: "2026-03-22",
        tag: "never-go-backward",
        he: "אחרי שמתקדמים שלב – לא חוזרים אחורה. אבל אל חשש!"
      },
      {
        id: "ps-07",
        date: "2026-03-25",
        tag: "stage2-no-preemptive-touch",
        he: "שלב 2: לא להכניס מגע לפני הבכי – גם אם יש התנעה של חוסר נוחות"
      },
      {
        id: "ps-08",
        date: "2026-03-24",
        tag: "eventual-independent-sleep",
        he: "בסופו של דבר – לא תהיו בחדר בשביל ההרדמה והתינוק ירדם עצמאית"
      },
      {
        id: "ps-09",
        date: "2026-03-23",
        tag: "stage2-both-day-and-night",
        he: "שלב 2 חל גם על הרדמות היום – לא רק בלילה"
      },
      {
        id: "ps-10",
        date: "2026-03-20",
        tag: "dont-develop-resistance",
        he: "חשוב לעבור שלב לפני שתתפתח עמידות לשלב הנוכחי"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 11. יקיצת בוקר - Morning Wake
  // ──────────────────────────────────────────────────────────
  morning_wake: {
    title: "יקיצת בוקר",
    titleEn: "Morning Wake",
    icon: "🌅",
    tips: [
      {
        id: "mw-01",
        date: "2026-03-12",
        tag: "morning-ritual",
        he: "טקס בוקר: להוציא מהמיטה, לצאת מהחדר, לפתוח תריסים, להדליק אורות, להחליף חיתול"
      },
      {
        id: "mw-02",
        date: "2026-03-12",
        tag: "separate-feed-from-sleep",
        he: "הנקה בהפרדה מוחלטת מהשינה – להמתין לפחות 15 דקות אחרי הקימה"
      },
      {
        id: "mw-03",
        date: "2026-03-17",
        tag: "consistent-pre-feed-actions",
        he: "לשים לב שיש פעולות עקביות שחוזרות כל בוקר לפני ההנקה"
      },
      {
        id: "mw-04",
        date: "2026-03-19",
        tag: "before-5-try-back-to-sleep",
        he: "אם מתעורר לפני 5 בבוקר ולא בחיוכים – לנסות להחזיר לשינה ללא הנקה"
      },
      {
        id: "mw-05",
        date: "2026-03-23",
        tag: "dont-rush-to-baby",
        he: "אם קם בטוב ולא בוכה – לא לבוא ישר. לתת לו רגע, לחכות ולראות"
      },
      {
        id: "mw-06",
        date: "2026-03-18",
        tag: "separation-prevents-expectation",
        he: "ההפרדה חשובה כדי שלא יצפה להנקה עם פתיחת העיניים ולא יצליח להאריך שינה לפנות בוקר"
      },
      {
        id: "mw-07",
        date: "2026-03-19",
        tag: "give-up-after-trying",
        he: "אם ניסיתם להחזיר לשינה ב-5 בבוקר ולא הצליח – לפתוח את היום. הוא ישלים בשנות יום"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 12. שעון קיץ - Daylight Saving Time
  // ──────────────────────────────────────────────────────────
  daylight_saving: {
    title: "שעון קיץ",
    titleEn: "Daylight Saving Time",
    icon: "🕐",
    tips: [
      {
        id: "ds-01",
        date: "2026-03-26",
        tag: "follow-tiredness-signs",
        he: "ביום המעבר – להתייחס כרגיל לסימני עייפות ולהשכיב על פיהם"
      },
      {
        id: "ds-02",
        date: "2026-03-26",
        tag: "no-4th-nap-dst",
        he: "ביום המעבר: גם אם 3 שנות יום קצרות – לא לתת רביעית. עדיף שינת לילה מוקדמת"
      },
      {
        id: "ds-03",
        date: "2026-03-26",
        tag: "adjustment-3-5-days",
        he: "אחרי 3-5 ימים הגוף יתאפס. הבדלים של חצי שעה לכאן או לכאן"
      },
      {
        id: "ds-04",
        date: "2026-03-26",
        tag: "melatonin-sunset-sync",
        he: "רמות מלטונין והשעון הביולוגי צריכים להתאזן עם שעת השקיעה החדשה"
      },
      {
        id: "ds-05",
        date: "2026-03-26",
        tag: "dst-day-wake-rule",
        he: "ביום המעבר: 5:00 בשעון חדש = 4:00 ישן – להחזיר לשינה. שעת יקיצה מינימלית: 6:00 חדש"
      },
      {
        id: "ds-06",
        date: "2026-03-26",
        tag: "next-day-normal",
        he: "מיום שבת – 5:00 זה 5:00, להתייחס כרגיל"
      },
      {
        id: "ds-07",
        date: "2026-03-29",
        tag: "let-body-sync",
        he: "לא לנסות לכפות שינה מאוחרת יותר – לתת לגוף להסתנכרן לבד"
      },
      {
        id: "ds-08",
        date: "2026-03-26",
        tag: "prefer-early-bedtime",
        he: "עדיף להשכיב מוקדם ולא מאוחר – השמש שוקעת מאוחר יותר מה שמשפיע על מלטונין"
      }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // 13. כללי - General / Mindset
  // ──────────────────────────────────────────────────────────
  general: {
    title: "כללי",
    titleEn: "General / Mindset",
    icon: "💡",
    tips: [
      {
        id: "ge-01",
        date: "2026-03-10",
        tag: "small-daily-wins",
        he: "זה לא קורה ביום – כל יום הצלחה קטנה. לאט לאט"
      },
      {
        id: "ge-02",
        date: "2026-03-11",
        tag: "build-trust",
        he: "לבנות את האמון של התינוק בכם ובמכנה החדש בהקשר של שינה – לאט לאט"
      },
      {
        id: "ge-03",
        date: "2026-03-22",
        tag: "no-going-back",
        he: "אחרי שמתקדמים – לא חוזרים אחורה. אבל אל חשש, זה יעבוד"
      },
      {
        id: "ge-04",
        date: "2026-03-15",
        tag: "dont-search-reasons",
        he: "לא תמיד בגיל הזה יש עקביות – אל תחפשו סיבות, לפעמים זה סתם קורה"
      },
      {
        id: "ge-05",
        date: "2026-03-18",
        tag: "focus-on-success",
        he: "חשוב להתמקד בנקודות ההצלחה – יש הרבה כאלו!"
      },
      {
        id: "ge-06",
        date: "2026-03-23",
        tag: "children-sense-feelings",
        he: "ילדים מריחים אותנו ואת התחושות שלנו – גם ביטחון ורוגע וגם חוסר ביטחון וחשש. לעבוד על לסמוך על התינוק"
      },
      {
        id: "ge-07",
        date: "2026-03-19",
        tag: "use-discretion",
        he: "אפשר להפעיל שיקול דעת לפעמים – זה בסדר. אבל להיות מודעים"
      },
      {
        id: "ge-08",
        date: "2026-03-30",
        tag: "off-days-ok",
        he: "ביציאה מהשגרה (חג/אירוע) – זה ערב חריג והכל בסדר. לא להילחץ"
      },
      {
        id: "ge-09",
        date: "2026-03-11",
        tag: "floor-time-prevents-crib-play",
        he: "הרבה זמן משטח בערות – שיתרגל שם ולא ירגיש חסך שמוביל לתנועות במיטה"
      },
      {
        id: "ge-10",
        date: "2026-03-19",
        tag: "crib-is-for-sleep",
        he: "המטרה: שהתינוק יבין שהמיטה היא מקום שישנים בו. שיעשה מה שבא לו ובסוף ייכנס לשינה"
      },
      {
        id: "ge-11",
        date: "2026-03-22",
        tag: "consistency-is-key",
        he: "עקביות היא המפתח – לשמור על אותם כללים, אותם טקסים, אותה גישה"
      },
      {
        id: "ge-12",
        date: "2026-03-17",
        tag: "car-stroller-carrier-ok",
        he: "מידי פעם אפשר להרדים ברכב/עגלה/מנשא – אבל רוב שנות היום בבית"
      },
      {
        id: "ge-13",
        date: "2026-03-13",
        tag: "sounds-are-exploration",
        he: "קולות שהתינוק משמיע יכולים להיות חקירה והתנסות עם הקול – לא בהכרח תלונה"
      },
      {
        id: "ge-14",
        date: "2026-03-16",
        tag: "head-rubbing-is-tiredness",
        he: "גירוד ראש במזרן וריחות תנועתיות – סימני עייפות וחלק מתהליך הרפייה והרדמה, לא להוציא"
      }
    ]
  }
};

// ============================================================
// Helper functions for accessing tips data
// ============================================================

/**
 * Get all tips across all categories
 */
function getAllTips() {
  const all = [];
  for (const cat of Object.values(TIPS_DATA)) {
    for (const tip of cat.tips) {
      all.push({ ...tip, category: cat.title, categoryEn: cat.titleEn, icon: cat.icon });
    }
  }
  return all;
}

/**
 * Get tips for a specific category key
 */
function getTipsByCategory(categoryKey) {
  return TIPS_DATA[categoryKey]?.tips || [];
}

/**
 * Get tip by its unique ID
 */
function getTipById(id) {
  for (const cat of Object.values(TIPS_DATA)) {
    const found = cat.tips.find(t => t.id === id);
    if (found) return { ...found, category: cat.title, categoryEn: cat.titleEn };
  }
  return null;
}

/**
 * Get all tips given on a specific date
 */
function getTipsByDate(dateStr) {
  return getAllTips().filter(t => t.date === dateStr);
}

/**
 * Get all category keys
 */
function getCategoryKeys() {
  return Object.keys(TIPS_DATA);
}

/**
 * Get category summary (title, count, icon)
 */
function getCategorySummary() {
  return Object.entries(TIPS_DATA).map(([key, cat]) => ({
    key,
    title: cat.title,
    titleEn: cat.titleEn,
    icon: cat.icon,
    count: cat.tips.length
  }));
}

// ============================================================
// Tips Metadata: stage relevance + priority for each tip
// ============================================================

// stage: 1 = Stage 1 only, 2 = Stage 2 only, 0 = both stages
// priority: 'critical' | 'important' | 'normal'
const TIPS_META = {
  // Bedtime routine
  'br-01': { stage: 0, priority: 'critical' },
  'br-02': { stage: 0, priority: 'normal' },
  'br-03': { stage: 0, priority: 'important' },
  'br-04': { stage: 0, priority: 'normal' },
  'br-05': { stage: 0, priority: 'normal' },
  'br-06': { stage: 0, priority: 'normal' },
  'br-07': { stage: 0, priority: 'normal' },
  'br-08': { stage: 0, priority: 'important' },
  'br-09': { stage: 0, priority: 'important' },
  'br-10': { stage: 0, priority: 'normal' },
  'br-11': { stage: 0, priority: 'important' },
  'br-12': { stage: 0, priority: 'normal' },
  'br-13': { stage: 0, priority: 'normal' },
  'br-14': { stage: 2, priority: 'important' },
  'br-15': { stage: 0, priority: 'critical' },
  'br-16': { stage: 2, priority: 'important' },
  // Crying & response
  'cr-01': { stage: 0, priority: 'critical' },
  'cr-02': { stage: 1, priority: 'critical' },
  'cr-03': { stage: 1, priority: 'important' },
  'cr-04': { stage: 0, priority: 'critical' },
  'cr-05': { stage: 0, priority: 'important' },
  'cr-06': { stage: 0, priority: 'important' },
  'cr-07': { stage: 0, priority: 'normal' },
  'cr-08': { stage: 0, priority: 'normal' },
  'cr-09': { stage: 0, priority: 'normal' },
  'cr-10': { stage: 0, priority: 'normal' },
  'cr-11': { stage: 0, priority: 'normal' },
  'cr-12': { stage: 0, priority: 'important' },
  // Touch
  'to-01': { stage: 1, priority: 'important' },
  'to-02': { stage: 1, priority: 'critical' },
  'to-03': { stage: 1, priority: 'important' },
  'to-04': { stage: 1, priority: 'normal' },
  'to-05': { stage: 2, priority: 'critical' },
  'to-06': { stage: 2, priority: 'critical' },
  'to-07': { stage: 2, priority: 'critical' },
  'to-08': { stage: 2, priority: 'critical' },
  'to-09': { stage: 2, priority: 'important' },
  'to-10': { stage: 2, priority: 'important' },
  'to-11': { stage: 2, priority: 'important' },
  'to-12': { stage: 2, priority: 'important' },
  'to-13': { stage: 0, priority: 'normal' },
  'to-14': { stage: 0, priority: 'critical' },
  // Nursing
  'nu-01': { stage: 0, priority: 'critical' },
  'nu-02': { stage: 0, priority: 'critical' },
  'nu-03': { stage: 0, priority: 'important' },
  'nu-04': { stage: 0, priority: 'important' },
  'nu-05': { stage: 0, priority: 'normal' },
  'nu-06': { stage: 0, priority: 'important' },
  'nu-07': { stage: 0, priority: 'important' },
  'nu-08': { stage: 0, priority: 'normal' },
  'nu-09': { stage: 0, priority: 'critical' },
  'nu-10': { stage: 0, priority: 'important' },
  'nu-11': { stage: 0, priority: 'normal' },
  'nu-12': { stage: 0, priority: 'important' },
  'nu-13': { stage: 0, priority: 'important' },
  // Wake windows
  'ww-01': { stage: 0, priority: 'critical' },
  'ww-02': { stage: 0, priority: 'critical' },
  'ww-03': { stage: 0, priority: 'important' },
  'ww-04': { stage: 0, priority: 'normal' },
  'ww-05': { stage: 0, priority: 'important' },
  'ww-06': { stage: 0, priority: 'normal' },
  'ww-07': { stage: 0, priority: 'important' },
  'ww-08': { stage: 0, priority: 'normal' },
  'ww-09': { stage: 0, priority: 'normal' },
  'ww-10': { stage: 0, priority: 'normal' },
  'ww-11': { stage: 0, priority: 'important' },
  'ww-12': { stage: 0, priority: 'important' },
  'ww-13': { stage: 0, priority: 'normal' },
  // Daytime naps
  'dn-01': { stage: 0, priority: 'normal' },
  'dn-02': { stage: 0, priority: 'important' },
  'dn-03': { stage: 0, priority: 'important' },
  'dn-04': { stage: 0, priority: 'normal' },
  'dn-05': { stage: 0, priority: 'critical' },
  'dn-06': { stage: 0, priority: 'normal' },
  'dn-07': { stage: 0, priority: 'important' },
  'dn-08': { stage: 0, priority: 'normal' },
  'dn-09': { stage: 0, priority: 'normal' },
  'dn-10': { stage: 0, priority: 'normal' },
  'dn-11': { stage: 0, priority: 'normal' },
  'dn-12': { stage: 0, priority: 'normal' },
  'dn-13': { stage: 2, priority: 'important' },
  'dn-14': { stage: 0, priority: 'normal' },
  'dn-15': { stage: 0, priority: 'normal' },
  // Night wakings
  'nw-01': { stage: 0, priority: 'critical' },
  'nw-02': { stage: 0, priority: 'important' },
  'nw-03': { stage: 0, priority: 'critical' },
  'nw-04': { stage: 0, priority: 'critical' },
  'nw-05': { stage: 0, priority: 'important' },
  'nw-06': { stage: 0, priority: 'important' },
  'nw-07': { stage: 0, priority: 'important' },
  'nw-08': { stage: 0, priority: 'important' },
  'nw-09': { stage: 2, priority: 'critical' },
  'nw-10': { stage: 0, priority: 'normal' },
  'nw-11': { stage: 0, priority: 'important' },
  'nw-12': { stage: 0, priority: 'normal' },
  'nw-13': { stage: 0, priority: 'normal' },
  'nw-14': { stage: 0, priority: 'important' },
  'nw-15': { stage: 0, priority: 'important' },
  'nw-16': { stage: 0, priority: 'normal' },
  // Sleep position
  'sp-01': { stage: 0, priority: 'normal' },
  'sp-02': { stage: 0, priority: 'critical' },
  'sp-03': { stage: 0, priority: 'important' },
  'sp-04': { stage: 0, priority: 'critical' },
  'sp-05': { stage: 0, priority: 'important' },
  'sp-06': { stage: 0, priority: 'important' },
  'sp-07': { stage: 0, priority: 'normal' },
  'sp-08': { stage: 0, priority: 'normal' },
  'sp-09': { stage: 0, priority: 'important' },
  'sp-10': { stage: 0, priority: 'normal' },
  // Sleep environment
  'se-01': { stage: 0, priority: 'important' },
  'se-02': { stage: 0, priority: 'important' },
  'se-03': { stage: 0, priority: 'normal' },
  'se-04': { stage: 0, priority: 'normal' },
  'se-05': { stage: 0, priority: 'normal' },
  'se-06': { stage: 0, priority: 'normal' },
  'se-07': { stage: 0, priority: 'normal' },
  'se-08': { stage: 0, priority: 'normal' },
  'se-09': { stage: 0, priority: 'normal' },
  'se-10': { stage: 0, priority: 'normal' },
  'se-11': { stage: 0, priority: 'normal' },
  // Process stages
  'ps-01': { stage: 1, priority: 'critical' },
  'ps-02': { stage: 2, priority: 'critical' },
  'ps-03': { stage: 2, priority: 'critical' },
  'ps-04': { stage: 0, priority: 'important' },
  'ps-05': { stage: 0, priority: 'critical' },
  'ps-06': { stage: 0, priority: 'normal' },
  'ps-07': { stage: 0, priority: 'important' },
  'ps-08': { stage: 0, priority: 'normal' },
  'ps-09': { stage: 0, priority: 'normal' },
  'ps-10': { stage: 0, priority: 'normal' },
  // Morning wake
  'mw-01': { stage: 0, priority: 'critical' },
  'mw-02': { stage: 0, priority: 'critical' },
  'mw-03': { stage: 0, priority: 'important' },
  'mw-04': { stage: 0, priority: 'normal' },
  'mw-05': { stage: 0, priority: 'important' },
  'mw-06': { stage: 0, priority: 'important' },
  'mw-07': { stage: 0, priority: 'important' },
  // Daylight saving
  'ds-01': { stage: 0, priority: 'normal' },
  'ds-02': { stage: 0, priority: 'important' },
  'ds-03': { stage: 0, priority: 'important' },
  'ds-04': { stage: 0, priority: 'normal' },
  'ds-05': { stage: 0, priority: 'normal' },
  'ds-06': { stage: 0, priority: 'important' },
  'ds-07': { stage: 0, priority: 'normal' },
  'ds-08': { stage: 0, priority: 'normal' },
  // General
  'gn-01': { stage: 0, priority: 'critical' },
  'gn-02': { stage: 0, priority: 'normal' },
  'gn-03': { stage: 0, priority: 'normal' },
  'gn-04': { stage: 0, priority: 'important' },
  'gn-05': { stage: 0, priority: 'important' },
  'gn-06': { stage: 0, priority: 'important' },
  'gn-07': { stage: 0, priority: 'critical' },
  'gn-08': { stage: 0, priority: 'normal' },
  'gn-09': { stage: 0, priority: 'normal' },
  'gn-10': { stage: 0, priority: 'normal' },
  'gn-11': { stage: 0, priority: 'normal' },
  'gn-12': { stage: 0, priority: 'normal' },
  'gn-13': { stage: 0, priority: 'normal' },
  'gn-14': { stage: 0, priority: 'normal' },
};

function getTipMeta(tipId) {
  return TIPS_META[tipId] || { stage: 0, priority: 'normal' };
}

// ============================================================
// Tip Status & Notes — localStorage persistence
// ============================================================

const TIP_STATUS_KEY = 'omer_tip_status';
const TIP_NOTES_KEY = 'omer_tip_notes';

// Status: 'not-started' | 'working' | 'mastered'
function getTipStatus(tipId) {
  const all = JSON.parse(localStorage.getItem(TIP_STATUS_KEY) || '{}');
  return all[tipId] || 'not-started';
}

function setTipStatus(tipId, status) {
  const all = JSON.parse(localStorage.getItem(TIP_STATUS_KEY) || '{}');
  all[tipId] = status;
  localStorage.setItem(TIP_STATUS_KEY, JSON.stringify(all));
}

function getAllTipStatuses() {
  return JSON.parse(localStorage.getItem(TIP_STATUS_KEY) || '{}');
}

function getTipNote(tipId) {
  const all = JSON.parse(localStorage.getItem(TIP_NOTES_KEY) || '{}');
  return all[tipId] || '';
}

function setTipNote(tipId, note) {
  const all = JSON.parse(localStorage.getItem(TIP_NOTES_KEY) || '{}');
  if (note.trim()) {
    all[tipId] = note.trim();
  } else {
    delete all[tipId];
  }
  localStorage.setItem(TIP_NOTES_KEY, JSON.stringify(all));
}

function getCategoryMastery(categoryKey) {
  const tips = getTipsByCategory(categoryKey);
  const statuses = getAllTipStatuses();
  const mastered = tips.filter(t => statuses[t.id] === 'mastered').length;
  return { mastered, total: tips.length, pct: tips.length ? Math.round((mastered / tips.length) * 100) : 0 };
}

// ============================================================
// Relevant Tips — contextual suggestions based on night data
// ============================================================

function getRelevantTips(nightData) {
  const scores = {};
  const allTips = getAllTips();

  // Score tips based on night patterns
  allTips.forEach(tip => {
    let score = 0;
    const meta = getTipMeta(tip.id);
    const status = getTipStatus(tip.id);

    // Skip mastered tips
    if (status === 'mastered') return;

    // Boost tips matching current stage
    if (nightData.stage && meta.stage !== 0 && meta.stage === nightData.stage) score += 3;
    if (meta.priority === 'critical') score += 2;
    if (meta.priority === 'important') score += 1;

    // Context-based scoring
    const cat = tip.id.substring(0, 2);

    // High pickups → crying & touch tips
    if (nightData.pickups >= 3) {
      if (cat === 'cr') score += 4;
      if (cat === 'to') score += 3;
    }

    // Long settling → bedtime & touch tips
    if (nightData.settlingMin >= 25) {
      if (cat === 'br') score += 3;
      if (cat === 'to') score += 2;
      if (cat === 'ww') score += 2;
    }

    // Many wakings → night waking tips
    if (nightData.wakingCount >= 3) {
      if (cat === 'nw') score += 4;
    }

    // Early morning → morning tips
    if (nightData.morningWake) {
      const mh = parseInt(nightData.morningWake.split(':')[0]);
      if (mh < 6) {
        if (cat === 'mw') score += 4;
        if (cat === 'nu') score += 2;
      }
    }

    // Short nursing interval → nursing tips
    if (nightData.nursingIntervalMin && nightData.nursingIntervalMin < 300) {
      if (cat === 'nu') score += 3;
    }

    // Had alarm → environment tips
    if (nightData.hadAlarm) {
      if (cat === 'se') score += 2;
    }

    // Independent settle → celebrate with general tips
    if (nightData.independentSettle) {
      if (cat === 'gn') score += 2;
      if (cat === 'ps') score += 2;
    }

    // Working-on tips get a boost
    if (status === 'working') score += 2;

    if (score > 0) scores[tip.id] = { tip, score };
  });

  // Sort by score, return top 5
  return Object.values(scores)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(s => s.tip);
}
