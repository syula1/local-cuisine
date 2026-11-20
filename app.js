"use strict";

// ---- Prefectures (in JIS order) with English names and regions ----
const REGIONS = [
  { id: "hokkaido", ja: "北海道", en: "Hokkaido" },
  { id: "tohoku", ja: "東北", en: "Tohoku" },
  { id: "kanto", ja: "関東", en: "Kanto" },
  { id: "chubu", ja: "中部", en: "Chubu" },
  { id: "kinki", ja: "近畿", en: "Kinki" },
  { id: "chugoku", ja: "中国", en: "Chugoku" },
  { id: "shikoku", ja: "四国", en: "Shikoku" },
  { id: "kyushu", ja: "九州・沖縄", en: "Kyushu & Okinawa" },
];

const PREFS = [
  ["北海道", "Hokkaido", "hokkaido"],
  ["青森県", "Aomori", "tohoku"], ["岩手県", "Iwate", "tohoku"], ["宮城県", "Miyagi", "tohoku"],
  ["秋田県", "Akita", "tohoku"], ["山形県", "Yamagata", "tohoku"], ["福島県", "Fukushima", "tohoku"],
  ["茨城県", "Ibaraki", "kanto"], ["栃木県", "Tochigi", "kanto"], ["群馬県", "Gunma", "kanto"],
  ["埼玉県", "Saitama", "kanto"], ["千葉県", "Chiba", "kanto"], ["東京都", "Tokyo", "kanto"],
  ["神奈川県", "Kanagawa", "kanto"],
  ["新潟県", "Niigata", "chubu"], ["富山県", "Toyama", "chubu"], ["石川県", "Ishikawa", "chubu"],
  ["福井県", "Fukui", "chubu"], ["山梨県", "Yamanashi", "chubu"], ["長野県", "Nagano", "chubu"],
  ["岐阜県", "Gifu", "chubu"], ["静岡県", "Shizuoka", "chubu"], ["愛知県", "Aichi", "chubu"],
  ["三重県", "Mie", "kinki"], ["滋賀県", "Shiga", "kinki"], ["京都府", "Kyoto", "kinki"],
  ["大阪府", "Osaka", "kinki"], ["兵庫県", "Hyogo", "kinki"], ["奈良県", "Nara", "kinki"],
  ["和歌山県", "Wakayama", "kinki"],
  ["鳥取県", "Tottori", "chugoku"], ["島根県", "Shimane", "chugoku"], ["岡山県", "Okayama", "chugoku"],
  ["広島県", "Hiroshima", "chugoku"], ["山口県", "Yamaguchi", "chugoku"],
  ["徳島県", "Tokushima", "shikoku"], ["香川県", "Kagawa", "shikoku"], ["愛媛県", "Ehime", "shikoku"],
  ["高知県", "Kochi", "shikoku"],
  ["福岡県", "Fukuoka", "kyushu"], ["佐賀県", "Saga", "kyushu"], ["長崎県", "Nagasaki", "kyushu"],
  ["熊本県", "Kumamoto", "kyushu"], ["大分県", "Oita", "kyushu"], ["宮崎県", "Miyazaki", "kyushu"],
  ["鹿児島県", "Kagoshima", "kyushu"], ["沖縄県", "Okinawa", "kyushu"],
].map(([ja, en, region], i) => ({ ja, en, region, order: i }));

const PREF_BY_JA = Object.fromEntries(PREFS.map((p) => [p.ja, p]));

