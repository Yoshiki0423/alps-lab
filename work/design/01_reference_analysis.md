# 参考サイト分析レポート

> 5つの参考サイトから「ALPS LAB に取り入れる要素」と「取り入れない要素」を切り分け、
> 各サイトを「いいとこ取り」ではなく**役割分担**として再構成する。
>
> 上位制約: `03_design/mockups/DECISION_NOTES.md` の「Split Composition / NATURE × BODY」が
> TOPファーストビューの確定方向性。本分析はその方向性を補強・具体化する目的で行う。

---

## サイト1: Phive Clubs(最重要参考)

**役割**: TOPファーストビュー・全体トンマナの基準

### 取り入れる要素(5項目)

1. **章番号タイポ「I. / II.」** → DECISION_NOTES の左右章番号(I. NATURE / II. BODY)に直結。
   ゴールド細字で配置し、ブランドの「研究」=章立てされた知的構造を表現する。
2. **大型 condensed sans-serif の見出し** → Bebas Neue で `RESEARCH THE TRUTH OF HEALTH.` を画面中央に配置。文字間隔は広めに(letter-spacing: 0.04em)。
3. **底部の細字インデックス(店舗・章番号)** → DECISION_NOTES の「01 GYM / 02 NUTRITION / 03 FOODS / 04 SUPPLEMENTS」横並びに転用。
4. **黒8〜9割+ゴールド3〜5%+赤1〜3%の色比率** → ALPS LAB のカラー比率と完全一致。
5. **スクロール時のヘッダー背景フェード**(透過→ソリッド黒) → 全ページ共通ヘッダーで採用。

### 取り入れない要素(理由付き)

- **過度なエフェクトトランジション**(WebGLのシェーダー的な歪み演出)
  → 課題条件 GSAP のみ・実装コスト高・モバイルパフォーマンス悪化のため見送る。
- **多言語切替UI** → スコープ外。
- **会員ログイン導線をヘッダー前面に出す** → ALPS LAB は会員サイトを持たないため不要。

### ALPS LAB への応用案

- **TOP `/` Section 1 (Hero)**: Split Composition そのもの(DECISION_NOTES準拠)
- **全ページのヘッダー挙動**: 透過→スクロール 80px 以降で `--color-bg-primary` 90% 不透明に変化(GSAP ScrollTrigger)
- **TOP `/` Section 4 (Why ALPS LAB)**: 「I. RESEARCH FIRST / II. LONG-TERM / III. LOCAL & AUTHENTIC」と章番号で見せる(Phive流の構造を Why セクションに展開)

---

## サイト2: Flexova Template(構成参考)

**役割**: ページレイアウト構造・CTA配置の設計

### 取り入れる要素(4項目)

1. **「事業カードの左右交互配置」** → SERVICES `/services` の事業カード4つを画像と文字エリア左右交互に並べる(Snow Peakの複数事業有機展開と相性が良い)。
2. **料金カードの「中央のみ拡大+ゴールド枠線」強調** → SERVICES/GYM の STANDARD プランで採用(枠 +20% / `--shadow-glow-gold`)。
3. **フッター直前の Final CTA セクション(60vh)** → 全11ページ共通で採用。
4. **STEP 1〜4 の横並びフロー表現** → SERVICES/GYM の利用フロー、ABOUT のタイムラインの一部に転用。

### 取り入れない要素

- **明るい背景の Pricing セクション** → ALPS LAB は黒基調で統一するため、背景は黒のままゴールド枠線で差別化。
- **派手なグラデーション CTA ボタン** → 単色の `--color-accent-red` で十分強い。安っぽくなるため使わない。

### ALPS LAB への応用案

- **SERVICES `/services` Section 2 (Cards)**: 横長カード×4、左右交互、ホバーで画像 1.05倍ズーム
- **SERVICES/GYM `/services/gym` Section 4 (Pricing)**: 3カラム、STANDARD のみ強調
- **全ページ Final CTA**: 60vh、黒地+赤グラデーション(右下から左上へ斜め30%)+大型 CTA ボタン

