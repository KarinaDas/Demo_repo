// Function

const items = {
    food: 2000,
    coolDrinks: 3000,
};

var cart = 0;

cart += items.food;
cart += items.coolDrinks;

console.log("cart", cart);


function addToCart(Parameters){
    console.log("hey! I'm new function, hello", Parameters);
}
addToCart(123);
addToCart("Karina");

// Parameters -> While declaring the functiom
// Arguments -> Value given at the moment of function calling

var cart = 0;

function add_cart_value(item) {
    return cart + item;  // updated value
}

function add_cart(item) {
    // cart += item;
    cart = add_cart_value(item);  // value will store
}

add_cart(items.food);
add_cart(items.coolDrinks);
add_cart(items.food);
add_cart(items.coolDrinks);
console.log("cart", cart);  // will print here


// Arrow Function

const food_items = {
    pastery: 200,
    drinks: 300,
};

var cart = 0;
 
const addCartValue = (food_item) => cart + food_item; 

const addCart = (food_item) => (cart = addCartValue(food_item));

add_cart(food_items.pastery);
add_cart(food_items.drinks);
add_cart(food_items.pastery);
add_cart(food_items.drinks);
console.log("cart", cart);  // will print here


// Hoisting


// this
console.log(this);  // browser -> window
                    // pc (nodejs) -> {}
                    // parent objrct or current executing object

const thisExample = {   // Object
    name : "karina",
    getThis : function() {
        console.log(this);
    },
};
thisExample.getThis();


const this_Example = {   // Object + Arrow function
    name : "karina",
    getThis : () => {
        console.log(this);
    },
};
this_Example.getThis();