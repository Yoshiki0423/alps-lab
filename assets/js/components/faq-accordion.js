/* =========================================================================
   faq-accordion.js — FAQ アコーディオン
   - .faq-item__q クリックで .faq-item に is-open を付与
   - aria-expanded を同期
   - max-height のトランジションは CSS 側で実装
   ========================================================================= */

(function () {
  "use strict";

  const buttons = document.querySelectorAll(".faq-item__q");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      if (!item) return;
      const isOpen = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });
})();
