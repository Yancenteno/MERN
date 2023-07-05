var exampleFunction = function (message) {
    console.log(message);
};

exampleFunction("Hello from exampleFunction");

function parentFunction(callback) {
    callback("information from the parent function");
}
parentFunction( function(message) {
    console.log( message );
  });

parentFunction(exampleFunction);

const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 

const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`

console.log(arr)

const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

console.log(needThyme)

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); // this will throw an error 
const sortedItems = [...items].sort();
console.log(sortedItems)
const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
// this will return [10, 12, 22, 3, 5, 8 ]
console.log(numbers.sort())

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList)
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

console.log(cubes)
const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 );

console.log(evens)
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("m") );

console.log(oFoods)