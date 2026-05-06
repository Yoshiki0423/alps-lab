/* =========================================================================
   Trial Form: 体験予約フォームの送信制御
   - 疑似送信(実際の送信処理は行わず /trial/thanks/ に遷移)
   - 簡易バリデーション
   ========================================================================= */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('trialForm');
    if (!form) return;

    // 第1希望と第2希望の最小日時を「今日」に
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minDateTime = today.toISOString().slice(0, 16);
    const date1 = form.querySelector('#date1');
    const date2 = form.querySelector('#date2');
    if (date1) date1.min = minDateTime;
    if (date2) date2.min = minDateTime;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // ネイティブバリデーションを起動
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // 疑似送信(本番では Formspree などへ POST する想定)
      // 送信ボタンを無効化
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '送信中…';
      }

      // 0.6秒後に Thanks ページへ遷移(送信演出)
      setTimeout(function () {
        window.location.href = '/trial/thanks/';
      }, 600);
    });
  });
})();
