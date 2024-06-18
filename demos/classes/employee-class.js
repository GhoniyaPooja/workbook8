"use strict"

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Test the class
let employee1 = new Employee(1, "pooja", "ABC", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.firstName} created`);

// Modify the code to use the fullName getter
console.log(`Employee ${employee1.fullName} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
