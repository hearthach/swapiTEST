const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

async function executeQuery(query, params = []) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(query, params);
    return results;
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  executeQuery,
};
