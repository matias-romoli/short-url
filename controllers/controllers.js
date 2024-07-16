import { db } from "../databases/db.js";
import shortid from "shortid";


async function selectQuery(db, condition, data) {
  await createTableIfNotExists();

  const query = `SELECT * FROM urls WHERE ${condition} = ?`;
  const [rows] = await db.query(query, [data]);
  return rows;
}
async function saveDatabase(originalUrl) {
  await createTableIfNotExists();
  try {
    const shortUrl = shortid.generate();
    const query = "INSERT INTO urls (url, short) VALUES (?, ?)";
    const [result] = await db.query(query, [originalUrl, shortUrl]);
    return result.insertId;
  } catch (error) {
    return error;
  }
}
async function createTableIfNotExists() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS urls (
        id INT AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        short VARCHAR(50) NOT NULL
      )
    `;
    await db.query(createTableQuery);
    console.log("Table 'urls' created or already exists.");
  } catch (error) {
    console.error("Error creating table 'urls':", error);
  }
}

export const url = {
  get: async (req, res) => {
    const { url } = req.params;

    if (url !== undefined) {
      const result = await selectQuery(db, "short", url);
      if (result.length > 0) {
        const original = result[0].url;
        res.redirect(original);
      }
    }
  },
  post: async (req, res) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    const { data } = req.body;

    const rows = await selectQuery(db, "url", data);
    if (rows.length > 0) {
      return res.status(200).json(rows);
    }
    if (regex.test(data) === true) {
      const save = await saveDatabase(data);
      if (save) {
        const newRows = await selectQuery(db, "id", save);
        return res.status(200).json(newRows);
      }
    } else {
      return res.status(404).json("Please enter a valid url.");
    }
  },
};

