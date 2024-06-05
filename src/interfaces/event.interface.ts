export interface IEvent{
    type: "deposit" | "withdraw" | "transfer";
    origin?: string;
    amount: number;
    destination: string;
}