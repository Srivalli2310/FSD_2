import { DISCOUNT_RATE, DELIVERY_CHARGE } from "./Config";
import { Customer } from "./Customer";

export class Order {

    constructor(
        public customer: Customer,
        private productPrice: number,
        public orderId: number
    ) {}

    // Calculate Final Amount
    public calculateBill(): number {
        const discount = this.productPrice * DISCOUNT_RATE;
        return this.productPrice - discount + DELIVERY_CHARGE;
    }

    // Print Order Details
    public printBill(): void {

        console.log("------ Order Confirmed ------");
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Phone: ${this.customer.phone}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Final Amount: ₹${this.calculateBill()}`);
        console.log("-----------------------------");

    }
}