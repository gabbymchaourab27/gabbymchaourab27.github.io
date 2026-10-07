/* =========================
   Shared quiz engine
   Used by proknow.html (4/C), pca3c.html (3/C) and pca2c.html (2/C).
   Each page sets window.QUIZ_CONFIG = { level, prefix, label } and loads its data file.

   Features
   - Practice: shuffled deck with no repeats, remembered between visits
   - All chapters (mixed) scope
   - Missed-question review
   - Timed test mode with a final score
   - Per-question timer (0 turns it off), auto-advance, keyboard shortcuts
   - Score and daily history saved in localStorage for the Progress page
   ========================= */
(function () {
  const CFG = window.QUIZ_CONFIG;
  const K = SH.keys(CFG.prefix);
  const ALL = "__all__";

  const TOPICS = structuredClone(window.QUIZ_DATA[CFG.level]);
  const byId = new Map();
  TOPICS.forEach((t) =>
    t.questions.forEach((q) => {
      q._tid = t.id;
      q._id = SH.qid(t.id, q);
      byId.set(q._id, q);
    })
  );
  const allQuestions = TOPICS.flatMap((t) => t.questions);

  /* ---------- STATE ---------- */
  let scope = TOPICS[0].id;
  let mode = "practice"; // practice | missed | test
  let activeQuestion = null;
  let answered = false;
  let selected = new Set();
  let timerId = null;
  let timeLeft = 0;
  let advanceTimer = null;
  let test = { running: false, list: [], i: 0, correct: 0, startedAt: 0, results: [] };

  let score = loadScore();
  let settings = loadSettings();
  let history = SH.load(K.history, { days: {}, tests: [] });
  if (!history.days) history = { days: {}, tests: [] };
  let missed = SH.load(K.missed, {});

  /* ---------- DOM ---------- */
  const $ = (id) => document.getElementById(id);
  const topicListEl = $("topicList");
  const topicSelectEl = $("topicSelect");
  const topicTitleEl = $("topicTitle");
  const topicDescEl = $("topicDesc");
  const questionTextEl = $("questionText");
  const choicesEl = $("choices");
  const feedbackEl = $("feedback");
  const revealEl = $("answerReveal");
  const explainEl = $("explain");
  const nextBtn = $("nextBtn");
  const submitBtn = $("submitBtn");
  const shuffleBtn = $("shuffleBtn");
  const overallScoreEl = $("overallScore");
  const topicScoreEl = $("topicScore");
  const timeLeftEl = $("timeLeft");
  const timePerQEl = $("timePerQ");
  const autoAdvanceEl = $("autoAdvance");
  const resetScoreBtn = $("resetScoreBtn");
  const deckInfoEl = $("deckInfo");
  const quizPanel = $("quizPanel");
  const resultPanel = $("resultPanel");
  const testCfg = $("testCfg");
  const testCountEl = $("testCount");
  const startTestBtn = $("startTestBtn");
  const quitTestBtn = $("quitTestBtn");
  const modeBtns = [...document.querySelectorAll("[data-mode]")];
  const missedCountEl = $("missedCount");
  const quizHeading = $("quizHeading");
  const studyLink = $("studyLink");

  /* ---------- INIT ---------- */
  timePerQEl.value = settings.timePerQ;
  autoAdvanceEl.checked = !!settings.autoAdvance;

  const p = SH.params();
  if (p.get("topic") && (p.get("topic") === ALL || TOPICS.some((t) => t.id === p.get("topic")))) scope = p.get("topic");
  if (["practice", "missed", "test"].includes(p.get("mode"))) mode = p.get("mode");

  renderTopics();
  renderModeBar();
  renderHeader();
  renderPracticeLinks();
  nextQuestion();

  /* ---------- HELPERS ---------- */
  function scopeTopic() {
    return scope === ALL ? null : TOPICS.find((t) => t.id === scope);
  }
  function scopeLabel() {
    const t = scopeTopic();
    return t ? t.title : "All chapters (mixed)";
  }
  function pool() {
    const t = scopeTopic();
    return t ? t.questions : allQuestions;
  }
  function missedInScope() {
    return pool().filter((q) => missed[q._id]);
  }

  /* ---------- TOPICS / MODES ---------- */
  function renderTopics() {
    topicListEl.innerHTML = "";
    topicSelectEl.innerHTML = "";
    const entries = [{ id: ALL, title: "All chapters (mixed)", count: allQuestions.length }].concat(
      TOPICS.map((t) => ({ id: t.id, title: t.title, count: t.questions.length }))
    );
    entries.forEach((t) => {
      const btn = document.createElement("button");
      btn.className = "topic-btn" + (t.id === scope ? " active" : "");
      btn.textContent = `${t.title} (${t.count})`;
      btn.addEventListener("click", () => setScope(t.id));
      topicListEl.appendChild(btn);
      const opt = document.createElement("option");
      opt.value = t.id;
      opt.textContent = `${t.title} (${t.count})`;
      if (t.id === scope) opt.selected = true;
      topicSelectEl.appendChild(opt);
    });
  }
  topicSelectEl.addEventListener("change", () => setScope(topicSelectEl.value));

  function setScope(id) {
    if (id !== ALL && !TOPICS.some((t) => t.id === id)) return;
    if (test.running && !confirm("Leave the test? Your progress in this test will be lost.")) {
      renderTopics();
      return;
    }
    test = { running: false, list: [], i: 0, correct: 0, startedAt: 0, results: [] };
    scope = id;
    renderTopics();
    renderHeader();
    renderPracticeLinks();
    renderModeBar();
    nextQuestion();
  }

  function setMode(m) {
    if (m === mode) return;
    if (test.running && !confirm("Leave the test? Your progress in this test will be lost.")) return;
    test = { running: false, list: [], i: 0, correct: 0, startedAt: 0, results: [] };
    mode = m;
    renderModeBar();
    nextQuestion();
  }
  modeBtns.forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));

  function renderModeBar() {
    modeBtns.forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
    missedCountEl.textContent = missedInScope().length;
    testCfg.style.display = mode === "test" ? "" : "none";
    startTestBtn.style.display = test.running ? "none" : "";
    quitTestBtn.style.display = test.running ? "" : "none";
    testCountEl.disabled = test.running;
    const max = pool().length;
    testCountEl.max = max;
    if (!testCountEl.dataset.touched) testCountEl.value = Math.min(20, max);
    quizHeading.textContent = mode === "practice" ? "Practice" : mode === "missed" ? "Missed question review" : "Timed test";
  }

  function renderHeader() {
    topicTitleEl.textContent = scopeLabel();
    const t = scopeTopic();
    topicDescEl.textContent = t ? t.desc || "" : "Questions from every chapter, drawn together.";
    if (studyLink) studyLink.href = `study.html?level=${CFG.level}` + (t ? `&topic=${t.id}` : "");
    updateScoreUI();
  }

  function renderPracticeLinks() {
    const ul = $("practiceLinks");
    ul.innerHTML = "";
    const t = scopeTopic();
    const links = ((t && t.practiceLinks) || []).filter((l) => l && l.label && l.url);
    if (!links.length) {
      const li = document.createElement("li");
      li.textContent = t ? "No links yet for this chapter." : "Pick a single chapter to see its practice links.";
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

  /* ---------- QUESTION FLOW ---------- */
  function setFeedback(text, type) {
    feedbackEl.textContent = text;
    feedbackEl.className = "feedback " + (type || "");
  }

  function clearAdvance() {
    if (advanceTimer) clearTimeout(advanceTimer);
    advanceTimer = null;
  }

  function showMessage(msg, withActions) {
    stopTimer();
    activeQuestion = null;
    answered = true;
    questionTextEl.textContent = msg;
    choicesEl.innerHTML = "";
    deckInfoEl.textContent = "";
    revealEl.textContent = "";
    explainEl.textContent = "";
    setFeedback("", "");
    submitBtn.style.display = "none";
    nextBtn.style.display = withActions ? "" : "none";
    timeLeftEl.textContent = "--";
    quizPanel.style.display = "";
    resultPanel.style.display = "none";
  }

  function drawFromDeck() {
    const qs = pool();
    const ids = qs.map((q) => q._id);
    const idSet = new Set(ids);
    const decks = SH.load(K.deck, {});
    let d = decks[scope];
    const stale = !d || d.order.length !== ids.length || !d.order.every((id) => idSet.has(id));
    if (stale || d.pos >= d.order.length) {
      const finished = d && !stale && d.pos >= d.order.length;
      d = { order: SH.shuffle(ids), pos: 0 };
      if (finished) deckInfoEl.dataset.note = "Deck finished, reshuffled.";
    }
    const id = d.order[d.pos];
    d.pos += 1;
    decks[scope] = d;
    SH.save(K.deck, decks);
    deckInfoEl.textContent =
      (deckInfoEl.dataset.note ? deckInfoEl.dataset.note + " " : "") + `Question ${d.pos} of ${d.order.length} in this deck`;
    deckInfoEl.dataset.note = "";
    return byId.get(id);
  }

  function nextQuestion() {
    clearAdvance();
    answered = false;
    setFeedback("", "");
    revealEl.textContent = "";
    explainEl.textContent = "";
    renderModeBar();

    if (mode === "test") {
      if (!test.running) {
        showMessage(
          `Pick how many questions and press Start test. ${pool().length} questions are available in ${scopeLabel()}.`,
          false
        );
        return;
      }
      if (test.i >= test.list.length) {
        finishTest();
        return;
      }
      activeQuestion = test.list[test.i];
      deckInfoEl.textContent = `Question ${test.i + 1} of ${test.list.length}  |  Correct so far: ${test.correct}`;
    } else if (mode === "missed") {
      const m = missedInScope();
      if (!m.length) {
        showMessage("No missed questions here. Answer questions in practice mode and the ones you miss collect here.", false);
        return;
      }
      let cand = m;
      if (m.length > 1 && activeQuestion) cand = m.filter((q) => q._id !== activeQuestion._id);
      activeQuestion = cand[Math.floor(Math.random() * cand.length)];
      deckInfoEl.textContent = `${m.length} missed question${m.length === 1 ? "" : "s"} left to clear`;
    } else {
      activeQuestion = drawFromDeck();
    }
    renderQuestion();
  }

  function renderQuestion() {
    quizPanel.style.display = "";
    resultPanel.style.display = "none";
    questionTextEl.textContent = activeQuestion.q;
    selected = new Set();
    choicesEl.innerHTML = "";
    activeQuestion.choices.forEach((choiceText, i) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = choiceText;
      btn.addEventListener("click", () => (SH.isMulti(activeQuestion) ? toggleChoice(i, btn) : handleAnswer(i)));
      choicesEl.appendChild(btn);
    });
    submitBtn.style.display = SH.isMulti(activeQuestion) ? "" : "none";
    nextBtn.style.display = "";
    nextBtn.textContent = mode === "test" && test.i === test.list.length - 1 ? "Finish test" : "Next Question";
    startTimer();
  }

  function disableChoices() {
    [...choicesEl.querySelectorAll("button.choice")].forEach((b) => (b.disabled = true));
  }

  function toggleChoice(i, btn) {
    if (answered) return;
    if (selected.has(i)) {
      selected.delete(i);
      btn.classList.remove("selected");
    } else {
      selected.add(i);
      btn.classList.add("selected");
    }
  }

  function markCorrectWrong(selectedIndex) {
    const buttons = [...choicesEl.querySelectorAll("button.choice")];
    if (SH.isMulti(activeQuestion)) {
      buttons.forEach((b, i) => {
        b.classList.remove("selected");
        const isRight = activeQuestion.correctIndexes.includes(i);
        if (isRight) b.classList.add("correct");
        if (selected.has(i) && !isRight) b.classList.add("wrong");
      });
      return;
    }
    buttons.forEach((b, i) => {
      if (i === activeQuestion.correctIndex) b.classList.add("correct");
      if (i === selectedIndex && selectedIndex !== activeQuestion.correctIndex) b.classList.add("wrong");
    });
  }

  function finishAnswer(isCorrect, label, selectedIndex) {
    answered = true;
    stopTimer();
    disableChoices();
    markCorrectWrong(selectedIndex);
    setFeedback(label || (isCorrect ? "Correct ✅" : "Incorrect ❌"), isCorrect ? "good" : "bad");
    if (!isCorrect) revealEl.textContent = "Correct answer: " + SH.answerText(activeQuestion);
    if (activeQuestion.explain) explainEl.textContent = activeQuestion.explain;
    recordScore(isCorrect);
    if (mode === "test") {
      test.results.push({ q: activeQuestion, ok: isCorrect });
      if (isCorrect) test.correct += 1;
      test.i += 1;
      deckInfoEl.textContent = `Question ${Math.min(test.i, test.list.length)} of ${test.list.length}  |  Correct so far: ${test.correct}`;
    }
    if (settings.autoAdvance) {
      clearAdvance();
      advanceTimer = setTimeout(() => nextQuestion(), isCorrect ? 700 : 1800);
    }
  }

  function handleAnswer(i) {
    if (answered) return;
    finishAnswer(i === activeQuestion.correctIndex, null, i);
  }

  function submitMulti() {
    if (answered || !activeQuestion || !SH.isMulti(activeQuestion)) return;
    if (selected.size === 0) {
      setFeedback("Select at least one answer, then submit.", "");
      return;
    }
    const right = activeQuestion.correctIndexes;
    const ok = selected.size === right.length && right.every((i) => selected.has(i));
    finishAnswer(ok, null, -1);
  }
  submitBtn.addEventListener("click", submitMulti);

  function handleTimeout() {
    if (answered) return;
    finishAnswer(false, "Time’s up ⏱️", -1);
  }

  /* ---------- TIMER ---------- */
  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }
  function startTimer() {
    stopTimer();
    const seconds = settings.timePerQ;
    if (!seconds) {
      timeLeftEl.textContent = "Off";
      return;
    }
    timeLeft = seconds;
    timeLeftEl.textContent = `${timeLeft}s`;
    timerId = setInterval(() => {
      timeLeft -= 1;
      timeLeftEl.textContent = `${Math.max(timeLeft, 0)}s`;
      if (timeLeft <= 0) {
        stopTimer();
        if (!answered) handleTimeout();
      }
    }, 1000);
  }

  /* ---------- TEST MODE ---------- */
  function startTest() {
    const max = pool().length;
    const n = SH.clampInt(parseInt(testCountEl.value, 10), 1, max);
    testCountEl.value = n;
    test = { running: true, list: SH.shuffle(pool()).slice(0, n), i: 0, correct: 0, startedAt: Date.now(), results: [] };
    nextQuestion();
  }
  startTestBtn.addEventListener("click", startTest);
  testCountEl.addEventListener("input", () => (testCountEl.dataset.touched = "1"));
  quitTestBtn.addEventListener("click", () => {
    if (!confirm("Quit this test? It will not be saved.")) return;
    test = { running: false, list: [], i: 0, correct: 0, startedAt: 0, results: [] };
    nextQuestion();
  });

  function fmtTime(s) {
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }

  function finishTest() {
    stopTimer();
    const n = test.list.length;
    const secs = Math.round((Date.now() - test.startedAt) / 1000);
    const pct = Math.round((test.correct / n) * 100);
    history.tests.push({ t: Date.now(), scope: scopeLabel(), scopeId: scope, c: test.correct, n, secs });
    history.tests = history.tests.slice(-50);
    SH.save(K.history, history);

    quizPanel.style.display = "none";
    resultPanel.style.display = "";
    const wrongOnes = test.results.filter((r) => !r.ok);
    let html = `<h3>Test complete</h3><div class="big-score">${test.correct} / ${n} <span class="muted">(${pct}%)</span></div>
      <p class="muted">${scopeLabel()} · ${fmtTime(secs)}</p>`;
    if (scope === ALL) {
      const by = {};
      test.results.forEach((r) => {
        by[r.q._tid] = by[r.q._tid] || [0, 0];
        by[r.q._tid][1] += 1;
        if (r.ok) by[r.q._tid][0] += 1;
      });
      html += '<div class="result-chapters">';
      TOPICS.forEach((t) => {
        if (by[t.id]) html += `<div><span>${t.title}</span><strong>${by[t.id][0]} / ${by[t.id][1]}</strong></div>`;
      });
      html += "</div>";
    }
    if (wrongOnes.length) {
      html += `<h4>Missed (${wrongOnes.length})</h4><ul class="missed-list">`;
      wrongOnes.forEach((r) => {
        html += `<li><div>${esc(r.q.q)}</div><div class="muted small">Answer: ${esc(SH.answerText(r.q))}</div></li>`;
      });
      html += "</ul>";
    } else {
      html += "<p>Perfect score.</p>";
    }
    html += `<div class="quiz-actions"><button class="btn" id="retakeBtn">New test</button>
      <button class="btn ghost" id="reviewBtn">Review missed</button>
      <button class="btn ghost" id="backBtn">Back to practice</button></div>`;
    resultPanel.innerHTML = html;
    test.running = false;
    renderModeBar();
    $("retakeBtn").onclick = () => {
      resultPanel.style.display = "none";
      startTest();
    };
    $("reviewBtn").onclick = () => {
      resultPanel.style.display = "none";
      mode = "missed";
      renderModeBar();
      nextQuestion();
    };
    $("backBtn").onclick = () => {
      resultPanel.style.display = "none";
      mode = "practice";
      renderModeBar();
      nextQuestion();
    };
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  /* ---------- SCORE + HISTORY ---------- */
  function ensureTopicScore(id) {
    if (!score.byTopic[id]) score.byTopic[id] = { correct: 0, total: 0 };
  }

  function recordScore(isCorrect) {
    const tid = activeQuestion._tid;
    ensureTopicScore(tid);
    score.overall.total += 1;
    score.byTopic[tid].total += 1;
    if (isCorrect) {
      score.overall.correct += 1;
      score.byTopic[tid].correct += 1;
    }
    SH.save(K.score, score);

    const day = SH.today();
    history.days[day] = history.days[day] || {};
    const cell = (history.days[day][tid] = history.days[day][tid] || [0, 0]);
    cell[1] += 1;
    if (isCorrect) cell[0] += 1;
    SH.save(K.history, history);

    if (isCorrect) delete missed[activeQuestion._id];
    else missed[activeQuestion._id] = tid;
    SH.save(K.missed, missed);

    updateScoreUI();
    missedCountEl.textContent = missedInScope().length;
  }

  function updateScoreUI() {
    overallScoreEl.textContent = `${score.overall.correct} / ${score.overall.total}`;
    const t = scopeTopic();
    if (t) {
      ensureTopicScore(t.id);
      const s = score.byTopic[t.id];
      topicScoreEl.textContent = `${s.correct} / ${s.total}`;
    } else {
      topicScoreEl.textContent = "see Progress";
    }
  }

  resetScoreBtn.addEventListener("click", () => {
    if (!confirm("Reset the score and progress history for this level? Missed questions are kept.")) return;
    score = { overall: { correct: 0, total: 0 }, byTopic: {} };
    history = { days: {}, tests: [] };
    SH.save(K.score, score);
    SH.save(K.history, history);
    updateScoreUI();
    setFeedback("Score reset.", "");
  });

  /* ---------- SETTINGS ---------- */
  timePerQEl.addEventListener("change", () => {
    const v = parseInt(timePerQEl.value, 10);
    settings.timePerQ = v === 0 ? 0 : SH.clampInt(v, 5, 300);
    timePerQEl.value = settings.timePerQ;
    SH.save(K.settings, settings);
    if (!answered && activeQuestion) startTimer();
  });
  autoAdvanceEl.addEventListener("change", () => {
    settings.autoAdvance = !!autoAdvanceEl.checked;
    SH.save(K.settings, settings);
  });
  shuffleBtn.addEventListener("click", () => {
    if (mode === "test" && test.running) return;
    nextQuestion();
  });
  nextBtn.addEventListener("click", () => {
    if (mode === "test" && test.running && !answered) {
      setFeedback("Answer the question first.", "");
      return;
    }
    nextQuestion();
  });

  function loadSettings() {
    const parsed = SH.load(K.settings, null);
    if (!parsed) return { timePerQ: 20, autoAdvance: true };
    const t = parseInt(parsed.timePerQ, 10);
    return { timePerQ: t === 0 ? 0 : SH.clampInt(t, 5, 300) || 20, autoAdvance: !!parsed.autoAdvance };
  }
  function loadScore() {
    const parsed = SH.load(K.score, null);
    if (!parsed || !parsed.overall || !parsed.byTopic) return { overall: { correct: 0, total: 0 }, byTopic: {} };
    return parsed;
  }

  /* ---------- KEYBOARD ---------- */
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "textarea") return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (tag === "button" && e.key === "Enter") return;
    if (/^[1-9]$/.test(e.key) && activeQuestion && !answered) {
      const b = choicesEl.querySelectorAll("button.choice")[parseInt(e.key, 10) - 1];
      if (b) b.click();
    } else if (e.key === "Enter") {
      if (activeQuestion && !answered && SH.isMulti(activeQuestion)) submitMulti();
      else if (answered || (mode !== "test" && activeQuestion)) {
        e.preventDefault();
        nextBtn.click();
      }
    }
  });
})();
