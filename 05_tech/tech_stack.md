# ALPS LAB 技術スタック

## 採用技術

| カテゴリ | 採用技術 | 理由 |
|---|---|---|
| 構造 | HTML5 | 課題条件(HTML/CSS/JSのみ推奨)に準拠 |
| スタイル | CSS3(CSS Custom Properties活用) | フレームワーク不使用、デザイントークンを変数管理 |
| スクリプト | Vanilla JavaScript(ES6+) | 課題条件に準拠 |
| アニメーション | GSAP + ScrollTrigger(CDN読み込み) | 動きを多用する要件のため、品質担保目的で1ライブラリだけ導入 |
| フォント | Google Fonts(Inter / Noto Sans JP / Bebas Neue) | CDN読み込み |
| 画像最適化 | WebP形式 + `loading="lazy"` | Web標準機能のみで実装 |
| バージョン管理 | Git + GitHub | 標準 |
| デプロイ | **Vercel(課題指定)** | GitHubとの自動連携 |

---

## CDN URL

```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## 使用しない技術(明確に避ける)

- React, Vue, Angular などのフレームワーク
- Tailwind CSS, Bootstrap などのCSSフレームワーク
- jQuery
- ビルドツール(webpack, Vite等)※不要、シンプルに保つ

---

## ブラウザ対応

- 最新版のChrome / Safari / Firefox / Edge
- iOS Safari / Android Chrome(モバイル)
