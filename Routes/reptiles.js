const express = require('express');
const router = express.Router();
const reptiles = require('../data/reptiles'); // Importing reptile data from a separate file

// Route to get all reptiles
router.get('/', (req, res) => {
    res.render('group-page', { title: "Reptiles", animals: reptiles });
});

// Route for individual reptiles
router.get('/:name', (req, res) => {
    const reptile = reptiles.find(r => r.name.toLowerCase().replace(/\s+/g, '') === req.params.name.toLowerCase());
    
    if (!reptile) {
        return res.status(404).send("Reptile not found");
    }

    res.render('individual-animal', { title: reptile.name, animal: reptile });
});

module.exports = router;
