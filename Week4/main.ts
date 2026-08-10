import { Order } from "./OrderLogic";
import { Customer } from "./Customer";

// Create Customer Object

const customer: Customer = {
    name: "Rahul Sharma",
    phone: "9876543210",
    address: "Hyderabad"
};

// Create Order Object

const myOrder = new Order(
    customer,
    2500,
    5001
);

// Execute

myOrder.printBill();
