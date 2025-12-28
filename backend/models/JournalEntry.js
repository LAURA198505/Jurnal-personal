const { DataTypes } = require("sequelize");
const db = require("./index");

const JournalEntry = db.sequelize.define("JournalEntry", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  mood: {
    type: DataTypes.STRING,
  },
  weatherTemp: {
    type: DataTypes.FLOAT,
  },
  weatherDesc: {
    type: DataTypes.STRING,
  },
});

module.exports = JournalEntry;
