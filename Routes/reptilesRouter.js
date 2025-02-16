import express from "express";
import { Reptiles } from "../data/animals.js";

const reptilesRouter = express.Router();

reptilesRouter.get("/", (req, res) =>{
    res.render("pages/individual-animals", {
        title : "Welcome to Reptiles page",
          pageMain: "reptiles",
          sideBar: "reptiles",

    })
})
reptilesRouter.get("/:name", (req, res) =>{
    let reptile = Reptiles.find(item => item.name.toLowerCase() === req.params.name.toLowerCase());
    res.render('pages/individual-animals', 
        {animal: reptile,
        title : "Reptiles",
        })

})
export default reptilesRouter