# Coder Agent Brief

> Coder Agent が**最初に必ず読むファイル**(これだけで実装着手できる前提)。
> 詳細が必要なら個別ファイル参照。

---

## 🎯 あなたのミッション

Designer Agent の成果物(`work/design/`)を起点に、**指定されたページの本番実装**を行う。

## 📋 成果物

### 実装ファイル
- HTML: 担当ページ
- CSS: `assets/css/pages/{page}.css`(ページ専用スタイル)
- JS: 必要に応じて `assets/js/components/{component}.js`

### 実装ログ
- `work/coder_log/{page}.md` に「実装内容」「判断点」「課題・申し送り」「セルフチェック結果」を記録

## 🏷️ ブランド情報

→ **`00_QUICK_REF.md` を最初に読むこと**(ブランド・色・フォント・コピーの全てが把握できる)

## 🛠️ 技術スタック(厳守)

- HTML5 + CSS3 + Vanilla JS + GSAP
- フレームワーク不使用(React/Vue/jQuery 等は使わない)
- ビルド不要(直接 HTML/CSS/JS で動作)
- 詳細: `05_tech/tech_stack.md`

## 📁 ファイル配置(`05_tech/file_structure.md`)

```
project-root/
├── index.html(TOP)
├── about/index.html
├── services/index.html
├── services/{gym|nutrition|foods|supplements}/index.html
├── stores/index.html
├── stories/index.html
├── recruit/index.html
├── company/index.html
├── contact/index.html
├── contact/thanks/index.html
├── assets/
│   ├── css/
│   │   ├── tokens.css(変数定義)
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── components/{button|card|...}.css
│   │   ├── layout/{header|footer}.css
│   │   └── pages/{page}.css
│   ├── js/
│   │   ├── main.js(共通動作)
│   │   ├── animations.js(GSAP)
│   │   └── components/{component}.js
│   ├── images/
│   └── videos/
└── vercel.json
```

## 🎨 既存共通アセット(再実装しないこと)

すでに配置済みなので、**そのまま `<link>` / `<script>` で読み込むだけ**:
- `assets/css/tokens.css` — デザイントークン(変数定義)
- `assets/css/reset.css` / `base.css` — 共通ベース
- `assets/css/components/button.css` — ボタン
- `assets/css/layout/header.css` / `footer.css` — ヘッダー・フッター
- `assets/js/main.js` / `animations.js` — 共通JS

## 🛡️ 不変制約(`00_QUICK_REF.md` 参照)

- カラー: `#0A0A0A` / `#C8A961` / `#C8302E`
- フォント: Bebas Neue / Noto Sans JP / Inter
- 主要コピー(変更不可)
- TOP Hero の Split Composition レイアウト維持
- ブランド名・事業構成・料金は変更しない

## ⚙️ 実装の必須要件

### セマンティックHTML
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` を適切に使用
- 見出しレベル(h1/h2/h3)の階層を守る

### CSS
- BEM 命名 or CSS変数活用
- `tokens.css` の変数を必ず使用(直接ハードコーディング禁止)
- ページ独自スタイルは `assets/css/pages/{page}.css` に分離

### JS
- 関数分割・コメント
- DOMContentLoaded で初期化
- `prefers-reduced-motion: reduce` 対応

### パフォーマンス
- 画像 `loading="lazy"`(Hero以外)、Hero は `eager` + `fetchpriority="high"`
- 画像に `width`/`height` 属性(レイアウトシフト防止)
- 重いライブラリは使わない

### アクセシビリティ(WCAG AA)
- 全画像に意味のある `alt`
- フォームの `<label>` 紐付け
- コントラスト比 4.5:1 以上
- キーボード操作可能(Tabフォーカス順)
- スキップリンク

### レスポンシブ
- 4ブレークポイント:**1280 / 1024 / 768 / 480**
- モバイル時のメニュー動作(ハンバーガー)
- 動画→静止画切替などの最適化

## 🖼️ 画像素材(`candidates/IMAGE_CATALOG.md`)

- 主採用: `candidates/designer_picks/` の画像
- 一部例外: SUPPLEMENTS / Trainers は `candidates/{category}/★_*.jpg`
- すべて **`assets/images/` にコピー配置**(ホットリンク禁止)

## ✅ セルフリファイン(必須)

`08_workflow/self_refine_criteria.md` の Coder 用基準で5項目×10点採点。
- **40点以上で合格**
- **50点を目指す卓越基準もチェック**

## 📁 詳細リファレンス(必要時のみ)

- 技術スタック: `05_tech/tech_stack.md`
- ファイル構成規約: `05_tech/file_structure.md`
- パフォーマンス・a11y: `05_tech/performance_a11y.md`
- ワイヤー詳細: `work/design/03_wireframes/{page}.md`
- HTMLモック土台: `work/design/04_mockups/{page}.html`(あれば)
- Designer 引き継ぎ規約: `08_workflow/handoff_format.md`

## ⚠️ 注意

- 不明点は**勝手に解釈せず、ユーザーまたはオーケストレーターに確認**
- 動画素材未調達の場合は静止画(ポスター画像)で代用、HTMLに `<!-- TODO: video差替 -->` コメント
- 画像はローカルパス(`assets/images/...`)で参照(ホットリンク禁止)
- 出力前に**セルフリファイン採点**を必ず実施
