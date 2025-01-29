import { dbConfig } from "../databases/db.js";
import { createPool } from "mysql2/promise";
import shortid from "shortid";

// Clase DB
export class DB {
  constructor() {
    this.database = createPool(dbConfig);
  }

  async selectQuery(condition, data) {
    const querySelect = `SELECT * FROM urls WHERE ${condition} = ?`;
    const connection = await this.database.getConnection();
    try {
      const [rows] = await connection.query(querySelect, [data]);
      return rows;
    } catch (error) {
      console.error("Error executing selectQuery:", error);
      throw error;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }
  async saveDatabase(originalUrl) {
    const queryInsert = "INSERT INTO urls (url, short) VALUES (?, ?)";
    const connection = await this.database.getConnection();
    const shortUrl = shortid.generate();
    try {
      const [result] = await connection.query(queryInsert, [
        originalUrl,
        shortUrl,
      ]);
      return result.insertId;
    } catch (error) {
      console.error("Error executing saveDatabase:", error);
      throw error;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }
}
