/* LI HE PING resume — home interactions */
(function () {
  /* shared language preference and links */
  const requestedLanguage = new URLSearchParams(location.search).get("lang");
  let savedLanguage;
  try { savedLanguage = localStorage.getItem("resume-language"); } catch (_) {}
  const language = [requestedLanguage, savedLanguage].find((value) => value === "zh" || value === "en") || "zh";
  try { localStorage.setItem("resume-language", language); } catch (_) {}
  const text = (zh, en) => language === "en" ? en : zh;
  const href = (relative) => {
    const url = new URL(relative, location.href);
    url.searchParams.set("lang", language);
    return `${url.pathname}${url.search}${url.hash}`;
  };
  window.resumeI18n = { language, text, href };
  document.documentElement.lang = text("zh-CN", "en");
  if (language === "en") {
    document.querySelectorAll("[data-en]").forEach((element) => {
      element.innerHTML = element.dataset.en;
    });
    ["alt", "aria-label", "content"].forEach((attribute) => {
      document.querySelectorAll(`[data-en-${attribute}]`).forEach((element) => {
        element.setAttribute(attribute, element.getAttribute(`data-en-${attribute}`));
      });
    });
  }
  document.querySelectorAll(".language-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = text("en", "zh");
      try { localStorage.setItem("resume-language", nextLanguage); } catch (_) {}
      const url = new URL(location.href);
      url.searchParams.set("lang", nextLanguage);
      location.assign(url.href);
    });
  });
  document.querySelectorAll("a[href], .project-card[data-href]").forEach((element) => {
    const attribute = element.hasAttribute("data-href") ? "data-href" : "href";
    const relative = element.getAttribute(attribute);
    const url = new URL(relative, location.href);
    if (url.origin === location.origin && (relative.startsWith("#") || /\/(index|project)\.html$/.test(url.pathname))) {
      element.setAttribute(attribute, href(relative));
    }
  });
  if (document.querySelector("#project-root")) return;

  document.documentElement.classList.add("js");

  /* sticky header state */
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-stuck", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* reveal on scroll */
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* whole project card opens its case file (but not when clicking real links) */
  document.querySelectorAll(".project-card[data-href]").forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", text("进入项目档案", "Open project details"));
    const open = () => { window.location.href = card.dataset.href; };
    card.addEventListener("click", (event) => {
      if (!event.target.closest("a")) open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
})();
