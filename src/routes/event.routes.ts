import { FastifyInstance } from "fastify";
import { eventControllers } from "../controllers/event.controllers";

export const eventRoutes = async (fastify: FastifyInstance) => {
    fastify.post("/", eventControllers.execute);
}