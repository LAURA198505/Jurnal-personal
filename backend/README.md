# Personal Journal – Backend

This backend provides a RESTful API for the Personal Journal Web App.
It is implemented using Node.js, Express, Sequelize ORM and a SQLite database.

---

## Requirements
- Node.js (version 18+ recommended)
- npm

---

## How to run the backend

1. Navigate to the backend folder:
```bash
cd backend

2. Install dependencies:

npm install


Start the server:

node app.js

3. Server information

The server runs on:
http://localhost:3001

Test endpoint:
GET http://localhost:3001/

Available REST endpoints

GET /api/entries
Returns all journal entries.

POST /api/entries
Creates a new journal entry.

DELETE /api/entries/:id
Deletes a journal entry by ID.

Database

The application uses a SQLite relational database.

The database file (database.sqlite) is created automatically at runtime.

Sequelize ORM is used for data persistence.
