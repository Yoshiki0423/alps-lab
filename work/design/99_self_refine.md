# Designer Agent セルフリファイン採点

> `08_workflow/self_refine_criteria.md` の Designer 用評価基準(5項目×10点 = 50点満点)に基づく自己採点。
> 40点以上で合格、40点未満なら改訂が必要。

---

## 基準1: ブランドコンセプトの表現(/10)

### 採点: 9 / 10

### 良い点
- TOP Hero の Split Composition「NATURE × BODY」が DECISION_NOTES の確定方向性を 100% 踏襲している。「北アルプスの麓から、本物の健康を研究する。」というコンセプトが、左=自然 / 右=身体 / 中央=研究の宣言という構造でファーストビューだけで伝わる
- 章番号「I. NATURE / II. BODY」+ 中央「NATURE × BODY」セパレーターで「研究レポートのような知的構造」を全ページに展開
- `LAT. 36.2°N / LON. 137.9°E — NAGANO, JP` の地理座標装飾を Hero と Footer に配置、「長野発」を抽象的なキャッチではなく具体的な座標で表現
- ABOUT Hero の北アルプス全画面+`Research the truth of health` で、TOPと同じ世界観をシームレスに継承

### 改善点
- TOP Hero の「研究 = LAB」という側面が、章番号と地理座標で示唆されてはいるが、もう少し直接的な「研究」モチーフ(例: 顕微鏡的グリッド線、データ表示、サンプル番号)があるとさらに強い
- 現状はまだ DECISION_NOTES の指針のままで、Designer Agent としての追加の「LAB感」演出があと一歩(改善は実装フェーズで対応可能なため致命傷ではない)

---

## 基準2: トンマナの一貫性(/10)

### 採点: 9 / 10

