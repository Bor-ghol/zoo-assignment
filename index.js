import express from "express";
// import reptiles from "./Routes/reptiles.js";
import birds from "./Routes/birds.js";
// import mammals from "./Routes/mammals.js";


const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.render("pages/group-page.ejs", {
        title: "Welcome to the Australian Zoo - The Ultimate Wildlife Adventure",
        pageMain: "home"

    })
})

app.use("/birds", birds);
// app.use("/reptiles", reptiles);
// app.use("/mammals", mammals);

app.listen(PORT, () => console.log(`listening to port ${PORT}`))