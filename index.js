const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("./public"));

app.get("/", (req,res) =>{
    res.render("index", {
        dogs:["håkan","göran","krister"]
    })
})

app.listen(port, () => {
    console.log(`Servern körs på http://localhost:${port}`)
})