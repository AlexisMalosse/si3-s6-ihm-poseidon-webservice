const pois = require('./pois');

module.exports = (app) => {
    app.use('/pois', pois);
    app.use('*', (req, res) => {
        res.send('Not found!!!');
    });
};