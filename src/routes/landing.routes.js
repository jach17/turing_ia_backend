import { Router } from "express";
import {
  cleanContactTable,
  cleanNewsletterTable,
  getAllContact,
  isServerRunning,
  postContact,
  postNewsletterRoute,
} from "../controllers/landing.controller.js";

const landingRouter = Router();

//Rutas para probar coneccion de base de datos
landingRouter.get("/server/ping", isServerRunning);
landingRouter.get("/list/contact", getAllContact);
landingRouter.post("/add/contact", postContact);
landingRouter.post("/add/newsletter", postNewsletterRoute);
landingRouter.get("/clean/table/contact", cleanContactTable);
landingRouter.get("/clean/table/newsletter", cleanNewsletterTable);

export default landingRouter;
