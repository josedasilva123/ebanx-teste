import { accountRoutes } from "./routes/account.routes";
import { eventRoutes } from "./routes/event.routes";
import { resetRoutes } from "./routes/reset.routes";
import { errorHandler } from "./errors/handleErrors";

import express, { json } from "express";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(json());

app.use("/balance", accountRoutes);
app.use("/event", eventRoutes);
app.use("/reset", resetRoutes);

app.use(errorHandler);