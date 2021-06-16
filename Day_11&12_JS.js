var name = "Karina";
var age = 1500;

console.log(name);
console.log(age);

name = "Shruti"

console.log(name);

//control statements
// true and false -> Boolean

// 1: if else

//1
const cond = true;
const a = 3;
const b = 8;
if(cond) console.log(a+b);
else console.log(a-b);

//2
const condition = false;
const c = 3;
const d = 8;
if(condition) console.log(c+d);
else console.log(c-d);

//3
const a1 = 3;
const b1 = 8;
if(a1>b1) console.log("yes! a1 is greater.");
else console.log("no! a1 is lesser.");

//4
const a2 = 30;
const b2 = 8;
if(a2>b2) {
    console.log("yes! a2 is greater.");
    console.log("this is the value of a2: " +a2);
}
else console.log("no! a2 is lesser.");
 
//5
const a3 = 30;
const b3 = 80;
if(a3>b3) {
    console.log("yes! a3 is greater.");
    console.log("this is the value of a3: " +a3);
}
else if (b3>a3) {
    console.log("yes! b3 is greater.");
    console.log("this is the value of b3: " +b3);
}
else console.log("no! this was totally bumper(equal).");

// 2: switch
// case 1 -> do opertaion A ; break;
// case 2 -> do opertaion B ; break;
// default

//1
const i = 2;
const j = 3;
switch (i > j) {
    case true:
        console.log("yeah, it's true!");
        break;

    case false:
        console.log("no, it's not greater!");
        break;

    default:
        console.log("nope, it's doesn't work!");
        break;
}


// operators

// 1:Arithmetics operators

// + -> Sum
// - -> Difference
// * -> Multiply
// / -> Divide
// % -> Modulus


// 2:Logical operators

// > -> 
// < -> 
// === -> strict comparison 
// == ->

// AND -> &&
// OR -> ||
// NOT -> !


// 3:Assignment operators or shorthand operators

var coffee = 3;
var milk = 2;
var sugar = 5;

// coffee = 3 + milk + sugar;
coffee += milk + sugar;
console.log(coffee);


// 4:Ternary operators

const m = 20;
const n = 30;
// (expression) ? true : false;
m > n ? console.log(true) : console.log(false);


// Loops

//check for condition then execute -
// 1-for -> when u know how much time u need it to be repeated
// 2-while -> no idea 
//execute then check the condition -
// 3-do while -> no idea

const budget = 10000;
var cart = 0;

const items = {
    beverages : 1000,
    food : 5000,
    groceries : 10000,
    games : 4000,
};

for (var shopping = 0; cart <= budget; shopping++) {
    cart += items.food;
    console.log(shopping);
}

// while (condition) {
//     logic;
// }

while (cart <= budget) {
    cart += items.groceries;
    cart += items.games;
    console.log(shopping);
}


do {
    cart += items.beverages;
    cart += items.games;
    console.log(cart);
}
while (cart <= budget);


var s = 1;
var t = 0;
var u = 0;
// Increment
t = s++;  // postfix -> assign then increment
console.log(t);
u = ++s;  // prefix -> increment then assign
console.log(u);


var w = 1;
var x = 0;
var y = 0;
// Decrement
x = w--;  // assign then decrement
console.log(x);
y = --w;  // decrement then assign
console.log(y);