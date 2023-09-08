//Given the code snippet. Explain what scopes are in this current context of the code.//

function outerFunction() {
  let outerVar = "I'm outside!"; // outerVar is local scope

  function innerFunction() {
    let innerVar = "I'm inside!"; // local scope
    console.log(outerVar); // Can we access outerVar? yes, parent scope
    console.log(innerVar); // Can we access innerVar? yes, local scope
  }

  innerFunction();
}

outerFunction();