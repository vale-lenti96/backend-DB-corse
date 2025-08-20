import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const initDB = async () => {
  const db = await open({ filename: './races.db', driver: sqlite3.Database });
  return db;
};

app.post('/api/search-races', async (req, res) => {
  const prefs = req.body;
  const db = await initDB();
  let query = "SELECT * FROM races WHERE 1=1";
  const params = [];

  if (prefs.country) { query += " AND country = ?"; params.push(prefs.country); }
  if (prefs.surface) { query += " AND surface = ?"; params.push(prefs.surface); }
  if (prefs.time_window) {
    query += " AND date BETWEEN ? AND ?";
    params.push(prefs.time_window.from, prefs.time_window.to);
  }

  const rows = await db.all(query, params);
  res.json(rows);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
