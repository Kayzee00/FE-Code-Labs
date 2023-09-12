//Develop a JavaScript function that returns another function.
//The inner function should have access to variables from the outer function's scope.
// https://www.codelabsdash.com/lessons/frontend/javascript/essentional-concepts //

function outerFunction() {
  let thisName = "Jackson"
  console.log(thisName);

  function innerFunction() {
    let thisOtherName = "Kara"
    console.log(thisName, thisOtherName);
  }
  return innerFunction;
}
const outerFunctionCall = outerFunction();
outerFunctionCall();