# Personal Journal – Tehnologii Web

## Descriere
Aplicație web pentru gestionarea unui jurnal personal, realizată în cadrul disciplinei **Tehnologii Web**.
Aplicația permite adăugarea, vizualizarea, modificarea și ștergerea notelor din jurnal.

## Tehnologii utilizate
- Node.js
- Express.js
- Sequelize ORM
- SQLite
- HTML5
- JavaScript (Fetch API)

## Funcționalități
- CRUD complet pentru notele din jurnal:
  - Create (POST)
  - Read (GET)
  - Update (PUT)
  - Delete (DELETE)
- Persistență date folosind SQLite
- API REST
- Frontend simplu realizat cu HTML și JavaScript

## Rulare aplicație
1. Instalarea dependențelor:
   ```bash
   npm install
Pornirea serverului:

bash
Copy code
node app.js
Backend-ul rulează la:

arduino
Copy code
http://localhost:3001
Frontend-ul se deschide din fișierul:

bash
Copy code
frontend/index.html
Structura proiectului
pgsql
Copy code
Jurnal-personal/
│
├── backend/
│   ├── app.js
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── database.sqlite
│   └── README.md
│
└── frontend/
    └── index.html
Autor
Student OPRESCU LAURA GEORGIANA, Master Didactic anul II, grupa 1444 ASE
