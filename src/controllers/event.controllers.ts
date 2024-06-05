import { Request, Response } from "express";
import { eventService } from "../services/event/_index";

const execute = (request: Request, response: Response) => {
   const { type, destination, amount, origin } = request.body;

   if (type === "deposit") {
      const event = eventService.deposit(destination!, amount);

      return response.status(201).json({ destination: event });
   }

   if (type === "withdraw") {
      const event = eventService.withdraw(origin!, amount);

      return response.status(201).json({ origin: event });
   }

   if (type === "transfer") {
      const withdraw = eventService.withdraw(origin!, amount);

      const deposit = eventService.deposit(destination!, amount);

      return response.status(201).json({ origin: withdraw, destination: deposit });
   }
};

export const eventControllers = { execute };
