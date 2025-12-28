const express = require("express");
const cors = require("cors");

const db = require("./models");
const journalRoutes = require("./routes/journalRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", journalRoutes);

// test route
app.get("/", (req, res) => {
  res.json({ message: "Personal Journal API is running" });
});

// sync database and start server
const PORT = 3001;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

