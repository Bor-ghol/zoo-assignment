import express from "express";
import reptilesRouter from "./Routes/reptilesRouter.js";
import mammalsRouter from "./Routes/mammalsRouter.js";
import birdsRouter from "./Routes/birdsRouter.js";
import dotenv from 'dotenv'


const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));
dotenv.config();

app.get("/", (req, res) =>{
    res.render("pages/group-page.ejs", {
        title: "Welcome to the Australian Zoo",
         pageMain: "home",
         sideBar: "home",

    })
})

app.use("/birds", birdsRouter);
app.use("/reptiles", reptilesRouter);
app.use("/mammals", mammalsRouter);

app.listen(PORT, () => console.log(`listning to port ${PORT}`))