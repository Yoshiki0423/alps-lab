# ABOUT `/about` 詳細ワイヤーフレーム

## ページ全体の方針

- 雰囲気: ストイック中心、Story タイムラインのみ感情に寄せる
- 主要色: ベース黒 + ゴールドアクセント(品格表現)
- アニメーション要素: タイムラインのスクロール連動進行 / Mission・Vision・Values の章番号順次フェードイン / 代表写真のパララックス
- 参考サイトとの関連:
  - **Snow Peak**: 地方発のストーリーテリング(土地の写真+年表)、品格ある余白
  - **fitlab**: 「研究」コンセプト、章番号 MISSION 01 / VISION 02 / VALUES 03
  - **Phive Clubs**: 大型タイポと余白のリズム

---

## メタ情報

- title: `ABOUT | ALPS LAB`
- description: `長野発の健康研究ブランド ALPS LAB の理念と物語。北アルプスの麓から、本物の健康を研究する私たちの想い。`

---

## ページ全体構成

```
1. Hero (北アルプス山岳全画面)         ── 80vh
2. Mission / Vision / Values (章立て)   ── auto
3. Story タイムライン                    ── auto
4. Message (代表メッセージ)              ── auto
5. Team (6名グリッド)                    ── auto
6. Final CTA                             ── 70vh
7. Footer
```

---

## Section 1: Hero — 80vh

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│ Header (transparent)                                          │
├────────────────────────────────────────────────────────────┤
│  [背景: 北アルプスの山岳写真フルブリード / brightness 0.55]    │
│                                                              │
│   ─── ABOUT ALPS LAB ───                                    │ ← 章ラベル(中央)
│                                                              │
│           RESEARCH THE TRUTH                                 │ ← Bebas Neue 96px
│                  OF HEALTH.                                  │
│                                                              │
│      私たちは、健康を「研究」する集団です。                    │ ← Noto Sans JP Bold 28px
│                                                              │
│                                                              │
│   FROM NAGANO, JAPAN          LAT. 36.2°N / LON. 137.9°E    │ ← 底部装飾
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 高さ | 80vh(min 600px) |
| 背景画像 | 北アルプスの稜線(ワイドショット、霧か朝焼け、彩度低め) |
| 背景フィルター | `brightness(0.55) contrast(1.1)` |
| オーバーレイ | 下部に黒グラデーション(opacity 0→0.7) |
| 中央コピー | 上下中央寄せ |
| 章ラベル | `─── ABOUT ALPS LAB ───`(両側80px罫線+gold文字) |
| 英語コピー | font-display, var(--fs-4xl), white, line-height: var(--lh-tight) |
| 日本語サブ | font-jp bold, var(--fs-xl), color-text-secondary |
| 底部左 | `FROM NAGANO, JAPAN`(font-en, var(--fs-2xs), letter-spacing: var(--ls-widest), gold) |
| 底部右 | `LAT. 36.2°N / LON. 137.9°E`(同上) |

### アニメーション

- ロード時: 背景画像が 1.05倍 → 1.0倍(2秒 ease-out)
- 章ラベルの罫線が左右から伸びる(800ms)
- 英語タイトルが下からフェードイン(800ms)
- 日本語サブが 400ms 遅れてフェードイン
- スクロール時: 背景画像が `transform: translateY(0 → 80px)` パララックス

### レスポンシブ

| BP | 高さ | 英語 | 日本語 |
|---|---|---|---|
| 1280+ | 80vh | 96px | 28px |
| 1024+ | 80vh | 80px | 24px |
| 768+ | 70vh | 56px | 22px |
| 〜767 | 60vh | 40px | 18px |

---

