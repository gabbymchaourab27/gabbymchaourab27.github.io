(function () {
  const data = window.GLOSSARY;
  const list = document.getElementById("glist");
  const search = document.getElementById("gsearch");
  const alpha = document.getElementById("alpha");
  let letter = "";
  const letters = [...new Set(data.map((d) => d[0][0].toUpperCase()))].sort();
  function renderAlpha() {
    alpha.innerHTML = "";
    const all = document.createElement("button");
    all.className = "alpha-btn" + (letter === "" ? " active" : "");
    all.textContent = "All";
    all.onclick = () => { letter = ""; render(); renderAlpha(); };
    alpha.appendChild(all);
    letters.forEach((l) => {
      const b = document.createElement("button");
      b.className = "alpha-btn" + (letter === l ? " active" : "");
      b.textContent = l;
      b.onclick = () => { letter = l; render(); renderAlpha(); };
      alpha.appendChild(b);
    });
  }
  function render() {
    const q = search.value.trim().toLowerCase();
    list.innerHTML = "";
    let n = 0;
    data.forEach(([abbr, meanings]) => {
      if (letter && abbr[0].toUpperCase() !== letter) return;
      if (q && !(abbr.toLowerCase().includes(q) || meanings.join(" ").toLowerCase().includes(q))) return;
      n++;
      const row = document.createElement("div");
      row.className = "g-row";
      const a = document.createElement("div");
      a.className = "g-abbr";
      a.textContent = abbr;
      const m = document.createElement("div");
      m.className = "g-mean";
      m.textContent = meanings.join("  |  ");
      row.appendChild(a);
      row.appendChild(m);
      list.appendChild(row);
    });
    document.getElementById("gcount").textContent = n + " term" + (n === 1 ? "" : "s");
  }
  search.addEventListener("input", render);
  renderAlpha();
  render();
})();
