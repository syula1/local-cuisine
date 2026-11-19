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
    subtitle: "文化庁「100年フード」認定の郷土料理を都道府県別に探す",
    placeholder: "料理名・説明で検索（日本語/English）",
    allPrefs: "すべての都道府県",
    allRegions: "全国",
    clear: "クリア",
    count: (n, total) => `${n}件を表示（全${total}件）`,
    empty: "該当する料理が見つかりませんでした。",
    search: "検索",
    source: "出典：「100年フード」都道府県別一覧（文化庁）。説明文は簡易的なもので、不確かな項目は一般的な表現にとどめています。",
    docTitle: "Local Cuisine | 100年フード検索",
  },
  en: {
    title: "Local Cuisine",
    subtitle: "Browse Japan's certified \"100-Year Food\" regional dishes by prefecture",
    placeholder: "Search by dish name or description (English / 日本語)",
    allPrefs: "All prefectures",
    allRegions: "All Japan",
    clear: "Clear",
    count: (n, total) => `Showing ${n} of ${total} dishes`,
    empty: "No dishes matched your search.",
    search: "Search",
    source: "Source: \"100-Year Food\" list by prefecture (Agency for Cultural Affairs). Descriptions are brief summaries; uncertain items are kept generic.",
    docTitle: "Local Cuisine | 100-Year Food Finder",
  },
};

// ---- State ----
const state = { lang: "ja", q: "", pref: "", region: "" };

try {
  const saved = localStorage.getItem("lang");
  if (saved === "ja" || saved === "en") state.lang = saved;
  else if (!navigator.language.toLowerCase().startsWith("ja")) state.lang = "en";
} catch (e) {
  /* storage may be unavailable */
}

const $ = (id) => document.getElementById(id);
const els = {
  title: $("title"), subtitle: $("subtitle"), q: $("q"), pref: $("pref"),
  clear: $("clear"), regions: $("regions"), count: $("count"),
  results: $("results"), empty: $("empty"), source: $("source"),
};

const foods = FOODS.map(([pref, ja, descJa, en, descEn]) => ({
  pref, ja, descJa, en, descEn,
  haystack: [pref, PREF_BY_JA[pref].en, ja, descJa, en, descEn].join(" ").toLowerCase(),
}));

// ---- Rendering ----
function t() { return I18N[state.lang]; }
function prefName(p) { return state.lang === "ja" ? p.ja : p.en; }

function renderStatic() {
  const s = t();
  document.documentElement.lang = state.lang;
  document.title = s.docTitle;
  els.title.textContent = s.title;
  els.subtitle.textContent = s.subtitle;
  els.q.placeholder = s.placeholder;
  els.clear.textContent = s.clear;
  els.source.textContent = s.source;

  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang));
  });

  // Prefecture select (limited to the active region)
  els.pref.innerHTML = "";
  els.pref.append(new Option(s.allPrefs, ""));
  const counts = {};
  foods.forEach((f) => { counts[f.pref] = (counts[f.pref] || 0) + 1; });
  PREFS.filter((p) => !state.region || p.region === state.region).forEach((p) => {
    els.pref.append(new Option(`${prefName(p)} (${counts[p.ja] || 0})`, p.ja));
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
}

function renderResults() {
  const s = t();
  const terms = state.q.trim().toLowerCase().split(/\s+/).filter(Boolean);

  const list = foods
    .filter((f) => {
      const p = PREF_BY_JA[f.pref];
      if (state.pref && f.pref !== state.pref) return false;
      if (state.region && p.region !== state.region) return false;
      return terms.every((w) => f.haystack.includes(w));
    })
    .sort((a, b) => PREF_BY_JA[a.pref].order - PREF_BY_JA[b.pref].order);

  els.count.textContent = s.count(list.length, foods.length);
  els.empty.hidden = list.length > 0;
  els.empty.textContent = s.empty;

  const frag = document.createDocumentFragment();
  list.forEach((f) => {
    const p = PREF_BY_JA[f.pref];
    const ja = state.lang === "ja";
    const card = document.createElement("article");
    card.className = "card";

    const h = document.createElement("h2");
    h.textContent = ja ? f.ja : f.en;

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
    card.append(h, alt, desc, foot);
    frag.append(card);
  });
  els.results.replaceChildren(frag);
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
  renderResults();
});

els.clear.addEventListener("click", () => {
  state.q = "";
  state.pref = "";
  state.region = "";
  els.q.value = "";
  renderStatic();
  renderResults();
});

renderStatic();
renderResults();
