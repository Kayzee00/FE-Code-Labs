/* JAVASCRIPT CALLBACKS */

// https://www.youtube.com/watch?v=kz_vwAF4NHI&list=PLj9uZuEI0pcyIL6CXw4qoYsGhyBZkhKlv&index=8 //

// A callback is a function that you pass as a parameter to another function -> that function will do some work, and then call that callback function back (oil-change example). //


// example: 

//setTimeout(() => {
//console.log("Hello")
//}, 100)


//const logHello = () => {
  //console.log("Hello")
//}
//setTimeout(logHello, 100)

// Asynchronous code example:
//console.log("1");
//setTimeout(() => {
  //console.log("2")
//}, 100)
//console.log("3");



// synchronous example: 

//const names = ['james', 'jess', 'lily', 'sevy']

//names.forEach((name) => console.log(name))

//const myForEach = (arr, cb) => {
  //for (let i = 0; i < arr.length; i++) {
    //const element = arr[i];
    //cb(element)
  //}
//}

//myForEach(names, (name) => {
  //console.log("name");
//})



// Asynchronous example:

const loadPokemon = (id, cb) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
    cb(data)
  })
}

loadPokemon(56, (pokemon) => {
  console.log(pokemon);
})