# SERVICES/FOODS `/services/foods/` 実装ログ

## 実装した内容

### ファイル
- `services/foods/index.html`
- `assets/css/pages/services_sub.css`(NUTRITION 等と共通)
- `assets/js/animations.js` 内の `page === "foods"` 分岐 Hero タイムライン

### セクション
1. Header
2. Hero(80vh)— 章ラベル「ALPS LAB FOODS / N°03」+ 「忙しい日でも、研究された食卓を。」+ 「RESEARCHED MEALS, EVEN ON BUSY DAYS.」
3. Concept(70vh)
4. Lineup 4カード(単品 ¥980〜 / 6食 ¥5,880 / 12食 ¥11,200 / サブスク 5%OFF、各カードに購入ボタン)
5. Process 3ステップ(縦タイムライン、ABOUT のタイムラインと同 UI パターン)
6. Voice — 鈴木麻衣さんの引用カード
7. Related — GYM / NUTRITION / SUPPLEMENTS の3カラム
8. Final CTA(購入はこちら →)+ Footer

### 不変制約の遵守
- 色・フォント・コピーは仕様通り

## 判断した点

- Lineup の商品画像は brightness フィルターをかけず、食欲を刺激する自然な色を残す方針
- Process の縦タイムラインは ABOUT の Story タイムラインと同 CSS パターン(border-left + before ドット)
- Final CTA を「購入はこちら →」にバリアント変更(他ページ「無料体験予約」と区別)

## 課題・申し送り事項

- Process 各ステップの画像は foods-process-01〜03.jpg(現状は lineup と同じ素材を流用)
- 動画素材未調達のため Hero は静止画
- 商品購入リンクは `#` のまま(EC サイト未構築)

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ワイヤー通り。Lineup 4カラム、Process 縦タイムライン、Related 3カラムを実装。

### 基準2: コード品質 / 9
セマンティック(ol/li で Process、article で各 Lineup カード)。共通 CSS で重複削減。

### 基準3: パフォーマンス / 8
lazy load + width/height + Hero eager + fetchpriority="high"。WebP 未変換で -1。

### 基準4: アクセシビリティ / 9
全画像 alt、aria-labelledby、ランドマーク、フォーカスリング、コントラスト AA 確保。

### 基準5: レスポンシブ対応 / 9
1280:Lineup 4カラム / 1024:2カラム / 768:1カラム + Hero 縮小

### 合計: 44 / 50 — 合格
