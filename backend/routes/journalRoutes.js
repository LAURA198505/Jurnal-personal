const express = require("express");
const JournalEntry = require("../models/JournalEntry");

const router = express.Router();

// GET all journal entries
router.get("/entries", async (req, res) => {
  try {
    const entries = await JournalEntry.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch entries" });
  }
});

// POST new journal entry
router.post("/entries", async (req, res) => {
  try {
    const { title, content, mood } = req.body;

    const entry = await JournalEntry.create({
      title,
      content,
      mood,
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: "Failed to create entry" });
  }
});

// DELETE journal entry
router.delete("/entries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await JournalEntry.destroy({ where: { id } });
    res.json({ message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete entry" });
  }
});

module.exports = router;

