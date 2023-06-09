const mongoose = require('mongoose');

const weatherEnum = {
    SUN: 'SUN',
    CLOUD: 'CLOUD',
    THUNDERSTORM: 'THUNDERSTORM',
    WIND: 'WIND',
    STORM: 'STORM',
    RAIN: 'RAIN',
}

const weatherInFrench = {
    SUN: 'Soleil',
    CLOUD: 'Nuageux',
    THUNDERSTORM: 'Orage',
    WIND: 'Vent',
    STORM: 'Tempête',
    RAIN: 'Pluie',
}

const poisSchema = new mongoose.Schema(
    {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        weather: { type: String, enum: Object.values(weatherEnum), required: true },
        perimeter: { type: Number, required: true },
        finished: { type: Boolean, default: false },
        creatorEmail: { type: String, required: true },
        creatorFullname: { type: String, required: true },
    },
    {
        timestamps: true
    },
);

const Pois = mongoose.model('Pois', poisSchema);

module.exports = {
    Pois,
    weatherEnum,
    weatherInFrench
};