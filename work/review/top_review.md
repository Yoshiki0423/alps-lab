# TOP `/` レビュー結果

> 評価基準:`08_workflow/self_refine_criteria.md` の Coder Agent 用 5 項目(各10点)。
> 40点以上で合格。

---

## 基準1: デザイン一貫性 / 10点

### 採点: 9 / 10

### 良い点
- Designer モック(`work/design/04_mockups/index.html`)の構造を 100% 踏襲
- Split Composition / NATURE × BODY を維持(grid 1fr 1fr / 中央オーバーレイ)
- 章番号「I. NATURE」「II. BODY」+ 中央「NATURE × BODY」セパレーター完備
- 不変コピー3点(英語 / 日本語 / CTA)を完全保存
- ストイック90% / 親しみゾーン10%(Stories Pickup のみ soft 背景)を実現
- カラー比率(黒 80%+ / gold 3-5% / red=CTA のみ)を tokens.css 経由で厳守

### 改善点
- Designer 申し送りの「研究 = LAB を強める追加装飾」(顕微鏡的グリッドラインなど)は未実装。これは要件外で減点対象ではないが、後フェーズの磨き込み余地

---

## 基準2: コード品質 / 10点

### 採点: 9 / 10

### 良い点
- セマンティック HTML:`<header role="banner">` / `<nav role="navigation">` / `<main id="main">` / `<section aria-labelledby>` / `<article>` / `<figure>`(Facilities でも) / `<footer role="contentinfo">`
- BEM 命名規則:`.hero__pane--nature` / `.service-card__body` などモディファイアを適切に使用
- CSS 変数活用:全色・余白・フォントが tokens.css 経由
- ファイル分割:reset / tokens / base / components / layout / pages の整理が file_structure.md 準拠
- コメントで構造の論理的単位を明示

### 改善点
- インラインで CSS を持たないクリーン構成だが、`hero__index` が `<ul aria-hidden>` の中に `<li>` を持つので、装飾用とはいえ意味的には `<div>` でも代替可。現状は機能上問題なし

---

## 基準3: パフォーマンス / 10点

### 採点: 8 / 10

### 良い点
- 全画像に `loading="lazy"`(Hero 以外)
- Hero 画像は `loading="eager"` + `fetchpriority="high"`(LCP 対策)
- 全画像に `width` / `height` 属性で CLS 対策
- フォントは `display=swap` + preconnect
- スクリプトは `defer`
- GSAP は CDN 経由・1ライブラリのみ

### 改善点
- 画像が JPG のまま(`designer_picks` 由来)。WebP 変換すると 30〜50% 削減できる
- `<picture>` で srcset を切り替えるとモバイル時のダウンロードが軽くなる(現状は同一画像)

---

## 基準4: アクセシビリティ / 10点

### 採点: 9 / 10

### 良い点
- 全 `<img>` に意味のある `alt` 属性
- 装飾要素(矢印・章番号・hero__separator・hero__index・hero__scroll・hero__coord)は `aria-hidden="true"`
- `<a class="skip-link">メインコンテンツへスキップ</a>` を `<body>` 直下に配置
- ランドマーク完備(banner / navigation / main / contentinfo)
- ハンバーガー:`aria-expanded` / `aria-controls` / Esc キーで閉じる
- フォーカスリング:`outline: 2px solid var(--color-accent-gold)`(base.css)
- コントラスト:白(#FFFFFF) on 黒(#0A0A0A) = 約 19:1、ゴールド(#C8A961) on 黒 = 約 8.4:1、赤 CTA(#C8302E) + 白文字 = 約 5.0:1。すべて WCAG AA(4.5:1)以上

### 改善点
- `<h1>` は1つだけ(hero-title)で正しい階層、`<h2>` を各セクション主見出しに使用、`<h3>` は子要素見出しで階層的に正しい
- `mission__sub` は `<p>` で段落として実装(問題なし)

---

## 基準5: レスポンシブ対応 / 10点

### 採点: 9 / 10

### 良い点
- 1280 / 1024 / 768 / 480 の4ブレークポイントでスタイル切替
- Hero:〜767px で縦積み(NATURE 上 40vh / BODY 下 60vh)、Hero center は適切に重ねる
- Services Grid:4 → 2 → 1 の段階崩し
- Stores Grid:3 → 1
- Stories Grid:3 → 2 → 1
- ハンバーガーメニュー(モバイル)
- Hero 文字サイズもレスポンシブトークン(`--fs-4xl`)で自動縮小:96px → 72px → 56px

### 改善点
- 480px 以下では Hero 底部インデックスを折り返す対応を追加(実装済み)
- `<picture>` srcset を使えば画像も最適化できるが、現状は CSS の object-fit で対応

---

## 合計: 44 / 50 ✅ 合格

### 判定
- [x] **合格(40点以上)→ 次工程へ**
- [ ] 改訂が必要(40点未満)

### 致命的問題: なし
### 追加対応推奨(任意改善)
1. JPG → WebP 変換(画像配信の最適化)
2. `<picture>` srcset でモバイル用画像の出し分け
3. Hero に「研究感」を強める追加装飾(Designer 申し送り)
