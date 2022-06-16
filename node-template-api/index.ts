import http from "http";
import dotenv from "dotenv";
import setupDatabase from "./config/database";
import setupExpress from './config/express'

dotenv.config();
setupDatabase();

const app = setupExpress();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.info(`api running on port ${process.env.PORT}`);
});
