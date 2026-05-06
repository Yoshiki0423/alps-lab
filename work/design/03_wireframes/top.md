# TOP `/` 詳細ワイヤーフレーム

## ページ全体の方針

- 雰囲気: 全体ストイック(90%) / Stories Pickup のみ親しみゾーン(10%)
- 主要色: ベース黒 + ゴールド章番号・罫線 + 赤(CTAのみ)
- アニメーション要素: Split Hero のパララックス + 章ラベルのフェードイン + 数字カウントアップ + テキストのスクロール拡大
- 参考サイトとの関連:
  - **DECISION_NOTES**(確定): Split Composition / NATURE × BODY を Section 1 で完全踏襲
  - **Phive Clubs**: 章番号「I./II.」とゴールドの細字
  - **BEYOND**: 右側 BODY の動画ループ・低彩度グレーディング
  - **fitlab**: 地理座標(LAT./LON.)装飾、章ラベル
  - **Snow Peak**: Stores 周辺の品格ある余白

---

## メタ情報

- title: `ALPS LAB | 北アルプスの麓から、本物の健康を研究する`
- description: `長野発の健康研究ブランド ALPS LAB。24時間ジム×パーソナルのハイブリッド型ジムを中心に、栄養指導・冷凍宅配ミール・サプリで会員の健康をワンストップでサポート。`

---

## ページ全体構成(縦フロー)

```
1. Hero (Split Composition / NATURE × BODY) ── 100vh ── 確定構図
2. Mission (大型タイポ・スクロール拡大)         ── 80vh
3. Services Overview (4事業横並びカード)         ── auto
4. Why ALPS LAB (3項目+章番号アニメ)             ── auto
5. Stories Pickup (親しみゾーン・soft背景)       ── auto
6. Stores (3店舗カード)                          ── auto
7. Final CTA (赤グラデ)                          ── 70vh
8. Footer
```

---

## Section 1: Hero(Split Composition)— 確定構図 / 100vh

### レイアウト構造図

