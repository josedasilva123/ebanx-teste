import { accountDatabase } from "../../database/account";
import { IAccount } from "../../interfaces/account.interface";

export const withdraw = (accountId: string, amount: number) => {
   const account = accountDatabase.find(
      (account) => account.id === accountId
   ) as IAccount;

   const updateAccount: IAccount = { ...account, balance: account.balance - amount };

   const index = accountDatabase.findIndex((account) => account.id === accountId);

   accountDatabase.splice(index, 1, updateAccount);

   return updateAccount;
};
