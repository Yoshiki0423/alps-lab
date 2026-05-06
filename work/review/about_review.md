# ABOUT `/about/` レビュー結果

## 基準1: デザイン一貫性 / 10点

### 採点: 9 / 10

### 良い点
- Designer モック(`about.html`)を踏襲
- 7セクション完備(Hero / MVV / Story / Message / Team / Final CTA / Footer)
- Hero は北アルプス全画面 + `RESEARCH THE TRUTH OF HEALTH.` で TOP との世界観を継承
- MVV 章立て(MISSION 01 / VISION 02 / VALUES 03)+ Values 4カード
- Story タイムライン:gold 縦軸 + ドット + 現在(2026)の glow 強調
- Message:大型引用記号(`\201C` 装飾)+ 罫線署名
- 創業ストーリー文(`copy_about.md` の200字)を Story タイムラインの導入として配置(既存ワイヤー外の追加だが価値が高い)

### 改善点
- 北アルプス Hero でロード時のスローズーム(2秒)は実装済み、要件は満たす
- スクロール連動の追加パララックスは過剰になるため非実装(これは判断として正しい)

---

## 基準2: コード品質 / 10点

### 採点: 9 / 10

### 良い点
- セマンティック:Story は `<ol><li>`、Message は `<p class="message__text">` + 装飾 `::before` で大型クォートを CSS で実装、Team は `<article>` で各メンバー
- MVV ブロック:`<h2 class="mvv__title" id="..."` + `<p class="mvv__sub-en">` + `<p class="mvv__desc">` の階層的構造
- Values 章ラベルは `<h2 id="values-title">` で aria-labelledby と連動
- BEM・CSS 変数・コメントすべて整理されている

### 改善点
- `mvv__chapter` クラスは MVV 専用(`<span>` で巻く)+ section__chapter で共通スタイル流用、これは良い設計
- `story-event` の `is-current` クラスは glow を追加するだけのシンプルな実装

---

## 基準3: パフォーマンス / 10点

### 採点: 8 / 10

### 良い点
- 画像 11枚全部に lazy load(Hero 除く)
- Hero 画像のみ `loading="eager"` + `fetchpriority="high"`
- 全画像 width/height
- Hero ロード時のズームアニメーションは `prefers-reduced-motion` で無効化

### 改善点
- JPG のまま(WebP 化推奨)
- Team 画像は 600×600 に統一しているが、実際の元画像はもっと大きい可能性。サイズ最適化の余地あり

---

## 基準4: アクセシビリティ / 10点

### 採点: 9 / 10

### 良い点
- 全画像に意味のある alt(代表ポートレート / 北アルプス / 各店舗 / トレーナー個別名)
- Story タイムライン:`<ol>` で順序を意味的に持たせる
- 各 MVV ブロックに `aria-labelledby`
- `aria-current="page"` を About リンクに
- 装飾要素(章ラベル罫線 / hero__bottom / story-event::before)は aria-hidden
- スキップリンク・ランドマーク・モバイルメニュー Esc 対応

### 改善点
- Hero タイトル(`RESEARCH THE TRUTH<br>OF HEALTH.`)は `<br>` を使用。SR では一文として読まれるため問題なし

---

## 基準5: レスポンシブ対応 / 10点

### 採点: 9 / 10

### 良い点
- 1280:Team 6 / Values 4 / Story timeline 2列
- 1024:Team 4 / Values 2 / Story timeline 縦並び / Message 縦並び
- 768:Team 2 / Values 1 / モバイルメニュー / Hero 章ラベル罫線縮小(80px → 32px)
- フォントサイズも tokens.css のレスポンシブ定義で自動縮小

### 改善点
- なし。Designer 仕様通り

---

## 合計: 44 / 50 ✅ 合格

### 致命的問題: なし
### 追加対応推奨(任意)
1. JPG → WebP
2. 代表写真・Team 画像は実メンバー素材に差し替え
3. Story タイムラインの2024/2025画像は実店舗外観に差し替え
