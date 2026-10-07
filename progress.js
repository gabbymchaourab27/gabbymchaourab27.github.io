(function () {
  const $ = (id) => document.getElementById(id);
  let level = SH.load("progress_level_v1", "4c");
  const p = SH.params();
  if (["4c", "3c", "2c"].includes(p.get("level"))) level = p.get("level");

  function stats(l) {
    const K = SH.keys(LEVELS[l].prefix);
    return {
      K,
      score: SH.load(K.score, { overall: { correct: 0, total: 0 }, byTopic: {} }),
      hist: SH.load(K.history, { days: {}, tests: [] }),
    };
  }

  function spark(points) {
    if (points.length < 2) return '<span class="muted small">Need 2 or more days</span>';
    const w = 120, h = 28;
    const step = w / (points.length - 1);
    const d = points.map((v, i) => `${i ? "L" : "M"}${(i * step).toFixed(1)},${(h - 2 - v * (h - 4)).toFixed(1)}`).join(" ");
    return `<svg class="spark" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
  }

  function series(hist, tid) {
    const days = Object.keys(hist.days).sort();
    const pts = [];
    days.forEach((d) => {
      const c = hist.days[d][tid];
      if (c && c[1] > 0) pts.push(c[0] / c[1]);
    });
    return pts.slice(-14);
  }

  function render() {
    SH.save("progress_level_v1", level);
    document.querySelectorAll("#levelSeg [data-level]").forEach((b) => b.classList.toggle("active", b.dataset.level === level));
    const L = LEVELS[level];
    const s = stats(level);
    $("levelTitle").textContent = `${L.label}: accuracy by chapter` + (s.score.overall.total ? ` (${s.score.overall.correct} / ${s.score.overall.total} overall)` : "");
    const rows = $("chapRows");
    rows.innerHTML = "";
    L.chapters.forEach((ch) => {
      const t = s.score.byTopic[ch.id] || { correct: 0, total: 0 };
      const pc = t.total ? Math.round((t.correct / t.total) * 100) : 0;
      const row = document.createElement("div");
      row.className = "prog-row";
      row.innerHTML = `<a class="prog-name" href="${L.page}?topic=${ch.id}">${ch.n}. ${ch.title}</a>
        <div class="bar"><div class="bar-fill ${t.total && pc < 60 ? "low" : ""}" style="width:${pc}%"></div></div>
        <div class="prog-num">${t.total ? pc + "%" : "-"} <span class="muted small">${t.correct}/${t.total}</span></div>
        <div class="prog-spark">${spark(series(s.hist, ch.id))}</div>`;
      rows.appendChild(row);
    });

    const tests = $("tests");
    const list = (s.hist.tests || []).slice().reverse().slice(0, 12);
    if (!list.length) tests.innerHTML = '<p class="muted">No timed tests yet. Choose Timed test on the quiz page.</p>';
    else {
      tests.innerHTML = '<table class="tbl"><thead><tr><th>Date</th><th>Scope</th><th>Score</th><th>Time</th></tr></thead><tbody>' +
        list.map((t) => {
          const d = new Date(t.t);
          const m = Math.floor(t.secs / 60) + ":" + String(t.secs % 60).padStart(2, "0");
          return `<tr><td>${d.toLocaleDateString()}</td><td>${t.scope}</td><td>${t.c} / ${t.n} (${Math.round((t.c / t.n) * 100)}%)</td><td>${m}</td></tr>`;
        }).join("") + "</tbody></table>";
    }
    renderWeakest();
  }

  function renderWeakest() {
    let worst = null;
    ["4c", "3c", "2c"].forEach((l) => {
      const s = stats(l);
      LEVELS[l].chapters.forEach((ch) => {
        const t = s.score.byTopic[ch.id];
        if (!t || t.total < 10) return;
        const pc = t.correct / t.total;
        if (!worst || pc < worst.pc) worst = { pc, l, ch, t };
      });
    });
    const el = $("weakest");
    if (!worst) { el.style.display = "none"; return; }
    el.style.display = "";
    const L = LEVELS[worst.l];
    el.innerHTML = `<strong>Weakest chapter:</strong> ${L.short} ${worst.ch.title} at ${Math.round(worst.pc * 100)}% (${worst.t.correct} of ${worst.t.total}).
      <a class="btn" href="${L.page}?topic=${worst.ch.id}&mode=missed">Review missed</a>
      <a class="btn ghost" href="study.html?level=${worst.l}&topic=${worst.ch.id}">Study it</a>`;
  }

  document.querySelectorAll("#levelSeg [data-level]").forEach((b) =>
    b.addEventListener("click", () => { level = b.dataset.level; render(); })
  );
  $("resetLevel").addEventListener("click", () => {
    if (!confirm("Erase scores, history, missed questions and saved decks for " + LEVELS[level].short + "?")) return;
    const K = SH.keys(LEVELS[level].prefix);
    Object.values(K).forEach((k) => { try { localStorage.removeItem(k); } catch (e) {} });
    render();
  });
  render();
})();
