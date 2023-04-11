const mongoose = require('mongoose');

const weatherEnum = ['sun', 'cloud', 'thunderstorm', 'wind', 'storm', 'rain'];

const poisSchema = new mongoose.Schema(
    {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        weather: { type: String, enum: weatherEnum, required: true },
        perimeter: { type: Number, required: true },
        finished: { type: Boolean, default: false },
    },
    {
        timestamps: true
    },
);

module.exports = mongoose.model('Pois', poisSchema);