// ---- UI strings ----
const I18N = {
  ja: {
    title: "Local Cuisine",
    subtitle: "文化庁「100年フード」認定の郷土料理を食べ歩いて、全国制覇を目指そう",
    placeholder: "料理名・説明で検索（日本語/English）",
    allPrefs: "すべての都道府県",
    allRegions: "全国",
    allStatus: "すべて",
    statusEaten: "食べた",
    statusTodo: "まだ食べていない",
    clear: "クリア",
    count: (n, total) => `${n}件を表示（全${total}件）`,
    empty: "該当する料理が見つかりませんでした。",
    search: "検索",
    eat: "食べた",
    eatenMark: "✓ 食べた",
    progressTitle: "全国の達成度",
    progressCount: (n, total) => `${total}品中 ${n}品を食べました`,
    scopeCount: (n, total) => `${total}品中 ${n}品`,
    scopeAll: "選択中の範囲",
    prefProgress: "都道府県別の達成度を見る",
    msg: (p) =>
      p === 0 ? "さあ、最初の一品を食べに行きましょう！"
      : p < 10 ? "いいスタート！この調子で食べ歩きましょう。"
      : p < 25 ? "順調です。食べ歩きの旅が続きます。"
      : p < 50 ? "もう4分の1を超えました。"
      : p < 75 ? "折り返し地点を超えました！"
      : p < 100 ? "全国制覇まであと少し！"
      : "🎉 全国制覇！おめでとうございます！",
    reset: "食べた記録をリセット",
    resetConfirm: "食べた記録をすべて消します。よろしいですか？",
    source: "出典：「100年フード」都道府県別一覧（文化庁）。説明文は簡易的なもので、不確かな項目は一般的な表現にとどめています。記録はこの端末のブラウザにのみ保存されます。",
    docTitle: "Local Cuisine | 100年フード検索",
  },
  en: {
    title: "Local Cuisine",
    subtitle: "Eat your way through Japan's certified \"100-Year Food\" regional dishes",
    placeholder: "Search by dish name or description (English / 日本語)",
    allPrefs: "All prefectures",
    allRegions: "All Japan",
    allStatus: "All",
    statusEaten: "Eaten",
    statusTodo: "Not yet eaten",
    clear: "Clear",
    count: (n, total) => `Showing ${n} of ${total} dishes`,
    empty: "No dishes matched your search.",
    search: "Search",
    eat: "Ate it",
    eatenMark: "✓ Ate it",
    progressTitle: "Nationwide progress",
    progressCount: (n, total) => `${n} of ${total} dishes eaten`,
    scopeCount: (n, total) => `${n} of ${total} dishes`,
    scopeAll: "Current selection",
    prefProgress: "Show progress by prefecture",
    msg: (p) =>
      p === 0 ? "Time to try your first dish!"
      : p < 10 ? "A great start — keep eating your way around Japan."
      : p < 25 ? "Going well. The food journey continues."
      : p < 50 ? "You're past the first quarter."
      : p < 75 ? "Past the halfway point!"
      : p < 100 ? "Almost the whole country!"
      : "🎉 You've eaten them all! Congratulations!",
    reset: "Reset eaten records",
    resetConfirm: "This will clear all your eaten records. Continue?",
    source: "Source: \"100-Year Food\" list by prefecture (Agency for Cultural Affairs). Descriptions are brief summaries; uncertain items are kept generic. Your records are stored only in this device's browser.",
    docTitle: "Local Cuisine | 100-Year Food Finder",
  },
};

// ---- State ----
const state = { lang: "ja", q: "", pref: "", region: "", status: "" };
const STORE_KEY = "local-cuisine-eaten-v1";

try {
  const saved = localStorage.getItem("lang");
  if (saved === "ja" || saved === "en") state.lang = saved;
  else if (!navigator.language.toLowerCase().startsWith("ja")) state.lang = "en";
} catch (e) {
  /* storage may be unavailable */
}

const $ = (id) => document.getElementById(id);
const els = {
  title: $("title"), subtitle: $("subtitle"), q: $("q"), pref: $("pref"), status: $("status"),
  clear: $("clear"), regions: $("regions"), count: $("count"),
  results: $("results"), empty: $("empty"), source: $("source"),
  progTitle: $("progTitle"), pOverallPct: $("pOverallPct"), pOverallBar: $("pOverallBar"),
  pOverallBarWrap: $("pOverallBarWrap"), pOverallCount: $("pOverallCount"), pMsg: $("pMsg"),
  pScope: $("pScope"), pScopeLabel: $("pScopeLabel"), pScopePct: $("pScopePct"),
  pScopeBar: $("pScopeBar"), pScopeBarWrap: $("pScopeBarWrap"), pScopeCount: $("pScopeCount"),
  prefProgressSummary: $("prefProgressSummary"), prefProgressList: $("prefProgressList"),
  resetEaten: $("resetEaten"),
};

const foods = FOODS.map(([pref, ja, descJa, en, descEn]) => ({
  pref, ja, descJa, en, descEn,
  key: pref + "|" + ja,
  haystack: [pref, PREF_BY_JA[pref].en, ja, descJa, en, descEn].join(" ").toLowerCase(),
}));

const TOTAL = foods.length;
const TOTAL_BY_PREF = {};
foods.forEach((f) => { TOTAL_BY_PREF[f.pref] = (TOTAL_BY_PREF[f.pref] || 0) + 1; });

// ---- Eaten records (localStorage) ----
let eaten = new Set();
try {
  const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
  const valid = new Set(foods.map((f) => f.key));
  eaten = new Set(raw.filter((k) => valid.has(k)));
} catch (e) {
  /* ignore */
}

function saveEaten() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify([...eaten])); } catch (e) { /* ignore */ }
}

function eatenCountByPref() {
  const c = {};
  foods.forEach((f) => { if (eaten.has(f.key)) c[f.pref] = (c[f.pref] || 0) + 1; });
  return c;
}

// ---- Helpers ----
function t() { return I18N[state.lang]; }
function prefName(p) { return state.lang === "ja" ? p.ja : p.en; }
function pctOf(n, d) { return d ? (n / d) * 100 : 0; }
function fmtPct(v) { return (Math.round(v * 10) / 10).toString(); }