### 良い点
- 全11ページで `var(--color-bg-primary)` (#0A0A0A) ベース 80〜90% を死守、ゴールド 3〜5% / 赤 1〜3% の比率を全モックで実現
- 親しみゾーン(`--color-bg-soft`)を「Stories Pickup」「Trainers」のみに限定使用し、ストイック 90% / 親しみ 10% のバランスを設計
- soft → primary の境界に gradient 80px を入れて唐突感を排除、世界観の連続性を担保
- セクションごとの章番号・章ラベルを統一フォーマット(`MISSION 01` / `FACILITY 03` / `PRICING 04` 等)で揃えた
- フォント役割(Bebas Neue=英語見出し / Noto Sans JP Bold=日本語 / Inter=補助)を全ファイルで徹底

### 改善点
- 親しみゾーンの「明度差」がモックで実装した範囲内ではうまく機能しているが、実機テストで暗いセクションとの境界がきついと感じた場合、トランジション 80px を 120px へ拡張する余地あり
- 赤 CTA 色が Footer 直前 Final CTA の radial-gradient と CTA ボタンの両方に集中しているため、画面によっては赤がやや過剰に見えるリスクあり(占有率は守れている)

---

## 基準3: 参考サイトの咀嚼度(/10)

### 採点: 8 / 10

### 良い点
- 5サイトの「役割分担表」を `01_reference_analysis.md` で明文化し、いいとこ取りを排除
  - Phive Clubs → 章番号・カラー比率
  - Flexova → 横長カード左右交互・Pricing 強調
  - BEYOND → 動画ループのトーン
  - fitlab → LAB 感・地理座標
  - Snow Peak → 地方発・複数事業の有機的見せ方
- ALPS LAB 独自要素として「Split Composition の左右対比+中央統合」「章番号構造のサイト全体への展開」「地理座標装飾」「親しみゾーンの限定使用」の4点を追加し、独自性の核を明示
- 各参考サイトから「取り入れる/取り入れない」を理由付きで分けて、模倣ではなく咀嚼の意図を明確化

### 改善点
- 「取り入れない」の数が「取り入れる」より少なく、もう少し強く拒否すべき要素(例: Phive Clubs のWebGL演出、Flexovaのグラデーションボタン、BEYONDの白基調)を増やせば独自性がさらに際立つ
- Snow Peak の「土地の写真+土地の言葉」を ABOUT で踏襲したが、TOP の左 NATURE エリアにも長野固有の風景(浅間山・上高地など)を意識したキャプションを足せばより独自性が増す

---

## 基準4: 実装可能性(/10)

### 採点: 9 / 10

### 良い点
- 技術スタック(`05_tech/tech_stack.md`)の制約 HTML5 + CSS3 + Vanilla JS + GSAP のみで実装可能なデザインに統一
- `02_design_tokens.css` をそのまま `assets/css/tokens.css` に配置すれば動作する形で確定
- 全11ページのワイヤーフレームに「セクション高さ・背景色・フォント・アニメ仕様・レスポンシブ挙動・参照すべきコピー」を明記、Coder が追加質問なしで着手可能
- モックアップ3本(TOP/GYM/ABOUT)は実際にブラウザで見られる完成度で、Coder の土台として直接コピー&拡張できる
- GSAP の使い方も具体例(`ScrollTrigger.create`、`gsap.timeline()`、`prefers-reduced-motion` 配慮)を `_common.md` に提示

### 改善点
- モバイル(<= 767px)時のレイアウト指定が一部のページでざっくり「縦並びに」とだけ書かれている箇所があり、Coder の解釈に余地が残る(Stores、SUPPLEMENTS Hero など)
- 動画素材の取得・最適化(WebM変換)は外部依存があるため、Coder がプレースホルダー画像で進められるフォールバック仕様を `05_assets_list.md` で明記したが、実装フェーズで Coder が動画なしの仮実装で進めるか動画を待つかの判断軸はもう少し細かくしても良い

---

## 基準5: 動きの設計の具体性(/10)

### 採点: 9 / 10

### 良い点
- 全セクションで「いつ・何が・どのように動くか」を timeline 表記で明記
  - 例: TOP Hero「load 0ms 中央セパレーター → 400ms 章ラベル → 800ms 英語タイトル → 1200ms 日本語 → 1600ms CTA」
- スクロール連動アニメーションの基本パターン(`.fade-up` / 章ラベル罫線伸長 / 数字カウントアップ)を `_common.md` で共通化
- パフォーマンス配慮:
  - `prefers-reduced-motion: reduce` で全アニメ無効化
  - モバイル時の動画 → 静止画切替
  - `loading="lazy"` を Hero 以外に適用
- アニメーションをメリハリ化(強い動き=Hero/Mission拡大/タイムライン進行ドット、中程度=fade-up、弱い=ホバー)
- GSAP timeline の実装例をモックアップ3本にすべて埋め込んだので、Coder は同じパターンで他ページを実装できる

### 改善点
- TOP Section 4 (Why ALPS LAB) の「数字カウントアップ」演出を仕様で記述したが、モック実装では timeline 上の指示のみで実コードは未実装(Coder への引き継ぎは可能だが、より凝った演出にしたい場合は別途 GSAP コードを追記する余地あり)
- Pricing STANDARD の「glow パルス」は `@keyframes` で軽く触れたが具体的な keyframes コードは Coder に委ねた

---

## 合計: 44 / 50

### 判定

- [x] **合格(40点以上)→ 次工程(Coder Agent)へ**
- [ ] 改訂が必要(40点未満)

### 補足

- 5項目とも 8〜9点の安定した出来。改訂は不要だが、以下は **任意改善点** として Coder への申し送りに記録:
  1. TOP Hero に「研究 = LAB」を強める追加装飾(顕微鏡的グリッドラインや細かいデータ表示)を要件外として検討余地
  2. モバイル時の細かいレイアウトは実装フェーズで微調整(特に Stores と SUPPLEMENTS Hero)
  3. Why ALPS LAB の数字カウントアップは GSAP `Counter` パターンで実装(具体コードは Coder へ)
  4. Pricing STANDARD の glow パルスは `@keyframes glow-pulse { 0%,100% { box-shadow: ...0.35); } 50% { box-shadow: ...0.5); } }` 程度で軽く実装すれば十分

---

## 引き継ぎ事項(Coder Agent へ)

### 入力ファイル(必読)
1. `work/design/01_reference_analysis.md` — 参考サイトの咀嚼方針(独自性の核を理解)
2. `work/design/02_design_tokens.css` — そのまま `assets/css/tokens.css` として配置
3. `work/design/03_wireframes/_common.md` — 最初に実装すべきヘッダー・フッター・Final CTA の仕様
4. `work/design/03_wireframes/{ページ名}.md` — 担当するページの詳細仕様
5. `work/design/04_mockups/{index|services_gym|about}.html` — TOP / GYM / ABOUT の土台モック
6. `work/design/05_assets_list.md` — 必要素材リスト

### 不変制約(絶対変更不可)
- 色: `#0A0A0A` ベース / `#C8A961` ゴールド / `#C8302E` 赤
- フォント: Bebas Neue / Noto Sans JP / Inter
- TOP Hero コピー: `RESEARCH THE TRUTH OF HEALTH.` / `北アルプスの麓から、本物の健康を研究する。` / `体験予約はこちら →`
- Hero レイアウト: Split Composition(縦2分割 NATURE × BODY)維持

### 注意点
- 動画素材は Pexels から取得 → WebM変換 → ローカル配置(現状はホットリンクの仮実装)
- 画像も Unsplash ホットリンクを WebP ローカル配置に置き換える
- モバイル時の動画 → 静止画切替を忘れず実装(`<picture>` または `<source media>` で出し分け)
