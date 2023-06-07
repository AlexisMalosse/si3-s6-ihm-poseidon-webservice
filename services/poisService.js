const { Pois } = require('../models/pois');

exports.getAllPois = async () => {
    const pois = await Pois.find({ finished: false });
    return pois.map(poi => poi.toObject());
};

exports.getPoi = async (id) => {
    const poi = await Pois.findById(id);
    return poi.toObject();
};

exports.getHistoryForUser = async (email) => {
    const pois = await Pois.find({ creatorEmail: email }).sort({ createdAt: -1 });
    return pois.map(poi => poi.toObject());
};

exports.createPoi = async (poi) => {
    const newPoi = new Pois(poi);
    return await newPoi.save();
}

exports.updatePoi = async (id, poi) => await Pois.findByIdAndUpdate(id, poi);

exports.deletePoi = async (id) => await Pois.findByIdAndDelete(id);

exports.deleteAllPois = async () => await Pois.deleteMany();
