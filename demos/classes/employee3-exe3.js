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

    getIntro() {
        return `Hi, I am ${this.fullName}, and I work as a ${this.jobTitle}.`;
    }
}

// Test the getIntro method
let employee1 = new Employee(1, "Pooja", "Doe", "Graphic Artist", 42.50);
let intro = employee1.getIntro();
console.log(intro);

employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

let employee2 = new Employee(2, "Anjli", "Doe", "Developer", 50.00);
let intro2 = employee2.getIntro();
console.log(intro2);

employee2.promote("Senior Developer", 55.00);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);
