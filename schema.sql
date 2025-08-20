-- Schema del database gare
CREATE TABLE IF NOT EXISTS races (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    race_name TEXT NOT NULL,
    race_url TEXT,
    date TEXT NOT NULL,
    city TEXT,
    country TEXT,
    distance_km REAL,
    surface TEXT,
    elevation_gain_m INTEGER,
    certified BOOLEAN,
    typical_weather TEXT,
    nearest_airport TEXT,
    registration_status TEXT,
    registration_open_date TEXT,
    registration_process TEXT,
    estimated_fee_eur REAL,
    tags TEXT
);
