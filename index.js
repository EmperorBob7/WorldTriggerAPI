const express = require("express");
const app = express();
const PORT = 8080;
const characters = require("./json/characters.json");
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});

app.use(express.static("public"));
app.use(express.json());

app.get("/border", (req, res) => {
    res.json(characters);
});