//Function 1
function shopping_One(){
    let product = ['sandwich'];
    return function(){
        console.log(`You have ${product} in your cart.`);
    };
}
const shop_One = shopping_One();
shop_One();

//Function 2
function shopping_Two(){
    let product = ['sandwich'];
    product.push(' cola',' chips');
    console.log(product);
    return function(){
        console.log(`You have ${product} in your cart.`);
    };
}
const shop_Two = shopping_Two();
shop_Two();

//Function 3
function shopping_Three(){
    let product = ['sandwich',' cola',' chips'];
    lastproduct = product.pop();
    console.log(product);
    return function(){
        console.log(`You have ${product} in your cart.`);
    };
}
const shop_Three = shopping_Three();
shop_Three();

//Function 4
function shopping_Four(){
    let sandwich = 10;
    let cola = 5;
    let product = ['sandwich',' cola'];
    console.log(product);
    return function(){
        console.log(`You have ${product} in your cart.`);
        console.log(`You have ${sandwich + cola} in your cart.`);
    };
}
const shop_Four = shopping_Four();
shop_Four();

//Function 5
function shopping_Five(){
    let sandwich = 10;
    let cola = 5;
    let product = ['sandwich',' cola'];
    let size = product.length;
    console.log(product);
    return function(){
        console.log(`You have ${product} in your cart.`);
        console.log(`You have ${size} products in your cart.`);
        console.log(`You have ${sandwich + cola} RON in your cart.`);
        console.log(`Succes!`);
    };
}
const shop_Five = shopping_Five();
shop_Five();