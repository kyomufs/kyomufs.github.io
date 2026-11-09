/* kyomufs.github.io — bilingual single page with Material 3 Expressive.
   Компоненты: @m3e/web (Connected Button Groups, Cards, Badges, Tooltips).
   Интерактив: Obsidian Force Graph, 3D Tilt Stickers, Bento Grid. */

import { SkillsGraph } from "./graph.js";
import { SKILLS_DATA } from "./data/skills.js";

const I18N = {
  en: {
    "meta.title": "Matvey Samodurov — kyomufs",
    "meta.desc": "Applied Informatics student, NixOS user, Go and TypeScript developer. Local-first AI tooling, Wayland desktops and reproducible infrastructure.",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.first": "Matvey",
    "hero.last": "Samodurov",
    "hero.eyebrow": "Applied Informatics · Tula State University",
    "hero.lead": "I build tooling where infrastructure meets AI — reproducible systems, local-first services and interfaces that stay out of the way.",
    "hero.ctaProjects": "View projects",
    "hero.metaLocation": "Tula, Russia",
    "hero.metaYear": "3rd year · TSU",
    "hero.metaStatus": "Open to internships",
    "hero.avatarRole": "systems · tooling · AI",
    "about.title": "About",
    "about.p1": "Third-year student of Applied Informatics at Tula State University, specializing in intelligent and domain-oriented automated systems.",
    "about.p2": "I tackle problems at the intersection of machines and humans: infrastructure rebuildable from a single file, tooling that keeps data where it belongs, and interfaces that stay out of the way. Almost everything I build starts because something annoyed me.",
    "about.p3": "I love Linux and NixOS for declarative configuration, predictability, and reproducibility. Material 3 Expressive is my favorite design system — fluid spring motion, tactile shapes, and expressive components instead of bland uniformity. I value open source and transparent software.",
    "about.educationLabel": "Education",
    "about.university": "Tula State University",
    "about.program": "Applied Informatics · 09.03.03",
    "about.profile": "Intelligent and Domain-Oriented Automated Systems",
    "about.year": "3rd year · 2023 — 2027",
    "skills.title": "Skills",
    "skills.viewGraph": "Graph",
    "skills.viewCards": "Cards",
    "skills.graphHint": "Drag nodes · Hover to trace dependencies",
    "projects.title": "Projects",
    "projects.all": "All repositories on GitHub",
    "projects.allFilter": "All",
    "projects.filterLabel": "Filter projects by language",
    "ui.langLabel": "Language",
    "ui.themeTip": "Switch theme",
    "ui.toTop": "Back to top",
    "contact.title": "Contact",
    "contact.text": "The fastest way to reach me is GitHub. Issues, discussions and pull requests are all welcome.",
    "footer.built": "Built with plain HTML, CSS and a little JavaScript."
  },
  ru: {
    "meta.title": "Матвей Самодуров — kyomufs",
    "meta.desc": "Студент «Прикладной информатики», NixOS, Go и TypeScript. Локальные AI-инструменты, Wayland-окружения и воспроизводимая инфраструктура.",
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",
    "hero.first": "Матвей",
    "hero.last": "Самодуров",
    "hero.eyebrow": "Прикладная информатика · ТулГУ",
    "hero.lead": "Делаю инструменты на стыке инфраструктуры и AI: воспроизводимые системы, локальные сервисы и интерфейсы, которые не мешают работать.",
    "hero.ctaProjects": "Смотреть проекты",
    "hero.metaLocation": "Тула, Россия",
    "hero.metaYear": "3 курс · ТулГУ",
    "hero.metaStatus": "Открыт к стажировкам",
    "hero.avatarRole": "системы · инструменты · AI",
    "about.title": "Обо мне",
    "about.p1": "Студент третьего курса «Прикладной информатики» Тульского государственного университета, профиль «Интеллектуальные и предметно-ориентированные автоматизированные системы».",
    "about.p2": "Берусь за задачи на стыке машины и человека: инфраструктура, которая пересобирается из одного файла, инструменты, которые держат данные там, откуда они пришли, интерфейсы, которые не мешают. Почти всё, что я выпускаю, начинается с того, что меня что-то раздражало.",
    "about.p3": "Люблю Linux и NixOS за декларативность, повторяемость и воспроизводимость. Material 3 Expressive — мой любимый дизайн: выразительные формы, пружинная физика и тактильный отклик вместо монотонности. Искренне ценю open source и открытость решений.",
    "about.educationLabel": "Образование",
    "about.university": "Тульский государственный университет",
    "about.program": "Прикладная информатика · 09.03.03",
    "about.profile": "Интеллектуальные и предметно-ориентированные автоматизированные системы",
    "about.year": "3 курс · 2023 — 2027",
    "skills.title": "Навыки",
    "skills.viewGraph": "Граф",
    "skills.viewCards": "Категории",
    "skills.graphHint": "Тяни узлы · Наведи курсор для связей",
    "projects.title": "Проекты",
    "projects.all": "Все репозитории на GitHub",
    "projects.allFilter": "Все",
    "projects.filterLabel": "Фильтр проектов по языку",
    "ui.langLabel": "Язык",
    "ui.themeTip": "Сменить тему",
    "ui.toTop": "Наверх",
    "contact.title": "Контакты",
    "contact.text": "Быстрее всего связаться через GitHub: issues, discussions и pull requests открыты.",
    "footer.built": "Сделано на чистом HTML, CSS и небольшом количестве JavaScript."
  }
};

