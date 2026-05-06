# STORIES `/stories/` 実装ログ

## 実装した内容

### ファイル
- `stories/index.html`
- `assets/css/pages/stories.css`
- `assets/js/components/stories-filter.js`(カテゴリフィルター + 近日公開トースト)
- `assets/js/animations.js` 内の `page === "stories"` 分岐 Hero タイムライン

### セクション
1. Header(soft 背景に重なるため、初期色を `data-page="stories"` で補正)
2. Hero(50vh、soft 背景・黒テキスト)— 「STORIES」 + 「会員の声、コラム、お知らせ。」
3. Filter(ALL / VOICE / COLUMN / NEWS の切替ボタン、aria-pressed 同期)
4. Cards(計9件:VOICE 3件 + COLUMN 3件 + NEWS 3件)
5. Toast(クリック時「本記事は近日公開予定です。」を 2秒表示)
6. Final CTA + Footer

### 不変制約の遵守
- 親しみゾーン(soft 基調)を CONTENT 全体に適用(Hero / Filter / Cards)、Final CTA で primary に戻す
- カテゴリラベル(VOICE / COLUMN / NEWS)は gold 色で統一
- 9件のうち 3件のニュースは `06_content/news.md` を踏襲、3件の VOICE は `06_content/voices.md` を踏襲

## 判断した点

### ヘッダー色の補正
- soft 背景にヘッダーが重なるため、`[data-page="stories"] .header` で初期色を soft 系の半透明白に変更
- スクロールで is-scrolled が付与されたら通常の黒に戻る
- ロゴ・nav-link・hamburger の色も同様に切替

### フィルター
- ボタンに `data-filter` 属性、カードに `data-cat` 属性を付与
- JS で `aria-pressed` を同期、表示/非表示は opacity → display で 200ms フェード
- フィルターカテゴリ ALL のときは全表示

### 近日公開トースト
- 各カードリンクに `data-coming-soon` 属性、JS で preventDefault 後にトースト表示
- `role="status"` + `aria-live="polite"` でアクセシブル
- 2秒後に自動で消える(setTimeout)

## 課題・申し送り事項

- 個別記事ページは未実装(課題スコープ外)、すべて「近日公開」扱い
- COLUMN 3件のサムネイル画像は他カテゴリ流用(専用画像があれば差し替え)
- ライト/ダークの ARIA テストは未実施(WCAG AA は手動確認)

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
親しみゾーン(soft)を Hero〜Cards に適用、Final CTA で primary に戻す対比を実現。カテゴリラベル gold 統一。

### 基準2: コード品質 / 9
セマンティック(article で各カード、blockquote 不使用は記事一覧のため適切)。BEM 命名。JS は機能ごとに分割(stories-filter.js)。

### 基準3: パフォーマンス / 8
全画像 lazy load。ヒーロー画像なし(soft 背景単色)。WebP 未変換で -1。

### 基準4: アクセシビリティ / 9
- フィルター:button + aria-pressed 同期
- トースト:role="status" + aria-live="polite"
- カード:全画像 alt、装飾要素 aria-hidden
- soft 背景上のテキストは color-text-soft で AA コントラスト確保

### 基準5: レスポンシブ対応 / 9
1280:3カラム / 1024:2カラム / 768:1カラム / フィルターも折り返し対応

### 合計: 44 / 50 — 合格
