# RECRUIT `/recruit/` 実装ログ

## 実装した内容

### ファイル
- `recruit/index.html`
- `assets/css/pages/recruit.css`
- `assets/js/animations.js` 内の `page === "recruit"` 分岐 Hero タイムライン

### セクション
1. Header
2. Hero(80vh)— 章ラベル「RECRUIT / N°05」+ 「一緒に、健康を研究する仲間へ。」+ 「JOIN OUR RESEARCH.」+ リード
3. Message — 代表メッセージ(引用大型、「健康を研究したい」を gold 強調)
4. Positions 4カード(パーソナルトレーナー / 管理栄養士 / 商品開発 / 店舗運営マネージャー)、各カードに red 応募ボタン(`/contact/?type=recruit&pos=...`)
5. Benefits — gold チェック付きリスト(7項目)
6. Interview 3件(山田・佐々木・中村、左右交互配置、引用「」装飾)
7. Apply CTA(「応募フォームへ →」、`/contact/?type=recruit` リンク)+ Footer

### 不変制約の遵守
- 色・フォント・コピーは仕様通り(`06_content/recruit_message.md`)
- 4職種・待遇内容は企画書通り

## 判断した点

### Hero 動画暫定対応
- 動画素材未調達のため `<img>` で代用、`<!-- TODO: スタッフが働く動画素材調達後、<img> を <video> に置き換え -->` のコメントを明記

### 応募CTA
- Apply セクション(Final CTA バリアント)を `応募フォームへ →` に変更
- リンク先は `/contact/?type=recruit`(CONTACT ページのフォームに連携可能)

### Position カードの dl
- 雇用形態 / 勤務地 / 求める人物像 を `<dl>` でセマンティック表現
- 4カラム(Desktop)→ 2×2(Tablet)→ 1カラム(Mobile)

### Interview の左右交互
- ABOUT の Story タイムラインや SERVICES の左右交互カードと同パターン
- 1番目・3番目は画像左、2番目は反転(--reverse)

## 課題・申し送り事項

- スタッフインタビューの本文はダミー、実スタッフが決まったら差し替え
- 写真も Designer picks 流用、実トレーナー写真があれば差し替え
- 動画素材未調達(Hero)
- 応募リンクは `/contact/?type=recruit&pos=...` のクエリ付き、CONTACT ページの初期値設定は未実装(課題スコープ外)

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ワイヤー準拠。ストイック中心+引用大型「」+赤 CTA(応募ボタン)を実現。

### 基準2: コード品質 / 9
セマンティック(article / dl / blockquote / ol)。BEM 命名。CSS 変数活用。

### 基準3: パフォーマンス / 8
lazy load + width/height + Hero eager + fetchpriority="high"。WebP 未変換で -1。

### 基準4: アクセシビリティ / 9
- 全画像 alt
- aria-labelledby 各セクション
- ランドマーク + skip-link
- nav に aria-current="page"
- フォーカスリング・コントラスト AA

### 基準5: レスポンシブ対応 / 9
1280:4カラム positions, 横並び interview / 1024:2×2 positions / 768:1カラム + interview 縦並び

### 合計: 44 / 50 — 合格
