import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get("/api/races", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM races");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Errore DB");
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server online su ${port}`));
