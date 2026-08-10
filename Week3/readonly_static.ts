// 3_readonly_static.ts

class BankBranch {

    // 1. STATIC: Shared by all objects. Belongs to the Class, not the "instance".
    public static readonly bankName: string = "HDFC Bank";
    public static totalAccountsCreated: number = 0;

    // 2. READONLY: Can be set in the constructor but never changed after.
    public readonly accountNumber: string;
    public accountHolder: string;

    constructor(name: string, accNo: string) {
        this.accountHolder = name;
        this.accountNumber = accNo; // 

        // Accessing a static member inside the constructor
        BankBranch.totalAccountsCreated++;
    }

    // STATIC METHOD: Can be called without creating a "new" object
    public static getBankPolicy(): void {
        console.log(`Welcome to ${this.bankName}. All FDs are subject to market risks.`);
        // Note: 'this.accountHolder' would fail here because static methods
        // don't know which specific customer they are talking to.
    }

    public showAccount(): void {
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Acc No: ${this.accountNumber}`);
    }
}

// --- Execution ---

// Accessing STATIC members (Use the Class name, not the object)
console.log(BankBranch.bankName);
BankBranch.getBankPolicy();

// Creating specific account objects
const user1 = new BankBranch("Suresh Raina", "HDFC000123");
const user2 = new BankBranch("Deepika P.", "HDFC000456");

// 3. Testing READONLY
console.log(user1.accountNumber); // Works: we can read it.
// user1.accountNumber = "HDFC999999"; // ERROR: Cannot assign to 'accountNumber' because it is a read-only property.

// 4. Testing STATIC persistence
console.log(`Total Accounts in System: ${BankBranch.totalAccountsCreated}`); // Output: 2