```
┌──── 1440px ──────────────────────────────────────────────────┐
│ Header (transparent)                                            │
├─────────────────────────┬──────────────────────────────────────┤
│  I. NATURE              │              II. BODY               │
│  北アルプス山脈          │              本物の最終形            │
│                         │                                       │
│   [山岳静止画+CSS         │      [動画ループ 5秒                │
│    パララックス /         │       彩度-30% コントラスト+10% ]    │
│    霧スロー動画]          │                                       │
│                         │                                       │
│         ───  NATURE × BODY  ───                                │
│                                                                 │
│       RESEARCH THE TRUTH OF HEALTH.                            │ ← Bebas Neue 96px
│                                                                 │
│       北アルプスの麓から、本物の健康を研究する。                  │ ← Noto Sans JP Bold 32px
│                                                                 │
│             [ 体験予約はこちら →  ]                              │ ← 赤ボタン
│                                                                 │
│                                                                 │
│  LAT. 36.2°N            │              SCROLL ↓                │
│  LON. 137.9°E           │                                       │
│  NAGANO, JP             │                                       │
│                         │                                       │
│  01 GYM   02 NUTRITION  03 FOODS   04 SUPPLEMENTS              │ ← 底部インデックス
└─────────────────────────┴──────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 高さ | 100vh(min-height: 720px) |
| 横分割 | 50:50(`display: grid; grid-template-columns: 1fr 1fr;`) |
| 中央オーバーレイ | 中央 60% 幅・縦中央寄せでコピー&CTA(z-index: var(--z-content)) |
| 背景全体 | `var(--color-bg-primary)` |
| 左右画像/動画 | 50% 幅 × 100vh、`object-fit: cover` |

### 左ペイン(I. NATURE / 北アルプス山脈)

- 画像: 北アルプスの山岳写真(霧・夜明け・静謐感)
- 効果: フィルター `brightness(0.6) contrast(1.1)`(ストイック寄せ)
- アニメ: スクロール時 `transform: translateY(-30px)` パララックス(slow)
- 章ラベル(左上): `I. NATURE` + 改行 + `北アルプス山脈`(font-display 24px gold + font-jp 12px gray)
- 余白: 左 var(--space-md), 上 var(--space-md)+header高
- 装飾(左下): `LAT. 36.2°N / LON. 137.9°E / NAGANO, JP`(font-en, var(--fs-2xs), gold-dim)

### 右ペイン(II. BODY / 本物の最終形)

- 動画: トレーニング映像(5秒ループ、無音、autoplay muted playsinline loop)
- 効果: フィルター `brightness(0.5) saturate(0.7) contrast(1.05)`(BEYOND的グレーディング)
- 章ラベル(右上): `II. BODY` + 改行 + `本物の最終形`(font-display 24px gold + font-jp 12px gray、右寄せ)
- 余白: 右 var(--space-md), 上 var(--space-md)+header高
- 装飾(右下): `SCROLL ↓` + 縦線アニメ(下に伸び続ける)
- モバイルフォールバック: `<video>` を `display: none`、`<img>` ポスターに切替

### 中央オーバーレイ(コピー & CTA)

| 要素 | 内容 | スタイル |
|---|---|---|
| サブラベル | `─── NATURE × BODY ───` | font-en, var(--fs-2xs), letter-spacing: var(--ls-widest), gold、両側に 80px 罫線 |
| メイン英語 | `RESEARCH THE TRUTH OF HEALTH.` | font-display, var(--fs-4xl), white, letter-spacing: var(--ls-wide), line-height: var(--lh-tight) |
| メイン日本語 | `北アルプスの麓から、本物の健康を研究する。` | font-jp, var(--fs-xl), var(--fw-bold), white |
| CTAボタン | `体験予約はこちら →` | bg: red, padding: 1.25rem 3rem, font-jp medium, var(--fs-md) |

### 底部インデックス(全幅・章フッター扱い)

- 内容: `01 GYM`, `02 NUTRITION`, `03 FOODS`, `04 SUPPLEMENTS`
- フォント: font-en, var(--fs-2xs), letter-spacing: var(--ls-widest), gold-dim
- 配置: 横一列、`justify-content: space-between`、左右 var(--space-md) パディング
- 高さ: 上下 var(--space-sm) で底部に固定(absolute bottom: 24px)
- ホバー: gold-dim → gold へカラートランジション

### アニメーション(GSAP timeline)

```
load 0ms     : 中央セパレーター「─── NATURE × BODY ───」が左右から伸びる(800ms)
     400ms   : 章ラベル I./II. がフェードイン(600ms, 下から 8px)
     800ms   : メイン英語 が opacity 0→1 + scale 0.98→1.0(800ms ease-out)
     1200ms  : メイン日本語 が下からフェードイン(600ms)
     1600ms  : CTAボタン が下からフェードイン+わずかにバウンス(400ms ease-bounce)
     2000ms  : 底部インデックスとSCROLL矢印 がフェードイン(600ms)
連続       : 右ペイン動画ループ、SCROLL矢印が上下に揺れる(2s loop)
```

### レスポンシブ挙動

| BP | 構成 | 英語 | 日本語 | CTA |
|---|---|---|---|---|
| 1440+ | Split 50:50, 動画再生 | 96px | 32px | 大 |
| 1280+ | Split 50:50, 動画再生 | 80px | 28px | 大 |
| 1024+ | Split 50:50, 動画再生 | 72px | 24px | 中 |
| 768+ | Split 50:50, 動画再生 | 56px | 22px | 中 |
| 〜767 | **縦積み(NATURE上 / BODY下)+ 中央コピーは BODY 上に重ね**、両側静止画(動画停止) | 40px | 18px | フル幅 |

#### モバイル(〜767px)詳細

- NATURE は上部 40vh の静止画、BODY は下部 60vh の静止画
- 中央コピー & CTA は BODY エリアに重ねる(下部)
- 章ラベルは各エリアの左上に配置
- 底部インデックス「01 GYM…」は2行折返しでも可

---

## Section 2: Mission — 80vh

### レイアウト

```
┌────────────────────────────────────────┐
│                                          │
│      ──── MISSION 01 ────                │ ← gold章ラベル
│                                          │
│                                          │
│    私たちは、3年で痩せるダイエットを       │
│       売っているのではない。              │ ← 大型日本語タイポ(64px)
│    30年続く健康習慣を、研究している。      │
│                                          │
│                                          │
│  WE DON'T SELL DIETS. WE STUDY HABITS.   │ ← Bebas Neue 32px gold-dim
│                                          │
└────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 高さ | 80vh(min 600px) |
| 背景 | `var(--color-bg-primary)` 単色 |
| 左右に gold 縦罫線(opacity 0.2、画面端から80px内側、上下にフェード) |
| 中央寄せ、最大幅 var(--max-width-narrow) |

