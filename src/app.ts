import fastify from "fastify";
import cors from "@fastify/cors";
import { accountRoutes } from "./routes/account.routes";
import { eventRoutes } from "./routes/event.routes";

export const app = fastify();

app.register(cors);
app.register(accountRoutes, { prefix: "/account"});
app.register(eventRoutes, { prefix: "/event"});