## Section 2: Mission / Vision / Values — auto

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│                                                              │
│   ─── MISSION 01 ───                                        │
│                                                              │
│       日本の健康寿命を、地方から伸ばす。                       │ ← 大型日本語タイポ
│                                                              │
│       To extend Japan's healthy life expectancy             │ ← 英語サブ
│       from the local frontier.                              │
│                                                              │
│       健康寿命日本一クラスの長野県を起点に、運動・食・        │
│       知識を統合した本物の健康習慣を全国に広げる。            │
│                                                              │
│   ─── VISION 02 ───                                         │
│                                                              │
│       ジムを、人生のインフラに。                              │
│       ...                                                     │
│                                                              │
│   ─── VALUES 03 ───                                         │
│                                                              │
│   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                 │
│   │I.     │ │II.    │ │III.   │ │IV.    │                 │
│   │RESEARCH│ │LONG-  │ │LOCAL &│ │INCLU- │                 │
│   │FIRST  │ │TERM   │ │AUTHEN.│ │SIVE   │                 │
│   │説明…  │ │説明…  │ │説明…  │ │説明…  │                 │
│   └───────┘ └───────┘ └───────┘ └───────┘                 │
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 背景 | `var(--color-bg-primary)` |
| パディング | var(--space-2xl) 上下 |
| Mission・Vision: 各 60vh、中央配置、最大幅 var(--max-width-narrow) |
| Values: 4カラムカード(横並び) |

### Mission / Vision の各ブロック

- 章ラベル: `MISSION 01` / `VISION 02`(font-en, var(--fs-2xs), letter-spacing: var(--ls-widest), gold、両側に40px gold罫線)
- 日本語タイトル: var(--fs-3xl) / font-jp bold / line-height: var(--lh-snug)
- 英語サブ: font-display, var(--fs-lg), gold-dim, line-height: var(--lh-tight)
- 説明文: font-jp, var(--fs-md), color-text-secondary, line-height: var(--lh-loose), 最大幅 var(--max-width-text)
- 各ブロック間の区切り: gold 罫線(width: 1px, height: 80px, opacity: 0.3)中央

### Values 4カード

- 章番号: `I.` `II.` `III.` `IV.`(font-display, var(--fs-2xl), gold)
- タイトル: font-display, var(--fs-md), white, letter-spacing: var(--ls-wide)
- 説明: font-jp, var(--fs-sm), color-text-secondary
- 背景: `var(--color-bg-tertiary)` カード
- 左に gold 縦罫線 4px

### アニメーション

- 章ラベルの罫線が左右から伸びる(各ブロック・スクロール連動)
- タイトルが scale 1.03 → 1.0 + opacity 0 → 1
- 説明文が下からフェードイン(400ms 遅延)

### レスポンシブ

| BP | Values 列数 |
|---|---|
| 1280+ | 4 |
| 1024+ | 4 |
| 768+ | 2×2 |
| 〜767 | 1 |

---

## Section 3: Story タイムライン — auto

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│   ─── STORY — 創業の物語                                     │
│                                                              │
│   ●─ 2023 ──────────────────────                            │
│   │   創業の動機                                              │
│   │   長野で見つけた「健康の本質」を全国へ                    │
│   │   届けるために、起業を決意。                              │
│   │   [サムネイル: 長野の風景 320x240]                        │
│   │                                                          │
│   ●─ 2024 ──────────────────────                            │
│   │   1号店オープン                                           │
│   │   松本本店をオープン。ハイブリッド型ジム運営開始。         │
│   │   [サムネイル: 松本本店 320x240]                          │
│   │                                                          │
│   ●─ 2025 ──────────────────────                            │
│   │   事業拡大                                                │
│   │   NUTRITION・FOODS事業開始。長野店オープン。              │
│   │   [サムネイル: 長野店 320x240]                            │
│   │                                                          │
│   ●─ 2026 ──────────────────────                            │
│       現在(3店舗体制)                                       │
│       軽井沢店を加えた3店舗体制。SUPPLEMENTS事業も開始。      │
│       [サムネイル: 軽井沢店 320x240]                          │
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 背景 | `var(--color-bg-primary)` |
| 縦タイムライン軸 | 中央左寄せ、1px gold 縦線(opacity 0.5) |
| 各イベント間 | var(--space-xl) |
| ドット | 円形 16px、初期 gold-dim、現在進行ノードは gold + glow |
| 年: font-display, var(--fs-2xl), gold |
| タイトル: font-jp bold, var(--fs-lg) |
| 説明: font-jp, var(--fs-base), color-text-secondary |
| サムネイル: 320×240px、`border-radius: var(--radius-md)` |

