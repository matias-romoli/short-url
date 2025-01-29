import { DB } from "../class/class.js";
const db = new DB();

export async function createTableIfNotExists() {
  const connection = await db.database;
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS urls (
        id INT AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        short VARCHAR(50) NOT NULL
      )
    `;
    await connection.query(createTableQuery);
    console.log("Table 'urls' created or already exists.");
  } catch (error) {
    console.error("Error creating table 'urls':", error);
  }
}

export const url = {
  get: async (req, res) => {
    const { url } = req.params;

    if (url !== undefined) {
      const result = await db.selectQuery("short", url);
      if (result.length > 0) {
        const original = result[0].url;
        res.redirect(original);
      }
    }
  },
  post: async (req, res) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    const { data } = req.body;
    try {
      const rows = await db.selectQuery("url", data);
      if (rows.length > 0) {
        return res.status(200).json(rows);
      }
      if (regex.test(data) === true) {
        const save = await db.saveDatabase(data);
        if (save) {
          const newRows = await db.selectQuery("id", save);
          return res.status(200).json(newRows);
        }
      } else {
        return res.status(404).json("Please enter a valid url.");
      }
    } catch (error) {
      return error;
    }
  },
};
