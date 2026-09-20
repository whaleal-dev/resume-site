/* LI HE PING resume — home interactions */
(function () {
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
    card.setAttribute("aria-label", "进入项目档案");
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
