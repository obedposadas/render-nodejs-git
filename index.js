import express from "express";
import pg from "pg";

import { config } from "dotenv";

config();
// Conectar a la base de datos
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// Crear una nueva aplicación Express
const app = express();

// Definir un puerto para nuestro servidor
const port = 3000 || process.env.PORT;

// Definir una ruta de prueba
app.get("/", (req, res) => {
  res.send("Grupo #1l")/n;
  res.send("Grupo #1l")/n;
  res.send("Grupo #1l")/n;
  res.send("Grupo #1l")/n;
});

app.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0]);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
