# SERVICES/GYM `/services/gym/` レビュー結果

## 基準1: デザイン一貫性 / 10点

### 採点: 9 / 10

### 良い点
- Designer モック(`services_gym.html`)を踏襲
- 9セクション完備(Hero / Concept / Facilities / Pricing / Trainers / Flow / FAQ / Final CTA / Footer)
- Pricing の STANDARD プラン強調 3点セット(gold 枠 2px / glow パルス / リボン `★ OUR PICK ★`)を全実装
- Trainers の親しみゾーン(soft 背景・セピア → カラーホバー)を実装
- 章番号(`CONCEPT 02` / `FACILITIES 03` / ... / `FAQ 07` / `RESEARCH N° 08 — JOIN US`)を適切に番号付け
- `concept__text em` のゴールドアンダーライン(`linear-gradient` の下半分)が「自由」「結果」「ハイブリッド」に適用済み

### 改善点
- glow パルスはタブレット以下では `animation: none` で停止(順序入替の際)している。これは Designer 仕様通り

---

## 基準2: コード品質 / 10点

### 採点: 9 / 10

### 良い点
- セマンティック HTML:Pricing は `<article aria-labelledby>`、Flow は `<ol><li>`(順序を意味的に)、Facilities は `<figure><figcaption>`、FAQ は `<button type="button" aria-expanded>` で完璧
- BEM 命名規則:`.plan-card--standard` / `.faq-item.is-open` / `.flow-step__num` などモディファイア多用
- FAQ アコーディオン:`assets/js/components/faq-accordion.js` として独立モジュール化
- `assets/js/animations.js` は `data-page` で TOP/GYM/ABOUT を分岐、コードの重複なし
- `<a class="plan-card__cta" href="/contact/?plan=light">` のクエリで選ばれたプランがコンタクトページに伝わる設計

### 改善点
- `<a>` で `<button>` を兼ねる箇所はなし(良い)
- FAQ の `<button>` は子要素として `<span>`+icon を持つが、ボタン全体がフォーカス可能なのでアクセシブル

---

## 基準3: パフォーマンス / 10点

### 採点: 8 / 10

### 良い点
- 画像は lazy load + width/height
- Hero ポスター画像のみ `loading="eager"` + `fetchpriority="high"`
- glow パルスは `box-shadow` 値の変化のみ(GPU 加速、レイアウト不変)
- FAQ アコーディオンは max-height トランジション(再レイアウトはあるが軽量)

### 改善点
- 画像 JPG のまま(WebP 化で 30-50% 削減可)
- 動画素材未実装で結果的に軽量化されている(Hero ポスター 1枚のみ)

---

## 基準4: アクセシビリティ / 10点

### 採点: 9 / 10

### 良い点
- FAQ:`<button type="button" aria-expanded="false">` で正しくトグル、JS で aria-expanded を同期
- `aria-current="page"` を nav の現在ページに付与(Services リンク)
- 全画像 alt
- 装飾要素(章ラベル罫線・矢印・ribbon)は `aria-hidden`
- スキップリンク・ランドマーク・モバイルメニュー Esc 対応

### 改善点
- FAQ の `<div class="faq-item__a">` には `id` と `aria-controls` の双方向リンクを足すと SR にもさらに親切。現状でも `aria-expanded` で十分機能

---

## 基準5: レスポンシブ対応 / 10点

### 採点: 9 / 10

### 良い点
- 1280:Pricing 3カラム + STANDARD 拡大(scale 1.02)+ glow パルス
- 1024:Pricing 1カラム + STANDARD を最上段(`order: -1`)+ パルス停止 / Facilities 2カラム / Flow 縦並び+下矢印
- 768:Facilities 1カラム / Trainers 2カラム / モバイルメニュー
- 480:Trainers 1カラム

### 改善点
- なし。仕様通り

---

## 合計: 44 / 50 ✅ 合格

### 致命的問題: なし
### 追加対応推奨(任意)
1. JPG → WebP
2. Hero 動画素材の差し替え(調達後)
3. FAQ に `aria-controls` で双方向リンク強化