const SKILLS = SKILLS_DATA;

const PROJECTS = [
  {
    name: "tulgusch",
    lang: "Dart",
    color: "#00B4AB",
    url: "https://github.com/kyomufs/tulgusch",
    badge: "M3E Mobile App",
    isFlagship: true,
    colSpan: "bento-col-8",
    en: "Tulgusch — a Material 3 Expressive schedule, grade journal and deadlines companion for Android and iOS, shipped through CI-built releases.",
    ru: "Tulgusch — расписание, журнал оценок и дедлайны в Material 3 Expressive для Android и iOS, релизы собираются в CI."
  },
  {
    name: "free-ai-router",
    lang: "Go",
    color: "#00ADD8",
    url: "https://github.com/kyomufs/free-ai-router",
    badge: "OpenAI Gateway",
    colSpan: "bento-col-4",
    en: "OpenAI-compatible gateway for free AI providers: one local endpoint, many services, each spoken to the way its own client speaks.",
    ru: "OpenAI-совместимый шлюз к бесплатным AI-провайдерам: одна локальная точка входа, много сервисов, каждый — на своём протоколе."
  },
  {
    name: "proxprobe",
    lang: "Go",
    color: "#00ADD8",
    url: "https://github.com/kyomufs/proxprobe",
    badge: "Clash / miHoMo",
    colSpan: "bento-col-4",
    en: "Collects servers from proxy subscriptions, probes them through mihomo and exports a ready-to-use Clash profile.",
    ru: "Собирает серверы из прокси-подписок, проверяет их через mihomo и выгружает готовый Clash-профиль."
  },
  {
    name: "dsh-md3-theme",
    lang: "JavaScript",
    color: "#f1e05a",
    url: "https://github.com/kyomufs/dsh-md3-theme",
    badge: "HCT Palettes",
    colSpan: "bento-col-4",
    en: "Material Design 3 theme for DeepSeek Harness: HCT-generated light and dark palettes with seven accent presets, applied through the theme token layer.",
    ru: "Тема Material Design 3 для DeepSeek Harness: светлые и тёмные палитры на HCT, семь акцентов, подключение через слой токенов."
  },
  {
    name: "dsh-home-guard",
    lang: "JavaScript",
    color: "#f1e05a",
    url: "https://github.com/kyomufs/dsh-home-guard",
    badge: "Session Guard",
    colSpan: "bento-col-4",
    en: "Home structure map, session archive and delete, cleanup rules, purge timer and audit log for DeepSeek Harness, with a settings tab.",
    ru: "Карта домашнего каталога, архивация и удаление сессий, правила очистки, таймер и аудит для DeepSeek Harness, плюс вкладка настроек."
  },
  {
    name: "free-ai-router-dshplugin",
    lang: "JavaScript",
    color: "#f1e05a",
    url: "https://github.com/kyomufs/free-ai-router-dshplugin",
    badge: "DSH Plugin Hook",
    colSpan: "bento-col-12",
    en: "DeepSeek Harness plugin that exposes every provider served by the local free-ai-router daemon as its own route.",
    ru: "Плагин DeepSeek Harness: каждый провайдер локального демона free-ai-router становится отдельным маршрутом."
  }
];

const state = {
  lang: localStorage.getItem("kyomufs.lang") || (navigator.language.startsWith("ru") ? "ru" : "en"),
  theme: document.documentElement.dataset.theme || "dark",
  filter: "all",
  skillsView: "graph"
};

