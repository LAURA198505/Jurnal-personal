Proiect realizat în cadrul disciplinei **Tehnologii Web**  

---

## 1. Descriere generală

**Personal Journal Web App** este o aplicație web de tip **Single Page Application (SPA)** care permite utilizatorului să își gestioneze un jurnal personal zilnic. Utilizatorul poate adăuga, vizualiza și șterge însemnări din jurnal, fiecare însemnare fiind asociată automat cu condițiile meteo din momentul creării acesteia.

Aplicația are rolul de a demonstra utilizarea principalelor tehnologii studiate în cadrul disciplinei, respectând cerințele impuse privind arhitectura, persistența datelor și integrarea unui serviciu extern.

---

## 2. Obiectivul proiectului

Obiectivul principal al proiectului este dezvoltarea unei aplicații web complete care să utilizeze:
- un **frontend bazat pe componente**,
- un **backend RESTful**,
- o **bază de date relațională accesată prin ORM**,
- un **serviciu extern (API public)**.

---

## 3. Funcționalități

- adăugarea unei însemnări în jurnal
- vizualizarea listei de însemnări
- ștergerea unei însemnări
- asocierea automată a informațiilor meteo pentru fiecare însemnare

---

## 4. Tehnologii utilizate

### Frontend
- React.js
- HTML5, CSS
- Fetch API

### Backend
- Node.js
- Express.js

### Persistență
- SQLite
- Sequelize ORM

### Serviciu extern
- OpenWeatherMap API

### Alte tehnologii
- Git & GitHub
- Platforme de deploy (Render / Railway)

---

## 5. Arhitectura aplicației

Aplicația este organizată conform arhitecturii **client–server**:
- Frontend-ul rulează în browser și comunică cu backend-ul prin HTTP
- Backend-ul gestionează logica aplicației, persistența datelor și interogarea serviciului extern
- Datele sunt stocate într-o bază de date relațională

---

## 6. Structura proiectului

```text
personal-journal/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── app.js
│   └── README.md
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── README.md
│
├── docs/
│   └── specificatii-proiect.md
│
└── README.md
