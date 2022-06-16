import { JwtPayload } from "jsonwebtoken";

export {};

declare global {
  interface Error {
    status?: number
  }
  namespace Express {
    interface Request {
      userPayload?: string | JwtPayload | null;
    }
  }
}