### タイポ

- 章ラベル: `MISSION 01`(font-en, var(--fs-2xs), letter-spacing: var(--ls-widest), gold)
- 日本語: `var(--fs-3xl)` (64px) / font-jp / var(--fw-bold) / line-height: var(--lh-snug) / 改行は `<br class="pc-only">` で意図的に
- 英語サブ: `var(--fs-xl)` (32px) / font-display / gold-dim / letter-spacing: var(--ls-wide)

### アニメーション

- スクロール 30% で章ラベル左右の罫線が幅0→40px に伸びる(800ms)
- 日本語テキストが scale 1.05 → 1.0 + opacity 0 → 1 で出現(1200ms slow)
- 英語サブが 600ms 遅れてフェードイン

### レスポンシブ

| BP | 高さ | 日本語 | 英語 |
|---|---|---|---|
| 1280+ | 80vh | 64px | 32px |
| 1024+ | 80vh | 48px | 28px |
| 768+ | 70vh | 36px | 22px |
| 〜767 | 60vh | 28px | 18px |

---

## Section 3: Services Overview — auto

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│  ──── FOUR FIELDS ── 4つの研究領域                           │ ← 章ヘッダー左
│                                                              │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐               │
│ │  IMG   │ │  IMG   │ │  IMG   │ │  IMG   │               │
│ │ 16:9   │ │ 16:9   │ │ 16:9   │ │ 16:9   │               │
│ │        │ │        │ │        │ │        │               │
│ │ 01     │ │ 02     │ │ 03     │ │ 04     │               │ ← gold番号
│ │ GYM    │ │ NUTRI..│ │ FOODS  │ │ SUPPL..│               │ ← Bebas Neue
│ │ ジム   │ │ 栄養   │ │ 食事   │ │ 補助   │               │
│ │ ─────  │ │ ─────  │ │ ─────  │ │ ─────  │               │
│ │ 24時間 │ │ 食べる │ │ 忙しい │ │ 補うで │               │
│ │ ×パー..│ │ ことは │ │ 日でも │ │ なく整..│               │
│ │  →     │ │  →     │ │  →     │ │  →     │               │
│ └────────┘ └────────┘ └────────┘ └────────┘               │
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 高さ | auto(コンテンツ依存) |
| 背景 | `var(--color-bg-secondary)` |
| 上下パディング | var(--space-xl) |
| 横パディング | var(--container-padding-desktop) |

### 章ヘッダー

- 左寄せ: `── FOUR FIELDS — 4つの研究領域`(font-en, var(--fs-xs), gold + font-jp, var(--fs-md))
- 余白下: var(--space-lg)

### 各カード

- 比率: 16:9 画像 + 文字エリア
- 画像オーバーレイ: 黒 30%(初期)→ ホバーで 0%
- 番号: `01` 〜 `04`(font-display, var(--fs-2xl), gold)
- 英語タイトル: `GYM` / `NUTRITION` / `FOODS` / `SUPPLEMENTS`(font-display, var(--fs-xl), white)
- 日本語: `ジム` / `栄養` / `食事` / `補助`(font-jp, var(--fs-sm), gray)
- 区切り: 1px gold opacity 0.3 横線
- キャッチ(各事業 1行): copy_top.md より引用(font-jp, var(--fs-sm), color-text-secondary)
- 右下矢印: `→`(gold, ホバーで右に4px移動)

