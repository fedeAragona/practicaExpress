const { response } = require("express");
const express = require("express");
const app = express();
const path = require("path");
app.listen(3001, () => console.log("Servidor trabajando en puerto 3001"));

const amigos = [
    {id: 1,name: "fede"},
    {id:2,name:"juan" }
]

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.get("/amigos", (req, res) => {
    res.send(amigos);
});

app.get("/index", (req, res) => {
    let htmlInfo = path.resolve(__dirname, "./vistas/index.html");
    res.sendFile(htmlInfo);
});