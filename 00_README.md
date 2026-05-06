# ALPS LAB プロジェクト

長野県発のヘルスケアブランド「ALPS LAB」のコーポレートサイト制作プロジェクト。
AI自動化講座の課題として、Claude Code(マルチエージェント構成)で開発する。

---

## このREADMEの役割

このファイルは**プロジェクト全体の地図**である。
各エージェントは、自分のタスクに必要なファイルだけを読み込めばよい。

トークン効率を最大化するため、ファイルは目的ごとに分割されている。
**「全部読む」のではなく「必要な分だけ読む」が鉄則**。

---

## ファイル構造

```
alps-lab/
├── 00_README.md                    ← このファイル(地図)
├── 01_brand/                       ← ブランドの本質(変わらない部分)
├── 02_strategy/                    ← 戦略レイヤー
├── 03_design/                      ← デザイン仕様
├── 04_pages/                       ← ページごとのワイヤー
├── 05_tech/                        ← 技術仕様
├── 06_content/                     ← コンテンツ素材(コピー・FAQ等)
├── 07_agents/                      ← エージェント定義
├── 08_workflow/                    ← ワークフロー定義
└── 09_meta/                        ← メタ情報(学習マッピング・リスク)
```

---

## タスクごとの読み込みファイル

### PM Agent として起動するとき

```
- 00_README.md(このファイル)
- 02_strategy/ 全ファイル
- 04_pages/ 全ファイル(ページ一覧の把握用)
- 07_agents/pm_agent.md
- 08_workflow/ 全ファイル
- 09_meta/deliverables.md
```

### Designer Agent として起動するとき

```
- 00_README.md
- 01_brand/ 全ファイル
- 02_strategy/ 全ファイル
- 03_design/ 全ファイル
- 04_pages/ 全ファイル
- 05_tech/tech_stack.md(技術制約の把握)
- 07_agents/designer_agent.md
- 08_workflow/handoff_format.md
- 08_workflow/self_refine_criteria.md
```

### Coder Agent として {ページ名} を実装するとき

```
- 00_README.md
- 03_design/design_tokens.md
- 03_design/responsive_rules.md
- 04_pages/_common.md
- 04_pages/{ページ名}.md
- 05_tech/ 全ファイル
- 06_content/copy_{ページ名}.md(該当ページのコピー集、存在する場合)
- 06_content/ その他関連ファイル(該当ページに必要なもののみ)
- 07_agents/coder_agent.md
- (Designerの成果物: ワイヤー詳細・モック)
```

### Reviewer Agent として {ページ名} をレビューするとき

```
- 00_README.md
- 04_pages/{ページ名}.md
- 03_design/design_tokens.md
- 05_tech/performance_a11y.md
- 07_agents/reviewer_agent.md
- 08_workflow/self_refine_criteria.md
- (Coderの実装ファイル一式)
```

---

## ファイル一覧と内容

### 01_brand/ (ブランドの本質)

| ファイル | 内容 |
|---|---|
| concept.md | ブランドコンセプト・ミッション・ビジョン・バリュー |
| company_profile.md | 会社情報・店舗設定・事業構成 |
| target_persona.md | ターゲット層・ペルソナ |
| tone_and_manner.md | トンマナ・色・フォント方向性 |

### 02_strategy/ (戦略レイヤー)

| ファイル | 内容 |
|---|---|
| project_purpose.md | プロジェクトの目的・優先順位・スコープ |
| design_decision_axis.md | CV優先順位・設計判断軸 |
| service_pricing.md | 4事業の構成・料金プラン |

### 03_design/ (デザイン仕様)

| ファイル | 内容 |
|---|---|
| design_tokens.md | CSS変数・色・余白・フォント・アニメーション |
| reference_sites.md | 参考サイト5つ・取り入れ要素 |
| responsive_rules.md | ブレークポイント・各セクション挙動 |

### 04_pages/ (ページごとのワイヤー)

| ファイル | 内容 |
|---|---|
| _common.md | ヘッダー・フッター共通要素 |
| top.md | TOPページのワイヤー |
| about.md | ABOUTページのワイヤー |
| services.md | SERVICESトップのワイヤー |
| services_gym.md | GYM事業詳細のワイヤー |
| services_nutrition.md | NUTRITION事業詳細のワイヤー |
| services_foods.md | FOODS事業詳細のワイヤー |
| services_supplements.md | SUPPLEMENTS事業詳細のワイヤー |
| stores.md | 店舗一覧ページのワイヤー |
| stories.md | ブログ・ストーリーのワイヤー |
| recruit.md | 採用ページのワイヤー |
| company.md | 会社概要ページのワイヤー |
| contact.md | お問い合わせページのワイヤー |

### 05_tech/ (技術仕様)

| ファイル | 内容 |
|---|---|
| tech_stack.md | HTML/CSS/JS+GSAP・Vercel・フォントなど |
| file_structure.md | プロジェクトフォルダ構成 |
| performance_a11y.md | パフォーマンス・アクセシビリティ要件 |

### 06_content/ (コンテンツ素材)

| ファイル | 内容 |
|---|---|
| copy_top.md | TOPページのコピー集 |
| copy_about.md | ABOUTページのコピー集 |
| copy_services.md | 各事業ページのコピー集 |
| trainers.md | トレーナー紹介3名 |
| voices.md | 会員の声3件 |
| faq.md | よくある質問5件 |
| news.md | お知らせダミー3件 |
| recruit_message.md | 採用メッセージ |

### 07_agents/ (エージェント定義)

| ファイル | 内容 |
|---|---|
| pm_agent.md | PMエージェントのプロンプト |
| designer_agent.md | Designerエージェントのプロンプト |
| coder_agent.md | Coderエージェントのプロンプト |
| reviewer_agent.md | Reviewerエージェントのプロンプト |

### 08_workflow/ (ワークフロー定義)

| ファイル | 内容 |
|---|---|
| development_flow.md | 開発ワークフロー全体 |
| handoff_format.md | エージェント間の中間成果物伝達フォーマット |
| self_refine_criteria.md | セルフリファイン評価基準 |

### 09_meta/ (メタ情報)

| ファイル | 内容 |
|---|---|
| learning_mapping.md | 講座学習内容の活用マッピング |
| risks.md | リスクと対応方針 |
| deliverables.md | 最終成果物一覧 |

---

## プロジェクト概要(超要約)

- **ブランド**: ALPS LAB(長野発・健康研究ブランド)
- **コンセプト**: 「北アルプスの麓から、本物の健康を研究する。」
- **事業**: GYM / NUTRITION / FOODS / SUPPLEMENTS の4事業
- **トンマナ**: ダーク・ストイック系(黒・赤・ゴールド)
- **技術**: HTML5 + CSS3 + Vanilla JS + GSAP / Vercel
- **目的優先順位**: ブランディング > 事業紹介 > 会員獲得 > EC > 採用

---

## 開発の進め方(全体フロー)

```
Step 1: PM Agent 起動 → タスク分解
Step 2: Designer Agent 起動 → モック生成
Step 3: Coder Agent 並列起動 → ページ実装(11ページ)
Step 4: Reviewer Agent 起動 → 各ページレビュー
Step 5: 差し戻し → Coder修正(セルフリファインループ)
Step 6: PM Agent 最終承認
Step 7: Vercelデプロイ → 公開URL取得
Step 8: 課題提出
```

詳細は `08_workflow/development_flow.md` を参照。