### アニメーション(目玉)

- ScrollTrigger で縦線が下に伸び続ける(scaleY: 0 → 1)
- 画面中央を通過したドットが gold-dim → gold + glow に変化(`box-shadow: var(--shadow-glow-gold)`)
- 各イベントのテキスト&画像が右からスライドイン+フェードイン

### レスポンシブ

| BP | 配置 |
|---|---|
| 1280+ | 縦タイムライン中央、左右に交互配置 |
| 1024+ | 縦タイムライン左寄せ、右にコンテンツ |
| 768+ | 縦タイムライン左寄せ、サムネイル小型化 |
| 〜767 | 縦一列、サムネイル下に配置 |

---

## Section 4: Message(代表メッセージ)— auto

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│   ─── MESSAGE — 代表メッセージ                               │
│                                                              │
│ ┌─────────┐                                                 │
│ │         │   「健康は、努力ではなく仕組みで作るもの」。      │
│ │  代表   │                                                  │
│ │  写真   │   私たち研究員一同、長野の地から、その仕組み     │
│ │ 4:5縦  │   を世の中に提供していきます。                    │
│ │         │   一緒に、人生のインフラを作っていきませんか。    │
│ │         │                                                  │
│ │         │   ───────                                         │
│ │         │   代表取締役 ◯◯◯◯                              │
│ └─────────┘                                                 │
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 背景 | `var(--color-bg-secondary)` |
| 左カラム | 代表写真(縦長 4:5)、フィルター brightness 0.85 |
| 右カラム | メッセージテキスト、最大幅 var(--max-width-text) |
| 引用符 | 大型「」(font-display, var(--fs-3xl), gold-dim、装飾) |
| 本文: font-jp, var(--fs-md), color-text-primary, line-height: var(--lh-loose) |
| 署名: 罫線+font-en, var(--fs-sm), color-text-muted |

### アニメーション

- 写真がスクロール時に 1.02 → 1.0 ズームアウト+フェードイン
- 本文が右から 24px スライドイン+フェードイン

### レスポンシブ

| BP | 配置 |
|---|---|
| 1280+ | 横並び(写真40% / 本文60%) |
| 1024+ | 横並び |
| 768+ | 縦並び(写真上、本文下) |
| 〜767 | 縦並び、写真は小さめに |

---

## Section 5: Team — auto

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│   ─── TEAM — チーム                                          │
│                                                              │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                 │
│ │T1  │ │T2  │ │T3  │ │N1  │ │N2  │ │S1  │                 │
│ │1:1 │ │    │ │    │ │    │ │    │ │    │                 │
│ ├────┤ ├────┤ ├────┤ ├────┤ ├────┤ ├────┤                 │
│ │山田│ │佐々木│ │中村│ │管栄│ │管栄│ │運営│                 │
│ │拓海│ │優香 │ │健介│ │1   │ │2   │ │1   │                 │
│ │トレ│ │トレ │ │トレ│ │栄養│ │栄養│ │店長│                 │
│ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘                 │
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 背景 | `var(--color-bg-primary)` |
| カラム | Desktop 6 / Tablet 4 / Mobile 2 |
| 写真 | 1:1 正方形、フィルター saturate(0.6) brightness(0.9) |
| ホバー | フィルター解除でフルカラー、scale 1.03 |
| 名前: font-jp bold, var(--fs-md) |
| 役職: font-en, var(--fs-2xs), letter-spacing: var(--ls-widest), gold-dim |
| 区切り罫線: 名前と役職の間に 1px gold-dim opacity 0.3 |

### アニメーション

- スクロールで stagger フェードイン(80ms ずつ)

---

## Section 6: Final CTA

→ `_common.md` 準拠。章ラベルは `RESEARCH N° 06 — JOIN US`

---

## Section 7: Footer

→ `_common.md` 準拠。

---

## このページで使うコピー

→ `06_content/copy_about.md`
→ `06_content/trainers.md`(Team セクション)
