import { FastifyReply, FastifyRequest } from "fastify";
import { accountService } from "../services/account/_index";

export const getOne = (
   request: FastifyRequest<{ Querystring: { account_id: string } }>,
   response: FastifyReply
) => {
   const account = accountService.getOne(request.query.account_id);

   return response.status(200).send(account?.balance);
};
