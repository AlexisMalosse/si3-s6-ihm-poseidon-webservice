const express = require('express');
const poisService = require('../services/poisService');

const router = express.Router();

router.get('/', (req, res) => {
    const pois = poisService.getAllPois();
    console.log(pois);
    res.json(pois);
});

router.post('/', (req, res) => {
    const poi = req.body;
    console.log(poi);
    poisService.createPoi(poi);
    res.json(poi);
});

module.exports = router;