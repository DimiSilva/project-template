import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from 'helmet'

import setupRoutes from "../routes";

import { middlewares } from "backend-common";

const setupExpress = (): Express => {
  const app = express();

  app.use(helmet())
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());

  app.get("/status", (_, res) => {
    res.status(200).end();
  });
  app.head("/status", (_, res) => {
    res.status(200).end();
  });

  setupRoutes(app);

  app.use(middlewares.errorHandler);

  return app;
};

export default setupExpress;
