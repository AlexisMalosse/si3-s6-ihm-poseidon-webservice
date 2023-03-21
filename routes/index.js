const pois = require('./pois');
const robots = require('./robots');

module.exports = (app) => {
    app.use('/pois', pois);
    app.use('/robots.txt', robots);
    app.use('*', (req, res) => {
        res.send('Not found!!!');
    });
};