/* Shared helpers used by every page */
(function () {
  function hash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  window.SH = {
    qid(topicId, q) {
      return topicId + ":" + hash(q.q + "|" + q.choices.join("|"));
    },
    isMulti(q) {
      return q && q.type === "multi" && Array.isArray(q.correctIndexes);
    },
    answerText(q) {
      if (SH.isMulti(q)) return q.correctIndexes.map((i) => q.choices[i]).join("; ");
      return q.choices[q.correctIndex];
    },
    load(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        return JSON.parse(raw);
      } catch (e) {
        return fallback;
      }
    },
    save(key, val) {
      try {
        localStorage.setItem(key, JSON.stringify(val));
      } catch (e) {}
    },
    today() {
      const d = new Date();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return d.getFullYear() + "-" + m + "-" + day;
    },
    shuffle(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    clampInt(n, min, max) {
      if (!Number.isFinite(n)) return min;
      return Math.max(min, Math.min(max, n));
    },
    params() {
      return new URLSearchParams(location.search);
    },
    keys(prefix) {
      return {
        score: prefix + "_score_v1",
        settings: prefix + "_settings_v1",
        history: prefix + "_history_v1",
        missed: prefix + "_missed_v1",
        deck: prefix + "_deck_v1",
      };
    },
    /* Turn a question into a flashcard / fact sheet pair */
    toCard(q) {
      let front = q.q;
      let back;
      if (SH.isMulti(q)) {
        back = q.correctIndexes.map((i) => q.choices[i]).join(" • ");
      } else if (q.choices.length === 2 && q.choices[0] === "True" && q.choices[1] === "False") {
        front = q.q.replace(/^True or false:\s*/i, "");
        back = q.correctIndex === 0 ? "True" : "False";
        return { front, back, tf: true };
      } else {
        back = q.choices[q.correctIndex];
      }
      return { front, back, tf: false };
    },
  };
})();
