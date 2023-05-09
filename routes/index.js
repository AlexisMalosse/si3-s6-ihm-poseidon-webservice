const pois = require('./pois');
const alerts = require('./alerts');
const robots = require('./robots');

module.exports = (app) => {
    app.use('/pois', pois);
    app.use('/alerts', alerts);
    app.use('/robots.txt', robots);
    app.use('*', (req, res) => {
        res.send('Not found!!!');
    });
};