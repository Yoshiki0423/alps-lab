# ABOUT `/about/` 実装ログ

## 実装した内容

### ファイル
- `about/index.html`(クリーン URL `/about/` 用)
- `assets/css/pages/about.css`
- `assets/js/animations.js` 内の ABOUT 専用 GSAP timeline(`data-page="about"`、Hero 背景画像のゆっくりズーム+各要素の stagger)

### セクション(7つ)
1. Header(共通)
2. Hero — 北アルプス全画面背景 / 80vh
3. Mission / Vision / Values — 章立て3ブロック+Values 4カード
4. Story — 創業の物語(導入文 + 4イベントタイムライン 2023→2026)
5. Message — 代表メッセージ(写真+引用)
6. Team — 6名グリッド(トレーナー3名+管理栄養士2名+店舗マネージャー1名)
7. Final CTA(共通)+ Footer(共通)

### 不変制約の遵守
- 色:tokens.css の値を厳守
- フォント:Bebas Neue / Noto Sans JP Bold / Inter
- Mission/Vision の文言は `06_content/copy_about.md` の通り(「日本の健康寿命を、地方から伸ばす」「ジムを、人生のインフラに」)

## 判断した点(なぜそうしたか)

### Hero の背景パララックス
- 静止画(`hero-nature.jpg`)を `position: absolute; inset: 0;` でフルブリード
- ロード時に GSAP で 1.05倍 → 1.0倍に2秒かけてズーム(`prefers-reduced-motion` で無効化される)
- スクロール連動パララックスは要件に対し過剰・複雑になるため、ロード時のズーム1点に絞った

### Story タイムライン
- `<ol>` + `<li>` でセマンティックに(年代順)
- CSS の `::before` で縦軸線(gold gradient)とドットを描画
- 現在(2026)のドットは `is-current` クラスで gold + glow 強調
- 各イベントは grid 2カラム(本文 + サムネイル)、タブレット以下は縦並び

### MVV のヘディング階層
- `MISSION 01` / `VISION 02` は `<span>` の章ラベル(視覚的見出し)
- 本タイトル(`日本の健康寿命を、地方から伸ばす。` 等)は `<h2>` で意味的見出し
- Values 章ラベルは `<h2 id="values-title">` に統合(MVV ブロックの aria-labelledby を維持)

### Team のレスポンシブ
- 6カラム(Desktop)→ 4カラム(Tablet 1024)→ 2カラム(Mobile 768) の段階的崩し

### 創業の物語(導入文)
- ワイヤーには明記されていなかったが、`06_content/copy_about.md` の創業ストーリー(200字)は重要なため、Story タイムラインの上にリード文として配置

## 課題・申し送り事項
- 代表写真は Designer picks の `DA_about_business_portrait.jpg` を流用。実代表のポートレートに差し替えが必要
- Team の管理栄養士2名の画像はトレーナー候補画像を流用。実メンバーが決まったら専用撮影
- 住所(`長野県松本市××` 等)・代表氏名(`◯◯◯◯`)はダミー
- Story タイムラインの2024年画像は松本本店のダミー、2025年画像は長野店のダミー。実店舗外観写真があれば差し替え

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ストイック中心+Story タイムラインの感情ライン+Message の引用記号大型装飾でメリハリを実現。全体のカラー比率(黒80% / ゴールド3〜5% / 赤=Final CTAのみ)を厳守。

### 基準2: コード品質 / 9
セマンティック(ol/li で Story タイムライン、article で Team メンバー、blockquote 風 message)。BEM。CSS 変数活用。コメントで構造を明示。

### 基準3: パフォーマンス / 8
全画像 lazy load+width/height。Hero 画像のみ `loading="eager"` + `fetchpriority="high"`。WebP 未変換(JPG のまま)で -1。

### 基準4: アクセシビリティ / 9
- 全画像に意味のある alt
- ランドマーク・スキップリンク
- nav に aria-current="page"
- 各セクションに aria-labelledby
- フォーカスリング・コントラスト AA

### 基準5: レスポンシブ対応 / 9
- 1280:Team 6 / Values 4 / Story 2列(本文+画像)
- 1024:Team 4 / Values 2 / Story 縦並び / Message 縦並び
- 768:Team 2 / Values 1 / モバイルメニュー
- Hero タイトル `var(--fs-4xl)` がレスポンシブで自動縮小(96px → 56px)

### 合計: 44 / 50 — 合格
