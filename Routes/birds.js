import express from "express";

const birds = express.Router();

birds.get("/", (req, res) =>{
    res.render("pages/individual-animals", {
        title: "Birds",
        pageMain: "birds",

    })
})

export default birds
