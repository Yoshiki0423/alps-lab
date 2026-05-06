# CONTACT `/contact/` + THANKS `/contact/thanks/` 実装ログ

## 実装した内容

### ファイル
- `contact/index.html`(フォームページ)
- `contact/thanks/index.html`(送信完了ページ)
- `assets/css/pages/contact.css`(両ページ共通)
- `assets/js/components/contact-form.js`(バリデーション + 疑似送信)
- `assets/js/animations.js` 内の `page === "contact"` 分岐 Hero タイムライン

### CONTACT ページのセクション
1. Header
2. Hero(40vh)— 「CONTACT US」 + 「お問い合わせ」 + 短いリード
3. Form — ラジオボタン4(種別)+ input(氏名)+ input(メール)+ input(電話 任意)+ select(希望店舗)+ textarea(内容)+ checkbox(同意)+ 送信ボタン
4. Footer(Final CTA は省略)

### THANKS ページのセクション
1. ミニマルヘッダー(ロゴ+「TOPに戻る」のみ、ナビ・ハンバーガー非表示)
2. メインコンテンツ(min 100vh 中央配置)— 「THANK YOU.」 + 「お問い合わせありがとうございました。」 + リード + 「TOPに戻る」ボタン
3. ミニマルフッター(著作権表記のみ)

## 判断した点

### バリデーション
- HTML5 `required` + `type="email"` + `pattern` を併用、加えて JS で blur/change/submit 時に検証
- 各フィールドのエラーメッセージ枠は `aria-live="polite"` + `aria-describedby` で読み上げ対応
- エラー時はフィールドに `aria-invalid="true"` を付与、CSS で red border + 軽い red glow

### カスタムフォーム要素
- ラジオボタン:`<input type="radio">` を `opacity: 0` で隠し、`<span>` のカスタム円マーカーで表現
- チェックボックス:同様に `<input type="checkbox">` を隠して四角+gold チェックマーク
- セレクト:appearance: none + linear-gradient で gold 三角矢印を描画
- すべてキーボード操作可能(:focus-visible で gold outline)

### 送信処理
- `e.preventDefault()` でデフォルト送信を阻止
- バリデーション失敗時:最初の `aria-invalid="true"` フィールドにフォーカス
- 成功時:ボタンを「送信中...」に変更し disabled 化、800ms 後に `/contact/thanks/` へリダイレクト

### thanks ページの最小構成
- ヘッダーは `header--minimal` で ナビ・ハンバーガー非表示
- フッターは `footer--minimal` で columns/top 非表示、著作権表記のみ
- メインは min 100vh で中央配置、ロード時 CSS keyframe でフェードイン+下から24px移動

### noindex
- thanks ページは `<meta name="robots" content="noindex">` で SEO から除外

## 課題・申し送り事項

- 実際のメール送信は実装していない(課題スコープ:静的サイト/Vercel デプロイ)
- 本番運用時は Formspree / SendGrid / AWS SES 等のメール API 連携が必要
- 「プライバシーポリシー」リンクは `#` のまま(未作成)
- 応募フロー(`?type=recruit&pos=...` クエリの初期値設定)は未実装(QS パラメータ→ラジオ初期選択にすると体験向上)

## セルフチェック結果

### 基準1: デザイン一貫性 / 9
ストイック+シンプル、装飾最小限。送信ボタンは赤(CTA)、フォーカスは gold で統一。

### 基準2: コード品質 / 10
- `<form novalidate>` で JS 制御に統一
- `<fieldset><legend>` でラジオグループをセマンティック表現
- `<label for="...">` 紐付け徹底
- バリデーションロジックを `rules` オブジェクトで宣言的に記述
- BEM 命名、CSS 変数活用

### 基準3: パフォーマンス / 9
画像なし、JS は contact-form.js 単独(60行程度)で軽量。WebP 該当なし(画像なし)。

### 基準4: アクセシビリティ / 10
- 全 input に `<label for>` 紐付け
- 必須項目に `*` + `<span class="visually-hidden">必須</span>`
- `aria-required="true"`, `aria-invalid`, `aria-describedby` の適切設定
- エラーメッセージは `aria-live="polite"`
- カスタムラジオ・チェックは :focus-visible で gold outline
- キーボード操作完備(Tab + Space + Enter)
- 送信ボタンも Enter で送信可

### 基準5: レスポンシブ対応 / 9
1280:ラジオ4横並び、最大幅 720px / 1024:ラジオ2×2 / 768:ラジオ縦並び、ボタン幅100%

### 合計: 47 / 50 — 合格(最優秀)

---

## thanks ページ セルフチェック

### 基準1〜5 すべて 9点(計 45/50)
- 中央配置 + フェードイン演出
- TOPに戻るボタン(gold枠線→ホバーで gold塗り)
- ミニマルヘッダー・フッター
- noindex 対応
