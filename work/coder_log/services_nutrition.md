# SERVICES/NUTRITION `/services/nutrition/` 実装ログ

## 実装した内容

### ファイル
- `services/nutrition/index.html`(クリーン URL `/services/nutrition/`)
- `assets/css/pages/services_sub.css`(NUTRITION/FOODS/SUPPLEMENTS 共通)
- `assets/js/animations.js` 内の `page === "nutrition"` 分岐 Hero タイムライン

### セクション
1. Header(共通)
2. Hero(80vh)— 章ラベル「ALPS LAB NUTRITION / N°02」+ 「食べることは、未来を選ぶこと。」+ 「EATING IS CHOOSING THE FUTURE.」+ リード
3. Concept(70vh)— 「何を食べるか」は「どう生きるか」です。+ 説明文
4. Detail 3カード(オンラインカウンセリング / 対面カウンセリング / 月額継続プラン)
5. Pricing 3プラン(単発 ¥8,800 / 月額継続 ¥14,800・gold枠+RECOMMENDED リボンで強調 / ジム会員特典)
6. Voice — 佐藤美咲さんの引用カード
7. Related — GYM / FOODS への横並びリンクカード
8. Final CTA(無料体験予約)+ Footer

### 不変制約の遵守
- 色・フォント・コピーは tokens.css と copy_services.md 通り

## 判断した点

- NUTRITION/FOODS/SUPPLEMENTS は構造類似のため、共通 `services_sub.css` を作成し3ページで再利用(コード重複削減)
- Pricing の RECOMMENDED ラベルは GYM の glow-pulse の代わりに、gold ribbon でシンプル強調
- Voice は figure + blockquote + figcaption でセマンティック

## 課題・申し送り事項

- Detail / Quality カードの「アイコン」は装飾なしの番号表記で代用(SVG アイコン素材未調達)
- 動画素材未調達のため Hero は静止画(`nutrition-hero.jpg`)
- WebP 未変換

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ワイヤー準拠。Concept の「」装飾、Pricing の RECOMMENDED 強調、Voice の引用大型「」 を実装。

### 基準2: コード品質 / 9
セマンティック(article / figure / blockquote / dl)。BEM 命名。共通 CSS 化でメンテ性向上。

### 基準3: パフォーマンス / 8
lazy load + width/height + Hero のみ eager + fetchpriority="high"。共通 CSS のためバイト数削減。WebP 未変換で -1。

### 基準4: アクセシビリティ / 9
- 全画像 alt
- aria-labelledby + aria-hidden + 章ラベル装飾要素 aria-hidden
- ランドマーク + skip-link
- nav は Services に aria-current="page"

### 基準5: レスポンシブ対応 / 9
1280:3カラム / 1024:1カラム化(RECOMMENDED を最上段) / 768:Hero 縮小 / 480:padding 縮小

### 合計: 44 / 50 — 合格
