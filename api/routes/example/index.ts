import { Express } from "express";

import { exampleController } from "../../controllers";
import * as validators from "./validators";
import * as middlewares from "backend-common/middlewares";

const endpoint = "/example";

const setupRoutes = (app: Express) => {
  app.post(
    `${endpoint}/post`,
    [middlewares.requestBodyValidator(validators.post)],
    exampleController.post
  );
  app.get(
    `${endpoint}/get`,
    [middlewares.requestBodyValidator(validators.get)],
    exampleController.get
  );
  app.put(
    `${endpoint}/put`,
    [middlewares.requestBodyValidator(validators.put)],
    exampleController.get
  );
  app.delete(
    `${endpoint}/remove`,
    [middlewares.requestBodyValidator(validators.remove)],
    exampleController.remove
  );
};

export default setupRoutes;
