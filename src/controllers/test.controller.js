import { pool } from "../db.js";
/**
 * Rutas de prueba de conexion y manipulacion con las bases de datos
 */

export const testCleanPlayerTable = async (req, res) => {
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

export const testNoDBRoute = (req, res) => {
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

export const testGetRoute = async (req, res) => {
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

export const testPostRoute = async (req, res) => {
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

export const testGetRouteParams = async (req, res) => {
  try {
    const idToFind = req.params.id;
    const query = "SELECT * FROM table_contact WHERE id=?";
    let [result] = await pool.query(query, idToFind);
    if (result.length == 0) {
      result = [{ Error: "El id solicitado no se encuentra registrado" }];
    }
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
