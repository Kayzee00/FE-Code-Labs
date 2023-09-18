// How Async JS Works:
// https://www.youtube.com/watch?v=1Z7FjG--F20&list=PLj9uZuEI0pcyIL6CXw4qoYsGhyBZkhKlv&index=10 //

//Global execution context

//console.log("message")
//logger()
//console.log(1)


//function logger() {
  //console.log(2)
  //finish()
  //console.log(3)
  //function finish() {
    //console.log("finished")
  //}
//} // result is 2,3,1 ... reason for thisz: callstack!


//Function execution context

//function first() {
 // console.log(1)
//}

//function second() {
 // setTimeout(() => {
 //   console.log(2)
 // }, 0)
//}

//function third() {
 // console.log(3)
//}

//first()
//second() 
//third()

// A Callsack- is a way to keep track of what code we're running at what time (a way for JS to know what's going on and how to run your codes.) -- things get stacked on top of it/and the things on the top get executed first(once finished being executed, they get removed) first in->first out.



// Callbacks - a function that's a parameter.

//exmaple:

//function message() {
 // console.log('hellooo thereee')
//}

//function logger(message) {
  //message()// this message is the callback.
  
//} // this became a higher order function. (a higher order function is a function that takes in another function in as a parameter.)

//logger(message)


//How does the example above apply to the example below? :

//function first() {
  // console.log(1)
 //}
 
 //function second(callback) {
   //setTimeout(() => {
     //console.log(2)
     //callback()
   //}, 0)
 //} // In the second, we can pass in a callback.
 
 //function third() {
   //console.log(3)
 //}
 
 //first()
 //second(third) 
 //the problem with this approach is that is can get hard and messy to read.

 //another example:

 //function callbackHell() {
  //setTimeout(() => {
    //const data = {user: "Johnny"}
    //console.log(data)
    //setTimeout(() => {
      //console.log('Data has been updated')
    //}, 1000)
  //}, 500)
 //}

 //callbackHell() 
 // the idea behind this is just that it's an effective way to ensure the late execution of functions until the other one completes and returns with some data. 



 // Promises - are the completion of an asynchronous function; we're expecting a result back in the future or maybe an error back in the future. AND based on that error/success, we want to do something with it. (it basically accomplishes the same basic goal as the callback functions, just with many more features and with more readable syntax.)

 // Promise example: 

//const promise = new Promise ((resolve, reject) => {
  //resolve("we did it babbyyy") // we can also reject it.
  //reject("awwe man server is down boys")
  //resolve({ user: 'Blanka' })
//})

//promise.then(data => {
  //console.log(data)
  //return data //or, if you're not returning, then
  //const user = data
  //return fetch("https://jsonplaceholder.typicode.com/todos/1")
//})
//.then((todos) => {
  //console.log(todos)
//})
//.catch((err)=> {
  //console.log(err)
//}) // .catch is going to catch any problems in your promise.
// we can chain together multiple ".then's" (giving us more simple syntax on how your code actually works.)



//example:

//const promise = new Promise ((resolve, reject) => {
  //setTimeout(() => resolve ('this is my data from a server'), 2000)
//})

//promise. then((res) => {
  //console.log(res)
//})

//fetch("https://jsonplaceholder.typico").then ((data) => {
  //return data.json()
//})
//.then((jsondData) => {
  //console.log(jsondData)
//})
//.catch((err) => {
  //console.log("Oh noo something went wrong")
//})
//.finally(() => {
  //console.log("well everything is done, we tried")
//})



// Async/Await is really just a "syntactical sugar" over the promises to make it look synchronous/very easy and readable. 

// how you make it: example:
//create a function amd add the async keyword in front of it:

//async function getTodos() {
  //const response = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
    //return res.json()
  //})
  //console.log(response)
  // we can even chain a .then on here//
  //console.log(1)
  //console.log(response)
  //console.log(2)
//}

//getTodos()

//there's no point in doing that when you can just go back anad add in another await. example:

async function getTodos() {
  try { // we can put a try catch here to catch any errors.
    
    const response = await fetch("https://jsoicode.com/todos/1")
    const data = await response.json()
    console.log(data)
    console.log(2)
  } catch(err) {
    console.log("Something went wrong...")
    console.log(err)
  }
}

getTodos()