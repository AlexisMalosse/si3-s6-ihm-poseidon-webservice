const Alerts = require('../models/alerts');

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
