import _ from "lodash";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

import models from "../../../models";

const get = async (req: Request, res: Response, next: NextFunction) => {
  const { search, page, perPage } = _.get(req, "body", {});

  const query = {
    ...(search ? { prop: { $regex: search, $options: "i" } } : {}),
  };

  const data = await models.Example.find(query)
    .sort({ createdAt: -1 })
    .skip(page * perPage - perPage)
    .limit(perPage);

  const total = await models.Example.count(query);

  res.status(200).send({
    data: data,
    perPage,
    page,
    total,
    totalPages: Math.ceil(total / perPage),
  });
};

export default asyncHandler(get);
