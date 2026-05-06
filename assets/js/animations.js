/* =========================================================================
   animations.js — GSAP / ScrollTrigger によるアニメーション定義
   - prefers-reduced-motion: reduce 環境では全アニメ無効
   - GSAP が読み込まれていない場合は何もしない(ページは動く)
   ========================================================================= */

window.addEventListener("load", () => {
  if (!window.gsap) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return;

  // ScrollTrigger 登録
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ----- ヘッダー背景フェード(scrollY > 80 で is-scrolled クラス) ----- */
  if (window.ScrollTrigger) {
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: { className: "is-scrolled", targets: ".header" },
    });
  }

  /* ----- 共通 .fade-up: 下から24pxスライド+フェードイン ----- */
  if (window.ScrollTrigger) {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });
  }

  /* ----- ページごとの追加アニメーション(data-page 属性で判別) ----- */
  const page = document.body.dataset.page;

  // TOP: Hero タイムライン
  if (page === "top") {
    const heroTL = gsap.timeline();
    heroTL
      .from(".hero__separator", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        ".hero__chapter",
        {
          opacity: 0,
          y: 8,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".hero__title",
        {
          opacity: 0,
          scale: 0.98,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        ".hero__subtitle",
        {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        ".hero__center .cta-btn",
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "back.out(1.4)",
        },
        "-=0.2"
      )
      .from(
        ".hero__index, .hero__scroll, .hero__coord",
        {
          opacity: 0,
          y: 8,
          duration: 0.6,
          stagger: 0.05,
        },
        "-=0.2"
      );
  }

  // GYM: Hero タイムライン
  if (page === "gym") {
    const tl = gsap.timeline();
    tl.from(".hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(
        ".hero__title-jp",
        { opacity: 0, y: 16, duration: 0.6 },
        "-=0.4"
      )
      .from(
        ".hero__title-en",
        { opacity: 0, y: 16, duration: 0.6 },
        "-=0.4"
      )
      .from(".hero__lead", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
      .from(
        ".hero .cta-btn",
        { opacity: 0, y: 16, duration: 0.5, ease: "back.out(1.4)" },
        "-=0.3"
      )
      .from(".hero__bottom", { opacity: 0, y: 8, duration: 0.5 }, "-=0.2");
  }

  // ABOUT: Hero タイムライン+背景画像のゆっくりズーム
  if (page === "about") {
    gsap.from(".hero__media", {
      scale: 1.05,
      duration: 2,
      ease: "power2.out",
    });
    const tl = gsap.timeline();
    tl.from(".hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(".hero__title", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
      .from(".hero__sub", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
      .from(".hero__bottom", { opacity: 0, y: 8, duration: 0.5 }, "-=0.2");
  }

  // SERVICES (一覧): Hero stagger フェード
  if (page === "services") {
    const tl = gsap.timeline();
    tl.from(".hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(".hero__title", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
      .from(".hero__sub", { opacity: 0, y: 8, duration: 0.5 }, "-=0.4")
      .from(".hero__lead", { opacity: 0, y: 8, duration: 0.5 }, "-=0.3")
      .from(".hero__scroll-cue", { opacity: 0, duration: 0.6 }, "-=0.2");
  }

  // NUTRITION / FOODS / SUPPLEMENTS: 共通 sub-hero タイムライン
  if (page === "nutrition" || page === "foods" || page === "supplements") {
    gsap.from(".sub-hero__media", {
      scale: 1.06,
      duration: 2.4,
      ease: "power2.out",
    });
    const tl = gsap.timeline();
    tl.from(".sub-hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(".sub-hero__title-jp", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
      .from(".sub-hero__title-en", { opacity: 0, y: 12, duration: 0.6 }, "-=0.4")
      .from(".sub-hero__lead", { opacity: 0, y: 8, duration: 0.5 }, "-=0.3");
  }

  // STORES: Hero
  if (page === "stores") {
    gsap.from(".stores-hero__media", {
      scale: 1.05,
      duration: 2,
      ease: "power2.out",
    });
    const tl = gsap.timeline();
    tl.from(".stores-hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(".stores-hero__title", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
      .from(".stores-hero__sub", { opacity: 0, y: 8, duration: 0.5 }, "-=0.4")
      .from(".stores-hero__bottom", { opacity: 0, y: 8, duration: 0.5 }, "-=0.2");
  }

  // STORIES: Hero (soft背景)
  if (page === "stories") {
    const tl = gsap.timeline();
    tl.from(".stories-hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(".stories-hero__title", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
      .from(".stories-hero__sub", { opacity: 0, y: 8, duration: 0.5 }, "-=0.4");
  }

  // RECRUIT: Hero
  if (page === "recruit") {
    gsap.from(".recruit-hero__media", {
      scale: 1.06,
      duration: 2.4,
      ease: "power2.out",
    });
    const tl = gsap.timeline();
    tl.from(".recruit-hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(".recruit-hero__title-jp", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
      .from(".recruit-hero__title-en", { opacity: 0, y: 12, duration: 0.6 }, "-=0.4")
      .from(".recruit-hero__lead", { opacity: 0, y: 8, duration: 0.5 }, "-=0.3");
  }

  // COMPANY: Hero(控えめ)
  if (page === "company") {
    const tl = gsap.timeline();
    tl.from(".company-hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(".company-hero__title", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
      .from(".company-hero__sub", { opacity: 0, y: 8, duration: 0.5 }, "-=0.4");
  }

  // CONTACT: Hero
  if (page === "contact") {
    const tl = gsap.timeline();
    tl.from(".contact-hero__chapter", {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.8,
    })
      .from(".contact-hero__title", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
      .from(".contact-hero__sub", { opacity: 0, y: 8, duration: 0.5 }, "-=0.4")
      .from(".contact-hero__lead", { opacity: 0, y: 8, duration: 0.5 }, "-=0.3");

    // フォーム要素のスクロールフェードイン(stagger)
    if (window.ScrollTrigger) {
      gsap.from(".contact-form .contact-form__group", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 90%",
        },
      });
    }
  }

  // THANKS は CSS keyframe でフェードイン処理済み
});
