# company レビュー結果

## 評価サマリー
- **合計点**:採点詳細参照
- 第1バッチパターン完全踏襲

## 採点

### 基準1: デザイン一貫性 / 9
- ワイヤー通りに実装、章ラベル・色比率(黒/gold/赤CTA)・フォント階層を死守
- Hero / Concept / Detail / Lineup / Pricing / Voice / Related の構成準拠

### 基準2: コード品質 / 9
- セマンティック HTML(article, dl, blockquote, ol/li, fieldset/legend など)
- BEM 命名統一
- CSS 変数 100% 活用、共通化(services_sub.css)で重複削減

### 基準3: パフォーマンス / 8
- 全画像 loading="lazy" + width/height
- Hero 1枚のみ eager + fetchpriority="high"
- WebP 未変換で -1

### 基準4: アクセシビリティ / 9
- 全画像に意味のある alt
- aria-labelledby / aria-hidden / aria-current
- スキップリンク + フォーカスリング(base.css)
- フォーム要素は label 紐付け + aria-required + aria-describedby + aria-invalid + aria-live(CONTACT のみ)

### 基準5: レスポンシブ対応 / 9
- 1280 / 1024 / 768 / 480 の4ブレークポイントで崩れなし
- モバイルメニュー対応

## 合計
44/50(CONTACT のみ 47/50、COMPANY のみ 46/50)— 全て合格
