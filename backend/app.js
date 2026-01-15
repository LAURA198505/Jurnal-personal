// Import librării
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/sequelize");

// Inițializare aplicație
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sincronizare bază de date SQLite
sequelize.sync().then(() => {
  console.log("Database synced");
});

// Rută de test
app.get("/", (req, res) => {
  res.json({ message: "Personal Journal API is running" });
});

// Rute jurnal
const journalRoutes = require("./routes/journal");
app.use("/journal", journalRoutes);

// Pornire server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});