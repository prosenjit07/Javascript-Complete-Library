//callback function without arrow function

// setTimeout(function () {
//     console.log("Hello World!");
// }, 5000);

//callback function with arrow function
// setTimeout(() => {
//     console.log("Hello World!");
// }, 5000);


//***syncronous programming
// let a=10;
// let b=20;
// let c=a+b;
// console.log(c);
// console.log(b);
// here after 17 line run then 18 line run that is syncronas programming

//***Asyncronas programming
//suppose this date come from server
/* 
let persons = [
    { name: "John", age: 20 },
    { name: "Mary", age: 25 }
]

function createPerson(person) {
    aetTimeout(function(){
        persons.push(person);
    }, 4000);
}

function getPerson() {
    setTimeout(function ()  //function call
    {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.name} ${person.age}</li>`
        });
        document.getElementById("output").innerHTML = output;
    }, 1000);
}   
*/

//***asyncronas programming

// let persons = [
//     { name: "John", age: 20 },
//     { name: "Mary", age: 25 }
// ]

// function createPerson(person, callback) {
//     setTimeout(function () {
//         persons.push(person);
//         callback();
//     }, 2000);
// }


// function getPerson() {
//     setTimeout(function ()  //function call
//     {
//         let output = '';
//         persons.forEach(function (person) {
//             output += `<li>${person.name} ${person.age}</li>`
//         });
//         document.getElementById("output").innerHTML = output;
//     }, 500);
// }

// createPerson({ name: "Tom", age: 30 }, getPerson); //function call where an object and function pass as a parameter


//***another example
// function sum(num1,num2,callback){
//     let total = num1 + num2
//     callback(total)
// }

// sum(10,20,function(total){
//     // received total here
//     console.log(total);
// })

// sum(5,16,(total)=>{
//     console.log(total);
// }) 

//***promises***//
// let persons = [
//     { name: "John", age: 20 },
//     { name: "Mary", age: 25 }
// ]

// function createPerson(person, callback) {
//     let prom = new Promise(function (resolve, reject) {
//         persons.push(person);
//         let error = false;
//         if (!error) {
//             resolve();
//         }
//         else {
//             reject("Error: Something went wrong");
//         }
//     });
//     return prom;
// }

// function getPerson() {
//     setTimeout(function ()  //function call
//     {
//         let output = '';
//         persons.forEach(function (person) {
//             output += `<li>${person.name} ${person.age}</li>`
//         });
//         document.getElementById("output").innerHTML = output;
//     }, 500);
// }

// createPerson({ name: "Tom", age: 30 })
// .then(getPerson)//promise call
//     //if error occur then catch function run
// .catch(function (err) {
//     console.log(err);
// });

//ARROW FUNCTION SYNTAX
// let function_name = (par1, par2) =>  par1 + par2;

//****API Fetching data****//
document.getElementById("btn").addEventListener("click", getData);

function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())//get json data
        .then(data => { console.log(data); })//show json data in console
        .catch(err => {console.log(err);})//if error occur then catch function run
        
}
document.getElementById("output").innerHTML = data;

