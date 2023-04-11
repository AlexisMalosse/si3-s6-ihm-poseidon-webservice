const express = require('express');
const poisService = require('../services/poisService');

const router = express.Router();

router.get('/', async (req, res) => {
    const pois = await poisService.getAllPois();
    console.log(pois);
    res.json(pois);
});

router.get('/:id', async (req, res) => {
    const poi = await poisService.getPoi(req.params.id);
    console.log(poi);
    res.json(poi);
});

router.post('/', (req, res) => {
    const poi = req.body;
    console.log(poi);
    poisService.createPoi(poi);
    res.json(poi);
});

router.put('/:id', (req, res) => {
    const poi = req.body;
    console.log(poi);
    poisService.updatePoi(req.params.id, poi);
    res.json(poi);
});

router.delete('/:id', (req, res) => {
    poisService.deletePoi(req.params.id);
    res.json({ message: 'Poi deleted' });
});

router.delete('/', (req, res) => {
    poisService.deleteAllPois();
    res.json({ message: 'All pois deleted' });
});

module.exports = router;