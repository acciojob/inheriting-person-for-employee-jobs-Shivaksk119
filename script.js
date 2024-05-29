// complete this js code
cy.wait(500); // wait for 500ms
cy.get("@consoleLog").should("be.calledWith", `Hello, my name is Alice and I am 25 years old.`);
cy.wait(500); // wait for 500ms
cy.get("@consoleLog").should("be.calledWith", `Hello, my name is Bob, I am 30 years old, and my job title is Manager.`);
class Person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
	}
}

class Employee extends Person{
	constructor(name,age,jobTitle){
		super(name,age);
		this.jobTitle = jobTitle;
	}

	jobGreet() {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
