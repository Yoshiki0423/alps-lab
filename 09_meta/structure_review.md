# ファイル構造とトークン効率の分析・改善案

> 作成: 2026-05-05 / 評価者: Claude Opus 4.7
> 対象: ALPS LAB プロジェクトのファイル/フォルダ構造
> 目的: 次回プロジェクト(およびこれから AI と協働する全てのドキュメント志向プロジェクト)への雛形提供

---

## このドキュメントの使い方

### あなたが新規プロジェクトを始めるとき
**第三部の「次回プロジェクトの理想構造テンプレート」**をそのままコピーして雛形にしてください。

### あなたが AI(Claude 等)に新規プロジェクトの構造設計を相談するとき
**このファイル全体を渡せば**、ALPS LAB から学んだ反省・改善案がそのまま伝わります。

### あなたが既存プロジェクトをリファクタリングするとき
**第二部の「3つの非効率」と第四部の「優先度別改善ステップ」**を参考に段階的に直してください。

---

# 第一部:実測データ(ALPS LAB の構造)

## カテゴリ別ボリューム

| フォルダ | ファイル数 | 行数合計 | 評価 |
|---|---:|---:|---|
| `01_brand/` | 4 | 320 | 適正 |
| `02_strategy/` | 3 | 180 | 適正 |
| `03_design/`(MDのみ) | 3 | 340 | 適正 |
| **`04_pages/`** | **13** | **1,052** | **過多気味**(最重) |
| `05_tech/` | 3 | 239 | 適正 |
| `06_content/` | 8 | 355 | 適正 |
| `07_agents/` | 4 | 295 | 1ファイル(pm_agent.md)未使用 |
| `08_workflow/` | 3 | 327 | 適正 |
| `09_meta/`(初期) | 3 | 116 | 適正(final_review/structure_review追加で増) |

**合計**:約 3,224 行(初期状態。final_review.md / structure_review.md は事後追加)

## 個別ファイルの行数 TOP 10

| # | ファイル | 行数 |
|---:|---|---:|
| 1 | `04_pages/top.md` | 157 |
| 2 | `04_pages/services_gym.md` | 150 |
| 3 | `03_design/design_tokens.md` | 147 |
| 4 | `08_workflow/handoff_format.md` | 146 |
| 5 | `04_pages/_common.md` | 122 |
| 6 | `03_design/reference_sites.md` | 118 |
| 7 | `04_pages/about.md` | 108 |
| 8 | `07_agents/reviewer_agent.md` | 106 |
| 9 | `01_brand/tone_and_manner.md` | 106 |
| 10 | `01_brand/target_persona.md` | 102 |

## エージェント別の必読量(実測)

| エージェント | 読み込み行数 | 推定トークン(日本語/英語混在で 20 トークン/行と仮定) |
|---|---:|---:|
| Designer Agent(全必読) | **2,453行** | **約 49,000 トークン** |
| Coder Agent(1ページ実装) | 1,414行 | 約 28,000 トークン |
| Reviewer Agent(1ページ評価) | 約 600行 | 約 12,000 トークン |

→ Designer Agent は1回起動で**約5万トークン消費**。プロジェクト全体で複数回走るとオーダー単位で膨らむ。

---

# 第二部:検出した3つの非効率

## 非効率 1:**情報の重複**(Single Source of Truth 違反)

同じ事実が複数ファイルに分散している。実測:

| キーワード | 出現ファイル数 | 問題 |
|---|---:|---|
| 「北アルプス」 | **11** | ブランドコンセプトが各所に散在 |
| 「研究員」 | **10** | 同上 |
| 「8,800円」(料金) | **7** | **料金変更時に7ヶ所修正が必要** |
| 「3年で痩せる」(コピー) | 3 | コピー変更時の同期漏れリスク |
| 「#0A0A0A」(カラー) | **5** | デザイントークンの矛盾リスク |

