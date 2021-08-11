const express = require("express");
const app = express();
const PORT = 8080;
const characters = require("./json/characters.json");
const db = require('better-sqlite3')('OriginalCharacters.db');
const bcrypt = require('bcrypt');

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});

app.use(express.static("public"));
app.use(express.json());

app.get("/border", (req, res) => {
    res.json(characters);
});

app.get("/getOC/:id", (req, res) => {
    console.log(req.params.id);
});

app.post("/register", (req, res) => {

});

app.post("/updateOC", (req, res) => {
    let x = JSON.parse(req.body);
    console.log(req.body);
    if (typeof x.userID === "number" && typeof x.ocID === "number") {

    }
});