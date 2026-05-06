# ALPS LAB パフォーマンス・アクセシビリティ要件

## パフォーマンス目標

| 指標 | 目標値 |
|---|---|
| Lighthouse Performance | 80+ |
| Lighthouse Accessibility | 90+ |
| Lighthouse SEO | 90+ |
| LCP(Largest Contentful Paint) | 2.5秒以内 |
| 各ページの画像総サイズ | 2MB以内 |
| ヒーロー動画ファイルサイズ | 3MB以内 |

---

## パフォーマンス対策

### 画像最適化
- WebP形式を採用
- `loading="lazy"` を必要箇所に設定(Hero以外)
- `width` `height` 属性を必ず設定(CLS対策)
- レスポンシブ画像は `srcset` で複数サイズ用意

### 動画最適化
- ヒーロー動画は3〜5秒のループ
- `preload="metadata"`または `preload="none"`で初期読み込みを軽量化
- モバイルでは `<video>` を読み込まず、ポスター画像に切替

### スクリプト最適化
- すべての `<script>` に `defer` 属性
- GSAP は CDN から読み込み
- 不要なJSの削除

### CSS最適化
- ファイルを目的別に分割
- 不要なセレクタを書かない
- 重要なスタイルは `<head>` 内にcritical CSSとしてインライン化を検討

### フォント最適化
- `display=swap` でFOIT防止
- preconnect設定

---

## アクセシビリティ要件

### セマンティックHTML
- 適切な要素を使う: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- 見出しの階層を守る: h1 → h2 → h3(飛ばさない)
- 各ページに `<h1>` は1つだけ

### 画像
- すべての `<img>` に `alt` 属性を設定
- 装飾画像は `alt=""` で空にする
- 重要な画像は具体的な説明を記述

### キーボード操作
- すべてのインタラクティブ要素にTabキーでフォーカス可能
- フォーカスインジケーター(outline)を分かりやすく
- ハンバーガーメニューもキーボード操作対応

### コントラスト
- WCAG AA準拠を目標(コントラスト比 4.5:1 以上)
- 詳細は `03_design/design_tokens.md` 参照

### フォーム
- 各 `<input>` に対応する `<label>` を `for` 属性で紐付け
- 必須項目には `required` + 視覚的なマーク(*など)
- エラーメッセージは `aria-live="polite"` で読み上げ

### ランドマークロール
- `<nav role="navigation">` など、必要に応じてroleを補足
- スキップリンク(「メインコンテンツへスキップ」)を設置

### ARIA属性
- アコーディオンには `aria-expanded` を設定
- モーダル・ハンバーガーメニューには `aria-hidden`, `aria-modal` を適切に
- 装飾アイコンは `aria-hidden="true"` で読み上げ除外

---

## SEO要件

### 各ページの必須メタタグ
- `<title>` タグ(各ページで個別)
- `<meta name="description">` (各ページで個別、120文字程度)
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:image">`
- `<meta property="og:type" content="website">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### 構造化データ(可能であれば)
- LocalBusiness Schema(店舗情報)
- Organization Schema(会社情報)

### URL設計
- 静的なパスでクリーンに
- 日本語URLは使わない
- パスは小文字・ハイフン区切り
