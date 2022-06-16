import { Express } from "express";

import setupExampleRoutes from './example'

const setupRoutes = (app: Express) => {
    setupExampleRoutes(app)
};

export default setupRoutes;
