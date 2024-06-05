import fastify from "fastify";
import cors from "@fastify/cors";
import { accountRoutes } from "./routes/account.routes";
import { eventRoutes } from "./routes/event.routes";
import { resetRoutes } from "./routes/reset.routes";
import { errorHandler } from "./errors/handleErrors";

export const app = fastify();

app.register(cors);
app.setErrorHandler(errorHandler);
app.register(accountRoutes, { prefix: "/account"});
app.register(eventRoutes, { prefix: "/event"});
app.register(resetRoutes, { prefix: "/reset"});