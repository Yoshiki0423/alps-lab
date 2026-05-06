# SERVICES/SUPPLEMENTS `/services/supplements/` 実装ログ

## 実装した内容

### ファイル
- `services/supplements/index.html`
- `assets/css/pages/services_sub.css`(共通)
- `assets/js/animations.js` 内の `page === "supplements"` 分岐 Hero タイムライン

### セクション
1. Header
2. Hero(80vh)— 章ラベル「ALPS LAB SUPPLEMENTS / N°04」+ 「補うのではなく、整える。」+ 「NOT TO SUPPLEMENT, BUT TO ALIGN.」
3. Concept — 重要語(「補う」「整える」「研究員」)に gold アンダーライン
4. Lineup 4カード(ホエイプロテイン / BCAA / マルチビタミン / スターターセット)
5. Quality 3カード(第三者機関検査 / 添加物最小限 / 国内製造)
6. Voice — 田中健一さんの引用カード
7. Related — GYM / NUTRITION / FOODS の3カラム
8. Final CTA(購入はこちら →)+ Footer

### 不変制約の遵守
- 色・フォント・コピーは仕様通り

## 判断した点

- Concept の重要語強調は `<span class="concept__highlight">` で gold アンダーライン
- Hero の brightness フィルターは他のサブページより強め(0.4)に設定し、商品ボトルの神秘性を演出
- 商品ボトル浮遊アニメは GSAP timeline ではなく CSS keyframes でも実装可能だが、本実装ではボトル単独の浮遊は省略(Hero メディア全体のスケールフェードのみ)

## 課題・申し送り事項

- 商品ボトルの透過 PNG 素材は未調達のため、Designer picks の jpg をそのまま使用
- 商品ボトルの浮遊感アニメは将来 PNG 素材調達後に追加可能(設計箇所:`.sub-hero__media` のフロート CSS)
- 商品購入リンクは `#` のまま

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ワイヤー準拠。Concept の gold アンダーライン、Lineup 4カラム、Quality 3カードを実装。

### 基準2: コード品質 / 9
セマンティック・BEM・共通 CSS 化。

### 基準3: パフォーマンス / 8
lazy load + width/height + Hero eager。WebP 未変換で -1。

### 基準4: アクセシビリティ / 9
全画像 alt、aria-labelledby、ランドマーク、フォーカスリング、aria-current。

### 基準5: レスポンシブ対応 / 9
1280:4カラム / 1024:2カラム / 768:1カラム

### 合計: 44 / 50 — 合格
