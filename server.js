const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "193.203.184.81",
  user: "u540517340_zepto",
  password: ">esD[9d^U",
  database: "u540517340_zepto",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM agents";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(3001, () => {
  console.log("listening");
});
