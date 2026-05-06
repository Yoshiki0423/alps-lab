# SERVICES `/services/` 実装ログ

## 実装した内容

### ファイル
- `services/index.html`(クリーン URL `/services/`)
- `assets/css/pages/services.css`
- `assets/js/animations.js` 内の `page === "services"` 分岐 Hero タイムライン追加

### セクション(4つ + Header / Footer)
1. Header(共通)
2. Hero(60vh)— 章ラベル「FOUR RESEARCH FIELDS / N° 01–04」+ Bebas Neue 大型 + 4つの研究領域 + リード文 + scroll-cue
3. Service Cards(4枚 横長カード、左右交互 60/40 グリッド、ホバーで brightness 1.0 + scale 1.02)
4. Connection Diagram(縦フロー図、5ノード=4事業+「→ 継続的な健康」、最終ノードに gold + glow パルス)
5. Final CTA(共通形)+ Footer

### 不変制約の遵守
- 色:tokens.css 経由で死守(黒/ゴールド/赤CTA)
- フォント:Bebas Neue / Noto Sans JP / Inter
- 各事業のキャッチコピーは `06_content/copy_services.md` に準拠

## 判断した点

- Connection Diagram の最終ノードを gold 背景+glow pulse で強調(top.css の glow-pulse パターンを踏襲)
- ホバー時のスケール 1.02 は GYM ページと統一
- Hero の高さは仕様通り 60vh、scroll-cue を底部に配置(SCROLL ↓ の上下バウンス)

## 課題・申し送り事項

- アイコン素材未調達のため Connection Diagram は文字+絵文字風表現で代用
- 4事業画像は既存の `gym-facility-01.jpg` / `nutrition.jpg` / `foods.jpg` / `supplements.jpg` を流用
- WebP 変換未実施(JPG のまま、第1バッチと同状態)

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ワイヤー通りの Split + 章番号 + 横長カード + フロー図を実装。ストイック中心+gold アクセント+赤 CTA の比率を死守。

### 基準2: コード品質 / 9
セマンティック(article で各カード、ol/li で Connection Diagram)。BEM 命名統一。CSS 変数活用。GSAP は `data-page="services"` 分岐で他ページと共存。

### 基準3: パフォーマンス / 8
画像 lazy load + width/height + Hero 1枚のみ eager + fetchpriority="high"。WebP 未変換で -1。

### 基準4: アクセシビリティ / 9
- `aria-labelledby`, `aria-hidden`, `role="banner|navigation|contentinfo"`
- スキップリンク + フォーカスリング(base.css)
- nav の現在ページに `aria-current="page"`
- 全画像 alt、装飾要素 aria-hidden="true"

### 基準5: レスポンシブ対応 / 9
1280:60/40 横並び・左右交互 / 1024:1カラム縦 / 768:padding 縮小 / 480:Hero タイトル縮小

### 合計: 44 / 50 — 合格
