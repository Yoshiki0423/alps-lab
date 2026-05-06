# SERVICES `/services/` レビュー結果

## 評価サマリー
- **合計: 44 / 50** — 合格
- 第1バッチで確立されたパターンを完全踏襲、独自の変更は最小限

## 採点

### 基準1: デザイン一貫性 / 9
- ワイヤー通りの Hero (60vh) → 4枚 横長カード → Connection Diagram → Final CTA を実現
- 黒80% / gold 3〜5% / 赤(Final CTA のみ)の比率を死守
- 章ラベル「FOUR RESEARCH FIELDS / N° 01-04」を Hero 冒頭に配置
- Connection Diagram の最終ノード「→ 継続的な健康」を gold 強調 + glow パルスで表現

### 基準2: コード品質 / 9
- セマンティック HTML(article, ol/li, nav, section)
- BEM 命名(`.service-card-row__media` 等)
- CSS 変数 100% 活用
- GSAP は `data-page="services"` 分岐で他ページと共存

### 基準3: パフォーマンス / 8
- 全画像に `loading="lazy"` + `width`/`height` 属性
- WebP 未変換(JPG のまま)で -1
- Hero に背景画像なし(radial-gradient のみ)で軽量

### 基準4: アクセシビリティ / 9
- 全画像に意味のある alt
- `aria-labelledby` 各セクション
- `aria-hidden="true"` を装飾要素(矢印、scroll-cue)に
- nav に `aria-current="page"`
- スキップリンク + フォーカスリング

### 基準5: レスポンシブ対応 / 9
- 1280:60/40 横並び・左右交互
- 1024:1カラム縦(画像上→文字下)
- 768:padding 縮小
- 480:Hero タイトル縮小

## 改善余地(任意)
- WebP 変換(全ページ共通課題)
- アイコン素材調達後、Connection Diagram のノードに gold アイコン追加可能
