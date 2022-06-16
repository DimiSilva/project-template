import _ from "lodash";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

import models from "../../../models";

const put = async (req: Request, res: Response, next: NextFunction) => {
  const { text, exampleId } = _.get(req, "body", {});

  const example = await models.Example.findById(exampleId);
  example.text = text;
  await example.save();

  res.status(200).send({});
};

export default asyncHandler(put);