const $ = (sel) => document.querySelector(sel);
const themeEl = $("#theme");
let skillsGraphInstance = null;

function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("kyomufs.lang", lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];

  document.title = dict["meta.title"];
  document.querySelector('meta[name="description"]').setAttribute("content", dict["meta.desc"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Sync connected button group for language
  const langGroup = $("#langGroup");
  if (langGroup) {
    langGroup.setAttribute("aria-label", dict["ui.langLabel"]);
    langGroup.querySelectorAll("m3e-button").forEach((btn) => {
      btn.selected = btn.value === lang;
    });
  }

  const themeBtn = $("#themeBtn");
  if (themeBtn) themeBtn.setAttribute("aria-label", dict["ui.themeTip"]);
  const themeTip = $("#themeTip");
  if (themeTip) themeTip.textContent = dict["ui.themeTip"];

  const toTop = $("#toTop");
  if (toTop) toTop.setAttribute("aria-label", dict["ui.toTop"]);
  const toTopTip = $("#toTopTip");
  if (toTopTip) toTopTip.textContent = dict["ui.toTop"];

  renderSkillsCards();
  renderProjects();
}

function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem("kyomufs.theme", theme);
  document.documentElement.dataset.theme = theme;
  themeEl.scheme = theme;
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#0d0e12" : "#faf9fe");

  const icon = $("#themeBtn m3e-icon");
  if (icon) icon.name = theme === "dark" ? "dark_mode" : "light_mode";
}

function renderSkillsCards() {
  const grid = $("#skillsGrid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map((group, index) => `
    <m3e-card class="skill${index === 0 ? " skill--lead" : ""}" variant="filled">
      <div slot="content">
        <h3 class="skill__title">
          <span class="skill__badge"><m3e-icon name="${group.icon}"></m3e-icon></span>
          ${group[state.lang]}
          <span class="skill__count">${group.items.length}</span>
        </h3>
        <div class="skill__chips">
          ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
      </div>
    </m3e-card>
  `).join("");
}

function renderProjects() {
  const grid = $("#projectsGrid");
  if (!grid) return;
  const visible = state.filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.lang === state.filter);

  grid.innerHTML = visible.map((project) => {
    const isFlagship = project.isFlagship && state.filter === "all";
    const colClass = isFlagship ? "bento-col-8" : (state.filter === "all" ? project.colSpan : "bento-col-6");

    let microWidget = "";
    if (project.name === "tulgusch") {
      microWidget = `
        <div class="bento-mockup">
          <div class="bento-mockup__row">
            <span class="bento-pill"><m3e-icon name="schedule"></m3e-icon> 10:10 · ИПОАС</span>
            <span class="bento-pill bento-pill--grade"><m3e-icon name="grade"></m3e-icon> 5.0 · Отлично</span>
          </div>
          <div class="bento-mockup__row">
            <span style="font-size:0.8rem; font-family:var(--mono); opacity:0.85;">Лабораторная №4 · Завтра 23:59</span>
            <m3e-badge size="small" style="--m3e-badge-container-color:#4ade80;"></m3e-badge>
          </div>
        </div>
      `;
    } else if (project.name === "free-ai-router") {
      microWidget = `
        <div class="pipeline-flow">
          <span class="pipeline-node">Client</span>
          <span class="pipeline-arrow">➔</span>
          <span class="pipeline-node">:8080</span>
          <span class="pipeline-arrow">➔</span>
          <span class="pipeline-node" style="color:var(--md-sys-color-tertiary);">AI Hub</span>
        </div>
      `;
    } else if (project.name === "proxprobe") {
      microWidget = `
        <div class="probe-bars">
          <div class="probe-bar"><span>HK-01 (Mihomo)</span><span class="probe-status">38ms [OK]</span></div>
          <div class="probe-bar"><span>JP-02 (Clash)</span><span class="probe-status">62ms [OK]</span></div>
        </div>
      `;
    } else if (project.name === "dsh-md3-theme") {
      microWidget = `
        <div class="theme-dots">
          <span class="theme-dot" style="background:#7aa2f7;"></span>
          <span class="theme-dot" style="background:#bb9af7;"></span>
          <span class="theme-dot" style="background:#7dcfff;"></span>
          <span class="theme-dot" style="background:#73daca;"></span>
          <span class="theme-dot" style="background:#ff9e64;"></span>
          <span class="theme-dot" style="background:#f7768e;"></span>
          <span style="font-size:0.75rem; font-family:var(--mono); margin-left:6px; opacity:0.75;">7 Presets</span>
        </div>
      `;
    }

    return `
    <div class="bento__item ${colClass}">
      <a class="project-link" href="${project.url}" target="_blank" rel="noopener">
        <m3e-card class="project${isFlagship ? " project--flagship" : ""}" variant="${isFlagship ? "filled" : "outlined"}">
          <div slot="content" class="project__inner">
            <div class="project__top">
              <div class="project__title-group">
                <h3 class="project__name">${project.name}</h3>
                <div class="project__badge-row">
                  <span class="project-sticker">${project.badge}</span>
                </div>
              </div>
              <m3e-icon class="project__arrow" name="arrow_outward"></m3e-icon>
            </div>
            
            <p class="project__desc">${project[state.lang]}</p>
            
            ${microWidget}
            
            <div class="project__foot">
              <span class="project__lang">
                <span class="lang-dot" style="background:${project.color}"></span>
                ${project.lang}
              </span>
              <span class="project__stars" data-repo="${project.name}">
                <m3e-icon name="star"></m3e-icon>
                <m3e-loading-indicator class="star-loader"></m3e-loading-indicator>
                <span class="project__stars-count"></span>
              </span>
            </div>
          </div>
        </m3e-card>
      </a>
    </div>
  `;
  }).join("");

  hydrateStars();
}

/* Звёзды кешируются на сессию */
const STARS = new Map();

function paintStars(node, name) {
  const loader = node.querySelector(".star-loader");
  const count = node.querySelector(".project__stars-count");
  if (loader) loader.remove();
  if (count) count.textContent = STARS.get(name);
}

async function hydrateStars() {
  await Promise.all(PROJECTS.map(async (project) => {
    const node = document.querySelector(`[data-repo="${project.name}"]`);
    if (!node) return;
    if (STARS.has(project.name)) {
      paintStars(node, project.name);
      return;
    }
    try {
      const res = await fetch(`https://api.github.com/repos/kyomufs/${project.name}`, { headers: { Accept: "application/vnd.github+json" } });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      STARS.set(project.name, String(data.stargazers_count));
    } catch {
      STARS.set(project.name, "—");
    }
    if (node.isConnected) paintStars(node, project.name);
  }));
}

