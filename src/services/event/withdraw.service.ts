import { accountDatabase } from "../../database/account";
import { AppError } from "../../errors/app.error";
import { IAccount } from "../../interfaces/account.interface";

export const withdraw = (accountId: string, amount: number) => {
   const account = accountDatabase.find((account) => account.id === accountId);

   if (!account) {
      throw new AppError("Account does not exist", 404);
   }

   const updateAccount: IAccount = { ...account, balance: account.balance - amount };

   const index = accountDatabase.findIndex((account) => account.id === accountId);

   accountDatabase.splice(index, 1, updateAccount);

   return updateAccount;
};
