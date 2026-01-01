/* =========================
   ProKnow Upgraded
   - Score tracking (overall + per-topic) via localStorage
   - Timed quizzes (countdown per question)
   - Import questions from Google Sheets CSV export
   ========================= */

/* ---------- DEFAULT TOPICS (keep your existing ones here if you want) ---------- */
/* You can leave these as-is; imported CSV topics/questions will be added/merged. */
const DEFAULT_TOPICS = [
  {
    id: "navy-personnel",
    title: "US Navy Personnel",
    desc: "Ranks, roles, career basics, and Navy personnel fundamentals.",
    practiceLinks: [
      { label: "Practice Test (Add Link)", url: "#" },
      { label: "Flashcards (Add Link)", url: "#" },
    ],
    questions: [
      {
        q: "Which enlisted rank is typically abbreviated as PO1?",
        choices: ["Petty Officer Third Class", "Petty Officer First Class", "Chief Petty Officer", "Seaman Recruit"],
        correctIndex: 1,
      },
      {
        q: "What is the primary purpose of the chain of command?",
        choices: ["To increase paperwork", "To ensure clear authority and responsibility", "To eliminate leadership roles", "To prevent training"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "cyber-warfare",
    title: "Cyber Warfare",
    desc: "Cyber concepts, defensive posture, and threat basics.",
    practiceLinks: [
      { label: "Cyber Practice (Add Link)", url: "#" },
    ],
    questions: [
      {
        q: "Phishing is best described as:",
        choices: ["A hardware failure", "An attempt to trick users into revealing sensitive info", "A type of firewall", "A backup strategy"],
        correctIndex: 1,
      },
    ],
  },
];

/* ---------- STORAGE KEYS ---------- */
const STORAGE_TOPICS = "proknow_topics_v1";
const STORAGE_SCORE = "proknow_score_v1";
const STORAGE_SETTINGS = "proknow_settings_v1";

/* ---------- STATE ---------- */
let TOPICS = loadTopics() || structuredClone(DEFAULT_TOPICS);
let activeTopic = TOPICS[0];
let activeQuestion = null;

let answered = false;
let timerId = null;
let timeLeft = 0;

/* ---------- DOM ---------- */
const topicListEl = document.getElementById("topicList");
const topicTitleEl = document.getElementById("topicTitle");
const topicDescEl = document.getElementById("topicDesc");
const questionTextEl = document.getElementById("questionText");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

const overallScoreEl = document.getElementById("overallScore");
const topicScoreEl = document.getElementById("topicScore");
const timeLeftEl = document.getElementById("timeLeft");

const timePerQEl = document.getElementById("timePerQ");
const autoAdvanceEl = document.getElementById("autoAdvance");
const resetScoreBtn = document.getElementById("resetScoreBtn");

const csvFileEl = document.getElementById("csvFile");
const importBtn = document.getElementById("importBtn");

/* ---------- SCORE MODEL ---------- */
/*
score = {
  overall: { correct: 0, total: 0 },
  byTopic: { [topicId]: { correct: 0, total: 0 } }
}
*/
let score = loadScore();

/* ---------- SETTINGS ---------- */
/*
settings = { timePerQ: 20, autoAdvance: true }
*/
let settings = loadSettings();
applySettingsToUI();

/* =========================
   INIT
   ========================= */
renderTopics();
setActiveTopic(activeTopic?.id || TOPICS[0]?.id);

/* =========================
   UI + QUIZ LOGIC
   ========================= */

function renderTopics() {
  topicListEl.innerHTML = "";
  TOPICS.forEach((t) => {
    const btn = document.createElement("button");
    btn.className = "topic-btn" + (t.id === activeTopic.id ? " active" : "");
    btn.textContent = t.title;
    btn.addEventListener("click", () => setActiveTopic(t.id));
    topicListEl.appendChild(btn);
  });
}

function setActiveTopic(topicId) {
  const found = TOPICS.find((t) => t.id === topicId);
  if (!found) return;
  activeTopic = found;
  renderTopics();
  renderHeader();
  renderPracticeLinks();
  nextQuestion();
}

function renderHeader() {
  topicTitleEl.textContent = activeTopic.title;
  topicDescEl.textContent = activeTopic.desc || "";
  updateScoreUI();
}

function pickRandomQuestion(topic) {
  if (!topic.questions || topic.questions.length === 0) {
    return {
      q: "No questions added for this topic yet. Import a CSV or add questions in proknow.js.",
      choices: ["OK"],
      correctIndex: 0,
    };
  }
  const idx = Math.floor(Math.random() * topic.questions.length);
  return topic.questions[idx];
}

function renderPracticeLinks() {
  const ul = document.getElementById("practiceLinks");
  ul.innerHTML = "";

  const links = (activeTopic.practiceLinks || []).filter(l => l && l.label && l.url);

  if (!links.length) {
    const li = document.createElement("li");
    li.textContent = "No links yet for this topic.";
    ul.appendChild(li);
    return;
  }

  links.forEach((l) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = l.label;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function setFeedback(text, type) {
  feedbackEl.textContent = text;
  feedbackEl.className = "feedback " + (type || "");
}

function nextQuestion() {
  answered = false;
  setFeedback("", "");

  activeQuestion = pickRandomQuestion(activeTopic);
  questionTextEl.textContent = activeQuestion.q;

  choicesEl.innerHTML = "";
  activeQuestion.choices.forEach((choiceText, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choiceText;
    btn.addEventListener("click", () => handleAnswer(i));
    choicesEl.appendChild(btn);
  });

  startTimer();
}

function disableChoices() {
  [...choicesEl.querySelectorAll("button.choice")].forEach((b) => (b.disabled = true));
}

function markCorrectWrong(selectedIndex) {
  const buttons = [...choicesEl.querySelectorAll("button.choice")];
  buttons.forEach((b, i) => {
    if (i === activeQuestion.correctIndex) b.classList.add("correct");
    if (i === selectedIndex && selectedIndex !== activeQuestion.correctIndex) b.classList.add("wrong");
  });
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function startTimer() {
  stopTimer();
  const seconds = clampInt(parseInt(settings.timePerQ, 10), 5, 300);
  timeLeft = seconds;
  timeLeftEl.textContent = `${timeLeft}s`;

  timerId = setInterval(() => {
    timeLeft -= 1;
    timeLeftEl.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      stopTimer();
      // time out = incorrect attempt (unless already answered)
      if (!answered) {
        handleTimeout();
      }
    }
  }, 1000);
}

function handleTimeout() {
  answered = true;
  disableChoices();
  markCorrectWrong(-1);
  setFeedback("Time’s up ⏱️", "bad");
  recordScore(false);
  if (settings.autoAdvance) autoAdvanceSoon();
}

function autoAdvanceSoon() {
  setTimeout(() => nextQuestion(), 700);
}

function handleAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  stopTimer();
  disableChoices();
  markCorrectWrong(selectedIndex);

  const isCorrect = selectedIndex === activeQuestion.correctIndex;
  setFeedback(isCorrect ? "Correct ✅" : "Incorrect ❌", isCorrect ? "good" : "bad");

  recordScore(isCorrect);

  if (settings.autoAdvance) autoAdvanceSoon();
}

/* =========================
   SCORE TRACKING
   ========================= */

function ensureTopicScore(topicId) {
  if (!score.byTopic[topicId]) score.byTopic[topicId] = { correct: 0, total: 0 };
}

function recordScore(isCorrect) {
  ensureTopicScore(activeTopic.id);

  score.overall.total += 1;
  score.byTopic[activeTopic.id].total += 1;

  if (isCorrect) {
    score.overall.correct += 1;
    score.byTopic[activeTopic.id].correct += 1;
  }

  saveScore();
  updateScoreUI();
}

function updateScoreUI() {
  ensureTopicScore(activeTopic.id);

  overallScoreEl.textContent = `${score.overall.correct} / ${score.overall.total}`;
  const t = score.byTopic[activeTopic.id];
  topicScoreEl.textContent = `${t.correct} / ${t.total}`;
}

function resetScore() {
  score = { overall: { correct: 0, total: 0 }, byTopic: {} };
  saveScore();
  updateScoreUI();
  setFeedback("Score reset.", "");
}

/* =========================
   IMPORT FROM CSV (Google Sheets export)
   ========================= */

importBtn.addEventListener("click", async () => {
  const file = csvFileEl.files?.[0];
  if (!file) {
    setFeedback("Choose a CSV file first.", "bad");
    return;
  }

  try {
    const text = await file.text();
    const imported = parseQuestionsCSV(text);

    // Merge imported topics into TOPICS
    TOPICS = mergeTopics(TOPICS, imported);

    // Persist
    saveTopics();

    // Refresh UI and go to first imported/active topic
    renderTopics();
    if (TOPICS.length) setActiveTopic(TOPICS[0].id);

    setFeedback(`Imported ${countQuestions(imported)} questions ✅`, "good");
  } catch (e) {
    console.error(e);
    setFeedback("Import failed. Check CSV format.", "bad");
  }
});

function countQuestions(topics) {
  return topics.reduce((sum, t) => sum + (t.questions?.length || 0), 0);
}

/*
Expected CSV headers:
topic,question,a,b,c,d,correct,link1_label,link1_url,link2_label,link2_url

- correct can be A/B/C/D or 1/2/3/4 or 0/1/2/3
*/
function parseQuestionsCSV(csvText) {
  const rows = parseCSV(csvText);
  if (!rows.length) return [];

  const header = rows[0].map(h => (h || "").trim().toLowerCase());
  const idx = (name) => header.indexOf(name);

  const iTopic = idx("topic");
  const iQ = idx("question");
  const iA = idx("a");
  const iB = idx("b");
  const iC = idx("c");
  const iD = idx("d");
  const iCorrect = idx("correct");

  if ([iTopic, iQ, iA, iB, iC, iD, iCorrect].some(i => i === -1)) {
    throw new Error("Missing required headers.");
  }

  const iL1Label = idx("link1_label");
  const iL1Url = idx("link1_url");
  const iL2Label = idx("link2_label");
  const iL2Url = idx("link2_url");

  // Build map by topic title
  const map = new Map();

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (!row || row.every(cell => (cell ?? "").trim() === "")) continue;

    const topicTitle = (row[iTopic] ?? "").trim();
    const qText = (row[iQ] ?? "").trim();
    if (!topicTitle || !qText) continue;

    const choices = [
      (row[iA] ?? "").trim(),
      (row[iB] ?? "").trim(),
      (row[iC] ?? "").trim(),
      (row[iD] ?? "").trim(),
    ];

    const correctRaw = (row[iCorrect] ?? "").trim();
    const correctIndex = normalizeCorrect(correctRaw);
    if (correctIndex < 0 || correctIndex > 3) continue;

    const tKey = topicTitle.toLowerCase();
    if (!map.has(tKey)) {
      map.set(tKey, {
        id: slugify(topicTitle),
        title: topicTitle,
        desc: "",
        practiceLinks: [],
        questions: [],
      });
    }

    const topicObj = map.get(tKey);

    // Add links if present
    const maybeAddLink = (labelIdx, urlIdx) => {
      if (labelIdx === -1 || urlIdx === -1) return;
      const label = (row[labelIdx] ?? "").trim();
      const url = (row[urlIdx] ?? "").trim();
      if (label && url) {
        // Avoid duplicates
        if (!topicObj.practiceLinks.some(l => l.label === label && l.url === url)) {
          topicObj.practiceLinks.push({ label, url });
        }
      }
    };
    maybeAddLink(iL1Label, iL1Url);
    maybeAddLink(iL2Label, iL2Url);

    topicObj.questions.push({
      q: qText,
      choices,
      correctIndex,
    });
  }

  return [...map.values()];
}

function normalizeCorrect(v) {
  if (!v) return -1;
  const s = v.trim().toUpperCase();

  // A/B/C/D
  if (["A", "B", "C", "D"].includes(s)) {
    return ["A", "B", "C", "D"].indexOf(s);
  }

  // 1-4
  if (/^[1-4]$/.test(s)) return parseInt(s, 10) - 1;

  // 0-3
  if (/^[0-3]$/.test(s)) return parseInt(s, 10);

  return -1;
}

/* Robust-ish CSV parser (handles quotes, commas inside quotes) */
function parseCSV(text) {
  const rows = [];
  let row = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"' && inQuotes && next === '"') {
      cur += '"';
      i++;
      continue;
    }

    if (c === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (c === "," && !inQuotes) {
      row.push(cur);
      cur = "";
      continue;
    }

    if ((c === "\n" || c === "\r") && !inQuotes) {
      if (c === "\r" && next === "\n") i++;
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
      continue;
    }

    cur += c;
  }

  row.push(cur);
  rows.push(row);

  // Trim trailing empty last row sometimes produced by newline
  return rows.filter(r => !(r.length === 1 && (r[0] ?? "").trim() === ""));
}

function mergeTopics(existing, incoming) {
  // Merge by title (case-insensitive) OR by id
  const out = structuredClone(existing);

  for (const t of incoming) {
    const match = out.find(x =>
      x.id === t.id ||
      (x.title || "").trim().toLowerCase() === (t.title || "").trim().toLowerCase()
    );

    if (!match) {
      out.push(t);
      continue;
    }

    // Merge questions (avoid duplicates by question text)
    const existingQs = new Set((match.questions || []).map(q => (q.q || "").trim().toLowerCase()));
    (t.questions || []).forEach(q => {
      const key = (q.q || "").trim().toLowerCase();
      if (!existingQs.has(key)) {
        match.questions = match.questions || [];
        match.questions.push(q);
        existingQs.add(key);
      }
    });

    // Merge practice links (avoid duplicates)
    const existingLinks = new Set((match.practiceLinks || []).map(l => `${l.label}||${l.url}`));
    (t.practiceLinks || []).forEach(l => {
      const key = `${l.label}||${l.url}`;
      if (!existingLinks.has(key)) {
        match.practiceLinks = match.practiceLinks || [];
        match.practiceLinks.push(l);
        existingLinks.add(key);
      }
    });

    // Keep existing desc if present; otherwise take imported desc
    if (!match.desc && t.desc) match.desc = t.desc;
  }

  return out;
}

/* =========================
   SETTINGS
   ========================= */

timePerQEl.addEventListener("change", () => {
  settings.timePerQ = clampInt(parseInt(timePerQEl.value, 10), 5, 300);
  saveSettings();
  // restart timer for current question
  startTimer();
});

autoAdvanceEl.addEventListener("change", () => {
  settings.autoAdvance = !!autoAdvanceEl.checked;
  saveSettings();
});

function applySettingsToUI() {
  if (!settings) settings = { timePerQ: 20, autoAdvance: true };
  timePerQEl.value = settings.timePerQ ?? 20;
  autoAdvanceEl.checked = !!settings.autoAdvance;
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_SETTINGS);
    if (!raw) return { timePerQ: 20, autoAdvance: true };
    const parsed = JSON.parse(raw);
    return {
      timePerQ: clampInt(parseInt(parsed.timePerQ, 10), 5, 300) || 20,
      autoAdvance: !!parsed.autoAdvance,
    };
  } catch {
    return { timePerQ: 20, autoAdvance: true };
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(settings));
}

/* =========================
   BUTTON EVENTS
   ========================= */

nextBtn.addEventListener("click", () => nextQuestion());
shuffleBtn.addEventListener("click", () => nextQuestion());
resetScoreBtn.addEventListener("click", () => resetScore());

/* =========================
   PERSISTENCE
   ========================= */

function loadTopics() {
  try {
    const raw = localStorage.getItem(STORAGE_TOPICS);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveTopics() {
  localStorage.setItem(STORAGE_TOPICS, JSON.stringify(TOPICS));
}

function loadScore() {
  try {
    const raw = localStorage.getItem(STORAGE_SCORE);
    if (!raw) return { overall: { correct: 0, total: 0 }, byTopic: {} };
    const parsed = JSON.parse(raw);
    if (!parsed?.overall || !parsed?.byTopic) throw new Error("bad score");
    return parsed;
  } catch {
    return { overall: { correct: 0, total: 0 }, byTopic: {} };
  }
}

function saveScore() {
  localStorage.setItem(STORAGE_SCORE, JSON.stringify(score));
}

/* =========================
   UTILS
   ========================= */

function slugify(s) {
  return (s || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "topic";
}

function clampInt(n, min, max) {
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, n));
}
