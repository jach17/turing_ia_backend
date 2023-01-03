import express from "express";
import cors from "cors";
import landingRouter from "./routes/landing.routes.js";

const api = "/api/turing_back";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*** LANDING ROUTES api url and db connection  ***/
app.use(`${api}/landing`, landingRouter);

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
