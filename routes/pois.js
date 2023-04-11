const express = require('express');
const poisService = require('../services/poisService');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(poisService.getAllPois());
});

router.post('/', (req, res) => {
    const poi = req.body;
    poisService.createPoi(poi);
    res.json(poi);
});

module.exports = router;