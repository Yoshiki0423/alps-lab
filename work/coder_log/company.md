# COMPANY `/company/` 実装ログ

## 実装した内容

### ファイル
- `company/index.html`
- `assets/css/pages/company.css`
- `assets/js/animations.js` 内の `page === "company"` 分岐 Hero タイムライン(控えめ)

### セクション
1. Header
2. Hero(50vh、ミニマル黒+gold radial glow 微弱)— 「COMPANY PROFILE」 + 「会社概要」
3. Overview — 表形式の会社概要(dl/dt/dd を CSS Grid で2列レイアウト、9行)
4. History — 沿革タイムライン(2023→2024→2025→2026、現在ノードに glow パルス)
5. Access — 50:50 横分割、本社所在地・連絡先・地図ボタン
6. Mini CTA — 「ご取材・ご質問はお問い合わせフォームよりご連絡ください。」
7. Footer

### 不変制約の遵守
- 色・フォント・コピーは仕様通り
- 「公式情報」のため Final CTA は省略、代わりにフッター直前に Mini CTA を配置(ワイヤー指示通り)

## 判断した点

### dl + Grid で表組
- HTML5 セマンティクスに従い、会社概要は `<dl>` を `.overview__row` でラップ
- 各行は CSS Grid で 30%(項目名)/ 70%(値)に分割
- モバイル時は1列縦並びに変更

### 沿革(History)
- ABOUT の Story タイムラインを簡略化(画像なし、テキストのみ)
- 現在(2026)のノードは `is-current` クラスで gold + glow パルス強調

### Access の地図
- Google Maps 連携は未実装、暫定で松本本店外観画像を使用
- HTML に `<!-- TODO: Google Maps スタティック地図差し替え -->` コメント
- 「Google Map で開く」ボタンは `href="#"` 暫定

### 控えめなアニメーション
- 過剰演出を避け、Hero の章ラベル・タイトル・サブのみ stagger フェード
- Overview / History / Access はスクロールトリガーの fade-up のみ(ワイヤー指示通り)

## 課題・申し送り事項

- 代表者氏名・住所・資本金・従業員数は架空値・ダミー(企画書通り)
- 取引銀行は架空(暫定)
- Google Map iframe / Static API は未連携
- WebP 未変換

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ワイヤー準拠。コーポレート情報の信頼感を控えめなアニメーションで担保、過剰演出なし。

### 基準2: コード品質 / 10
最もセマンティックに書けるページ(dl/dt/dd, ol/li, time)を活用。BEM 命名統一。

### 基準3: パフォーマンス / 9
画像最小限(地図のみ)、lazy load。控えめアニメで GPU 負荷低い。WebP 未変換で -1。

### 基準4: アクセシビリティ / 9
- 全画像 alt
- aria-labelledby
- ランドマーク + skip-link
- フォーカスリング・コントラスト AA
- nav に aria-current="page" は未付与(現状はナビ未掲載のため)

### 基準5: レスポンシブ対応 / 9
1280:2列表, 50/50 アクセス / 1024:アクセス縦積み / 768:表1列化, dl 縦積み

### 合計: 46 / 50 — 合格(優秀)
