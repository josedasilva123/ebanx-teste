import { FastifyInstance } from "fastify";
import { accountControllers } from "../controllers/account.controller";

export const accountRoutes = async (fastify: FastifyInstance) => {
    fastify.get("/", accountControllers.getOne);
}