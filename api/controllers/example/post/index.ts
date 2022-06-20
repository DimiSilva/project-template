import _ from "lodash";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

import models from "../../../models";

const post = async (req: Request, res: Response, next: NextFunction) => {
  const { text } = _.get(req, "body", {});

  const example = new models.Example({ prop: text });
  await example.save();

  res.status(200).send({});
};

export default asyncHandler(post);
