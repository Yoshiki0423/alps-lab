# SERVICES/GYM `/services/gym/` 実装ログ

## 実装した内容

### ファイル
- `services/gym.html`(直接アクセス用)
- `services/gym/index.html`(クリーン URL `/services/gym/` 用、内容は同一)
- `assets/css/pages/services_gym.css`
- `assets/js/components/faq-accordion.js`(FAQ アコーディオン)
- `assets/js/animations.js` 内の GYM 専用 GSAP timeline(`data-page="gym"`)

### セクション(9つ)
1. Header(共通)
2. Hero — 動画/静止画背景 + 中央コピー / 100vh
3. Concept — 「自由 vs 結果」二項対立 + ハイブリッド宣言
4. Facilities — 6施設グリッド(FREE WEIGHT / MACHINES / STUDIO / PERSONAL BOOTH / LOCKER / LOUNGE)
5. Pricing — 3プラン(LIGHT / **STANDARD** / PREMIUM)、STANDARD は gold 枠+glow パルスで強調
6. Trainers(親しみゾーン)— 3名(山田・佐々木・中村)、セピア → カラーのホバー演出
7. Flow — 4ステップ(STEP 01〜04)、PC は横並び矢印・モバイルは縦並び下矢印
8. FAQ — 5問のアコーディオン
9. Final CTA(共通)+ Footer(共通)

### 不変制約の遵守
- 料金プラン金額は変更なし(LIGHT ¥8,800 / STANDARD ¥14,800 / PREMIUM ¥22,800)
- ブランド名・事業構成・色・フォントは tokens.css 経由で死守

## 判断した点(なぜそうしたか)

### Hero の動画暫定対応
- 動画素材未調達のため `<img>` ポスター画像で代用
- HTML に `<!-- TODO: 動画素材調達後、<img> を <video autoplay muted loop playsinline> に置き換え -->` を明示

### Pricing STANDARD の glow パルス
- Designer から「`@keyframes glow-pulse` で軽く実装すれば十分」との申し送りを受けて実装
- `@keyframes glowPulse` で 4s ループ・`box-shadow` の透明度のみを変化させる軽量実装
- タブレット以下では順序を入れ替え(`order: -1`)、glow パルスを停止(`animation: none`)

### FAQ アコーディオン
- `<button>` を使い、`aria-expanded` を JS で同期
- max-height トランジションで開閉(視覚的アニメーション)
- 装飾アイコン(+/−)は CSS の `::before`/`::after` で実装、装飾なので `aria-hidden`

### Trainers の親しみゾーン
- `--color-bg-soft` (#F5F5F0) 背景に切替、上端に gradient 80px のトランジションを置いてハードな境界を回避
- 章ラベルとサブを `--color-accent-gold-dim` / `rgba(26,26,26,0.6)` に変更

### Flow をリスト要素に
- `<ol>` + `<li>` でセマンティックに(ステップ順序を意味的に表現)

## 課題・申し送り事項
- Hero 動画(GYM 用)未調達、後で `<video>` に差し替え
- トレーナー画像はユーザー候補(`★_male_blue_shirt_06.jpg` 含む)から選定。実トレーナーが決まったら差し替え
- ジム施設画像 6枚は Designer Agent picks の `DA_gym_facility_*.jpg` を流用。実店舗写真があれば差し替え
- 住所(`長野県松本市××` 等)はダミー
- 最低契約期間「ありません」と FAQ に明記。営業面と齟齬がないか要確認

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
モックの構造を踏襲。STANDARD プランの glow・gold 枠・リボン演出をすべて実装。Trainers の親しみゾーンも限定使用ルールを守った。

### 基準2: コード品質 / 9
セマンティック HTML(`<ol>` を Flow に・`<button type="button">` を FAQ に)。CSS 変数活用。BEM。GSAP は `data-page` 分岐で他ページと共存。

### 基準3: パフォーマンス / 8
画像は lazy load・width/height 属性。動画は静止画代用で軽量。FAQ アコーディオンは max-height だけで実装、JS は最小限。

### 基準4: アクセシビリティ / 9
- FAQ:button + aria-expanded
- 全画像 alt
- フォーカスリング
- 装飾要素 aria-hidden
- nav に `aria-current="page"`

### 基準5: レスポンシブ対応 / 9
- 1280:3カラム pricing(STANDARD 拡大)
- 1024:Pricing 1カラム化、STANDARD を最上段、Facilities 2カラム、Flow 縦並び+下矢印
- 768:Facilities/Trainers 単列・モバイルメニュー
- 480:Trainers 1カラム

### 合計: 44 / 50 — 合格
