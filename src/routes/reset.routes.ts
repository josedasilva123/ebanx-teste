import { FastifyInstance } from "fastify";
import { reset } from "../controllers/reset.controller";

export const resetRoutes = async (fastify: FastifyInstance) => {
    fastify.post("/", { preHandler: (req, res, done) => {
        req.body = {};

        done();
    }}, reset);
}