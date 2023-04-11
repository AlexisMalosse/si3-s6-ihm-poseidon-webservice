const Pois = require('../models/pois');

exports.getAllPois = () => Pois.find();

exports.createPoi = (poi) => {
    const newPoi = new Pois(poi);
    return newPoi.save();
}