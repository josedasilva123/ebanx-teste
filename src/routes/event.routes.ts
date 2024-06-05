import { eventControllers } from "../controllers/event.controllers";
import { Router } from "express";

export const eventRoutes = Router(); 
eventRoutes.post("/", eventControllers.execute);