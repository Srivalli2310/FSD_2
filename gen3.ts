// Interface used as a Generic Constraint
interface EmployeeInfo {
    employeeId: string;
    salary: number;
}

// Generic Function with Constraint
function displayEmployee<T extends EmployeeInfo>(employee: T): void {

    console.log("----- Employee Details -----");
    console.log(`Employee ID: ${employee.employeeId}`);
    console.log(`Salary: ₹${employee.salary}`);

    const bonus = employee.salary * 0.10;
    console.log(`Bonus: ₹${bonus}`);
    console.log("----------------------------");
}



const employee1 = {
    employeeId: "EMP101",
    salary: 600000,
    name: "Rahul"
};

const employee2 = {
    employeeId: "EMP205",
    salary: 850000,
    department: "IT"
};

displayEmployee(employee1);
displayEmployee(employee2);

// ERROR DEMO
