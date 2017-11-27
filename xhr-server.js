const http = require('http');
const port = 3001;

http.createServer(function (req, res) {
    let data = {
        name: 'akira',
        birthday: '12-29'
    };
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1');
    res.end(JSON.stringify(data));
}).listen(port, "127.0.0.1");

console.log(`Server funning at http://127.0.0.1:${port}`); F