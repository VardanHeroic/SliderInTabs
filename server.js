'use strict';

import express from "express";
import http from "http";

let app = express();
let server = http.createServer(app);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
console.log('Link: http://localhost:3000/');
