import { NextFunction, Request, Response } from "express";
import { AsyncCheckFunction, SyncCheckFunction } from "fastest-validator";

import asyncHandler from "express-async-handler";
import { utils } from "common";

const requestBodyValidator = (
  validator: SyncCheckFunction | AsyncCheckFunction
) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    req.body = { ...req.body, ...req.query, ...req.params };
    const validatorResult = await validator(req.body);
    if (validatorResult === true) next();
    else
      throw new utils.exceptions.InvalidOperation(
        JSON.stringify(validatorResult)
      );
  });

export default requestBodyValidator;
