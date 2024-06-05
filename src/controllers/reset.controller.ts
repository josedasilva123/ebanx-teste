import { FastifyReply, FastifyRequest } from "fastify";
import { accountDatabase } from "../database/account";

export const reset = (request: FastifyRequest, response: FastifyReply) => {
    accountDatabase.splice(0, accountDatabase.length);

    return response.status(200).send();
}