function setBar(fill, wrap, v) {
  fill.style.width = v + "%";
  fill.classList.toggle("done", v >= 100);
  wrap.setAttribute("aria-valuenow", String(Math.round(v)));
}

// ---- Rendering ----
function renderProgress() {
  const s = t();
  const n = eaten.size;
  const p = pctOf(n, TOTAL);

  els.progTitle.textContent = s.progressTitle;
  els.pOverallPct.textContent = fmtPct(p);
  setBar(els.pOverallBar, els.pOverallBarWrap, p);
  els.pOverallCount.textContent = s.progressCount(n, TOTAL);
  els.pMsg.textContent = s.msg(n === 0 ? 0 : p >= 100 ? 100 : Math.max(1, Math.floor(p)));

  // Scope (selected prefecture / region)
  if (state.pref || state.region) {
    const scoped = foods.filter((f) => {
      if (state.pref && f.pref !== state.pref) return false;
      if (state.region && PREF_BY_JA[f.pref].region !== state.region) return false;
      return true;
    });
    const sn = scoped.filter((f) => eaten.has(f.key)).length;
    const sp = pctOf(sn, scoped.length);
    let label = s.scopeAll;
    if (state.pref) label = prefName(PREF_BY_JA[state.pref]);
    else {
      const r = REGIONS.find((x) => x.id === state.region);
      label = state.lang === "ja" ? r.ja : r.en;
    }
    els.pScope.hidden = false;
    els.pScopeLabel.textContent = label;
    els.pScopePct.textContent = fmtPct(sp);
    setBar(els.pScopeBar, els.pScopeBarWrap, sp);
    els.pScopeCount.textContent = s.scopeCount(sn, scoped.length);
  } else {
    els.pScope.hidden = true;
  }

  // Per-prefecture list
  els.prefProgressSummary.textContent = s.prefProgress;
  const byPref = eatenCountByPref();
  const frag = document.createDocumentFragment();
  PREFS.forEach((pf) => {
    const total = TOTAL_BY_PREF[pf.ja] || 0;
    if (!total) return;
    const e = byPref[pf.ja] || 0;
    const v = pctOf(e, total);
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pref-item" + (v >= 100 ? " done" : "");
    const row = document.createElement("div");
    row.className = "row";
    const name = document.createElement("span");
    name.textContent = prefName(pf);
    const val = document.createElement("b");
    val.textContent = `${e}/${total}`;
    row.append(name, val);
    const bar = document.createElement("div");
    bar.className = "bar";
    const fill = document.createElement("div");
    fill.className = "bar-fill" + (v >= 100 ? " done" : "");
    fill.style.width = v + "%";
    bar.append(fill);
    b.append(row, bar);
    b.addEventListener("click", () => {
      state.pref = pf.ja;
      state.region = "";
      renderStatic();
      renderResults();
      window.scrollTo({ top: document.querySelector(".controls").offsetTop - 8, behavior: "smooth" });
    });
    frag.append(b);
  });
  els.prefProgressList.replaceChildren(frag);
}

function renderStatic() {
  const s = t();
  document.documentElement.lang = state.lang;
  document.title = s.docTitle;
  els.title.textContent = s.title;
  els.subtitle.textContent = s.subtitle;
  els.q.placeholder = s.placeholder;
  els.clear.textContent = s.clear;
  els.source.textContent = s.source;
  els.resetEaten.textContent = s.reset;

  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang));
  });

  // Status filter
  els.status.innerHTML = "";
  els.status.append(
    new Option(s.allStatus, ""),
    new Option(s.statusEaten, "eaten"),
    new Option(s.statusTodo, "todo")
  );
  els.status.value = state.status;

  // Prefecture select (limited to the active region), with eaten counts
  els.pref.innerHTML = "";
  els.pref.append(new Option(s.allPrefs, ""));
  const byPref = eatenCountByPref();
  PREFS.filter((p) => !state.region || p.region === state.region).forEach((p) => {
    els.pref.append(new Option(`${prefName(p)} (${byPref[p.ja] || 0}/${TOTAL_BY_PREF[p.ja] || 0})`, p.ja));
  });
  els.pref.value = state.pref;

  // Region chips
  els.regions.innerHTML = "";
  const all = [{ id: "", ja: s.allRegions, en: s.allRegions }, ...REGIONS];
  all.forEach((r) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = state.lang === "ja" ? r.ja : r.en;
    b.setAttribute("aria-pressed", String(state.region === r.id));
    b.addEventListener("click", () => {
      state.region = r.id;
      if (state.pref && state.region && PREF_BY_JA[state.pref].region !== state.region) state.pref = "";
      renderStatic();
      renderResults();
    });
    els.regions.append(b);
  });

  renderProgress();
}

