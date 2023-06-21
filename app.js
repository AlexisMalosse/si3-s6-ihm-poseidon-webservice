const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressip = require('express-ip');

const app = express();

mongoose.connect('mongodb://localhost/poseidon', { useNewUrlParser: true });

var isLocalhost = (req) => {
    var ip = req.connection.remoteAddress;
    var host = req.get('host');

    return ip === "127.0.0.1" || ip === "::ffff:127.0.0.1" || ip === "::1" || host.indexOf("localhost") !== -1;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressip().getIpInfoMiddleware);

// app.use((req, res, next) => {
//     const subdomain = req.subdomains[1] + '.' + req.subdomains[0];
//     if (subdomain === 'api.poseidon' || isLocalhost(req)) {
//         next();
//     } else {
//         res.status(404).send();
//     }
// });

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );

    // Request headers you wish to allow
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

require('./routes')(app);

module.exports = app;