function setupStickerTilt() {
  const stickers = document.querySelectorAll(".sticker");
  stickers.forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;

      const rx = (-dy * 12).toFixed(2);
      const ry = (dx * 12).toFixed(2);
      const rot = el.style.getPropertyValue("--sticker-rot") || "0deg";

      el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px) scale(1.08) rotate(${rot})`;
      el.style.boxShadow = `${-ry * 1.2}px ${Number(rx) + 12}px 20px rgba(0,0,0,0.3)`;
    });

    el.addEventListener("pointerleave", () => {
      const rot = el.style.getPropertyValue("--sticker-rot") || "0deg";
      el.style.transform = `rotate(${rot})`;
      el.style.boxShadow = "";
    });
  });
}

function setupSkillsViewToggle() {
  const toggle = $("#skillsViewToggle");
  const graphWrap = $("#skillsGraphContainer");
  const grid = $("#skillsGrid");
  if (!toggle) return;

  toggle.addEventListener("click", (e) => {
    const btn = e.target.closest("m3e-button");
    if (!btn) return;
    toggle.querySelectorAll("m3e-button").forEach((b) => (b.selected = b === btn));
    const val = btn.value;
    state.skillsView = val;

    if (val === "graph") {
      graphWrap.style.display = "block";
      grid.style.display = "none";
      if (skillsGraphInstance) skillsGraphInstance.resize();
    } else {
      graphWrap.style.display = "none";
      grid.style.display = "grid";
    }
  });
}

function setupButtonGroups() {
  // 1. Language Button Group
  const langGroup = $("#langGroup");
  if (langGroup) {
    langGroup.addEventListener("click", (e) => {
      const btn = e.target.closest("m3e-button");
      if (!btn) return;
      langGroup.querySelectorAll("m3e-button").forEach((b) => (b.selected = b === btn));
      const val = btn.value;
      if (val && val !== state.lang) applyLanguage(val);
    });
  }

  // 2. Project Filters Button Group
  const projectFilters = $("#projectFilters");
  if (projectFilters) {
    projectFilters.addEventListener("click", (e) => {
      const btn = e.target.closest("m3e-button");
      if (!btn) return;
      projectFilters.querySelectorAll("m3e-button").forEach((b) => (b.selected = b === btn));
      const val = btn.value;
      if (val && val !== state.filter) {
        state.filter = val;
        renderProjects();
      }
    });
  }
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  items.forEach((el) => observer.observe(el));
}

function setupNav() {
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const brand = $("#brandBtn");
  if (brand) {
    brand.addEventListener("click", (e) => {
      e.preventDefault();
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
  }

  const links = Array.from(document.querySelectorAll(".nav__links a"));
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.removeAttribute("aria-current"));
      const active = links.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
      if (active) active.setAttribute("aria-current", "page");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((section) => spy.observe(section));
}

function setupFab() {
  const fab = $("#toTop");
  const onScroll = () => fab.classList.toggle("is-shown", window.scrollY > 600);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  fab.addEventListener("click", () => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
}

function initGraph() {
  const canvas = $("#skillsGraph");
  const wrap = $("#skillsGraphContainer");
  if (!canvas || !wrap) return;

  const getThemeColors = () => {
    const isDark = state.theme === "dark";
    return { isDark };
  };

  skillsGraphInstance = new SkillsGraph(canvas, wrap, getThemeColors);
}

function setupTerminalTabs() {
  const tabs = document.querySelectorAll(".terminal__tab");
  const panes = document.querySelectorAll(".terminal__pane");
  const copyBtn = $("#termCopyBtn");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const paneId = tab.dataset.pane;
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      panes.forEach((p) => p.classList.toggle("is-active", p.id === `pane-${paneId}`));
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const activePane = document.querySelector(".terminal__pane.is-active");
      if (!activePane) return;
      try {
        await navigator.clipboard.writeText(activePane.innerText);
        const icon = copyBtn.querySelector("m3e-icon");
        if (icon) icon.name = "check";
        setTimeout(() => { if (icon) icon.name = "content_copy"; }, 1500);
      } catch (e) {}
    });
  }
}

function setupTerminalCLI() {
  const input = $("#termInput");
  const output = $("#termOutput");
  if (!input || !output) return;

  const commands = {
    help: () => `Available commands:
  whoami   - student profile & specializations
  skills   - quick competencies overview
  projects - list of highlighted projects
  matrix   - 01001000 01101001 00100001
  sudo     - run superuser command
  clear    - clear this output`,
    whoami: () => "Linux · Wayland · Open Source · AI · 3 курс · ТулГУ · Открыт к стажировкам · M3 Expressive · SystemsDev",
    skills: () => {
      const isRu = state.lang === "ru";
      return SKILLS_DATA.map(cat => {
        const title = isRu ? cat.ru : cat.en;
        return `${title}:\n  ${cat.items.join(" · ")}`;
      }).join("\n\n");
    },
    projects: () => "tulgusch, free-ai-router, proxprobe, dsh-md3-theme, dsh-home-guard, free-ai-router-dshplugin",
    matrix: () => `Wake up, Neo...
