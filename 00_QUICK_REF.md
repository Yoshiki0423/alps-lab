# ALPS LAB QUICK REFERENCE

> **このプロジェクトに関わる全エージェント・全人間が、最初に必ず読むファイル**。
> 1ページで「ALPS LABとは何か / 何を作るのか / 何を変えてはいけないのか」が把握できる。
> 詳細が必要なときだけ個別ファイル(参照先記載)に掘り下げる。

---

## 🏷️ ブランド

- **名前**: ALPS LAB(アルプスラボ)
- **コンセプト**: **北アルプスの麓から、本物の健康を研究する。**
- **ミッション**: 日本の健康寿命を、地方から伸ばす。
- **ビジョン**: ジムを、人生のインフラに。
- **ポジショニング**: 安売り路線ではなく、**本物志向・高級志向の研究型ヘルスケアブランド**

## 🏢 事業構成(全4事業)

| 事業名 | 概要 |
|---|---|
| **GYM** | 24時間ジム × パーソナル(月2〜4回)のハイブリッド型 |
| **NUTRITION** | 管理栄養士による対面/オンライン栄養カウンセリング |
| **FOODS** | 高タンパク低糖質の冷凍宅配ミール |
| **SUPPLEMENTS** | オリジナルプロテイン・サプリブランド |

## 💰 料金(主要プランのみ。詳細は `02_strategy/service_pricing.md`)

- **GYM LIGHT**: 8,800円/月(24時間ジムのみ)
- **GYM STANDARD(主力)**: 14,800円/月(24時間 + 月2回パーソナル)← サイト上で最も強調
- **GYM PREMIUM**: 22,800円/月(24時間 + 月4回 + 栄養指導付き)

## 👥 ターゲット(3ペルソナ。詳細は `01_brand/target_persona.md`)

- **A. 田中健一(38歳/男性/松本)**: IT企業中堅、効率・結果重視 → STANDARD想定
- **B. 佐藤美咲(45歳/女性/長野)**: 経営者、プレミアム志向、ストーリー重視 → PREMIUM想定
- **C. 鈴木麻衣(29歳/女性/松本)**: 看護師、夜勤あり、親しみ重視 → LIGHT想定

## 🎨 デザインの不変ルール

### カラー(画面占有率も指定)

| 役割 | カラー | 占有率 |
|---|---|---|
| ベース黒 | `#0A0A0A` 〜 `#1A1A1A` | 80〜90% |
| アクセント:ゴールド | `#C8A961` | 3〜5% |
| アクセント:赤(CTA専用) | `#C8302E` | 1〜3% |
| 親しみゾーン背景 | `#F5F5F0` | 必要時のみ |

### フォント

- **大型英語見出し**: Bebas Neue
- **日本語**: Noto Sans JP(400/700)
- **英語本文・補助**: Inter(400/500)

### 主要コピー(変更不可)

- メイン英語キャッチ: `RESEARCH THE TRUTH OF HEALTH.`
- メイン日本語キャッチ: `北アルプスの麓から、本物の健康を研究する。`
- CTA(主要): `体験予約はこちら →`
- ミッションコピー: `私たちは、3年で痩せるダイエットを売っているのではない。30年続く健康習慣を、研究している。`

### トンマナ

- **ダーク・ストイック系**(Nike / Equinox / Phive Clubs / SIXPAD 系)
- **基調 90% ストイック / 10% 親しみ**
- 親しみゾーンは「トレーナー紹介」「会員の声」セクションのみ

## 🌐 サイト構成(全12ページ)

```
/                          TOP
/about/                    ABOUT
/services/                 SERVICES 一覧
/services/gym/             GYM
/services/nutrition/       NUTRITION
/services/foods/           FOODS
/services/supplements/     SUPPLEMENTS
/stores/                   STORES(松本本店 / 長野店 / 軽井沢店)
/stories/                  STORIES(VOICE / COLUMN / NEWS)
/recruit/                  RECRUIT
/company/                  COMPANY
/contact/                  CONTACT(+ /contact/thanks/)
```

## ⚙️ 技術スタック

- HTML5 + CSS3 + Vanilla JS + GSAP
- フレームワーク不使用、ビルド不要
- Vercel デプロイ(クリーンURL設定済)
- 詳細: `05_tech/tech_stack.md`

## 🛡️ 不変制約(絶対変更不可・全エージェント共通)

1. **ブランド名・事業構成・料金**は変更しない
2. **上記カラー・フォント・主要コピー**は変更しない
3. **TOP Hero の Split Composition レイアウト**(縦2分割で左=NATURE / 右=BODY)を維持
4. 参考サイトの**模倣**はNG、要素の取り入れに留める
5. 画像素材は**著作権フリー**(Unsplash / Pexels)のみ

## 📁 詳細を知りたいときの参照先

| 知りたいこと | 参照ファイル |
|---|---|
| ブランドの本質(コンセプト・ストーリー) | `01_brand/concept.md` |
| ペルソナ詳細 | `01_brand/target_persona.md` |
| トンマナ詳細 | `01_brand/tone_and_manner.md` |
| プロジェクト目的・優先順位 | `02_strategy/project_purpose.md` |
| 料金プラン詳細 | `02_strategy/service_pricing.md` |
| デザイントークン(CSS変数) | `03_design/design_tokens.md` |
| 参考サイト分析 | `03_design/reference_sites.md` |
| 各ページのワイヤー | `04_pages/{page_name}.md` |
| 共通レイアウト | `04_pages/_common.md` |
| 技術仕様 | `05_tech/tech_stack.md` |
| パフォーマンス・a11y要件 | `05_tech/performance_a11y.md` |
| コピー全集 | `06_content/` 配下 |
| エージェント定義 | `07_agents/{agent}.md` |
| エージェント別の必読サマリー | `00_agent_briefs/{agent}_brief.md` |
| ワークフロー全体 | `08_workflow/development_flow.md` |
| 評価基準(合格/卓越) | `08_workflow/self_refine_criteria.md` |
| プロジェクト総合レビュー | `09_meta/final_review.md` |
| 構造設計の方針 | `09_meta/structure_review.md` |
| 試行錯誤・学びの蓄積 | `09_meta/lessons_learned.md` |

## 🤖 マルチエージェント運用ロール

| ロール | 担当 | 評価基準 |
|---|---|---|
| Designer Agent | 参考サイト分析・デザイントークン確定・全ページワイヤー詳細化・主要3ページHTMLモック | self_refine_criteria(Designer用) |
| Coder Agent | 全11ページのHTML/CSS/JS実装(並列) | self_refine_criteria(Coder用) |
| Reviewer Agent | コード品質・パフォーマンス・a11y・レスポンシブの合格判定 | 40点で合格 |
| **Critic Agent** | **業界ベンチマークと比較した卓越基準のレビュー(評価設計の構造的限界対策)** | **50点を目指す卓越基準** |

詳細:`07_agents/{agent}.md` および `00_agent_briefs/{agent}_brief.md`

---

*このファイルは ALPS LAB プロジェクトの「土台」。これを最初に読めば、本プロジェクトの 80% が理解できる設計*
