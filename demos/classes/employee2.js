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

    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
}


let employee1 = new Employee(1, "Pooja", "ABC", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.fullName} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

// Create and test a second employee
let employee2 = new Employee(2, "Anjli", "Doe", "Developer", 50.00);
employee2.promote("Senior Developer", 55.00);
console.log(`Employee ${employee2.fullName} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);
