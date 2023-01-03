import express from "express";
import testRouter from "./routes/test.routes.js";

const api = "/api/turing_back";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*** TEST ROUTES api url and db connection  ***/
app.use(`${api}/test`, testRouter);

app.use((req, res, next) => {
  res.status(404).json({
    result: "0",
    message: {
      response: [
        {
          Error:
            "No se encontró la ruta especificada. Consulte la documentación para más información",
        },
      ],
    },
    code: "404",
  });
});

export default app;