### ホバー演出

- 画像が `transform: scale(1.05)` + フィルター brightness 0.6 → 0.85(400ms)
- 番号が gold → gold-light へカラートランジション
- 矢印 `→` が右に4px移動

### アニメーション

- スクロール 30% で各カードが順番に下からフェードイン(stagger 100ms)

### レスポンシブ

| BP | 列数 | gap |
|---|---|---|
| 1280+ | 4カラム | var(--space-md) |
| 1024+ | 2×2 | var(--space-md) |
| 768+ | 2×2 | var(--space-sm) |
| 〜767 | 1カラム縦 | var(--space-md) |

---

## Section 4: Why ALPS LAB — auto

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│   ──── WHY ALPS LAB ── 私たちが選ばれる理由                  │
│                                                              │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│ │ I. RESEARCH  │ │ II. LONG-TERM│ │III. LOCAL &  │        │
│ │    FIRST     │ │              │ │   AUTHENTIC  │        │
│ │              │ │              │ │              │        │
│ │ 01 / 04      │ │ 02 / 04      │ │ 03 / 04      │        │
│ │ ─────        │ │ ─────        │ │ ─────        │        │
│ │ 流行ではなく │ │ 短期の結果   │ │ 長野の自然と │        │
│ │ 根拠に基づく │ │ より、続けら │ │ 知見から、本 │        │
│ │ 健康設計を。 │ │ れる仕組みを。│ │ 物だけを。    │        │
│ └──────────────┘ └──────────────┘ └──────────────┘        │
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 背景 | `var(--color-bg-primary)` + 上下にゴールド極細罫線(opacity 0.2) |
| パディング | var(--space-xl) 上下 / var(--container-padding-desktop) 左右 |
| カード間 gap | var(--space-md) |

### 各カード

- 背景: transparent、左に gold 縦罫線 4px(高さ 100%)
- パディング: var(--space-md) var(--space-lg)
- 章番号: `I.` `II.` `III.`(font-display, var(--fs-2xl), gold)
- 英語タイトル: `RESEARCH FIRST` 等(font-display, var(--fs-lg), white, letter-spacing: var(--ls-wide))
- 進捗インジケーター: `01 / 04` 等(font-en, var(--fs-2xs), letter-spacing: var(--ls-widest), gold-dim)
- 区切り罫線: 1px gold opacity 0.3
- 日本語説明: font-jp, var(--fs-base), color-text-secondary

### アニメーション(目玉)

- スクロール時、章番号が `00 → 01` のように高速回転(100ms ごとにランダム数字 → 確定値)→ 800ms かけて確定
- 同時に左の縦罫線が下から上に伸びる(高さ 0 → 100% / 600ms)
- 説明文は遅れてフェードイン

### レスポンシブ

| BP | 列数 |
|---|---|
| 1280+ | 横3カラム |
| 1024+ | 横3カラム |
| 768+ | 縦1カラム |
| 〜767 | 縦1カラム |

---

