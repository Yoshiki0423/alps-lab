# 共通要素(全ページに含まれる)

## ヘッダー(固定)

```
┌────────────────────────────────────────────────────────────┐
│ [ALPS LAB]   ABOUT  SERVICES▼  STORES  STORIES  RECRUIT     │ [体験予約 →]│
└────────────────────────────────────────────────────────────┘
  ↑ロゴ      ↑グローバルナビ                                       ↑CTA(赤またはゴールド)
```

### スペック
- 高さ: 80px(デスクトップ) / 60px(モバイル)
- 背景: 透過(スクロールで黒背景に変化)
- 位置: position: fixed; top: 0; z-index: 100;
- ロゴ: 左寄せ、Bebas Neue または専用ロゴ画像
- グローバルナビ: 中央~右寄せ
- CTAボタン: 右端固定、Goldまたは赤

### モバイル時
- ハンバーガーメニュー化
- 展開時: フルスクリーンオーバーレイ
- CTAは「予約」テキストに短縮、または非表示

### SERVICES のドロップダウン
- ホバーで GYM / NUTRITION / FOODS / SUPPLEMENTS の4項目を表示
- モバイルではアコーディオン展開

---

## フッター

```
┌────────────────────────────────────────────────────────────┐
│ [ALPS LAB Logo]                                              │
│                                                              │
│ "北アルプスの麓から、本物の健康を研究する。"                   │
│                                                              │
│ ┌─事業──────┐ ┌─店舗──────┐ ┌─会社情報───┐ ┌─SNS────────┐│
│ │ GYM       │ │ 松本本店  │ │ ABOUT      │ │ Instagram  ││
│ │ NUTRITION │ │ 長野店    │ │ COMPANY    │ │ X (Twitter)││
│ │ FOODS     │ │ 軽井沢店  │ │ RECRUIT    │ │ YouTube    ││
│ │ SUPP...   │ │           │ │ CONTACT    │ │            ││
│ └───────────┘ └───────────┘ └────────────┘ └────────────┘│
├────────────────────────────────────────────────────────────┤
│ © 2024 ALPS LAB Inc. | Privacy Policy | Terms of Service     │
└────────────────────────────────────────────────────────────┘
```

### スペック
- 背景: var(--color-bg-secondary) (#1A1A1A)
- パディング: --space-xl (上下) / --space-lg (左右)
- 4カラム → モバイルではアコーディオン
- ロゴとブランドコピーを上部に配置
- 著作権表示は下部に小さく

---

## 全ページCTA(フッター直前のCTAセクション)

```
┌────────────────────────────────────────┐
│ [赤またはGoldの背景]                    │
│                                          │
│   "あなたの健康習慣を、研究員と         │
│       一緒に設計する。"                  │
│                                          │
│       [無料体験予約 →]                   │
│                                          │
└────────────────────────────────────────┘
```

### スペック
- 背景: 黒地に赤グラデーション、または黒に金線アクセント
- セクション高さ: 60vh以上
- CTAボタン: 大きく、視覚的に最も目立つ
- 表示位置: フッターの直前(全ページ共通)

---

## メタ情報(全ページ共通で実装)

### `<head>` 内に必要な要素

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="(各ページで個別に設定)">
<meta name="keywords" content="ジム,パーソナルトレーニング,長野,松本,健康">
<meta property="og:title" content="(各ページで個別に設定)">
<meta property="og:description" content="(各ページで個別に設定)">
<meta property="og:image" content="/assets/images/ogp.jpg">
<meta property="og:type" content="website">
<title>(各ページで個別に設定) | ALPS LAB</title>

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">

<!-- GSAP CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>

<!-- Stylesheets -->
<link rel="stylesheet" href="/assets/css/reset.css">
<link rel="stylesheet" href="/assets/css/tokens.css">
<link rel="stylesheet" href="/assets/css/base.css">
<!-- ページ個別のCSSはここに -->
```

---

## アクセシビリティ要件(全ページ共通)

- セマンティックHTMLの使用(`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- 画像のalt属性必須
- キーボード操作対応(Tabキーでフォーカス移動可能)
- 適切なコントラスト比(WCAG AA準拠を目標)
- フォームのlabel紐付け(`for`属性)
- ランドマークロール(`role="banner"`, `role="navigation"` 等)を必要に応じて
- スキップリンク(「メインコンテンツへスキップ」)を設置
