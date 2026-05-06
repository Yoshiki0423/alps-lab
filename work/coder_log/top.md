# TOP `/` 実装ログ

## 実装した内容

### ファイル
- `index.html`(プロジェクトルート)
- `assets/css/pages/top.css`(ページ固有スタイル)
- `assets/js/animations.js` 内の TOP 専用 GSAP timeline(`data-page="top"` で分岐)

### セクション(8つ)
1. Header(共通)
2. Hero — Split Composition(NATURE × BODY)/ 100vh / 縦2分割
3. Mission — 大型タイポ・ゴールドのアンダーライン強調
4. Services Overview — 4事業カード(GYM / NUTRITION / FOODS / SUPPLEMENTS)
5. Why ALPS LAB — 3項目(RESEARCH FIRST / LONG-TERM / LOCAL & AUTHENTIC)
6. Stories Pickup(親しみゾーン / soft 背景 #F5F5F0)
7. Stores — 3店舗カード(松本/長野/軽井沢)
8. Final CTA — radial gradient の赤アクセント
9. Footer(共通)

### 不変制約の遵守
- 色:`#0A0A0A` ベース・`#C8A961` ゴールド・`#C8302E` 赤(CTA専用)を tokens.css 経由で厳守
- フォント:Bebas Neue / Noto Sans JP Bold / Inter
- Hero コピー(変更不可):
  - 英語:`RESEARCH THE TRUTH OF HEALTH.`
  - 日本語:`北アルプスの麓から、本物の健康を研究する。`
  - CTA:`体験予約はこちら →`
- Hero レイアウト:Split Composition(縦2分割 NATURE × BODY)維持

## 判断した点(なぜそうしたか)

### 動画の暫定対応
- Hero BODY 側の動画素材が未調達のため、`<video>` ではなく **`<img>` ポスター画像で代用**(`assets/images/hero/hero-body.jpg`)
- `<!-- TODO: 動画素材調達後に <video autoplay muted loop playsinline> に置き換え -->` のコメントを HTML に明示
- これにより動画が用意できなくてもページが完全に動作する

### 画像配置
- Designer Agent 選定の `candidates/designer_picks/` を主採用し、`assets/images/` 配下に役割別フォルダで配置
- 画像はホットリンクをやめてローカルファイルに移行(モック時の Unsplash URL は全て排除)

### CSS 分割
- 共通要素(reset / tokens / base / button / header / footer)とページ固有(`pages/top.css`)で分割
- BEM 命名規則で記述

### アニメーション
- ページの動作を壊さないように、GSAP がない/失敗した場合でも `.fade-up` の初期値は `opacity: 1` で表示される
- `prefers-reduced-motion: reduce` の環境では全アニメ無効
- `data-page="top"` 属性で TOP 専用 Hero タイムラインを判別

### レスポンシブ
- 1280 / 1024 / 768 / 480 の4ブレークポイント対応
- 〜767px では Hero を縦積み(NATURE 上 40vh / BODY 下 60vh)、Services/Stories は1カラム
- 480px 以下では Hero 底部インデックスを折り返し可能に

### アクセシビリティ
- 全画像に意味のある `alt` 属性
- 装飾要素(`hero__separator` / `hero__index` / 矢印 / 章番号など)は `aria-hidden="true"`
- スキップリンク・ランドマーク(`<header role="banner">` / `<main id="main">` / `<footer role="contentinfo">`)
- ハンバーガーメニュー:`aria-expanded` / `aria-controls` / Esc キーで閉じる対応
- フォーカスリング `outline: 2px solid var(--color-accent-gold)`(base.css)

## 課題・申し送り事項
- 動画素材(Hero BODY)未調達。Pexels で 5秒ループの WebM を取得後、HTML の `<img>` を `<video>` に置き換える必要あり
- 画像は現在 .jpg(designer_picks 由来)。本番では WebP 変換推奨
- Stories Pickup の画像が共有素材のため、専用素材があれば差し替える
- 軽井沢店等の住所は `××` のままダミー。最終的に正式住所に差し替える
- ロゴはテキスト(Bebas Neue)実装。SVG ロゴが用意できたら差し替え可

## セルフチェック結果(`08_workflow/self_refine_criteria.md` の Coder 用基準)

### 基準1: デザイン一貫性 / 9
モックの構造を 100% 踏襲。Split Composition / 章番号 / カラー比率 / ストイック中心+親しみゾーン10% を実現。

### 基準2: コード品質 / 9
セマンティック HTML(header/nav/main/section/article/figure/figcaption/footer を使い分け)。BEM 命名。CSS 変数活用。コメントで構造を明示。

### 基準3: パフォーマンス / 8
画像に `loading="lazy"`(Hero 以外)・`width`/`height` 属性で CLS 対策・`fetchpriority="high"` を Hero 画像に設定。動画は静止画代用で軽量。フォントは `display=swap` + preconnect。
WebP 変換は未実施(JPG のまま)で -1。

### 基準4: アクセシビリティ / 9
全画像 alt / 装飾要素 aria-hidden / フォーカスリング / キーボード操作 / ランドマーク / コントラスト比 4.5:1 以上を全テキストで確保。

### 基準5: レスポンシブ対応 / 9
1280/1024/768/480 全BPで崩れ防止。Hero 縦積み・モバイルメニュー・ハンバーガー対応。

### 合計: 44 / 50 — 合格
