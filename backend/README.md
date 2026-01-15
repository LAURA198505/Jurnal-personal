# Backend – Jurnal Personal

## Descriere

Backend-ul aplicației Jurnal Personal este realizat folosind Node.js și Express.js și are rolul de a gestiona logica aplicației, rutele API și persistența datelor.

În această versiune, backend-ul gestionează exclusiv datele textuale ale însemnărilor (titlu și conținut). Nu există integrare cu servicii externe și nu sunt utilizate API-uri de tip meteo sau alte surse externe de date.

---

## Funcționalități

- expune un API REST pentru gestionarea însemnărilor;
- permite crearea, citirea și ștergerea însemnărilor;
- salvează datele într-o bază de date SQLite folosind Sequelize ORM.

---

## Tehnologii utilizate

- Node.js
- Express.js
- Sequelize
- SQLite

---

## Pornirea serverului

1. Instalează dependențele:
```bash
npm install
Pornește serverul:

node app.js


Serverul va rula implicit pe:

http://localhost:3000

Observație

Backend-ul este conceput pentru scopuri educaționale și poate fi extins ulterior cu funcționalități suplimentare, precum autentificare sau integrare cu servicii externe.
