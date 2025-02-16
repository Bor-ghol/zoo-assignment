import express from "express";
import {Birds} from "../data/animals.js";

const birdsRouter = express.Router();

birdsRouter.get("/", (req, res) =>{
    res.render("pages/individual-animals", {
        title : "Birds",
        pageMain: "birds",
        sideBar: "birds",

    })
})

birdsRouter.get("/:name", (req, res) =>{
    let birdd = Birds.find(item => item.name.toLowerCase() === req.params.name.toLowerCase());
    res.render('pages/individual-animals', 
        {animal: birdd,
        title : "Birds",
        })
   // console.log(cassowary)   

})

export default birdsRouter