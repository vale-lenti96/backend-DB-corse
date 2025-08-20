# Calendario Corse Backend (SQLite + Express)

## Contenuto pacchetto
- schema.sql → struttura DB
- races_template.csv → file CSV da compilare con le gare
- import_csv.mjs → script per importare CSV nel DB
- server.db.mjs → backend Express con endpoint /api/search-races

## Guida passo passo (Render)
1. Vai su [https://render.com](https://render.com) e crea un account gratuito.
2. Crea un nuovo **Web Service**.
3. Collega il tuo repository GitHub con questi file (o caricali).
4. Imposta **Build Command**: `npm install`
5. Imposta **Start Command**: `node server.db.mjs`
6. Assicurati che in repo ci sia un `package.json` con dipendenze:
   ```json
   {
     "type": "module",
     "dependencies": {
       "express": "^4.18.2",
       "sqlite3": "^5.1.2",
       "sqlite": "^5.2.4",
       "csv-parser": "^3.0.0"
     }
   }
   ```
7. Deploy. Render ti darà un URL pubblico tipo: `https://xxxx.onrender.com`.
8. Nel frontend, usa quell’URL in `.env` → `VITE_API_URL=https://xxxx.onrender.com`.

