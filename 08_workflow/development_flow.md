# ALPS LAB 開発ワークフロー

## 全体フロー

```
[本企画書(プロジェクト全体のドキュメント)]
        ↓
[PM Agent]
   ├─ タスク分解
   └─ 各エージェントへの指示書作成
        ↓
[Designer Agent]
   ├─ 参考サイト分析(Few-shot)
   ├─ デザイントークン確定
   ├─ 全ページのワイヤー詳細化
   └─ 主要3ページのモックアップ生成
        ↓
[Coder Agent](ページごとに並列実行)
   ├─ HTML実装
   ├─ CSS実装
   └─ JS / GSAP実装
        ↓
[Reviewer Agent]
   ├─ 評価基準で点数化
   ├─ 改善点リスト化
   └─ 合格/不合格判定
        ↓
   [合格?] ──No→ [Coder Agentに差し戻し] ──┐
        │                                  │
       Yes                                 │
        ↓                                  │
[PM Agent 最終承認]                        │
        ↓                                  │
   [Vercelデプロイ]                        │
                                           │
                ←──────────────────────────┘
                (セルフリファインのループ)
```

---

## 並列実行が可能なタスク

| タスク | 並列度 |
|---|---|
| Coder Agentによるページ実装 | 11ページを最大4並列で実装可能 |
| Reviewer Agentによるレビュー | 完了したページから順次レビュー(並列OK) |
| Designer Agentのワイヤー生成 | 各ページのワイヤーは並列生成可能 |

---

## セルフリファインのトリガー

- Coder成果物 → Reviewer合格点未満 → Coderに差し戻し(最大3回)
- Designer成果物 → PM Agentが「ブランドコンセプトと合っているか」を最終確認
- 全ページ完成後 → PM Agentが「サイト全体の一貫性」を最終確認

---

## エージェントの起動順序

1. PM Agent(最初に1回)
2. Designer Agent(全ワイヤー・モックを完成させる)
3. Coder Agent × 11ページ(並列)
4. Reviewer Agent × 11ページ(並列)
5. (差し戻しがあればCoder→Reviewerループ)
6. PM Agent(最終承認・1回)

---

## 中間成果物の保管場所

```
project-root/
├── 00_README.md
├── 01_brand/ ... 09_meta/   ← プロジェクトドキュメント(変更しない)
├── work/                      ← 中間成果物(エージェントが生成)
│   ├── 01_task_breakdown.md  ← PM
│   ├── 02_designer_brief.md  ← PM
│   ├── 03_coder_briefs/      ← PM
│   ├── 04_reviewer_criteria.md ← PM
│   ├── design/                ← Designer
│   ├── coder_log/             ← Coder
│   └── review/                ← Reviewer
└── (実装ファイル一式)        ← Coder
```
