(function () {
  const $ = (id) => document.getElementById(id);
  const KEY = "mqs_checked_v1";
  const p = SH.params();
  let level = ["4c", "3c", "2c"].includes(p.get("level")) ? p.get("level") : SH.load("mqs_level_v1", "4c");
  let checked = SH.load(KEY, {});
  const open = SH.load("mqs_open_v1", {});

  function chapters() {
    return LEVELS[level].chapters;
  }
  function itemKeys(ch) {
    const items = (MQS_DATA[level] && MQS_DATA[level][ch.n]) || [];
    const keys = [];
    items.forEach((it, i) => {
      keys.push(`${level}-${ch.n}-${i}`);
      it.sub.forEach((_, j) => keys.push(`${level}-${ch.n}-${i}-${j}`));
    });
    return keys;
  }
  function pct(keys) {
    if (!keys.length) return 0;
    return Math.round((keys.filter((k) => checked[k]).length / keys.length) * 100);
  }

  function render() {
    SH.save("mqs_level_v1", level);
    document.querySelectorAll("#levelSeg [data-level]").forEach((b) => b.classList.toggle("active", b.dataset.level === level));
    const body = $("mqsBody");
    body.innerHTML = "";
    let allKeys = [];
    chapters().forEach((ch) => {
      const items = (MQS_DATA[level] && MQS_DATA[level][ch.n]) || [];
      const keys = itemKeys(ch);
      allKeys = allKeys.concat(keys);
      const det = document.createElement("details");
      det.className = "panel mqs-ch";
      det.open = !!open[`${level}-${ch.n}`];
      det.addEventListener("toggle", () => {
        open[`${level}-${ch.n}`] = det.open;
        SH.save("mqs_open_v1", open);
      });
      const sum = document.createElement("summary");
      const done = keys.filter((k) => checked[k]).length;
      sum.innerHTML = `<span class="mqs-title">Chapter ${ch.n}: ${ch.title}</span>
        <span class="mqs-count muted small">${done} / ${keys.length}</span>
        <span class="bar small-bar"><span class="bar-fill" style="width:${pct(keys)}%"></span></span>`;
      det.appendChild(sum);
      const ul = document.createElement("ul");
      ul.className = "mqs-list";
      items.forEach((it, i) => {
        const li = document.createElement("li");
        li.appendChild(box(`${level}-${ch.n}-${i}`, it.t));
        if (it.sub.length) {
          const sub = document.createElement("ul");
          sub.className = "mqs-sub";
          it.sub.forEach((s, j) => {
            const sl = document.createElement("li");
            sl.appendChild(box(`${level}-${ch.n}-${i}-${j}`, s));
            sub.appendChild(sl);
          });
          li.appendChild(sub);
        }
        ul.appendChild(li);
      });
      det.appendChild(ul);
      const a = document.createElement("a");
      a.className = "btn ghost mqs-quiz";
      a.href = `${LEVELS[level].page}?topic=${ch.id}`;
      a.textContent = "Quiz this chapter";
      const s = document.createElement("a");
      s.className = "btn ghost mqs-quiz";
      s.href = `study.html?level=${level}&topic=${ch.id}`;
      s.textContent = "Study cards";
      const row = document.createElement("div");
      row.className = "chip-row";
      row.appendChild(a);
      row.appendChild(s);
      det.appendChild(row);
      body.appendChild(det);
    });
    const pc = pct(allKeys);
    $("levelFill").style.width = pc + "%";
    $("levelPct").textContent = `${pc}% of ${LEVELS[level].short} objectives checked`;
  }

  function box(key, text) {
    const label = document.createElement("label");
    label.className = "check";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!checked[key];
    cb.addEventListener("change", () => {
      if (cb.checked) checked[key] = 1;
      else delete checked[key];
      SH.save(KEY, checked);
      render();
    });
    const span = document.createElement("span");
    span.textContent = text;
    label.appendChild(cb);
    label.appendChild(span);
    return label;
  }

  document.querySelectorAll("#levelSeg [data-level]").forEach((b) =>
    b.addEventListener("click", () => {
      level = b.dataset.level;
      render();
    })
  );
  $("resetChecks").addEventListener("click", () => {
    if (!confirm("Clear every checkbox for " + LEVELS[level].short + "?")) return;
    Object.keys(checked).forEach((k) => {
      if (k.startsWith(level + "-")) delete checked[k];
    });
    SH.save(KEY, checked);
    render();
  });
  render();
})();
