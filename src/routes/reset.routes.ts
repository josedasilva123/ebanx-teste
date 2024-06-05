import { reset } from "../controllers/reset.controller";
import { Router } from "express";

export const resetRoutes = Router(); 
resetRoutes.post("/", reset);