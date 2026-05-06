/* =========================================================================
   stories-filter.js — STORIESページ専用
   - カテゴリフィルター(ALL / VOICE / COLUMN / NEWS)
   - 各記事カードクリックで「近日公開予定」トースト表示
   ========================================================================= */

(function () {
  "use strict";

  /* ----- 1) フィルター ----- */
  const filterBtns = document.querySelectorAll(".stories-filter__btn");
  const cards = document.querySelectorAll(".story-card");

  if (filterBtns.length && cards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        // 押下状態の切替
        filterBtns.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });

        // カード表示制御(opacity → display で 200ms フェード)
        cards.forEach((card) => {
          const matches = filter === "all" || card.dataset.cat === filter;
          if (matches) {
            card.style.display = "";
            requestAnimationFrame(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            });
          } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(8px)";
            setTimeout(() => {
              if (!matches) card.style.display = "none";
            }, 200);
          }
        });
      });
    });
  }

  /* ----- 2) 記事クリック → 近日公開トースト ----- */
  const toast = document.getElementById("storyToast");
  let toastTimer = null;

  document.querySelectorAll("[data-coming-soon]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (!toast) return;

      toast.hidden = false;
      toast.classList.add("is-visible");

      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove("is-visible");
        // 完全に消えてから hidden に
        setTimeout(() => { toast.hidden = true; }, 300);
      }, 2000);
    });
  });
})();
