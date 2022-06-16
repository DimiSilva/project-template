import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

import setupRoutes from "../routes";

import { middlewares } from "backend-common";

const setupExpress = (): Express => {
  const app = express();

  app.get("/status", (_, res) => {
    res.status(200).end();
  });
  app.head("/status", (_, res) => {
    res.status(200).end();
  });

  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());

  setupRoutes(app);

  app.use(middlewares.errorHandler);

  return app;
};

export default setupExpress;
