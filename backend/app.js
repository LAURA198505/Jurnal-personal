const express = require("express");
const cors = require("cors");
const app = express();

const journalRoutes = require("./routes/journal");

app.use(cors());
app.use(express.json());

app.use("/journal", journalRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Personal Journal API is running" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
