//Simple function

//////////////2. First class citizen/////////////////////////
//First class citizen
// 2.a. assign to variable

const a = function(){
    console.log("Vishal");
}
a();

// 2.b Pass to method
const b = function(){
    console.log("Vishal");
}
function callable(funcObj){
    funcObj();
}
callable(b);

//2.c Return from a method
function callable(funcObj){
    const b = function(){
        console.log("Vishal");
    }
    return b;
}
callable()();

///////////////3.Function declaration vs function expression //////////
//Declaration
function bar(){
    console.log("This is functional declaration");
}

//functional expression
const y = function(){
    console.log("This is functional expression");
}

//Note: Declared functions are hoisted
//Function Declarations are officially prohibited within non-function blocks (such as if) .
//However all browsers allow them and interpret them in different ways.


////////////////4. call, apply and bind//////////////////////////////////
//BIND: create a new function and defined its this
var pokemon = {
    firstName: 'Pika',
    lastName: 'chu',
    greet: function(){
        return `Hello, ${this.firstName}  ${this.lastName}`;
    }
};

var myname = {
    firstName: 'Vishal',
    lastName: 'grover',
}


//Call and apply provide  context for this and args as well
var pokemon = {
    firstName: 'Pika',
    lastName: 'chu',
    greet: function(greetMsg){
        return `Hello ${this.firstName}  ${this.lastName} ${greetMsg}`;
    }
};

pokemon.greet.call(myname, ', How are you?');


//////////////6. Pass by value vs pass by reference///////////////////
const x = 5;
function changeIt(y){
    y = 10;
    console.log('Inside the function y is: '+ y);
}
changeIt();
console.log('outside the function x is: '+ x);

const x = {
    prop1: 5
};
const changeIt = function (y){
    y.prop1 = 10;
    console.log('Inside the function y is: '+ y.prop1);
}
changeIt(x);
console.log('outside the function x is: '+ x.prop1);




//////8. Object in Javascript  ////////////////////////
////a. Using Object constructor
var obj = new Object();
/////b. Object.create()
var obj  = Object.create(null); //create a new object extending the prototype of object passed
//////c. brackets
var obj = {};
//////d. function constructor()
var obj = function(givenName){
    this.name = givenName
}
var c = new obj('Vishal');


////////////// 12. Lexical scoping of a function/////////////////
var justAVar = 'global';
function whereAreYou(){
    var justAVar = 'local';
    function inner(){
        return justAVar;
    }
    return inner();
}

console.log(whereAreYou());


//////////////// 13. Arrow functions and lexical this///////////////
// a.  Difference in Syntax
// b. this in function refers to anyone who calls it, while
//    this in arrow function does not have anything
    let user = {
        name: "GFG",
        gfg1:() => {
            console.log("hello " + this.name); // no 'this' binding here
        },
        gfg2(){
            console.log("Welcome to " + this.name); // 'this' binding works here
        }
     };
    user.gfg1();
    user.gfg2();

///// c. Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’.
//Since regular functions are constructible, they can be called using the ‘new’ keyword.
//However, the arrow functions are only ‘callable’ and not constructible.
let x = function(...args){
    console.log(args);
};
var m = new x(1,2,3);



////////////14. const, var and let///////////////////////////////
//a. Declaration
var a = 5;
let b =  10;
const c = 15;

a = 3;
b = 6;
c = 9;


///b. scope
//Understand Declaration and initialization
function method1(flag) {
  if (flag) {
    var status = 'adult';
  }
  console.log(status); //adult
}
method1(20);

function method1(flag) {
  if (flag) {
    let status = 'adult';
  }
  console.log(status); //adult
}
method1(20);


//c. Global scope
var num = 10;
for (var num = 0; num < 3; num++) {
  console.log(num); //0 1 2
}
console.log(num); //3

let num = 10;
for (let num = 0; num < 3; num++) {
  console.log(num); //0 1 2
}
console.log(num); //3

//d. Hoisting with all
console.log(a); // undefined
var a = 5;

//while
console.log(a);  //ReferenceError: a is not defined
let a = 5;
and
console.log(a);  //ReferenceError: a is not defined
const a = 5;






