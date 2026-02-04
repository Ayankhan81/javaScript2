// ! Prototype

const employee = {
  calcTax() {
    console.log("The Tax rate is 10%");
  },
};

const emp1 = {
  salary: 10000,
};
const emp2 = {
  salary: 20000,
  calcTax() {
    console.log("The Tax Rate is 20%");
  },
};
console.log(employee);

console.log(emp1);
// we can't access tax method so we will prototype

emp1.__proto__ = employee;
emp2.__proto__ = employee;

console.log(emp1);
console.log(emp1.calcTax());

console.log(emp2.calcTax());

// ! Classes in JAVAScript

class ToyotaCar {
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  setBrand(brand) {
    this.brand = brand;
  }
  setColor(color) {
    this.color = color;
  }
}

let car1 = new ToyotaCar();
car1.setBrand("lexus");
car1.setColor("white");
console.log(car1);

let car2 = new ToyotaCar();
car2.setBrand("fortuner");
car2.setColor("Red");
console.log(car2);

// ! Inheritance

class person {
  eat() {
    console.log("eat !");
  }
  sleep() {
    console.log("sleep");
  }
}

class engineer extends person {
  work() {
    console.log("Solving Problems, And Building Logic");
  }
}
let Ayankhan = new engineer();
console.log(Ayankhan.work());
console.log(Ayankhan.eat());
console.log(Ayankhan.sleep());

// ! Practice Question------======

/*
 Your are creating a websites for your college .
 create a class User with 2 properties , name 7 email. 
 it also has a method called viewData() that allows user to view website data

 then 

 Create a new class called addmin which inherit from user .
 add a new method called editData that allows it to edit websites data
 */

let DATA = "Secret Information";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("The Websites data is :", DATA);
  }
}

// let Student1 = new User("Ayan", "mdayan@khan1");
// let Student2 = new User("khan", "khan@180");

// console.log(Student1.viewData());
// console.log(Student1);

// let teacher1 = new User("Dean", "dean@988829");
// console.log(teacher1.viewData());
// console.log(teacher1);

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editData() {
    DATA = "The Secret Information has been Changed";
  }
}

let admin1 = new Admin("AyanKHAN", "khan@9882");
 console.log(admin1);
console.log(DATA);
console.log(admin1.editData());