---

## サイト3: BEYOND(国内パーソナルジム)

**役割**: 動画ヒーロー演出・日本語タイポグラフィの粒度

### 取り入れる要素(3項目)

1. **動画の「ループ短尺・3〜5秒・低彩度グレーディング」** → DECISION_NOTES の右側 BODY エリアに 3〜5秒ループ動画を配置(モバイルは静止画にフォールバック)。
2. **日本語タイポと英語タイポのスケール差**(英語が日本語の2倍程度大きい) → ヒーロー: 英語 96px / 日本語 32px(`design_tokens.md` の規定通り)。
3. **スクロール連動の見出しフェードイン**(下から数px+opacity 0→1) → Mission, Why, Story 等の主要見出しに統一適用。

### 取り入れない要素

- **白基調のセクション(明るすぎる)** → 配色は反転して採用。ALPS LAB は黒基調を死守。
- **過度な文字エフェクト**(1文字ずつバラバラに動く) → うるさくなるため、ブロック単位のフェードに留める。
- **キービジュアルでの会員数アピール** → 02_strategy/design_decision_axis.md で禁止されている。

### ALPS LAB への応用案

- **TOP `/` Section 1 (Hero) 右側 BODY エリア**: トレーニング映像 5秒ループ、彩度 -30% / コントラスト +10% でモノトーン寄せ
- **TOP `/` Section 1 左側 NATURE エリア**: 北アルプス静止画 + CSS の `transform: translateZ()` パララックス、または霧の動画を低速再生(2倍スロー)
- **モバイル**: 両側とも静止画ポスターに切替(`<video>` を `display: none`)

---

## サイト4: fitlab(LAB世界観のヒント)

**役割**: 「研究所」コンセプトの視覚化・知的トーン

### 取り入れる要素(3項目)

1. **「LAB / RESEARCH」の語彙を視覚的に活かす**(章番号・データ的な小数表記・アルファベット略号) → 全ページで `RESEARCH N°01` / `FIELD 02` 等のラベルを部分採用。
2. **データ表現的な等幅フォントの装飾**(小さく、控えめに) → Inter の medium ウェイトで `LAT. 36.2°N / LON. 137.9°E` のような長野の地理座標を Hero 隅に小さく配置(知的・研究感の演出)。
3. **モノクロ寄りの人物写真+ゴールドの細い罫線** → ABOUT の Team セクション、Trainer 紹介で採用。

### 取り入れない要素

- **データダッシュボード的なUI**(数値表・グラフ過多) → コーポレートサイトではなくWebアプリに見えてしまうため、要素のみ抽出して装飾レベルに留める。
- **無機質な研究室写真**(白衣・ビーカー) → ALPS LAB は身体性も同等に重要。fitlab の「無機質さ」に振りすぎない。

### ALPS LAB への応用案

- **TOP `/` Section 1 (Hero) 左下**: `LAT. 36.2°N / LON. 137.9°E — NAGANO, JP` を Inter 12px ゴールド系で配置
- **ABOUT `/about` Section 2 (Mission/Vision/Values)**: 各項目に `MISSION 01 / VISION 02 / VALUES 03` の章番号を付与
- **SERVICES `/services` Hero**: `FOUR RESEARCH FIELDS / N°01–04` の見出し
- **SERVICES/GYM `/services/gym` Section 3 (Facilities)**: 各設備写真に `FACILITY 01: FREE WEIGHT AREA` 等の英語ラベル

---

## サイト5: Snow Peak(日本×自然×ブランド世界観)

**役割**: 地方発・自然・複数事業の有機的統合

### 取り入れる要素(4項目)

