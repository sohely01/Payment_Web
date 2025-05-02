const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");
import Route from './Routes/index.js'

const app = express();

// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/api', Route);



// MySQL connection  in .env file
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Sohel@786", // ✅ Ensure it's correct
//   database: "paymentweb", // ✅ Ensure the database exists
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("❌ MySQL connection error:", err);
//     process.exit(1);
//   }
//   console.log("✅ Connected to MySQL database");
// });

// ✅ POST /api/contact - Save form data
// app.post("/api/contact", (req, res) => {
//   const { firstname, email, mobilenumber, subject, message } = req.body;

//   if (!firstname || !email || !mobilenumber || !message) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   const sql =
//     "INSERT INTO messages (firstname, email, mobilenumber, subject, message) VALUES (?, ?, ?, ?, ?)";

//   connection.query(
//     sql,
//     [firstname, email, mobilenumber, subject, message],
//     (err, result) => {
//       if (err) {
//         console.error("❌ Database error:", err.sqlMessage || err);
//         return res.status(500).json({
//           error: "Database error: " + (err.sqlMessage || "Unknown error"),
//         });
//       }

//       console.log("✅ Insert successful:", result);
//       res.status(200).json({ message: "Message submitted successfully" });
//     }
//   );
// });

// ✅ GET /api - Fetch all sections
// app.get("/api", (req, res) => {
//   const query = "SELECT * FROM updatedata"; // ✅ Ensure 'updatedata' table exists
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error("❌ Error fetching data:", err);
//       return res.status(500).json({ error: "Error fetching data" });
//     }
//     res.json(results); // ✅ Send updated data
//   });
// });

// ✅ POST /api/edithome - Update HomeData
// app.post("/api/edithome", (req, res) => {
//   const { id, homeData } = req.body; // Expecting id and homeData

//   if (!id || !homeData) {
//     return res.status(400).json({ error: "ID and homeData are required" });
//   }

//   const sql = `UPDATE updatedata SET homeData = ? WHERE id = ?`;

//   connection.query(sql, [homeData, id], (err, result) => {
//     if (err) {
//       console.error("❌ Database error:", err.sqlMessage || err);
//       return res.status(500).json({
//         error: "Database error: " + (err.sqlMessage || "Unknown error"),
//       });
//     }

//     console.log("✅ HomeData updated:", homeData);
//     console.log("rrrrrrrrrrrrrrrrrrrrrrrr", homeData);
//     res.status(200).json({
//       homeData
//     });
//   });
// });

// ✅ Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});