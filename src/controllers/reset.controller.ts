import { accountDatabase } from "../database/account";
import { Request, Response } from "express";

export const reset = (request: Request, response: Response) => {
    accountDatabase.splice(0, accountDatabase.length);

    return response.status(200).send("OK");
}