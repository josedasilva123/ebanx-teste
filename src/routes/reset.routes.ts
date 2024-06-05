import { FastifyInstance } from "fastify";
import { reset } from "../controllers/reset.controller";

export const resetRoutes = async (fastify: FastifyInstance) => {
    fastify.post("/", reset);
}