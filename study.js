(function () {
  const $ = (id) => document.getElementById(id);
  const KNOWN = "study_known_v1";
  const ALL = "__all__";
  const p = SH.params();
  let level = ["4c", "3c", "2c"].includes(p.get("level")) ? p.get("level") : SH.load("study_level_v1", "4c");
  let topic = p.get("topic") || ALL;
  let view = SH.load("study_view_v1", "cards");
  let known = SH.load(KNOWN, {});
  let cards = [];
  let idx = 0;
  let flipped = false;

  function topics() {
    return QUIZ_DATA[level];
  }
  function buildCards() {
    const ts = topic === ALL ? topics() : topics().filter((t) => t.id === topic);
    let list = [];
    ts.forEach((t) =>
      t.questions.forEach((q) => {
        const c = SH.toCard(q);
        c.id = SH.qid(t.id, q);
        c.chapter = t.title;
        list.push(c);
      })
    );
    if ($("hideKnown").checked) list = list.filter((c) => !known[c.id]);
    if ($("shuffleCards").checked) list = SH.shuffle(list);
    cards = list;
    if (idx >= cards.length) idx = 0;
    flipped = false;
  }

  function renderSelectors() {
    document.querySelectorAll("#levelSeg [data-level]").forEach((b) => b.classList.toggle("active", b.dataset.level === level));
    document.querySelectorAll("#viewSeg [data-view]").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    const sel = $("chapterSel");
    sel.innerHTML = "";
    const o = document.createElement("option");
    o.value = ALL;
    o.textContent = "All chapters";
    sel.appendChild(o);
    topics().forEach((t, i) => {
      const op = document.createElement("option");
      op.value = t.id;
      op.textContent = `${i + 1}. ${t.title} (${t.questions.length})`;
      sel.appendChild(op);
    });
    sel.value = topics().some((t) => t.id === topic) ? topic : ALL;
    topic = sel.value;
  }

  function renderCard() {
    if (!cards.length) {
      $("fcText").textContent = "No cards here. Clear the hide known filter to see them again.";
      $("fcSide").textContent = "";
      $("cardPos").textContent = "0 cards";
      return;
    }
    const c = cards[idx];
    $("fcSide").textContent = (flipped ? "Answer" : c.tf ? "True or false" : "Question") + "  |  " + c.chapter;
    $("fcText").textContent = flipped ? c.back : c.front;
    $("flashcard").classList.toggle("flipped", flipped);
    const kn = Object.keys(known).filter((k) => cards.some((x) => x.id === k)).length;
    $("cardPos").textContent = `Card ${idx + 1} of ${cards.length}  |  ${kn} known`;
    $("markKnown").textContent = known[c.id] ? "Unmark known" : "Mark as known";
  }

  function renderSheet() {
    const q = $("sheetSearch").value.trim().toLowerCase();
    const ts = topic === ALL ? topics() : topics().filter((t) => t.id === topic);
    const body = $("sheetBody");
    body.innerHTML = "";
    ts.forEach((t) => {
      const items = t.questions
        .map((qq) => SH.toCard(qq))
        .filter((c) => !q || (c.front + " " + c.back).toLowerCase().includes(q));
      if (!items.length) return;
      const h = document.createElement("h3");
      h.textContent = t.title;
      body.appendChild(h);
      const ul = document.createElement("ul");
      ul.className = "facts";
      items.forEach((c) => {
        const li = document.createElement("li");
        const a = document.createElement("div");
        a.className = "fq";
        a.textContent = c.front;
        const b = document.createElement("div");
        b.className = "fa";
        b.textContent = c.tf ? "→ " + c.back : "→ " + c.back;
        li.appendChild(a);
        li.appendChild(b);
        ul.appendChild(li);
      });
      body.appendChild(ul);
    });
    if (!body.children.length) body.textContent = "Nothing matches that search.";
  }

  function render() {
    SH.save("study_level_v1", level);
    SH.save("study_view_v1", view);
    renderSelectors();
    $("cardsView").style.display = view === "cards" ? "" : "none";
    $("sheetView").style.display = view === "sheet" ? "" : "none";
    if (view === "cards") {
      buildCards();
      renderCard();
    } else renderSheet();
  }

  document.querySelectorAll("#levelSeg [data-level]").forEach((b) =>
    b.addEventListener("click", () => {
      level = b.dataset.level;
      topic = ALL;
      idx = 0;
      render();
    })
  );
  document.querySelectorAll("#viewSeg [data-view]").forEach((b) =>
    b.addEventListener("click", () => {
      view = b.dataset.view;
      render();
    })
  );
  $("chapterSel").addEventListener("change", () => {
    topic = $("chapterSel").value;
    idx = 0;
    render();
  });
  $("hideKnown").addEventListener("change", () => { idx = 0; render(); });
  $("shuffleCards").addEventListener("change", () => { idx = 0; render(); });
  $("sheetSearch").addEventListener("input", renderSheet);
  $("printSheet").addEventListener("click", () => window.print());

  function flip() { flipped = !flipped; renderCard(); }
  function move(d) {
    if (!cards.length) return;
    idx = (idx + d + cards.length) % cards.length;
    flipped = false;
    renderCard();
  }
  function toggleKnown() {
    if (!cards.length) return;
    const c = cards[idx];
    if (known[c.id]) delete known[c.id];
    else known[c.id] = 1;
    SH.save(KNOWN, known);
    if ($("hideKnown").checked) { buildCards(); }
    renderCard();
  }
  $("flashcard").addEventListener("click", flip);
  $("flipCard").addEventListener("click", flip);
  $("prevCard").addEventListener("click", () => move(-1));
  $("nextCard").addEventListener("click", () => move(1));
  $("markKnown").addEventListener("click", toggleKnown);
  $("resetKnown").addEventListener("click", () => {
    if (!confirm("Clear all known marks?")) return;
    known = {};
    SH.save(KNOWN, known);
    render();
  });
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (view !== "cards" || tag === "input" || tag === "select" || tag === "textarea") return;
    if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowLeft") move(-1);
    else if (e.key === " " && tag !== "button") { e.preventDefault(); flip(); }
    else if (e.key.toLowerCase() === "k") toggleKnown();
  });

  render();
})();
