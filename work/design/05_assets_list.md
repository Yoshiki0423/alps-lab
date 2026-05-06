# 必要画像・動画素材リスト

> 全11ページに必要な画像・動画素材の一覧。
> Coder Agent はこのリストを起点に、最終素材の差し替え or プレースホルダー実装を判断する。
>
> 原則:
> - **著作権フリー** のみ使用(Unsplash / Pexels)
> - 動画は3〜5秒ループ・最大3MB(`02_strategy/project_purpose.md` の制約)
> - 各ページ画像点数は最大8枚
> - WebP形式に変換、`loading="lazy"`(Hero以外)
> - モバイル時の `<picture>` フォールバックは別途検討(srcset 推奨)

---

## 共通素材

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL or 検索キーワード |
|---|---|---|---|---|
| OGP画像 | 画像 | 1200×630 | JPG | TOP Hero と同じ山岳ビジュアルをトリミング |
| Favicon | 画像 | 512×512 | PNG/SVG | ALPS LAB ロゴマーク(ゴールド単色) |
| ロゴ | テキスト or SVG | - | - | テキストロゴ「ALPS LAB」(Bebas Neue)で OK、画像化する場合は SVG |

---

## TOP `/` (index.html)

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL or 検索キーワード |
|---|---|---|---|---|
| Hero NATURE(左) | 画像 | 1200×1080 | WebP | Unsplash: `north alps mountains fog` / `japanese mountains misty` (例: photo-1464822759023-fed622ff2c3b) |
| Hero BODY(右・動画) | 動画 | 1200×1080 / 5秒ループ | WebM | Pexels: `weight training dark gym` / `muscle workout black background` |
| Hero BODY(モバイルポスター) | 画像 | 1080×1920 | WebP | 動画と同シーンの静止画 |
| Service Card 01 GYM | 画像 | 800×450 | WebP | Unsplash: `dark gym interior` (例: photo-1534438327276-14e5300c3a48) |
| Service Card 02 NUTRITION | 画像 | 800×450 | WebP | Unsplash: `healthy ingredients dark` (例: photo-1490645935967-10de6ba17061) |
| Service Card 03 FOODS | 画像 | 800×450 | WebP | Unsplash: `frozen meal box healthy` (例: photo-1547592180-85f173990554) |
| Service Card 04 SUPPLEMENTS | 画像 | 800×450 | WebP | Unsplash: `protein supplements dark` (例: photo-1610483178571-7e2c25e2f63c) |
| Story Card × 3 | 画像 | 800×600 | WebP | (Voice/Column/News 用) |
| Stores Card × 3 | 画像 | 800×600 | WebP | Unsplash: `gym entrance` / `studio interior` |

**TOP合計**: 画像 9枚 + 動画 1本(モバイル静止画含む)

---

## ABOUT `/about` (about.html)

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL or 検索キーワード |
|---|---|---|---|---|
| Hero 北アルプス | 画像 | 1920×1080 | WebP | Unsplash: `japanese alps wide landscape` |
| Story Timeline 画像 × 4 | 画像 | 640×480 | WebP | 長野の風景・店舗外観・調理風景・軽井沢の自然など |
| 代表メッセージ写真 | 画像 | 800×1000 | WebP | Unsplash: `business portrait dark` (例: photo-1560250097-0b93528c311a) |
| Team メンバー × 6 | 画像 | 600×600 | WebP | Unsplash: `portrait fitness trainer` / `nutritionist portrait` |

**ABOUT合計**: 画像 12枚

---

## SERVICES `/services` (一覧)

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| 各事業の大型画像 × 4 | 画像 | 1600×900 | WebP | TOP の Service Card と同テイスト・大型版 |

**SERVICES合計**: 画像 4枚

---

## SERVICES/GYM `/services/gym` (services_gym.html)

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| Hero 動画(トレーニング) | 動画 | 1920×1080 / 5秒 | WebM | Pexels: `gym training dark loop` |
| Hero モバイルポスター | 画像 | 1080×1920 | WebP | 動画と同シーン |
| Facilities 画像 × 6 | 画像 | 800×600 | WebP | Unsplash: `free weight area` / `gym machines` / `studio` / `personal booth` / `locker room` / `lounge` |
| Trainer 画像 × 3 | 画像 | 800×1080 | WebP | Unsplash: `personal trainer portrait black background` |

**GYM合計**: 画像 10枚 + 動画 1本

---

## SERVICES/NUTRITION `/services/nutrition`

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| Hero 食材・食卓 | 画像 | 1920×1080 | WebP | Unsplash: `japanese ingredients dark moody` |
| Detail 提供内容アイコン × 3 | SVG | - | SVG | 自作アイコン推奨(オンライン/対面/月額) |
| Voice 写真 1枚 | 画像 | 800×600 | WebP | Unsplash: `business woman portrait` |

**NUTRITION合計**: 画像 2枚 + SVGアイコン 3点

---

