import { accountDatabase } from "../../database/account"
import { IAccount } from "../../interfaces/account.interface";

export const deposit = (accountId: string, amount: number) => {
    const account = accountDatabase.find(account => account.id === accountId);

    if(account){
        const updateAccount: IAccount = { ...account, balance: account.balance + amount };

        const index = accountDatabase.findIndex(account => account.id === accountId);

        accountDatabase.splice(index, 1, updateAccount);

        return updateAccount;
    } else {
        const newAccount: IAccount = { id: accountId, balance: amount };
        
        accountDatabase.push(newAccount);

        return newAccount;
    }
}