The Matrix has you.
Follow the white rabbit. 🐇
01001011 01111001 01101111 01101101 01110101 01100110 01110011`,
    sudo: () => "Permission denied: /nix/store is immutable & read-only on NixOS ❄️",
    clear: () => { output.innerHTML = ""; return ""; }
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value.trim().toLowerCase();
      input.value = "";
      if (!val) return;

      const [cmd, ...args] = val.split(" ");
      if (cmd === "clear") {
        output.innerHTML = "";
        return;
      }

      const handler = commands[cmd];
      let res = "";
      if (handler) {
        res = handler(args);
      } else {
        res = `zsh: command not found: ${cmd}. Type 'help' for available commands.`;
      }

      if (res) {
        output.innerHTML = `<span style="color:var(--md-sys-color-primary); font-weight:600;">$ ${cmd}</span>\n${res}`;
      }
    }
  });
}

function init() {
  applyTheme(state.theme);
  applyLanguage(state.lang);
  setupReveal();
  setupNav();
  setupFab();
  setupStickerTilt();
  setupSkillsViewToggle();
  setupButtonGroups();
  setupTerminalTabs();
  setupTerminalCLI();
  initGraph();

  $("#year").textContent = String(new Date().getFullYear());
  $("#themeBtn").addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
}

// Start once DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