1. **地方発のブランドストーリーを「土地の写真」と「土地の言葉」で語る** → ABOUT のヒーローと Story タイムラインで、北アルプスの実写と長野の地名・年表を併用。
2. **複数事業を「世界観」で包む(料金の前面に出さない)** → SERVICES トップは料金情報を一切載せず、4事業の「研究領域」としての顔だけ見せる。
3. **余白の使い方(セクション間に `--space-2xl` = 192px 級の大きな余白)** → 全ページ共通でセクション間余白を `--space-xl` 〜 `--space-2xl` 確保し、品格を担保。
4. **フッターの3〜4カラム構成+ブランドコピー再掲** → `04_pages/_common.md` の規定通り採用。

### 取り入れない要素

- **暖色寄りのアウトドア感**(オレンジ・ブラウン系) → ALPS LAB は黒×ゴールド×赤で統一するため不採用。
- **手書き文字風の見出し** → ストイック路線と矛盾するため不採用。

### ALPS LAB への応用案

- **ABOUT `/about` Section 1 (Hero)**: 北アルプス山岳写真フルブリード+`Research the truth of health` 中央配置、下部に `FROM NAGANO, JAPAN` 細字
- **ABOUT `/about` Section 3 (Story)**: 縦タイムライン、各年に長野の風景写真をサムネイル添付
- **SERVICES `/services` Section 3 (Connection Diagram)**: 4事業を矢印フローで「会員の健康をワンストップで支える有機的関係」として図解
- **全ページのセクション余白**: PC `--space-xl`(128px) / モバイル `--space-lg`(64px)

---

## 5サイトの役割サマリー(独自世界観への統合マップ)

| 役割領域 | 主担当サイト | ALPS LAB での落とし所 |
|---|---|---|
| TOP Hero の構図 | DECISION_NOTES(確定) | Split Composition「NATURE × BODY」 |
| TOP Hero のディテール | Phive Clubs | 章番号 I./II. + 底部事業インデックス + ゴールド細字 |
| TOP Hero の動画演出 | BEYOND | 右側 BODY のみ 5秒ループ、彩度低めグレーディング |
| 全体カラー比率 | Phive Clubs | 黒90% / ゴールド3-5% / 赤1-3% |
| ページ構成・CTA配置 | Flexova | 横長カード左右交互 / 中央のみ強調 / 60vh Final CTA |
| Pricing | Flexova | STANDARD のみ枠拡大+ゴールド glow |
| 「LAB」表現 | fitlab | 章番号 + 地理座標 + 英語ラベルの装飾使い |
| ABOUT の語り口 | Snow Peak | 土地の写真+年表+品格ある余白 |
| 複数事業の見せ方 | Snow Peak | 料金を前面に出さず「4つの研究領域」として統合 |
| 親しみゾーン(Trainer/Voice) | (独自) | `--color-bg-soft` への背景切替で「光が差す」演出 |

---

## ALPS LAB 独自要素(参考サイトのいずれにもない、独自性の核)

1. **Split Composition の「左=自然 / 右=身体」中央でブランドコピーが両者を結ぶ構図**
   - Phive Clubs にも fitlab にもない、ALPS LAB だけの「自然と身体の対比+統合」表現
2. **章番号「I. NATURE / II. BODY」の世界観そのものをブランド構造に拡張**
   - Why セクションも「I. RESEARCH FIRST / II. LONG-TERM / III. LOCAL & AUTHENTIC」と章立てし、サイト全体を「研究レポート」のように構成
3. **長野の地理座標(LAT. 36.2°N / LON. 137.9°E)を装飾として配置**
   - 「長野発」を抽象化せず、座標で具体化する知的演出
4. **親しみゾーン(`--color-bg-soft`)を意図的に1〜2セクションだけに限定**
   - Snow Peak のような暖色全面ではなく、「ストイックな夜の中の、ひとすじの光」として配置(Trainer / Voice / Stories Pickup)

---

## 参考にする際の3原則(再確認)

1. **要素の取り入れであり、模倣ではない** — 各サイトから3〜5要素のみ抽出
2. **5サイトの「いいとこ取り」にしない** — 上記の役割分担を厳守
3. **ALPS LAB 独自要素**(上記4項目)を必ず差し込み、独自性の核を作る
