// studentPortal.ts

// Namespace to manage student information
namespace StudentPortal {

    // Private constant (cannot be accessed outside)
    const passingMarks = 35;

    // Exported function
    export function validateRollNo(rollNo: string): boolean {
        const pattern = /^[A-Z]{2}[0-9]{4}$/;
        return pattern.test(rollNo.toUpperCase());
    }

    // Exported function
    export function checkResult(marks: number): string {
        if (marks >= passingMarks) {
            return "Pass";
        }
        return "Fail";
    }

    // Nested Namespace
    export namespace Fees {

        export function calculateLibraryFee(daysLate: number): number {
            return daysLate * 10;
        }

        export function calculateExamFee(subjects: number): number {
            return subjects * 250;
        }

    }
}

// ---------------- Using the Namespace ----------------

const roll = "CS1025";
const marks = 78;

console.log(`Roll Number Valid? ${StudentPortal.validateRollNo(roll)}`);
console.log(`Result: ${StudentPortal.checkResult(marks)}`);

// Accessing Nested Namespace
const lateDays = 6;
const subjects = 5;

const libraryFee = StudentPortal.Fees.calculateLibraryFee(lateDays);
const examFee = StudentPortal.Fees.calculateExamFee(subjects);

console.log(`Library Fee: ₹${libraryFee}`);
console.log(`Exam Fee: ₹${examFee}`);

// ERROR DEMO
// console.log(StudentPortal.passingMarks);
// This will give an error because passingMarks is private.