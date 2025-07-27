// ==UserScript==
// @name         نسخ بيانات التفويل - Farm Heroes
// @namespace    https://fb.me/dr.ahmed.khaled
// @version      1.0
// @description  ينسخ uss وبيانات الجهاز والتعريفات بصيغة مشفرة جاهزة للموقع
// @author       أحمد خالد
// @match        *://*.centurygames.com/*
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
    'use strict';

    function getCookieValue(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : '';
    }

    function copyUssAndInfo() {
        const uss = getCookieValue('__Host-bf_s');
        const name = getCookieValue('__Host-bf_name');
        const picture = getCookieValue('__Host-bf_picture');
        const ts = getCookieValue('__Host-bf_ts');
        const bid = getCookieValue('bid');
        const ua = navigator.userAgent;

        const full = `uss=${uss}&name=${name}&pic=${picture}&ts=${ts}&bid=${bid}&ua=${ua}`;
        const encoded = btoa(full);

        GM_setClipboard(encoded);
        alert('✅ تم نسخ بيانات التفويل بنجاح إلى الحافظة');
    }

    function createCopyButton() {
        const btn = document.createElement('button');
        btn.textContent = '📋 نسخ بيانات التفويل';
        btn.style.position = 'fixed';
        btn.style.bottom = '20px';
        btn.style.left = '20px';
        btn.style.padding = '10px 15px';
        btn.style.background = '#4CAF50';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.borderRadius = '8px';
        btn.style.zIndex = 9999;
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '14px';

        btn.addEventListener('click', copyUssAndInfo);
        document.body.appendChild(btn);
    }

    window.addEventListener('load', () => {
        setTimeout(createCopyButton, 2000); // تأخير بسيط للتأكد من تحميل الصفحة
    });
})();
