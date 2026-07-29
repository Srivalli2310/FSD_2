// BankAccount Class

class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Current Balance =", this.balance);
    }
}

let account = new BankAccount(5000);

account.deposit(2000);
account.withdraw(1500);
account.displayBalance();