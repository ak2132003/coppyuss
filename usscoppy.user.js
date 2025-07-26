// ==UserScript==
// @name         نسخ uss مشفر
// @namespace    https://fb.me/dr.ahmed.khaled
// @version      1.3
// @description  uss مشفر للحماية
// @author       Ahmed
// @match        *://*.centurygames.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const btn = document.createElement('button');
    btn.textContent = '📋 نسخ الرمز';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '9999';
    btn.style.padding = '10px 15px';
    btn.style.background = '#28a745';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    btn.title = 'ينسخ الكود السري';

    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        const allCookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, val] = cookie.split('=');
            acc[key] = val;
            return acc;
        }, {});

        const keys = [
            'bid',
            '__Host-bf_s',
            '__Host-bf_name',
            '__Host-bf_picture',
            '__Host-bf_ts'
        ];

        const orderedCookies = keys.map(key => `${key}=${allCookies[key]}`).filter(Boolean);
        const cookieString = orderedCookies.join('; ');
        const encoded = btoa(cookieString); // Base64 encode

        navigator.clipboard.writeText(encoded)
          .then(() => {
            btn.textContent = '✅ نُسخ الرمز!';
            setTimeout(() => { btn.textContent = '📋 نسخ الرمز'; }, 2000);
          })
          .catch(err => {
            alert('⚠️ حدث خطأ أثناء النسخ: ' + err);
          });
    });
})();
