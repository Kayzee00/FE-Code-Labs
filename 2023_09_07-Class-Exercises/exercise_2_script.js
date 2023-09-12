//Draft a JavaScript function where you call a function before its declaration.
//Analyze the behavior and understand how hoisting impacts the outcome.
// https://www.codelabsdash.com/lessons/frontend/javascript/essentional-concepts //

function mainFunction() {
  // Call the hoistedFunction here
  console.log(hoistedFunction)

  // Now, declare the hoistedFunction below
  let hoistedFunction = "purse"
}

mainFunction();

// the console.log gave an error, because we can't access hoistedFunction before initialization at mainFunction; variable wasn't defined before being called. //