function updateEatButton(btn, card, isEaten) {
  const s = t();
  btn.setAttribute("aria-pressed", String(isEaten));
  btn.textContent = isEaten ? s.eatenMark : s.eat;
  card.classList.toggle("eaten", isEaten);
}

function renderResults() {
  const s = t();
  const terms = state.q.trim().toLowerCase().split(/\s+/).filter(Boolean);

  const list = foods
    .filter((f) => {
      const p = PREF_BY_JA[f.pref];
      if (state.pref && f.pref !== state.pref) return false;
      if (state.region && p.region !== state.region) return false;
      if (state.status === "eaten" && !eaten.has(f.key)) return false;
      if (state.status === "todo" && eaten.has(f.key)) return false;
      return terms.every((w) => f.haystack.includes(w));
    })
    .sort((a, b) => PREF_BY_JA[a.pref].order - PREF_BY_JA[b.pref].order);

  els.count.textContent = s.count(list.length, TOTAL);
  els.empty.hidden = list.length > 0;
  els.empty.textContent = s.empty;

  const frag = document.createDocumentFragment();
  list.forEach((f) => {
    const p = PREF_BY_JA[f.pref];
    const ja = state.lang === "ja";
    const card = document.createElement("article");
    card.className = "card";

    const top = document.createElement("div");
    top.className = "card-top";

    const h = document.createElement("h2");
    h.textContent = ja ? f.ja : f.en;

    const eatBtn = document.createElement("button");
    eatBtn.type = "button";
    eatBtn.className = "eat-btn";
    updateEatButton(eatBtn, card, eaten.has(f.key));
    eatBtn.addEventListener("click", () => {
      if (eaten.has(f.key)) eaten.delete(f.key);
      else eaten.add(f.key);
      saveEaten();
      updateEatButton(eatBtn, card, eaten.has(f.key));
      refreshAfterToggle();
    });

    top.append(h, eatBtn);

    const alt = document.createElement("p");
    alt.className = "alt";
    alt.textContent = ja ? f.en : f.ja;

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = ja ? f.descJa : f.descEn;

    const foot = document.createElement("div");
    foot.className = "foot";

    const badge = document.createElement("button");
    badge.type = "button";
    badge.className = "badge";
    badge.textContent = prefName(p);
    badge.addEventListener("click", () => {
      state.pref = f.pref;
      state.region = "";
      renderStatic();
      renderResults();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const link = document.createElement("a");
    link.href = "https://www.google.com/search?q=" + encodeURIComponent(`${f.ja} ${f.pref}`);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = s.search + " ↗";

    foot.append(badge, link);
    card.append(top, alt, desc, foot);
    frag.append(card);
  });
  els.results.replaceChildren(frag);
}

// After toggling a dish: update progress and the prefecture dropdown counts
// without re-rendering the card list (keeps scroll position).
function refreshAfterToggle() {
  renderProgress();
  const byPref = eatenCountByPref();
  Array.from(els.pref.options).forEach((o) => {
    if (!o.value) return;
    const p = PREF_BY_JA[o.value];
    o.textContent = `${prefName(p)} (${byPref[p.ja] || 0}/${TOTAL_BY_PREF[p.ja] || 0})`;
  });
  if (state.status) {
    // The toggled card no longer matches the filter; refresh the list.
    renderResults();
  }
}

// ---- Events ----
document.querySelectorAll(".lang-switch button").forEach((b) => {
  b.addEventListener("click", () => {
    state.lang = b.dataset.lang;
    try { localStorage.setItem("lang", state.lang); } catch (e) { /* ignore */ }
    renderStatic();
    renderResults();
  });
});

els.q.addEventListener("input", () => {
  state.q = els.q.value;
  renderResults();
});

els.pref.addEventListener("change", () => {
  state.pref = els.pref.value;
  renderProgress();
  renderResults();
});

els.status.addEventListener("change", () => {
  state.status = els.status.value;
  renderResults();
});

els.clear.addEventListener("click", () => {
  state.q = "";
  state.pref = "";
  state.region = "";
  state.status = "";
  els.q.value = "";
  renderStatic();
  renderResults();
});

els.resetEaten.addEventListener("click", () => {
  if (!eaten.size) return;
  if (!window.confirm(t().resetConfirm)) return;
  eaten = new Set();
  saveEaten();
  renderStatic();
  renderResults();
});

// Keep records in sync across tabs
window.addEventListener("storage", (e) => {
  if (e.key !== STORE_KEY) return;
  try {
    const valid = new Set(foods.map((f) => f.key));
    eaten = new Set(JSON.parse(e.newValue || "[]").filter((k) => valid.has(k)));
    renderStatic();
    renderResults();
  } catch (err) { /* ignore */ }
});

renderStatic();
renderResults();

// Offline support / installable app
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => { /* ignore */ });
}
