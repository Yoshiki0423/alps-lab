/* =========================================================================
   main.js — 全ページ共通の初期化処理
   - no-js クラスの除去
   - ハンバーガーメニュー(モバイル)
   - Header スクロール検知(GSAP 不在時のフォールバック)
   ========================================================================= */

(function () {
  "use strict";

  // 1) no-js → js への切替(JS が動いていることをCSS側で利用可能に)
  document.documentElement.classList.remove("no-js");
  document.body.classList.remove("no-js");

  // 2) ハンバーガーメニュー
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // メニュー内リンクをクリックしたら閉じる
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      });
    });

    // Esc で閉じる
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        hamburger.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        hamburger.focus();
      }
    });
  }

  // 3) Header スクロール検知(GSAP が読み込まれていない場合のフォールバック)
  //    GSAP 版は animations.js 側で ScrollTrigger により制御するが、
  //    GSAP が失敗した場合でも基本動作するように Vanilla 実装を残す。
  const header = document.querySelector(".header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