### なぜ問題か
- **保守性の悪化**: 1事実を変更すると複数ファイル修正が必要 → 同期漏れバグの温床
- **AI のトークン無駄遣い**: 同じ事実を何度も読み込む
- **AI の混乱**: ファイル間で記述が微妙に違うと、どれが正解か判断できない

### 改善
**Single Source of Truth(真実は1ヶ所だけに)**。
- 料金 → `02_strategy/service_pricing.md` のみに記載
- カラー → `03_design/design_tokens.md` のみに記載
- 他のファイルは参照表記のみ:「料金詳細は `service_pricing.md` 参照」

## 非効率 2:**「クイックリファレンス」の不在**

各エージェントが起動するたびに、8〜10ファイルを最初から読み込む。

### 現状の Designer Agent 起動時の必読
```
00_README.md(全体地図)
+ 01_brand/全4ファイル(concept, profile, persona, tone)
+ 02_strategy/全3ファイル(purpose, axis, pricing)
+ 03_design/全3ファイル(tokens, references, responsive)
+ 04_pages/全13ファイル(common, top, about, ...)
+ 05_tech/tech_stack.md
+ 07_agents/designer_agent.md
+ 08_workflow/handoff_format.md
+ 08_workflow/self_refine_criteria.md
= 計23ファイル / 2,453行
```

### 問題
- 「最初に把握すべきブランドの核」を理解するために、毎回ブランド〜全ページのワイヤーまで全部読む
- ブランド概要を知るだけなら本当は **30行**で済む内容を、**何百行も読まされている**

### 改善:**`00_QUICK_REF.md`(50〜80行)を新設**

```markdown
# ALPS LAB QUICK REFERENCE

## ブランド
- 名前: ALPS LAB(アルプスラボ)
- コンセプト: 北アルプスの麓から、本物の健康を研究する。
- ポジショニング: 安売り路線ではない、本物志向の研究型ブランド

## 事業
- GYM(24時間×パーソナル)
- NUTRITION(栄養相談・指導)
- FOODS(冷凍宅配ミール)
- SUPPLEMENTS(プロテイン・サプリ)

## ターゲット
- A: 田中健一(38歳/男性/松本/IT中堅)
- B: 佐藤美咲(45歳/女性/長野/経営者)
- C: 鈴木麻衣(29歳/女性/松本/看護師・夜勤あり)

## デザイン
- カラー: #0A0A0A(黒) / #C8A961(ゴールド) / #C8302E(赤)
- フォント: Bebas Neue(英大) / Noto Sans JP Bold(日) / Inter(英小)
- トンマナ: ダーク・ストイック系(Phive Clubs / Equinox 系)

## 主要コピー(変更不可)
- メイン英: RESEARCH THE TRUTH OF HEALTH.
- メイン日: 北アルプスの麓から、本物の健康を研究する。
- CTA: 体験予約はこちら →

## URL構造(全12ページ)
/                    TOP
/about/              ABOUT
/services/           SERVICES 一覧
/services/gym/       GYM
/services/nutrition/ NUTRITION
... 略

## 不変制約(絶対変更不可)
- ブランド名・事業構成・料金
- 上記カラー・フォント・主要コピー
- TOP Hero の Split Composition レイアウト

## 詳細が必要なときの参照先
- ブランド詳細 → 01_brand/
- 戦略・料金 → 02_strategy/
- デザイン仕様 → 03_design/
- 各ページのワイヤー → 04_pages/
- 技術仕様 → 05_tech/
- コピー全集 → 06_content/
```

→ 各エージェントは **まず `00_QUICK_REF.md` だけを読んで全体把握**し、必要な詳細だけ個別ファイルに掘り下げる。

## 非効率 3:**04_pages/ の各ファイルが冗長**

各ページのワイヤーが100〜150行と詳細すぎ。共通要素が各ファイルに重複している(ヘッダー・フッター・章番号フォーマット・レスポンシブ規則など)。

