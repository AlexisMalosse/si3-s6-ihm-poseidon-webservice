const express = require('express');
const alertsService = require('../services/alertsService');

const router = express.Router();

router.get('/', async (req, res) => {
    const alerts = await alertsService.getAllAlerts();
    // console.log(alerts);
    res.json(alerts);
});

router.get('/:email', async (req, res) => {
    const alerts = await alertsService.getAlertsForUser(req.params.email);
    // console.log(alerts);
    res.json(alerts);
});

router.post('/', async (req, res) => {
    const alert = req.body;
    // console.log(alert);
    await alertsService.createAlert(alert);
    res.json(alert);
});

router.put('/:id', async (req, res) => {
    const alert = req.body;
    // console.log(alert);
    await alertsService.updateAlert(req.params.id, alert);
    res.json(alert);
});

router.delete('/:id', async (req, res) => {
    await alertsService.deleteAlert(req.params.id);
    res.json({ message: 'Alert deleted' });
});

router.delete('/', async (req, res) => {
    await alertsService.deleteAllAlerts();
    res.json({ message: 'All alerts deleted' });
});

module.exports = router;