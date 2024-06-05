import { accountControllers } from "../controllers/account.controller";
import { Router } from "express";

export const accountRoutes = Router();

accountRoutes.get("/", accountControllers.getOne);
