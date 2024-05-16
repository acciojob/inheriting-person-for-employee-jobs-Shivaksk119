// complete this js code
let perObj = {
	greet(){
	 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}

function Person(name, age) {
	const user = Object.create(perObj);
	user.name = name;
	user.age = age;
	return user
}

// Person.prototype.greet = ()=>{
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
// }

let empObj = {
	jobGreet() {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
	}
}

Object.setPrototypeOf(empObj,perObj);

function Employee(name, age, jobTitle) {
	const user1 = Object.create(empObj);
	user1.name = name;
	user1.age = age;
	user1.jobTitle = jobTitle;
	return user1
}

// Employee.prototype.jobGreet = ()=>{
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`)
// }


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
