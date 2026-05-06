# ALPS LAB プロジェクトのフォルダ構成

## ディレクトリツリー

```
alps-lab/
├── index.html                    # TOP
├── about.html
├── services/
│   ├── index.html
│   ├── gym.html
│   ├── nutrition.html
│   ├── foods.html
│   └── supplements.html
├── stores.html
├── stories.html
├── recruit.html
├── company.html
├── contact.html
├── contact/
│   └── thanks.html
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── tokens.css           # デザイントークン(CSS変数)
│   │   ├── base.css             # 基本スタイル
│   │   ├── components/          # ボタン・カードなど
│   │   │   ├── button.css
│   │   │   ├── card.css
│   │   │   └── form.css
│   │   ├── layout/              # ヘッダー・フッター
│   │   │   ├── header.css
│   │   │   └── footer.css
│   │   └── pages/               # ページ個別CSS
│   │       ├── top.css
│   │       ├── about.css
│   │       └── ... (各ページ)
│   ├── js/
│   │   ├── main.js              # 全ページ共通の初期化
│   │   ├── animations.js        # GSAPスクリプト
│   │   └── components/          # ナビ・フォームなど
│   │       ├── nav.js
│   │       ├── form-validation.js
│   │       └── faq-accordion.js
│   ├── images/                  # WebP推奨
│   │   ├── hero/
│   │   ├── services/
│   │   ├── trainers/
│   │   └── stores/
│   └── videos/                  # ヒーロー動画
│       └── hero-loop.webm
├── README.md
└── vercel.json                  # 必要に応じて
```

---

## ファイル分割の原則

### CSS
- `reset.css`: ブラウザデフォルトスタイルのリセット
- `tokens.css`: CSS変数のみ
- `base.css`: html/body/見出し/リンクなどのベーススタイル
- `components/`: 再利用可能なUI部品
- `layout/`: 全ページ共通レイアウト
- `pages/`: ページ固有のスタイル

### JS
- `main.js`: 全ページで動作する初期化処理
- `animations.js`: GSAPアニメーション定義
- `components/`: 機能単位のJSモジュール

---

## HTMLファイルのテンプレート構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <!-- メタ情報・フォント・スタイルシート -->
  <!-- → 04_pages/_common.md 参照 -->
</head>
<body>
  <header>...</header>
  <main>
    <!-- ページごとの内容 -->
  </main>
  <footer>...</footer>

  <!-- スクリプト -->
  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/animations.js" defer></script>
</body>
</html>
```
