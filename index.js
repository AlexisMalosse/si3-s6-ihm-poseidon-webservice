const app = require('./app');
const config = require('./config');
const fs = require('fs');
const https = require('https');

const PORT = process.env.PORT || config.port;

try {
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/api.poseidon.alexismalosse.fr/privkey.pem');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/api.poseidon.alexismalosse.fr/fullchain.pem');

    https.createServer({
        key: privateKey,
        cert: certificate
    }, app).listen(PORT);
    console.log('https server is running on port', server.address().port);
} catch (e) {
    console.log(e);
    const server = app.listen(PORT, () => {
        console.log('server is running on port', server.address().port);
    });
}
