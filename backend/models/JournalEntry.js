const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const JournalEntry = sequelize.define("JournalEntry", {
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
});

module.exports = JournalEntry;