## Section 5: Stories Pickup(親しみゾーン)— auto

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│  [背景: var(--color-bg-soft) #F5F5F0 — 黒テキスト]           │
│                                                              │
│   ──── STORIES — ストーリーを読む                            │
│                                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│ │   IMG    │ │   IMG    │ │   IMG    │                    │
│ │  4:3     │ │  4:3     │ │  4:3     │                    │
│ ├──────────┤ ├──────────┤ ├──────────┤                    │
│ │ VOICE    │ │ COLUMN   │ │ NEWS     │ ← カテゴリラベル(gold)│
│ │ 田中健一 │ │ 食事と…  │ │ 軽井沢店 │                    │
│ │ さんの声 │ │ 体の関係 │ │ 1周年    │                    │
│ │ ─────    │ │ ─────    │ │ ─────    │                    │
│ │ 抜粋…    │ │ 抜粋…    │ │ 抜粋…    │                    │
│ │ 2026.04  │ │ 2026.03  │ │ 2026.04  │                    │
│ └──────────┘ └──────────┘ └──────────┘                    │
│                                                              │
│              [ すべての記事を見る → ]                         │
└────────────────────────────────────────────────────────────┘
```

### 仕様

| 項目 | 値 |
|---|---|
| 背景 | `var(--color-bg-soft)` (#F5F5F0) |
| テキスト | `var(--color-text-soft)` (#1A1A1A) |
| パディング | var(--space-xl) 上下 |
| 上下境界 | 滑らかに切替(gradient で var(--color-bg-primary) → soft へ 80px 高さで遷移) |

### 各カード

- 背景: transparent
- 画像比率: 4:3、`border-radius: var(--radius-md)`(soft 背景なので軽くRをつける)
- カテゴリラベル: `VOICE` / `COLUMN` / `NEWS`(font-en, var(--fs-2xs), gold、letter-spacing: var(--ls-widest))
- タイトル: font-jp, var(--fs-md), var(--fw-bold), color-text-soft
- 抜粋: font-jp, var(--fs-sm), 2行省略
- 日付: font-en, var(--fs-xs), color-text-muted

### ホバー

- 画像が scale 1.03(400ms ease-out)
- カードが上に4px translateY

### CTA「すべての記事を見る」

- 中央配置、テキストリンクスタイル
- 下線アニメーション(ホバーで左→右に伸びる)
- 色: var(--color-text-soft) + 矢印 → が右に4px動く

### アニメーション

- スクロール 30% で各カードが下からフェードイン(stagger 80ms)

### レスポンシブ

| BP | 列数 |
|---|---|
| 1280+ | 3カラム |
| 1024+ | 3カラム |
| 768+ | 2カラム |
| 〜767 | 横スクロール(snap)1.2カラム見せ |

---

## Section 6: Stores — auto

### レイアウト

```
┌────────────────────────────────────────────────────────────┐
│  ──── STORES — 長野県内3店舗                                 │
│                                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│ │   MAP    │ │   MAP    │ │   MAP    │                    │
│ │   IMG    │ │   IMG    │ │   IMG    │                    │
│ ├──────────┤ ├──────────┤ ├──────────┤                    │
│ │ 01       │ │ 02       │ │ 03       │ ← gold番号           │
│ │ MATSUMOTO│ │ NAGANO   │ │ KARUIZAWA│ ← Bebas Neue        │
│ │ 松本本店 │ │ 長野店   │ │ 軽井沢店 │                    │
│ │ ─────    │ │ ─────    │ │ ─────    │                    │
│ │ 住所     │ │ 住所     │ │ 住所     │                    │
│ │ 営業時間 │ │ 営業時間 │ │ 営業時間 │                    │
│ │ [詳細→]  │ │ [詳細→]  │ │ [詳細→]  │                    │
│ └──────────┘ └──────────┘ └──────────┘                    │
└────────────────────────────────────────────────────────────┘
```

### 仕様

- 背景: `var(--color-bg-primary)` に戻る(soft → primary の境界は gradient で 80px トランジション)
- カード背景: `var(--color-bg-tertiary)` (#1F1F1F)
- 上部にマップ画像(静的画像でOK、4:3)
- 下部に情報ブロック、左に gold 縦罫線
- ホバー: 画像が scale 1.03、カードが上に 4px translateY

### レスポンシブ

| BP | 列数 |
|---|---|
| 1280+ | 3カラム |
| 1024+ | 3カラム |
| 768+ | 1カラム縦 |
| 〜767 | 1カラム縦 |

---

## Section 7: Final CTA

→ `_common.md` の Final CTA 仕様を完全踏襲。

ただし TOP のみ章ラベルを `RESEARCH N° 05 — JOIN US` とする。

---

## Section 8: Footer

→ `_common.md` の Footer 仕様を完全踏襲。

---

## このページで使うコピー

→ `06_content/copy_top.md`