### 改善
- `04_pages/_common.md` を **120行 → 200行** に拡張、共通要素を全部ここへ集約
- 各ページのファイル(`top.md` など)は **そのページ固有の差分**だけに絞る(50〜70行)

例:
```
旧: top.md(157行)= 全部書いてある
新: top.md(50行)
   ├ "_common.md を継承" の宣言
   └ そのページ固有のセクション構成・コピー・画像配置のみ記述
```

---

# 第三部:次回プロジェクトの理想構造テンプレート

このプロジェクトを「もう一度やる」場合、こう構造化します。**新規プロジェクトの雛形**としてそのまま使えます。

```
new-project/
├── 00_README.md                    地図(全ファイルの目次・各エージェントの必読リスト)
├── 00_QUICK_REF.md ✨NEW           50〜80行のチートシート(ブランド・色・フォント・コピー・URL)
│
├── 00_agent_briefs/ ✨NEW          エージェント別の必読サマリー(各100行程度に集約)
│   ├── designer_brief.md           Designerが必要な全情報を1ファイルに
│   ├── coder_brief.md              Coderが必要な全情報を1ファイルに
│   └── reviewer_brief.md           Reviewerの評価軸(基準/卓越基準を明示)
│
├── 01_brand/                       ブランドの本質(変わらない部分)
│   ├── concept.md                  コンセプト・ミッション・ビジョン・バリュー
│   ├── company_profile.md          会社情報
│   ├── target_persona.md           ペルソナ
│   └── tone_and_manner.md          トンマナ
│
├── 02_strategy/                    戦略レイヤー
│   ├── project_purpose.md          目的・優先順位
│   ├── design_decision_axis.md     CV優先・設計判断軸
│   └── service_pricing.md          ★料金の唯一の真実(SSoT)
│
├── 03_design/                      デザイン仕様
│   ├── design_tokens.md            ★色・フォントの唯一の真実(SSoT)
│   ├── reference_sites.md          参考サイト分析
│   └── responsive_rules.md         レスポンシブ規則
│
├── 04_pages/                       ページごとのワイヤー
│   ├── _common.md                  ★共通要素を集約(200行程度)
│   ├── _page_template.md ✨NEW     ワイヤー記法のテンプレート(20行)
│   ├── top.md                      固有差分のみ(50行)
│   ├── about.md                    同上
│   └── ...(各ページ50行程度)
│
├── 05_tech/                        技術仕様
│   ├── tech_stack.md
│   ├── file_structure.md
│   └── performance_a11y.md
│
├── 06_content/                     コンテンツ素材(コピー・FAQ等)
│   └── ...(現状の構造でOK)
│
├── 07_agents/                      エージェント定義(必要なロールのみ)
│   ├── designer_agent.md
│   ├── coder_agent.md
│   ├── reviewer_agent.md
│   └── critic_agent.md ✨NEW       業界ベンチマークと比較した批評役
│   ※ pm_agent.md は実プロジェクトで使わないなら削除
│
├── 08_workflow/                    ワークフロー定義
│   ├── development_flow.md
│   ├── handoff_format.md
│   └── self_refine_criteria.md     ★合格基準(40点)/ 卓越基準(50点)を分離して記述
│
├── 09_meta/                        メタ情報
│   ├── deliverables.md
│   ├── learning_mapping.md
│   ├── risks.md
│   └── lessons_learned.md ✨NEW    試行錯誤・失敗・気付きの蓄積(プロジェクト中に追記し続ける)
│
└── work/                           中間成果物(エージェント生成、gitignore推奨)
    └── (空、エージェントが生成)
```

## ✨ 主な追加・変更点

