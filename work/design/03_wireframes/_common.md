# 共通要素 詳細ワイヤーフレーム

> 全11ページに共通するヘッダー・フッター・Final CTA の詳細仕様。
> Coder はこのファイルを最初に実装し、各ページで再利用する。

---

## 共通方針

- 雰囲気: ストイック(全ページ統一)
- 主要色: ベース黒+ゴールド罫線+赤(CTA時のみ)
- アニメーション: ヘッダーのスクロール連動・CTAホバーの控えめ強調
- 参考サイトとの関連: Phive Clubs(ヘッダーフェード)、Snow Peak(フッター品格)

---

## Section 共通: Header(全ページ固定)

### 構成図

```
┌────────────────────────────────────────────────────────────────┐
│ [ALPS LAB]    ABOUT  SERVICES▾  STORES  STORIES  RECRUIT  [体験予約 →] │
└────────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 高さ | 80px(Desktop) / 60px(Mobile) |
| 位置 | `position: fixed; top: 0; left: 0; right: 0; z-index: var(--z-header);` |
| 背景(初期) | `transparent` |
| 背景(スクロール後) | `rgba(10, 10, 10, 0.92)` + `backdrop-filter: blur(8px)` |
| 切替閾値 | scrollY > 80px |
| 切替アニメ | GSAP ScrollTrigger / 200ms ease-out |
| 区切り罫線(スクロール後) | bottom 1px solid `var(--color-border-soft)` |

### ロゴ(左寄せ)

- テキストロゴ: `ALPS LAB`(font-display, 1.25rem, letter-spacing: var(--ls-wider))
- 色: `var(--color-text-primary)`
- ホバー: 0.6秒で `var(--color-accent-gold)` にカラートランジション

### グローバルナビ(中央〜右寄せ)

- 項目: ABOUT / SERVICES▾ / STORES / STORIES / RECRUIT
- フォント: var(--font-en), var(--fs-sm) / var(--fw-medium) / letter-spacing: var(--ls-wide)
- 色: var(--color-text-secondary)
- ホバー: 下線(2px gold)が左→右に伸びる(transform: scaleX(0)→scaleX(1) / 300ms)
- 現在ページ: 下線常時表示+色を `var(--color-text-primary)` に

### SERVICES ドロップダウン

- ホバーで展開、`max-width: 280px`、背景 `var(--color-bg-secondary)`
- 項目: GYM / NUTRITION / FOODS / SUPPLEMENTS(各 padding 16px、左に番号 01〜04)
- アニメーション: opacity 0→1 + translateY(-8px)→0、200ms ease-out
- モバイル: アコーディオン展開(クリック時のみ)

### CTAボタン(右端)

- ラベル: `体験予約 →`(font-en + font-jp 混在、var(--fs-sm), var(--fw-medium))
- 背景: `var(--color-accent-red)`
- パディング: 0.75rem 1.5rem
- ホバー: 背景 `var(--color-accent-red-hover)` + `--shadow-glow-red`
- モバイル(<= 767px): 「予約」テキストのみに短縮、または非表示にしてハンバーガー内へ

### モバイル時の挙動(<= 767px)

- グローバルナビ → ハンバーガーアイコン(右端)
- 展開時: フルスクリーンオーバーレイ(背景 `var(--color-bg-primary)` 100%)
- ナビ項目: 中央配置、各 var(--fs-2xl) で大きく、間隔 var(--space-md)
- 開閉アニメーション: GSAP で右からスライドイン / 400ms

### アクセシビリティ

- `<header role="banner">` / `<nav role="navigation" aria-label="メイン">`
- ハンバーガーボタン: `aria-expanded="false"` を JS でトグル
- キーボード操作: Tab で全項目フォーカス可能、フォーカスリング `outline: 2px solid var(--color-accent-gold)`

---

## Section 共通: Final CTA(フッター直前・全ページ)

### 構成図

```
┌────────────────────────────────────────────────────────────┐
│                                                              │
│   ─────────  RESEARCH N° 05 — JOIN US  ─────────            │ ← gold細罫線+章ラベル
│                                                              │
│       BEGIN YOUR HEALTH RESEARCH.                           │ ← Bebas Neue 96px
│                                                              │
│       あなたの健康習慣を、研究員と一緒に設計する。              │ ← Noto Sans JP Bold 32px
│                                                              │
│             [ 無料体験予約 → ]                                │ ← 赤ボタン 大型
│                                                              │
│   松本本店 / 長野店 / 軽井沢店    LAT. 36.2°N / LON. 137.9°E │ ← 底部装飾
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 高さ | 70vh(min 600px / max 900px) |
| 背景 | `var(--color-bg-primary)` ベース + 右下から左上への赤グラデーション 30% |
| グラデーション | `radial-gradient(ellipse at 80% 100%, rgba(200, 48, 46, 0.25), transparent 60%)` |
| 中央装飾 | 上下に gold 細罫線(width: 80px / height: 1px) |

