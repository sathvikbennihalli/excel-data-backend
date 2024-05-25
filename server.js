const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

// Configure CORS options
const corsOptions = {
  origin: ["https://excel-data-frontend.pages.dev", "http://localhost:3000"],
  optionsSuccessStatus: 200,
};
//excel-data-backend.onrender.com/

// Use CORS middleware with the configured options
https: app.use(cors(corsOptions));

// Setup MySQL database connection
const db = mysql.createConnection({
  host: "193.203.184.81",
  user: "u540517340_zepto",
  password: ">esD[9d^U",
  database: "u540517340_zepto",
});

// Endpoint to fetch data from the database
app.get("/", (req, res) => {
  const sql = "SELECT * FROM agents";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

// Start the server and listen on port 3001
app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