| 変更 | 効果 |
|---|---|
| `00_QUICK_REF.md` 新設 | 各エージェントの初期読み込み量を80%削減 |
| `00_agent_briefs/` 新設 | 必読リストを「ファイル一覧」から「単一サマリー」に置換 |
| `service_pricing.md` を SSoT 化 | 料金変更時の修正箇所を1ヶ所に |
| `design_tokens.md` を SSoT 化 | カラー・フォント変更時の修正箇所を1ヶ所に |
| `04_pages/_common.md` を充実 | 各ページ固有部分を50行に圧縮 |
| `critic_agent.md` 追加 | 業界ベンチマーク視点でのレビューを担う |
| `self_refine_criteria.md` を二段化 | 合格基準と卓越基準を分離 |
| `lessons_learned.md` 追加 | 試行錯誤の蓄積場所 |
| `pm_agent.md` 削除 | 未使用ファイルの除去 |

---

# 第四部:推定削減効果

| 項目 | 改善前 | 改善後 | 削減率 |
|---|---:|---:|---:|
| Designer Agent 1回の必読量 | 2,453行 | 約 800行 | **-67%** |
| Coder Agent(1ページ)1回の必読量 | 1,414行 | 約 500行 | **-65%** |
| Reviewer Agent 1回の必読量 | 約 600行 | 約 250行 | **-58%** |
| プロジェクト全体の総トークン消費(推定) | 約 500K | 約 200K | **-60%** |
| 料金変更時の修正箇所 | 7ヶ所 | 1ヶ所 | **-86%** |
| カラー変更時の修正箇所 | 5ヶ所 | 1ヶ所 | **-80%** |

---

# 第五部:今回プロジェクトの「良かった点」(変えない方がいいこと)

完璧を目指してリファクタリングするとしても、**以下は維持すべき優れた設計**:

- ✅ **9カテゴリの分類**:論理的で他人にも理解可能
- ✅ **`00_README.md` による全体地図**:必読
- ✅ **ファイル命名規則の一貫性**:`01_brand/concept.md` 形式
- ✅ **`_common.md` による共通要素切り出し**:発想は正しい(さらに強化)
- ✅ **エージェント別の必読リスト明示**:意図は正しい(brief 化で更に効率UP)
- ✅ **`work/` で中間成果物を分離**:本体ドキュメントを汚さない

---

# 第六部:優先度別:今あるプロジェクトをリファクタリングする場合

ALPS LAB を実際にリファクタリングするなら、この順で:

### 🔴 最優先(Phase 1:1〜2時間で30%効率化)

1. **`00_QUICK_REF.md` を作成**
   - 既存ファイルから核情報を抽出して50〜80行にまとめる
   - 各エージェントのプロンプトを「最初に `00_QUICK_REF.md` を読む」に変更

### 🟡 効果大(Phase 2:2〜3時間で更に20%効率化)

2. **Single Source of Truth 化**
   - 料金記述を `service_pricing.md` に集約、他は参照表記に置換
   - カラーコードを `design_tokens.md` に集約、他は CSS 変数のみ参照

3. **`00_agent_briefs/` を新設**
   - Designer / Coder / Reviewer の必要情報を各1ファイルに集約

### 🟢 余力があれば(Phase 3:3〜5時間で更に10%効率化)

4. **`04_pages/_common.md` を200行に拡張、各ページを50行に圧縮**
5. **`critic_agent.md` を新設**(評価設計の構造改善 / final_review.md 第五部参照)
6. **`self_refine_criteria.md` を合格基準/卓越基準で分離**
7. **`pm_agent.md` を削除 or 役割を明確化**

---

# 関連ドキュメント

- 本プロジェクトの総合評価: [final_review.md](final_review.md)
- AI 評価設計の構造的限界の分析: [final_review.md 第五部](final_review.md#第五部)
- 学習ポイントのまとめ: [final_review.md 第四部](final_review.md#第四部)

---

*Generated by Claude Opus 4.7 / 2026-05-05*
*このドキュメントは新規プロジェクトの構造設計の参考として、AI と人間の双方が利用することを想定しています。*