### CTAボタン

- サイズ: padding 1.5rem 4rem(Desktop)/ 1.25rem 3rem(Mobile)
- フォント: var(--fs-md), font-jp + font-en 混在, var(--fw-medium)
- 背景: `var(--color-accent-red)`
- 矢印: ホバーで右に4px 動く(transform: translateX(0) → translateX(4px))
- 影: ホバー時 `var(--shadow-glow-red)`

### アニメーション

- スクロール 30% 進入時にテキストフェードイン(GSAP ScrollTrigger)
- 上下罫線が左右から幅0→80px に伸びる(800ms ease-out)
- ボタンが0.4秒遅れて scale 0.95 → 1.0 + opacity 0 → 1

### レスポンシブ挙動

| BP | 高さ | 英語見出し | 日本語サブ |
|---|---|---|---|
| 1280+ | 70vh | 96px | 32px |
| 1024+ | 70vh | 72px | 28px |
| 768+ | 60vh | 56px | 24px |
| ~767 | 60vh | 40px | 18px |

---

## Section 共通: Footer(全ページ最下部)

### 構成図

```
┌────────────────────────────────────────────────────────────┐
│ ALPS LAB                                                     │
│                                                              │
│ 北アルプスの麓から、本物の健康を研究する。                     │
│ ─────────────────────────────────────                      │
│                                                              │
│ ┌─SERVICES─┐ ┌─STORES──┐ ┌─COMPANY──┐ ┌─SOCIAL─┐         │
│ │ GYM      │ │ 松本本店 │ │ ABOUT    │ │Instagram│        │
│ │ NUTRITION│ │ 長野店   │ │ COMPANY  │ │ X (Twitter)│      │
│ │ FOODS    │ │ 軽井沢店 │ │ RECRUIT  │ │ YouTube │         │
│ │ SUPPLEMENTS│ │         │ │ CONTACT  │ │         │         │
│ └──────────┘ └─────────┘ └──────────┘ └─────────┘         │
│                                                              │
│ ─────────────────────────────────────                      │
│ © 2026 ALPS LAB Inc.    LAT. 36.2°N / LON. 137.9°E   Privacy│
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 背景 | `var(--color-bg-secondary)` (#141414) |
| パディング | var(--space-xl) 上下 / var(--space-lg) 左右(Desktop) |
| カラム数 | 4(Desktop)→ 2×2(Tablet)→ アコーディオン(Mobile) |
| 区切り罫線 | 1px solid `var(--color-border-soft)` で上部・カラム下を区切り |

### ロゴ&ブランドコピー(上段)

- ロゴ: `ALPS LAB`(font-display, var(--fs-2xl), gold)
- ブランドコピー: `北アルプスの麓から、本物の健康を研究する。`(font-jp, var(--fs-md), color-text-secondary)
- 余白: ロゴ下 var(--space-sm)、コピー下 var(--space-lg)

### 4カラム

- カラム見出し(SERVICES, STORES, COMPANY, SOCIAL): font-en, var(--fs-xs), letter-spacing: var(--ls-widest), color-accent-gold
- 項目: font-jp + font-en, var(--fs-sm), color-text-secondary
- ホバー: 色が `var(--color-text-primary)` へ

### 底部(コピーライト+座標+ポリシー)

- フォント: font-en, var(--fs-2xs), color-text-muted, letter-spacing: var(--ls-wider)
- 横並び: コピーライト(左)/ 座標(中央)/ Privacy・Terms(右)
- モバイル: 縦並び中央寄せ

### モバイル時のアコーディオン

- 各カラム見出しをタップで展開/折りたたみ
- アイコン: + → −(クリック時 90deg 回転)
- アニメーション: max-height 0 → auto / 300ms

---

## 共通: メタ情報(`<head>`)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="(各ページで個別)">
<meta name="theme-color" content="#0A0A0A">
<meta property="og:title" content="(各ページで個別)">
<meta property="og:description" content="(各ページで個別)">
<meta property="og:image" content="/assets/images/ogp.jpg">
<meta property="og:type" content="website">
<meta property="og:locale" content="ja_JP">
<title>(各ページで個別) | ALPS LAB</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="/assets/css/reset.css">
<link rel="stylesheet" href="/assets/css/tokens.css">
<link rel="stylesheet" href="/assets/css/base.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
```

