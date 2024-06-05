import { FastifyReply, FastifyRequest } from "fastify";
import { IEvent } from "../interfaces/event.interface";
import { eventService } from "../services/event/_index";

const execute = (request: FastifyRequest<{ Body: IEvent }>, response: FastifyReply) => {
   const { type, destination, amount, origin } = request.body;

   if (type === "deposit") {
      const event = eventService.deposit(destination!, amount);

      return response.status(201).send({ destination: event });
   }

   if (type === "withdraw") {
      const event = eventService.withdraw(origin!, amount);

      return response.status(201).send({ destination: event });
   }

   if (type === "transfer") {
      const withdraw = eventService.withdraw(origin!, amount);

      const deposit = eventService.deposit(destination!, amount);

      return response.status(201).send({ origin: withdraw, destination: deposit });
   }
};

export const eventControllers = { execute };
