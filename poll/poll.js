window.onload = function () {
    const qrcode = document.getElementById('qrcode');
    function poll() {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = 'http://127.0.0.1:3001/qrcode';
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                let url = `http://127.0.0.1:3001/check/${data.code}`;
                qrcode.innerHTML = '';
                new QRCode(qrcode, url);
                qrcode.parentNode.href = url;
            }
        };
        xhr.send();
    }
    poll();
    setInterval(poll, 1000);
};