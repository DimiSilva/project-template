import _ from "lodash";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

import models from "../../../models";

const remove = async (req: Request, res: Response, next: NextFunction) => {
  const { exampleId } = _.get(req, "body", {});

  await models.Example.findByIdAndRemove(exampleId);

  res.status(200).send({});
};

export default asyncHandler(remove);
