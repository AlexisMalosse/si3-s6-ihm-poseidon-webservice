const mongoose = require('mongoose');
const { weatherEnum } = require('./pois');

const alertsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        listWeather: [{ type: String, enum: Object.values(weatherEnum), required: true }],
        creatorEmail: { type: String, required: true },
        creatorFullname: { type: String, required: true },
        enabled: { type: Boolean, required: true, default: true },
        perimeter: { type: Number, required: true },
    },
    {
        timestamps: true
    },
);

module.exports = mongoose.model('Alerts', alertsSchema);