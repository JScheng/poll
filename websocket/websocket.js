window.onload = function () {
    const ws = new WebSocket('ws://127.0.0.1:3001');
    const qrcode = document.getElementById("qrcode");

    ws.addEventListener('open', function (event) {
        ws.send('open');
    });

    ws.addEventListener('message', function (event) {
        //console.log('Message from server', event.data);

        let url = `http://127.0.0.1:3001/check/${event.data}`;
        qrcode.innerHTML = '';
        new QRCode(qrcode, url);
        qrcode.parentNode.href = url;
    });
};