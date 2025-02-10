const express = require('express');
const router = express.Router();

// Reptile Data
const reptiles = [
    {
        name: "Frill-Necked Lizard",
        scientificName: "Chlamydosaurus kingii",
        description: "The frill-necked lizard is known for its large frill around its neck, which it flares out when threatened.",
        image: "/images/frill-necked-lizard.jpg"
    },
    {
        name: "Hawksbill Turtle",
        scientificName: "Eretmochelys imbricata",
        description: "The hawksbill turtle is a critically endangered species known for its beautiful shell and important role in marine ecosystems.",
        image: "/images/hawksbill-turtle.jpg"
    },
    {
        name: "Perentie",
        scientificName: "Varanus giganteus",
        description: "The Perentie is the largest monitor lizard in Australia, known for its speed and intelligence.",
        image: "/images/perentie.jpg"
    }
];

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
