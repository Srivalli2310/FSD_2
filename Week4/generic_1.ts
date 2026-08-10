// library.ts

// Generic Class
class Library<T> {

    private item: T;

    constructor(initialItem: T) {
        this.item = initialItem;
    }

    // Returns the stored item
    public borrowItem(): T {
        console.log("Borrowing item...");
        return this.item;
    }

    // Replaces the stored item
    public returnItem(newItem: T): void {
        this.item = newItem;
        console.log("Item returned successfully.");
    }
}

// Generic Function
function displayItem<T>(value: T): void {
    console.log("Item:", value);
}

// ------------------ Usage ------------------

// 1. Number
const bookCount = new Library<number>(250);

let count = bookCount.borrowItem();
console.log(`Books Available: ${count}`);

bookCount.returnItem(300);

displayItem<number>(300);

// 2. String
const bookName = new Library<string>("The Alchemist");

console.log(`Book Name: ${bookName.borrowItem()}`);

bookName.returnItem("Atomic Habits");

displayItem<string>("Atomic Habits");

// 3. Custom Object
interface Student {
    id: number;
    name: string;
}

const studentRecord = new Library<Student>({
    id: 101,
    name: "Rahul"
});

const student = studentRecord.borrowItem();

console.log(`Student ID: ${student.id}`);
console.log(`Student Name: ${student.name}`);

// ERROR DEMO
// bookCount.returnItem("Java Book");
// Error because bookCount stores only numbers.