---

## 共通: 章番号ラベル仕様(Chapter Label)

各セクション主見出しの上に置く「— MISSION 01 — 私たちの使命」形式のラベル。
視認性を確保するため、以下の値で統一する(モックアップ・ワイヤー全ページ共通)。

### 構造図

```
─────  MISSION 01  —  私たちの使命
↑gold罫線64px ↑英(18px) ↑ダッシュ ↑日本語(16px)
```

### スタイル仕様

| 要素 | 値 |
|---|---|
| 英語ラベル(`MISSION 01` 等) | font-family: `var(--font-en)` / font-size: `var(--fs-md)` (18px) / font-weight: 600 / letter-spacing: 0.25em / text-transform: uppercase / color: `var(--color-accent-gold)` |
| 日本語サブ(`私たちの使命` 等) | font-family: `var(--font-jp)` / font-size: `var(--fs-base)` (16px) / font-weight: 400 / letter-spacing: 0.1em / color: `var(--color-text-muted)` |
| 区切りダッシュ「—」 | 英語ラベルと同サイズ(18px)、同色(gold) |
| 罫線(::before、左寄せ用) | width: 64px / height: 1px / background: `var(--color-accent-gold)` / opacity: 0.6 |
| 罫線(::after、両側用) | 同上(中央配置の Final CTA / Hero セパレーターで使用) |
| ラベル下マージン | `var(--space-md)` (32px) |

### 視覚階層の前提

```
主見出し(64〜96px Bebas Neue)
   ↓ 3段階以上の差
章番号ラベル(英 18px / 日 16px)
   ↓
メタ(12px・カードラベル等)
```

主見出し(日本語キャッチ)より小さく、メタ(日付・カテゴリラベル)より大きいことを死守する。

### 推奨クラス(Coder Agent 向け)

`02_design_tokens.css` に `.chapter-label` / `.chapter-label--centered` / `.chapter-label__jp` を定義済み。
新規セクション実装時はこのクラスを使用。既存モックの `.section__chapter` 系は同等の値で実装済み。

### HTML パターン

```html
<!-- 左寄せ章ラベル(セクション主見出し上) -->
<h2 class="chapter-label">
  MISSION 01
  <span class="chapter-label__jp">— 私たちの使命</span>
</h2>

<!-- 中央寄せ章ラベル(Final CTA / Hero セパレーター) -->
<span class="chapter-label chapter-label--centered">
  RESEARCH N° 05 — JOIN US
</span>
```

### Hero 角の章番号(I. NATURE / II. BODY)は別物

DECISION_NOTES の Hero 構図にある「I. NATURE / II. BODY」は本仕様の対象外。
これは Hero 装飾要素で、別途 `.hero__chapter` として独立スタイル(font-display 24px / sub 12px)で運用。

---

## 共通: アクセシビリティ要件

- `<a href="#main">メインコンテンツへスキップ</a>` を `<body>` 直下に配置(視覚的に隠す)
- ランドマーク: `<header>` `<nav>` `<main id="main">` `<footer>`
- 全画像 alt 必須(装飾画像は `alt=""`)
- フォーカスリング: `outline: 2px solid var(--color-accent-gold); outline-offset: 2px;`
- prefers-reduced-motion: アニメーションを無効化(GSAPのctx内で分岐)
- コントラスト比: 全テキストで WCAG AA(4.5:1)以上を満たす

---

## 共通: GSAP ScrollTrigger 初期化スニペット

```js
// assets/js/scroll.js
gsap.registerPlugin(ScrollTrigger);

// prefers-reduced-motion 配慮
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  // ヘッダー背景フェード
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { className: 'is-scrolled', targets: 'header' }
  });

  // 共通フェードアップ(.fade-up クラス)
  gsap.utils.toArray('.fade-up').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
}
```
