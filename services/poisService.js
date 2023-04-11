const Pois = require('../models/pois');

exports.getAllPois = async () => {
    const pois = await Pois.find();
    return pois.map(poi => poi.toObject());
};

exports.getPoi = async (id) => {
    const poi = await Pois.findById(id);
    return poi.toObject();
};

exports.createPoi = async (poi) => {
    const newPoi = new Pois(poi);
    return await newPoi.save();
}

exports.updatePoi = async (id, poi) => {
    return await Pois.findByIdAndUpdate(id, poi);
}

exports.deletePoi = async (id) => {
    return await Pois.findByIdAndDelete(id);
}

exports.deleteAllPois = async () => {
    return await Pois.deleteMany();
}
