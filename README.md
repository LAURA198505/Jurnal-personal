# Jurnal Personal – Aplicație Web

Proiect realizat în cadrul disciplinei **Tehnologii Web**

---

## Descriere generală

Jurnal Personal este o aplicație web care permite utilizatorului să creeze, să vizualizeze și să gestioneze însemnări personale sub forma unui jurnal digital. Aplicația este concepută ca un proiect educațional și urmărește utilizarea unei arhitecturi moderne de tip client–server.

În versiunea actuală, fiecare însemnare conține exclusiv informații introduse de utilizator (titlu și conținut). Aplicația nu include integrarea cu servicii externe și nu asociază date suplimentare precum condiții meteo sau locație.

---

## Funcționalități principale

- adăugarea unei noi însemnări în jurnal;
- afișarea listei de însemnări existente;
- ștergerea unei însemnări;
- comunicare între frontend și backend prin API REST;
- persistența datelor într-o bază de date relațională.

---

## Tehnologii utilizate

### Backend
- Node.js
- Express.js
- Sequelize ORM
- SQLite

### Frontend
- React.js
- JavaScript
- HTML
- CSS

---

## Structura proiectului
Jurnal-personal/
│
├── backend/
│ ├── app.js
│ ├── models/
│ ├── package.json
│ └── README.md
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── README.md
│
└── README.md


---

## Scop educațional

Acest proiect are rolul de a demonstra:
- separarea responsabilităților între frontend și backend;
- utilizarea unui API REST;
- lucrul cu baze de date relaționale;
- realizarea unei aplicații web funcționale de la zero.

---

## Observație

Documentația reflectă strict funcționalitățile implementate în versiunea actuală a aplicației. Extinderi precum autentificarea utilizatorilor sau integrarea cu servicii externe pot fi considerate dezvoltări viitoare.
