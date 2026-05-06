/* =========================================================================
   contact-form.js — お問い合わせフォーム バリデーション + 疑似送信
   - HTML5 required + 簡易JSバリデーション併用
   - 必須未入力 / メール形式 / 電話形式 / 同意未チェックを検知
   - エラーメッセージは aria-live="polite" で読み上げ
   - 送信は e.preventDefault() してから 800ms 遅延し /contact/thanks/ へ遷移
   ========================================================================= */

(function () {
  "use strict";

  const form = document.getElementById("contactForm");
  if (!form) return;

  const submitBtn = document.getElementById("contactSubmit");

  /* ----- バリデーションルール ----- */
  const rules = {
    name:    { required: true,  message: "お名前を入力してください。" },
    email:   {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "メールアドレスを正しい形式で入力してください。",
    },
    tel:     {
      required: false,
      pattern: /^[0-9\-]*$/,
      message: "電話番号は半角数字とハイフンのみで入力してください。",
    },
    message: { required: true,  message: "お問い合わせ内容を入力してください。" },
    agree:   { required: true,  message: "プライバシーポリシーへの同意が必要です。", checkbox: true },
  };

  /* ----- 単一フィールドのバリデーション ----- */
  function validateField(name) {
    const rule = rules[name];
    if (!rule) return true;

    let valid = true;
    let value = "";
    let field;

    if (rule.checkbox) {
      field = form.querySelector(`#contact-${name}`);
      valid = field.checked;
    } else {
      field = form.querySelector(`#contact-${name}`);
      if (!field) return true;
      value = (field.value || "").trim();
      if (rule.required && !value) {
        valid = false;
      } else if (value && rule.pattern && !rule.pattern.test(value)) {
        valid = false;
      }
    }

    /* エラー表示の更新 */
    const errorEl = document.getElementById(`contact-${name}-error`);
    if (errorEl) {
      errorEl.textContent = valid ? "" : rule.message;
    }
    if (field && !rule.checkbox) {
      field.setAttribute("aria-invalid", String(!valid));
    }

    return valid;
  }

  /* ----- フォーム全体のバリデーション ----- */
  function validateAll() {
    let allValid = true;
    Object.keys(rules).forEach((name) => {
      const ok = validateField(name);
      if (!ok) allValid = false;
    });
    return allValid;
  }

  /* ----- フィールド変更時の即時バリデーション(blur 時) ----- */
  Object.keys(rules).forEach((name) => {
    const field = form.querySelector(`#contact-${name}`);
    if (!field) return;
    field.addEventListener("blur", () => validateField(name));
    field.addEventListener("change", () => validateField(name));
  });

  /* ----- 送信ハンドラ ----- */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ok = validateAll();
    if (!ok) {
      // 最初のエラーフィールドにフォーカス
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // 疑似送信
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "送信中...";
    }
    setTimeout(() => {
      window.location.href = "/contact/thanks/";
    }, 800);
  });
})();
