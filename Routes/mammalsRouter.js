import express from "express";
import {Mammals} from "../data/animals.js";


const mammalsRouter = express.Router();

mammalsRouter.get("/", (req, res) =>{
    res.render("pages/individual-animals", {
        title : "Welcome to mammals page",
        pageMain: "mammals",
        sideBar: "mammals",

    })
})

mammalsRouter.get("/:name", (req, res) =>{
    let mammals = Mammals.find(item => item.name.toLowerCase() === req.params.name.toLowerCase());
    res.render('pages/individual-animals', 
        {animal: mammals,
        title : "mammals",
        })
   // console.log(cassowary)   

})

export default mammalsRouter