## SERVICES/FOODS `/services/foods`

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| Hero 食卓 | 画像 | 1920×1080 | WebP | Unsplash: `gourmet meal box` |
| 商品画像 × 4(単品/6食/12食/サブスク) | 画像 | 800×600 | WebP | Unsplash: `frozen meals` / `meal prep boxes` |
| Process 画像 × 3 | 画像 | 640×480 | WebP | Unsplash: `nagano vegetables farm` / `chef cooking` / `flash freezing` |
| Voice 写真 1枚 | 画像 | 800×600 | WebP | - |

**FOODS合計**: 画像 9枚

---

## SERVICES/SUPPLEMENTS `/services/supplements`

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| Hero 商品ボトル中央配置 | 画像 | 1920×1080 | WebP | 透過PNG推奨 / Unsplash: `protein bottle dark` (例: photo-1610483178571-7e2c25e2f63c) |
| 商品画像 × 4(プロテイン/BCAA/マルチ/セット) | 画像 | 600×800 | WebP | Unsplash: `supplement bottle` |
| Quality アイコン × 3 | SVG | - | SVG | 自作アイコン(検査/添加物/国内製造) |
| Voice 写真 1枚 | 画像 | 800×600 | WebP | - |

**SUPPLEMENTS合計**: 画像 6枚 + SVGアイコン 3点

---

## STORES `/stores`

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| Hero 長野俯瞰図 | 画像 | 1920×800 | WebP | Unsplash: `nagano aerial view` / 地図ベースのイラストでも可 |
| 各店舗写真 × 3(松本/長野/軽井沢) | 画像 | 1200×800 | WebP | Unsplash: `gym entrance Japan` / `modern fitness studio` |

**STORES合計**: 画像 4枚

---

## STORIES `/stories`

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| カード画像 × 6〜9(VOICE/COLUMN/NEWS) | 画像 | 800×600 | WebP | TOPの Story Pickup を流用可 + 追加3〜6枚 |

**STORIES合計**: 画像 6〜9枚

---

## RECRUIT `/recruit`

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| Hero スタッフ風景 | 画像 or 動画 | 1920×1080 | WebP/WebM | Unsplash: `team working portrait` / 自社風 |
| Interview 写真 × 2〜3 | 画像 | 800×800 | WebP | Trainers の写真を流用可 |

**RECRUIT合計**: 画像 3〜4枚(動画 1本任意)

---

## COMPANY `/company`

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| 本社地図画像 | 画像 | 800×600 | WebP | Google Maps スクリーンショット(著作権要確認) or 静的地図SVG |

**COMPANY合計**: 画像 1枚

---

## CONTACT `/contact` および /contact/thanks

| 用途 | 種別 | 推奨サイズ | 形式 | 参考URL |
|---|---|---|---|---|
| (画像なし) | - | - | - | - |

**CONTACT合計**: 画像 0枚(フォーム中心)

---

## サイズ・容量目安(全体)

| 種別 | 枚数 | 目標合計サイズ |
|---|---|---|
| 画像(WebP) | 約60〜70枚 | 5MB 以下(1枚あたり 60〜100KB目安) |
| 動画 | 2本(Hero TOP / Hero GYM) | 各 3MB 以下 |
| SVGアイコン | 約10点 | 50KB 以下(全体)|

---

## 画像取得時の注意点

### 著作権・ライセンス

- **Unsplash License**(原則商用OK・帰属表示不要)を使用
  - https://unsplash.com/license
- **Pexels License**(商用OK・帰属推奨)を使用
  - https://www.pexels.com/license/
- 上記以外のサイトは原則使用しない
- AI生成画像を使う場合は、各ツールの利用規約を確認

### ダウンロード後の処理

1. 元画像 → WebP変換(`cwebp` または ImageMagick)
2. レスポンシブ用に複数サイズ生成(必要に応じて srcset)
3. 各セクションの`alt`属性に画像内容を日本語で簡潔に記述

### モバイル最適化

- Hero画像はモバイル用に1080×1920(縦長)を別途用意
- 動画背景はモバイルでは `<source media="(min-width: 768px)">` で出し分け、モバイルでは `<img>` ポスター画像表示

---

## モックアップでの暫定対応(現状)

- `04_mockups/*.html` では Unsplash の `?w=800&q=70&auto=format&fit=crop` 形式の URL でホットリンク中
- 本番実装時は **必ずダウンロード+WebP変換+ローカルホスト**(Vercel経由)に切り替えること
- Unsplash ホットリンクは外部依存が高く、相手側の障害でサイト全体が崩れる可能性あり

---

## 素材調達の優先順位(時間がない場合)

1. **最優先**: TOP Hero 左右(NATURE/BODY)— ファーストビューの命
2. **高**: TOP Service Cards × 4 / GYM Hero 動画 / ABOUT Hero 山岳
3. **中**: Trainers / Team / Stores / Story Timeline
4. **低**: Stories Pickup(後日コンテンツ追加で差し替え可)/ Quality・Process アイコン(プレースホルダー絵文字でも可)
