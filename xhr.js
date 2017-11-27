let xhr = new XMLHttpRequest,
    method = 'GET',
    url = 'http://127.0.0.1:3001/';

xhr.open(method, url, true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};

xhr.send();