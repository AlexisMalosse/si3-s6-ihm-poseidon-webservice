const express = require('express');
const poisService = require('../services/poisService');
const {getAllAlertsNearBy, getAlertsCorresponding} = require('../services/alertsService'); 
const {weatherInFrench, weatherEnum} = require('../models/pois');



const {sendNotification} = require('../services/firebaseService'); 

const router = express.Router();

router.get('/', async (req, res) => {
    const pois = await poisService.getAllPois();
    // console.log(pois);
    res.json(pois);
});

router.get('/:id', async (req, res) => {
    const poi = await poisService.getPoi(req.params.id);
    // console.log(poi);
    res.json(poi);
});

router.get('/history/:email', async (req, res) => {
    const pois = await poisService.getHistoryForUser(req.params.email);
    // console.log(pois);
    res.json(pois);
});

router.post('/', async (req, res) => {
    const poi = req.body;
    // console.log(poi);
    const poiCreated = await poisService.createPoi(poi);
    res.json(poiCreated);
    const alerts = await getAlertsCorresponding(poi);
    (alerts).forEach(async alert => {
        if(alert)
            await sendNotification(alert.fireBaseToken, `Alerte ${weatherInFrench[poi.weather]}`, `Votre alerte "${alert.name}" a détecté un nouvel évènement météo !`, weatherEnum[poi.weather]);
    });
});

router.put('/:id', async (req, res) => {
    const poi = req.body;
    // console.log(poi);
    const poiUpdated = await poisService.updatePoi(req.params.id, poi);
    res.json(poiUpdated);
});

router.delete('/:id', async (req, res) => {
    await poisService.deletePoi(req.params.id);
    res.json({ message: 'Poi deleted' });
});


router.delete('/', async (req, res) => {
    await poisService.deleteAllPois();
    res.json({ message: 'All pois deleted' });
});

module.exports = router;