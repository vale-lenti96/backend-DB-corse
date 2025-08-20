import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs';
import csv from 'csv-parser';

const dbFile = './races.db';

const run = async () => {
  const db = await open({ filename: dbFile, driver: sqlite3.Database });
  const schema = fs.readFileSync('./schema.sql', 'utf-8');
  await db.exec(schema);

  const results = [];
  fs.createReadStream('./races_template.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const r of results) {
        await db.run(`INSERT INTO races (
          race_name, race_url, date, city, country, distance_km, surface,
          elevation_gain_m, certified, typical_weather, nearest_airport,
          registration_status, registration_open_date, registration_process,
          estimated_fee_eur, tags
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
          r.race_name, r.race_url, r.date, r.city, r.country, r.distance_km, r.surface,
          r.elevation_gain_m, r.certified, r.typical_weather, r.nearest_airport,
          r.registration_status, r.registration_open_date, r.registration_process,
          r.estimated_fee_eur, r.tags
        ]);
      }
      console.log("Import completato!");
    });
};

run();
