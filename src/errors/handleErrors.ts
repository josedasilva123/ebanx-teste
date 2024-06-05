import { AppError } from "./app.error";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
   if (error instanceof AppError) {
      return res.status(error.statusCode).json(0);
   }

   console.log(error);
   return res.status(500).send({ message: "Internal server error." });
};
