import { Request, Response, NextFunction } from "express";
import { UnauthorizedException } from "node-template-application-common/utils/exceptions";
import { errors as errorsEnum } from "node-template-application-common/enums";
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
      throw new UnauthorizedException(errorsEnum.WITHOUT_AUTHORIZATION);
    try {
      const payload = decode(token);
      req.userPayload = payload;
    } catch (err) {
      throw new UnauthorizedException(errorsEnum.WITHOUT_AUTHORIZATION);
    } finally {
      next();
    }
  }
);

export default authentication;
