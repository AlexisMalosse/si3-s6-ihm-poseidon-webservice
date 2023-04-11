const mongoose = require('mongoose');

const poisSchema = new mongoose.Schema({
    name: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

module.exports = mongoose.model('Pois', poisSchema);