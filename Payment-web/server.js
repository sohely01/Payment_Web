// server.js
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sohel@786", // ✅ Make sure it's correct
  database: "paymentweb", // ✅ Make sure the DB exists
});

connection.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL database");
});

// POST /api/contact
app.post("/api/contact", (req, res) => {
  const { firstname, email, mobilenumber, subject, message } = req.body;

  if (!firstname || !email || !mobilenumber || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO messages (firstname, email, mobilenumber, subject, message) VALUES (?, ?, ?, ?, ?)";

  connection.query(sql, [firstname, email, mobilenumber, subject, message], (err, result) => {
    if (err) {
      console.error("❌ Database error:", err.sqlMessage || err);
      return res.status(500).json({ error: "Database error: " + (err.sqlMessage || "Unknown error") });
    }

    console.log("✅ Insert successful:", result);
    res.status(200).json({ message: "Message submitted successfully" });
  });
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
