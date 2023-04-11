const Pois = require('../models/pois');

exports.getAllPois = async () => {
    const pois = await Pois.find();
    return pois.map(poi => poi.toObject());
};

exports.createPoi = (poi) => {
    const newPoi = new Pois(poi);
    return newPoi.save();
}