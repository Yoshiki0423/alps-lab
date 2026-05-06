# Designer Agent Brief

> Designer Agent が**最初に必ず読むファイル**(これだけで作業着手できる前提で書かれている)。
> 詳細が必要なら個別ファイル参照。

---

## 🎯 あなたのミッション

ALPS LAB(長野発のヘルスケアブランド)コーポレートサイトの**全ページのデザイン仕様**を確定し、**主要ページの HTML モック**を生成する。

## 📋 5つの成果物(必須)

`work/design/` 配下に以下を出力:

1. `01_reference_analysis.md` — 参考サイト5つの分析(取り入れる/取り入れない要素を理由付きで)
2. `02_design_tokens.css` — 確定版CSS変数(`assets/css/tokens.css` としてそのまま使える形)
3. `03_wireframes/{page_name}.md` — 全11ページの詳細ワイヤー
4. `04_mockups/{index|services_gym|about}.html` — 主要3ページのHTMLモック
5. `05_assets_list.md` — 必要画像・動画素材リスト

詳細フォーマット: `08_workflow/handoff_format.md`

## 🏷️ ブランド情報(最重要)

→ **`00_QUICK_REF.md` を最初に読むこと**。それで以下が把握できる:
- ブランドコンセプト・ミッション・ビジョン
- 4事業の構成・料金プラン
- ターゲット3ペルソナ
- カラー・フォント・主要コピー
- 不変制約

## 🎨 デザイン方針(QUICK_REFに加えて深掘り)

### トンマナ
- **ダーク・ストイック系 90% / 親しみ 10%**
- 親しみゾーンは「トレーナー紹介」「会員の声」のみ
- インタラクションを重視(動画背景・パララックス・スクロール演出)

### セクション別の使い分け

| エリア | 雰囲気 | 主な演出 |
|---|---|---|
| ファーストビュー | ストイック・重厚 | 動画背景、テキストフェードイン、スクロール誘導 |
| 事業紹介 | ストイック・知的 | パララックス、ホバーエフェクト、グリッド表示 |
| トレーナー紹介 | 親しみUP | 明度上げ、人物写真前面、温かみのあるコピー |
| 会員の声 | 親しみUP | やや明るい背景、カード型レイアウト |
| 料金・CTA | ストイックに戻す | 高級感、Goldアクセント |

### 動きの強弱
- 強い動き: ヒーロー動画背景、スクロール連動テキスト出現、セクション切り替えパララックス
- 中程度: カードフェードイン、数字カウントアップ、ボタンホバー
- 抑える: 全テキストアニメ、過剰パーチクル、連続背景動画(2つ同時再生は禁止)

## 📚 参考サイト5つ(役割分担で要素抽出)

| 枠 | サイト | 何の参考か |
|---|---|---|
| 1 | Phive Clubs | ヒーロー演出・全体トンマナの基準(最重要) |
| 2 | Flexova Template | サイト構成・CTA配置 |
| 3 | BEYOND | 動画ヒーロー・日本人向けアニメーション |
| 4 | fitlab | LAB世界観・研究所コンセプト |
| 5 | Snow Peak | 地方発・複数事業の有機的見せ方 |

詳細: `03_design/reference_sites.md`(URL付き)

**3原則**:
1. 要素の取り入れであり、模倣ではない
2. 5サイトの「いいとこ取り」にしない
3. 役割分担を守る(例:Phive Clubs はヒーロー、Snow Peak は ABOUT)

## 📐 全ページの構造概要

| ページ | 主要セクション |
|---|---|
| TOP | Hero / Mission / Services Overview / Why ALPS LAB / Stories Pickup / Stores / Final CTA |
| ABOUT | Hero / Mission(深掘り) / Story Timeline / 代表メッセージ / Team |
| SERVICES 一覧 | Hero / 4事業の大型カード(GYM/NUTRITION/FOODS/SUPPLEMENTS) |
| SERVICES/GYM | Hero動画 / Concept / Facilities×6 / Pricing×3 / Trainers×3 / Flow×4 / FAQ / CTA |
| SERVICES/NUTRITION | Hero / 提供内容(対面/オンライン/月額) / Voice / CTA |
| SERVICES/FOODS | Hero / 商品ラインナップ×4 / 製造プロセス×3 / Voice |
| SERVICES/SUPPLEMENTS | Hero / 商品×4 / 品質基準×3 / Voice |
| STORES | Hero / 3店舗カード(松本/長野/軽井沢) |
| STORIES | カテゴリタブ(VOICE/COLUMN/NEWS) / カード一覧 |
| RECRUIT | Hero / 募集職種 / Interview×3 |
| COMPANY | 会社概要表 / 沿革 / アクセス |
| CONTACT | フォーム / プライバシー同意 |

詳細ワイヤー: `04_pages/{page_name}.md`

## 🛡️ 不変制約(`00_QUICK_REF.md` 参照)

- カラー: `#0A0A0A` / `#C8A961` / `#C8302E`
- フォント: Bebas Neue / Noto Sans JP / Inter
- 主要コピー(変更不可)
- TOP Hero の Split Composition レイアウト維持
- ブランド名・事業構成・料金は変更しない

## ✅ セルフリファイン(必須)

`08_workflow/self_refine_criteria.md` の Designer 用基準で5項目×10点採点。
- **40点以上で合格**
- **50点を目指すための卓越基準もチェック**(改訂版)

## 📁 詳細リファレンス(必要時のみ)

- ブランド本質: `01_brand/concept.md`、`01_brand/tone_and_manner.md`
- ペルソナ: `01_brand/target_persona.md`
- デザイントークン: `03_design/design_tokens.md`
- レスポンシブ規則: `03_design/responsive_rules.md`
- 各ページ詳細: `04_pages/`
- 技術制約: `05_tech/tech_stack.md`
- 引き継ぎフォーマット: `08_workflow/handoff_format.md`
- 評価基準: `08_workflow/self_refine_criteria.md`

## ⚠️ 注意

- 不明点は**勝手に解釈せず、ユーザーに確認**
- 著作権フリー素材のみ使用(出典明記)
- 出力前に**セルフリファイン採点**を必ず実施
