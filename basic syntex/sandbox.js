//variable declare
let age = 22;
let year = 2022;
console.log(age, year);

//x can't not change
const x = 11;
console.log(x);


//old way to declare a varrible
var score = 100;
console.log(score);

//user Input
let name = window.prompt("What is your name");
document.write("Hello " + name);

const foo = [1, 2];
const bar = foo;

bar[0] = 9;
console.log(foo[1], bar[0]); // => 2, 9  

//string

let email = 'prosenjitbiswas983@gmail.com';
console.log(email);

//string concatenation
let str1 = 'jit';
let str2 = 'roy';

let fullname = str1 + ' ' + str2;
console.log(fullname);

//getting char
console.log(fullname[0]);
console.log(fullname.length);

console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());

//find any char index from a string
let index = email.indexOf('@');
console.log(index);

let res = email.slice(0, 9);
console.log(res);

let rep = email.replace('b', 'a');
console.log(rep);

//LIST 
let fruits = [
    "Apple",
    "Orange",
    "Plum",
];
alert(fruits.length);
console.log(fruits);
console.log(fruits[1]);


let fruits2 = ["Apple"];
fruits.push("Orange", "Peach");//add last in the array
fruits.unshift("Pineapple", "Lemon");// add begining in the array

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert(fruits2);

//Multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

alert(matrix[1][1]); // 5, the central element

//END LIST

//math
// **(pow)
//pow(x,3) this can write x**2 
let y = 2;
console.log(y ** 4);

//creating html templates
// let likes=100;
// let html = `
// // `` this called templete string
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>
// `;
// console.log(html);


//comparison operator
let age1 = 20;
console.log(age1 == 20);
console.log(age1 != 20);

let result = Boolean(0);
console.log(result);

let result1 = Boolean(100);
console.log(result1);



//Loop 

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}

//FOR EACH LOOP
//first parameter is element, second is index, 
//third is whole array
let arr1 = ['jit', 'prosenjit', 'ariyan', 'golu'];
arr1.forEach(function (element, index, array) {
    console.log(element, index, array);
});

//FOR EACH LOOP USING FUNCTION
let printForEach = function (element, index, array) {
    console.log(element, index, array);
}
arr1.forEach(printForEach);

//ARRAY INTERATION USING MAPING
//first parameter is element, second is index, 
//third is whole array
let arr2 = ['juice', 'ice-cream', 'choklate', 'mango'];
arr2.map(function (element, index, array) {
    console.log(element, index, array);
});

function addSomething(element) {
    return `${element} is a good food.`;
}

//ARRAY INTERATION USING MAPING AND FUNCTION
let arr_res = arr2.map(addSomething);
console.log(arr_res);



let arr = ['jit', 'prosenjit', 'ariyan', 'golu'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let pass = "password";
if (pass.length >= 8) {
    console.log('Strong Password');
}

else if (pass.length >= 10 && pass.includes('@')) {
    console.log('Very Strong Password');
}
else {
    console.log('Weak password.')
}

//fuction
function print() {
    console.log('Hi');
}
print();

//parameter pass(default value)
const member = function (name = 'jit', position = 'ceo') {
    console.log('Name= ' + name + ' Position:  ' + position);
};
member();
member('Prosenjit')

function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
    //alert is use for display msg to the top bar
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

//return type
function checkAge(age2) {
    if (age2 >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
        //confirm is use for to check and return it is true or false 
    }
}

//arrow function
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)); // 3

//user input
let age2 = prompt('How old are you?', 18);

if (checkAge(age2)) {
    alert('Access granted');
} else {
    alert('Access denied');
}

//object in js(OOP)

//object method 
let person = {
    //number, string , date, arrray, object
    first_name: "John",
    last_name: "Doe",
    age: 30,
    dob : "12-12-1999",

    //function as property value
    fullname: function () {
        return this.first_name + " " + this.last_name;
    }
};
console.log(person.fullname());
console.log(person.dob);


let user = {
    name: "Jit",
    age: 23,
};


console.log(user.name);//object access 
console.log(user.age);

// object reference and coping
let user2 = { name: 'John' };

let admin = user2;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user2.name); // 'Pete', changes are seen from the "user" reference
// END object reference and coping



// Cloning and merging, Object.assign
let user3 = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user3) {
    clone[key] = user3[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(user.name); // still John in the original object

//marging
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user3.name); // John
alert(user3.canView); // true
alert(user3.canEdit); // true
//END marging


// To access the object, a method can use the this keyword.
let user4 = {
    name: "alex",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        alert(this.name);
    }
};
user4.sayHi(); // John


//METHOD IN CONSTRUCTOR
//constructor is a special type of function called to create an object. It prepares the new object for use, often accepting arguments that the constructor uses to set required member variables
function User(name) {
    this.name = name;

    this.sayHi = function () {
        alert("My name is: " + this.name);
    };
}

let john = new User("John");

john.sayHi(); // My name is: John


//loop used in object
let user1 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user1) {
    // keys
    alert(key);  // name, age, isAdmin
    // values for the keys
    alert(user1[key]); // John, 30, true
}

//CLASS 
class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }
    get name() {   //getter
        return this._name;
    }
    set name(value) {  //seter
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
}
let user5 = new User("John");
alert(user5.name); // John

user5 = new User(""); // Name is too short.

//inheritance
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");
class Rabbit extends Animal { //Rabit class inherite Animal class
    hide() {
        alert(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!



//others

//template literals (ES6)
//Backtick
// console.log(`First Line 
// Second Line`);

// let age = 18;
// let name = "jit";
// console.log(`His age is ${age}
// His name is ${name}`);

let a = 10;
let b = 20;
console.log(`${a} + ${b} = ${a + b}`);

//arrow function

let show = (a, b) => a + b;
document.getElementById("output").innerHTML = show(10, 23);

//NO PARAMETER
let display = () => console.log("Hello");
display();