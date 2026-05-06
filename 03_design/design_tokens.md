# ALPS LAB デザイントークン

> 🏛️ **SSoT(Single Source of Truth)**:カラー・フォント・余白・アニメーションなどの**全デザイン値の正典**はこのファイル。
> 他のドキュメントでカラーコードやフォント名に言及する場合、このファイルを唯一の真実として参照すること。
> 値変更時はここを更新すれば、`assets/css/tokens.css` も連動する設計。
>
> CSS変数として実装する。
> Coderは`assets/css/tokens.css`としてこの内容を起点にファイル化する。

---

## CSS変数定義(初期案)

```css
:root {
  /* ===== Colors ===== */

  /* Background */
  --color-bg-primary: #0A0A0A;       /* ベース黒 */
  --color-bg-secondary: #1A1A1A;     /* セクション背景 */
  --color-bg-tertiary: #2A2A2A;      /* カード背景・コンポーネント */
  --color-bg-soft: #F5F5F0;          /* 親しみセクション用 */

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #C0C0C0;
  --color-text-muted: #808080;
  --color-text-soft: #1A1A1A;        /* soft背景上のテキスト */

  /* Accent */
  --color-accent-gold: #C8A961;      /* ゴールド(高級感・主要見出し) */
  --color-accent-gold-dim: #8E7745;  /* ゴールド暗め */
  --color-accent-red: #C8302E;       /* 赤(活力・CTA) */
  --color-accent-red-hover: #A82624; /* 赤ホバー時 */

  /* Borders */
  --color-border: #2A2A2A;
  --color-border-soft: #404040;

  /* ===== Typography ===== */

  /* Font Families */
  --font-display: 'Bebas Neue', sans-serif;     /* 大型英語見出し */
  --font-en: 'Inter', sans-serif;                /* 英語本文 */
  --font-jp: 'Noto Sans JP', sans-serif;        /* 日本語全般 */

  /* Font Sizes(rem) */
  --fs-xs: 0.75rem;     /* 12px */
  --fs-sm: 0.875rem;    /* 14px */
  --fs-base: 1rem;      /* 16px */
  --fs-md: 1.125rem;    /* 18px */
  --fs-lg: 1.5rem;      /* 24px */
  --fs-xl: 2rem;        /* 32px */
  --fs-2xl: 3rem;       /* 48px */
  --fs-3xl: 4rem;       /* 64px */
  --fs-4xl: 6rem;       /* 96px(Hero用) */

  /* Line Heights */
  --lh-tight: 1.1;
  --lh-snug: 1.3;
  --lh-normal: 1.5;
  --lh-loose: 1.8;

  /* Font Weights */
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-bold: 700;

  /* ===== Spacing ===== */

  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 2rem;     /* 32px */
  --space-lg: 4rem;     /* 64px */
  --space-xl: 8rem;     /* 128px */
  --space-2xl: 12rem;   /* 192px */

  /* ===== Layout ===== */

  --max-width: 1280px;
  --max-width-narrow: 960px;
  --max-width-text: 720px;

  /* ===== Border Radius ===== */

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 9999px;

  /* ===== Animation ===== */

  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  --duration-fast: 200ms;
  --duration-base: 400ms;
  --duration-slow: 800ms;
  --duration-slower: 1200ms;

  /* ===== Shadows ===== */

  --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.25);
  --shadow-glow-gold: 0 0 24px rgba(200, 169, 97, 0.3);
}
```

---

## カラー使用率の目安(画面占有率)

| 色 | 占有率目安 |
|---|---|
| Black系 | 80~90% |
| White / Gray text | 5~10% |
| Gold accent | 3~5% |
| Red(CTA) | 1~3% |
| Soft white(親しみゾーン) | 必要時のみ |

---

## フォントサイズ運用ルール

### Hero(ファーストビュー)
- 英語キャッチ: `var(--fs-4xl)` (96px) ※デスクトップ時
- 日本語サブ: `var(--fs-xl)` (32px)
- モバイル時: 1段階小さく(英語=64px、日本語=24px)

### Section Heading
- 英語: `var(--fs-3xl)` (64px)
- 日本語: `var(--fs-xl)` (32px)

### Body
- 標準: `var(--fs-base)` (16px)
- 大: `var(--fs-md)` (18px)

### Caption / Small
- `var(--fs-sm)` (14px) 〜 `var(--fs-xs)` (12px)

---

## 色のコントラスト比(WCAG AA準拠)

- 白テキスト on 黒背景: コントラスト比 約 17:1(AAA)
- ゴールド on 黒背景: コントラスト比 約 5.5:1(AA)
- 赤 on 黒背景: コントラスト比 約 4.5:1(AA ぎりぎり、CTAは枠線か影で強化)
- 黒テキスト on Soft White: コントラスト比 約 14:1(AAA)
