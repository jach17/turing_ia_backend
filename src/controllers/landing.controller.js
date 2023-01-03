import { pool } from "../db.js";

export const cleanContactTable = async (req, res) => {
  try {
    const query = "DELETE FROM table_contact";
    const [result] = await pool.query(query);
    res.status(200).json({
      result: "1",
      message: {
        response: result,
      },
      code: "200",
    });
  } catch (e) {
    return res.status(500).json({
      result: "0",
      message: {
        response: [
          {
            Error: e,
          },
        ],
      },
      code: "500",
    });
  }
};
export const cleanNewsletterTable = async (req, res) => {
  try {
    const query = "DELETE FROM table_newsletter";
    const [result] = await pool.query(query);
    res.status(200).json({
      result: "1",
      message: {
        response: result,
      },
      code: "200",
    });
  } catch (e) {
    return res.status(500).json({
      result: "0",
      message: {
        response: [
          {
            Error: e,
          },
        ],
      },
      code: "500",
    });
  }
};

export const isServerRunning = (req, res) => {
  try {
    res.status(200).json({
      result: "1",
      message: {
        response: [
          {
            "Server is running": "true",
          },
        ],
      },
      code: "200",
    });
  } catch (e) {
    return res.status(500).json({
      result: "0",
      message: {
        response: [
          {
            "Server is running": "false",
          },
          {
            Error: e,
          },
        ],
      },
      code: "500",
    });
  }
};

export const getAllContact = async (req, res) => {
  try {
    const query = "SELECT * FROM table_contact";
    const [result] = await pool.query(query);
    res.status(200).json({
      result: "1",
      message: {
        response: result,
      },
      code: "200",
    });
  } catch (e) {
    return res.status(500).json({
      result: "0",
      message: {
        response: [
          {
            Error: e,
          },
        ],
      },
      code: "500",
    });
  }
};

export const postContact = async (req, res) => {
  try {
    const { nombre, email, phone, puesto, empresa, mensaje } = req.body;
    const query =
      "INSERT INTO table_contact (nombre, email, phone, puesto, empresa, mensaje) VALUES (?,?,?,?,?,?);";
    const [row] = await pool.query(query, [
      nombre,
      email,
      phone,
      puesto,
      empresa,
      mensaje,
    ]);

    res.redirect("https://turing-ia-prueba.netlify.app/");
  } catch (e) {
    return res.status(500).json({
      result: "0",
      message: {
        response: [
          {
            Error: e,
          },
        ],
      },
      code: "500",
    });
  }
};

export const postNewsletterRoute = async (req, res) => {
  try {
    const { email } = req.body;
    const query = "INSERT INTO table_newsletter (email) VALUES (?);";
    const [row] = await pool.query(query, [email]);
    res.status(200).json({
      result: "1",
      message: {
        response: [
          {
            insertedId: row.insertId,
          },
        ],
      },
      code: "200",
    });
  } catch (e) {
    return res.status(500).json({
      result: "0",
      message: {
        response: [
          {
            Error: e,
          },
        ],
      },
      code: "500",
    });
  }
};
