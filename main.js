const http = require('http');
const fs = require('fs');
const qs = require('qs');

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    const filename = url.split('/')[2];
    const suffix = url.split('.')[1];
    switch (suffix) {
        case 'png': {
            fs.readFile(`upload/${filename}`, (err, data) => {
                res.writeHead(200, {'Content-Type': 'image/png'});
                res.write(data);
                return res.end();
            })
            break;
        }
        case 'jpg': {
            fs.readFile(`upload/${filename}`, (err, data) => {
                res.writeHead(200, {'Content-Type': 'image/jpg'});
                res.write(data);
                return res.end();
            })
            break;
        }
        case 'css': {
            fs.readFile(`css/${filename}`, (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                return res.end();
            })
            break;
        }
        default: {
            fs.readFile('demo.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
            break;
        }
    }

}).listen(3000, () => {
    console.log('server running at localhost:3000 ')
});
