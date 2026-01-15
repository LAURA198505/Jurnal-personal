const express = require("express");
const router = express.Router();
const JournalEntry = require("../models/journalentry");

// CREATE – adăugare notă
router.post("/", async (req, res) => {
  try {
    const entry = await JournalEntry.create(req.body);
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ – listare note
router.get("/", async (req, res) => {
  const entries = await JournalEntry.findAll();
  res.json(entries);
});

// READ – o notă după ID
router.get("/:id", async (req, res) => {
  const entry = await JournalEntry.findByPk(req.params.id);
  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: "Entry not found" });
  }
});

// UPDATE – modificare notă
router.put("/:id", async (req, res) => {
  const entry = await JournalEntry.findByPk(req.params.id);
  if (!entry) {
    return res.status(404).json({ error: "Entry not found" });
  }
  await entry.update(req.body);
  res.json(entry);
});

// DELETE – ștergere notă
router.delete("/:id", async (req, res) => {
  const entry = await JournalEntry.findByPk(req.params.id);
  if (!entry) {
    return res.status(404).json({ error: "Entry not found" });
  }
  await entry.destroy();
  res.json({ message: "Entry deleted" });
});

module.exports = router;