const Alerts = require('../models/alerts');
const geolib = require('geolib');

exports.getAllAlerts = async () => {
    const alerts = await Alerts.find();
    return alerts.map(alert => alert.toObject());
};

exports.getAlertsForUser = async (email) => {
    const alerts = await Alerts.find({ creatorEmail: email });
    return alerts.map(alert => alert.toObject());
};

exports.createAlert = async (alert) => {
    const newAlert = new Alerts(alert);
    return await newAlert.save();
}

exports.updateAlert = async (id, alert) => {
    return await Alerts.findByIdAndUpdate(id, alert);
}

exports.deleteAlert = async (id) => {
    return await Alerts.findByIdAndDelete(id);
}

exports.deleteAllAlerts = async () => {
    return await Alerts.deleteMany();
}

/**
 * 
 * @param poi 
 * @returns All the alerts in the perimeter of the poi with the same weather condition
 */
exports.getAlertsCorresponding = async (poi) => {
    
    const alerts = await Alerts.find({ listWeather: { $in: [poi.weather] }, enabled: true });

    const point2 = {latitude: poi.latitude, longitude: poi.longitude};
    // code here
    const nearbyAlerts = alerts.map((alert)=>{
        let point1 = {latitude: alert.latitude, longitude: alert.longitude};
        if(isPointInZone(point1, point2, alert.perimeter, poi.perimeter) && alert.creatorEmail !== poi.creatorEmail)
            return alert;
    })
    return nearbyAlerts;
    
}


const isPointInZone = (point1, point2, perimeter1, perimeter2) => {
    const perimeterMeters = perimeter1 * 1852 + perimeter2 * 1852; 
    const distance = geolib.getDistance(point1, point2);
    
    return distance <= perimeterMeters;
  }