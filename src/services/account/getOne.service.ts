import { accountDatabase } from "../../database/account";
import { AppError } from "../../errors/app.error";

export const getOne = (accountId: string) => {
   const account = accountDatabase.find((account) => account.id === accountId);

   if (!account) {
      throw new AppError("Account does not exist", 404);
   }

   return account;
};
