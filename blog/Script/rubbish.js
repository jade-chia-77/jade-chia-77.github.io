//ARRAY//
let tastySnacks = ['twix', 'ice-cream', 'lollies', 'kiwi onion dip', 'chips, cheerios']

//ACCESSING ARRAY ELEMENTS//
//Accessing the 4th element aka. 'kiwi onion dip' in tastySchnacks array//
console.log(tastySnacks[3])
//This will return 'kiwi onion dip' in the console in dev tools//

//OBJECT//
let tastySchnacks = {
  Schnack-1: 'Dua Lipa';
  Schnack-2: 'Arthur Mariano';
  Schnack-3: 'Ronan Keating';
  Schnack-4: 'ORyan';
}

//ACCESSING OBJECT VALUES//
//Using the key "tastySchnack-1" and corresponding value "Dua Lipa"
console.log(tastySchnacks.Schnack-1)
//This will return 'Dua Lipa' in the console in dev tools//


//EXAMPLES OF FUNCTIONS IN JAVASCRIPT//
//1. Function without parameters or return value//
function greet() {
  console.log("Hello!");
}

//2. Function with parameters//
function add(a, b) {
  return a + b;
}

//3. Function with a default parameter value//
function multiply(a, b = 1) {
  return a * b;
}

//4. Function expression (assigning a function to a variable)//
const square = function(x) {
  return x * x;
};

