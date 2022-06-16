import { Request, Response, NextFunction } from "express";
import { utils, enums } from "common";
import expressAsyncHandler from "express-async-handler";
import _ from "lodash";
import { decode } from "jsonwebtoken";

const authentication = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = _.get(req, "headers.authorization", "").replace(
      "Bearer ",
      ""
    );
    if (!token)
      throw new utils.exceptions.Unauthorized(
        enums.errors.WITHOUT_AUTHORIZATION
      );
    try {
      const payload = decode(token);
      req.userPayload = payload;
    } catch (err) {
      throw new utils.exceptions.Unauthorized(
        enums.errors.WITHOUT_AUTHORIZATION
      );
    } finally {
      next();
    }
  }
);

export default authentication;
