(function () {
  const D = window.MULKIMARK;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const pct = (s) => (s && s.total ? (100 * s.correct) / s.total : null);
  const fmt = (n) => (n == null ? "–" : n.toFixed(n >= 99.95 ? 0 : 1).replace(/\.0$/, "") + "%");
  const colour = (i) => `var(--series-${(i % 4) + 1})`;
  const models = D.models.map((m, i) => ({ ...m, colour: colour(i) }));
  const byId = Object.fromEntries(models.map((m) => [m.id, m]));

  // Pool every quiz's scores per model: total correct over total asked.
  function pooled(rows) {
    const out = {};
    for (const m of models) {
      let c = 0, t = 0;
      for (const r of rows) {
        const s = r.scores[m.id];
        if (s) { c += s.correct; t += s.total; }
      }
      out[m.id] = t ? { correct: c, total: t } : null;
    }
    return out;
  }

  function ranked(scores) {
    return models
      .map((m) => ({ m, s: scores[m.id], p: pct(scores[m.id]) }))
      .filter((x) => x.p != null)
      .sort((a, b) => b.p - a.p);
  }

  // ---- headline stats ---------------------------------------------------
  const overall = pooled(D.quizzes);
  const order = ranked(overall);
  const questions = D.quizzes.reduce((n, q) => n + Math.max(0, ...Object.values(q.scores).map((s) => s.total)), 0);
  const leader = order[0];
  $("#headline").innerHTML = [
    { label: "Top of the table", value: leader ? leader.m.name : "–", sub: leader ? `${fmt(leader.p)} of all questions` : "" },
    { label: "Quizzes", value: D.quizzes.length, sub: "set by the KQA" },
    { label: "Questions asked", value: questions.toLocaleString(), sub: "to every model" },
    { label: "Models", value: models.length, sub: "and counting" },
  ].map((s) => `
    <div class="stat">
      <p class="label">${esc(s.label)}</p>
      <p class="value">${esc(s.value)}</p>
      <p class="sub">${esc(s.sub)}</p>
    </div>`).join("");

  // ---- results table ----------------------------------------------------
  function cell(s, best) {
    const p = pct(s);
    if (p == null) return `<td class="cell"><span class="pct">–</span></td>`;
    return `<td class="cell${best ? " best" : ""}" data-tip="${esc(`${s.correct} of ${s.total} correct`)}">
      ${best ? '<span class="best-tag">Best</span>' : ""}<span class="pct">${fmt(p)}</span>
      <span class="raw">${s.correct}/${s.total}</span>
      <span class="meter" aria-hidden="true"><i style="width:${p}%"></i></span>
    </td>`;
  }

  function row(label, scores, tag = "td") {
    const top = ranked(scores)[0];
    const bestP = top ? top.p : null;
    return models.map((m) => cell(scores[m.id], bestP != null && pct(scores[m.id]) === bestP)).join("");
  }

  $("#results-table").innerHTML = `
    <thead>
      <tr>
        <th scope="col">Quiz</th>
        ${models.map((m) => `<th scope="col" class="model"><span class="model-head"><span class="name"><span class="swatch" style="background:${m.colour}"></span>${esc(m.name)}</span><span class="maker">${esc(m.maker || "")}</span></span></th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${D.quizzes.map((q) => `
        <tr>
          <th scope="row"><span class="quiz-name">${esc(q.name)}</span><span class="quiz-meta">${esc([q.note, q.date].filter(Boolean).join(" · "))}</span></th>
          ${row(q.name, q.scores)}
        </tr>`).join("")}
    </tbody>
    <tfoot>
      <tr>
        <th scope="row"><span class="quiz-name">All quizzes</span><span class="quiz-meta">every question pooled</span></th>
        ${row("All", overall)}
      </tr>
    </tfoot>`;

  // ---- categories -------------------------------------------------------
  $("#legend").innerHTML = models.map((m) => `<span><i class="swatch" style="background:${m.colour}"></i>${esc(m.name)}</span>`).join("");

  function headline(cat, r) {
    if (r.length < 2) return { h: `${esc(cat.name)}`, sub: "" };
    const gap = r[0].p - r[1].p;
    if (gap < 2) {
      const tied = r.filter((x) => r[0].p - x.p < 2).map((x) => x.m.name);
      return {
        h: `Dead heat in <em>${esc(cat.name)}</em>`,
        sub: `${esc(tied.join(" and ").replace(/ and (?=.* and )/g, ", "))} are within ${gap.toFixed(1)} points of each other.`,
      };
    }
    return {
      h: `${esc(r[0].m.name)} is better at <em>${esc(cat.name)}</em>`,
      sub: `${gap.toFixed(1)} points ahead of ${esc(r[1].m.name)}, the next best.`,
    };
  }

  $("#cat-grid").innerHTML = D.categories.map((cat) => {
    const r = ranked(cat.scores);
    const { h, sub } = headline(cat, r);
    const n = Math.max(0, ...Object.values(cat.scores).map((s) => s.total));
    const lead = r[0] && r[0].m.id;
    return `<article class="cat" id="cat-${esc(cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"))}">
      <p class="kicker">${esc(cat.name)} · ${n} questions</p>
      <h3>${h}</h3>
      <p class="margin">${sub}</p>
      <div class="bars" role="list">
        ${models.map((m) => {
          const s = cat.scores[m.id];
          const p = pct(s);
          return `<div class="bar-row${m.id === lead ? " lead" : ""}" role="listitem" data-tip="${esc(p == null ? `${m.name}: no score` : `<b>${m.name}</b><br>${s.correct} of ${s.total} correct (${fmt(p)})`)}">
            <span class="who">${esc(m.name)}</span>
            <span class="track"><span class="fill" style="width:${p ?? 0}%;background:${m.colour}"></span></span>
            <span class="val">${fmt(p)}</span>
          </div>`;
        }).join("")}
      </div>
      ${cat.quip ? `<p class="quip">${esc(cat.quip)}</p>` : ""}
    </article>`;
  }).join("");

  // ---- tooltip ----------------------------------------------------------
  const tip = $("#tooltip");
  document.addEventListener("pointermove", (e) => {
    const t = e.target.closest("[data-tip]");
    if (!t) { tip.hidden = true; return; }
    tip.innerHTML = t.dataset.tip;
    tip.hidden = false;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    let x = e.clientX + 14, y = e.clientY - h - 12;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - 14;
    if (y < 8) y = e.clientY + 18;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  });
  document.addEventListener("pointerleave", () => (tip.hidden = true));

  $("#sample-note").hidden = !D.sample;
  if (D.updated) $("#updated").textContent = `Last updated ${D.updated}.`;
})();
