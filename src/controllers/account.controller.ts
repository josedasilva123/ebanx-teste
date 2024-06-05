import { accountService } from "../services/account/_index";
import { Request, Response } from "express";

const getOne = (
   request: Request,
   response: Response
) => {
   const account = accountService.getOne(request.query.account_id as string);

   return response.status(200).json(account?.balance);
};

export const accountControllers = { getOne };
