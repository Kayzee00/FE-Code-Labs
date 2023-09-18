// SPREAD SYNTAX //
// https://www.youtube.com/watch?v=pYI-UuZVtHI&list=PLj9uZuEI0pcyIL6CXw4qoYsGhyBZkhKlv&index=6 //
// Spread syntax (aka the ... operator)allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. //
// There are 3 places you can use spread: 1. in  function calls. 2. in array literals. 3. in object literals. //




/* IN FUNCTION CALLS */ 
// these are notes from my console //

//Math.min(45,23,76,1,2,-4)

//const temperatures = [76, 72, 68, 79, 54, 65];

//Math.min(temperatures)

//Math.min(...temperatures);

//Math.min.apply(null, temperatures);

//console.log("hello", "there", "!")

//const tvShows = [ "Six Feet Under", "Chernobyl", "Black Mirror", "Fleabag" ]

//console.log(tvShows)

//console.log(...tvShows)

//console.log("this stuff is bananas: " , "BANANAS");

//console.log("This stuff is bananas: ", ..."BANANAS");

//Math.min(..."9832")




/* SPREAD in ARRAY LITERALS */

//[1,2,3]

// We can use spread inside to take data from an existing array and use it to create new arrays:

// These are notes from my console //

const parents = ["Lorie" , "Steve"]; // undefined
const kids = ['Jake', "Annie", "Jess"]; //undefined
const fullFamily = [parents, kids]; //undefined
fullFamily
//(2) [Array(2), Array(3)]0: (2) ['Lorie', 'Steve']1: (3) ['Jake', 'Annie', 'Jess']length: 2[[Prototype]]: Array(0) ----> this is a nested array.

const fullFamily2 = [...parents, ...kids] // undefined
fullFamily2
// (5) ['Lorie', 'Steve', 'Jake', 'Annie', 'Jess'] ----> this is with spread, now we have an array that contains all those elements from parents and kids combined. 

// order DOES matter!!! 

// We add strings into the new array:

const parents = ["Lorie", "Steve"]; 
undefined
const kids = ['Jake', "Annie", "Jess"]; 
undefined
const dogs = ['Olie', 'Cosmo'];
undefined
[...parents, ...kids, "ME!", ...dogs, "Unnamed Pet Turtle"]
(9) ['Lorie', 'Steve', 'Jake', 'Annie', 'Jess', 'ME!', 'Olie', 'Cosmo', 'Unnamed Pet Turtle']

/* COPYING AN ARRAY */ 

// Spread only goes "one level" deep when copying an array. It does not perform a deep copy of nested arrays! //

// example:
const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];

const copies = [...originals]

copies
(3) ['Mona Lisa', 'American Gothic', 'The School of Athens']

originals
(3) ['Mona Lisa', 'American Gothic', 'The School of Athens']

copies.push("Nighthawks")
4


copies
(4) ['Mona Lisa', 'American Gothic', 'The School of Athens', 'Nighthawks'] // "copies" was successfully copied and updated.

originals
(3) ['Mona Lisa', 'American Gothic', 'The School of Athens'] // "originals" was not updated. 


/* SPREAD in OBJECT LITERALS */

// Example: 

const mainColors = {brightRed: "#e55039", waterfallBlue: "#38ada9"};  
const accentColors = {lightGrey: "#778ca3", swanWhite: "#f7f1e3"};

const fullPallette = {...mainColors, ...accentColors};

fullPallette
{brightRed: '#e55039', waterfallBlue: '#38ada9', lightGrey: '#778ca3', swanWhite: '#f7f1e3'} // we see here that the properties were combined into one object. 

// Another example:

const lion = {hasTail: true, legs:4};
const eagle = {canFly: true };

const hybrid = {name: "Gryphon", ...lion, ...eagle}

hybrid
{name: 'Gryphon', hasTail: true, legs: 4, canFly: true}canFly: truehasTail: truelegs: 4name: "Gryphon"[[Prototype]]: Object // we now haven object that contains all 3 properties (lion, eagle, hybrid). 


/* SPREAD and IMMUTABILITY */
// not wanting to mutate/not wanting to actually change important data in your application.

// When you update arrays/objects directly in the state, it can/will mutate the array/object!!! 

// example of what not to do: 

const todos = [
  {user: "Brick", completed: false, task: "Upload Video"},
  {user: "Lilith", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo) {
  todos.push(newTodo);
}


// example of a better way to structure it to stay away from accidentally mutating the array/object: 

const todos = [
  {user: "Brick", completed: false, task: "Upload Video"}, 
  {user: "Lilith", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo){
  return [...todos, {...newTodo, completed: false}]
}

const newTodo = addPhoto({user:"Mordecai", task: "Feed Bloodwing"}); 