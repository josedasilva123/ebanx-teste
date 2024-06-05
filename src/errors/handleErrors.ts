import { FastifyReply, FastifyRequest } from "fastify";
import { AppError } from "./app.error";

export const errorHandler = (error: Error, req: FastifyRequest, res: FastifyReply) => {
   if (error instanceof AppError) {
      return res.status(error.statusCode).send();
   }

   console.log(error);
   return res.status(500).send({ message: "Internal server error." });
};
