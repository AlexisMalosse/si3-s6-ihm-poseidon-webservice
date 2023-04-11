const Pois = require('../models/pois');

exports.getAllPois = async () => {
    const pois = await Pois.find();
    return pois.map(poi => poi.toObject());
};

exports.getPoi = async (id) => {
    const poi = await Pois.findById(id);
    return poi.toObject();
};

exports.createPoi = (poi) => {
    const newPoi = new Pois(poi);
    return newPoi.save();
}

exports.updatePoi = (id, poi) => {
    return Pois.findByIdAndUpdate(id, poi);
}

exports.deletePoi = (id) => {
    return Pois.findByIdAndDelete(id);
}

exports.deleteAllPois = () => {
    return Pois.deleteMany();
}
