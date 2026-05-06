# STORES `/stores/` 実装ログ

## 実装した内容

### ファイル
- `stores/index.html`
- `assets/css/pages/stores.css`
- `assets/js/animations.js` 内の `page === "stores"` 分岐 Hero タイムライン

### セクション
1. Header
2. Hero(60vh)— 北アルプス遠景背景 + 「THREE LOCATIONS IN NAGANO.」+ 章ラベル + 底部「松本 / 長野 / 軽井沢 + 座標」
3. Store 01 松本本店(80vh、画像左 / 情報右)
4. Store 02 長野店(80vh、画像右 / 情報左、左右反転)
5. Store 03 軽井沢店(80vh、画像左 / 情報右、松本と同型)
6. Coming Soon(拡大予定:UEDA / SUWA / TOKYO / YOKOHAMA)
7. Final CTA + Footer

### 不変制約の遵守
- 色・フォント・コピー、3店舗構成は仕様通り

## 判断した点

### ダミー住所と TODO コメント
- 各店舗の住所は `××` のままダミー(企画書通り)
- HTML には実住所要確認のコメントを `(実住所要確認)` として明記
- Google Map ボタンは `href="#"` で暫定、地図画像は店舗外観で代用(`<!-- TODO: Google Maps スタティック地図差し替え -->` コメント済)

### dl による情報リスト
- 住所・電話・営業時間・アクセス・主要設備は `<dl>` でセマンティック表現
- 左カラム(項目名)は font-en + gold-dim、右カラム(値)は font-jp で対比

### ボタン2種
- 「Google Map で開く」(gold枠線、ホバーで gold塗り+黒文字)
- 「体験予約」(red塗り、ホバーで glow + transform)

## 課題・申し送り事項

- 実住所が確定したらすべての `××` と `〒390-0XXX` 等を差し替え
- Google Maps スタティック地図 API 連携が必要(または埋め込み iframe)
- 店舗外観写真は Designer picks 流用、実店舗写真があれば差し替え

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ワイヤー通り 50/50 横分割 + 左右交互配置 + 偶数番店舗の bg-secondary。

### 基準2: コード品質 / 9
セマンティック(`<dl>`, `<section id>`)。BEM。modifiers (--alt, --reverse) で偶数番店舗の見た目分岐。

### 基準3: パフォーマンス / 8
lazy load + width/height + Hero eager + fetchpriority="high"。WebP 未変換で -1。

### 基準4: アクセシビリティ / 9
- 各 store-section に `id` (matsumoto/nagano/karuizawa) と `aria-labelledby`
- ランドマーク + skip-link
- nav に aria-current="page"
- Store のリンクボタンに aria-label

### 基準5: レスポンシブ対応 / 9
1280:50/50 横並び・左右交互 / 1024:1カラム縦(画像上→情報下) / 768:dl が1カラム化

### 合計: 44 / 50 — 合格
