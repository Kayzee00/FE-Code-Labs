// MEMOIZATION AND DYNAMIC PROGRAMMING //
// https://www.youtube.com/watch?v=WbwP4w6TpCk&list=PLj9uZuEI0pcyIL6CXw4qoYsGhyBZkhKlv&index=7 //

// memoization --> is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs are given.

// example:

/* const prevValues = []

function square(n) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1
    }
  }
  prevValues [n] = result
  return result
}

console.log(square(30000))
console.log(square(30000))
console.log(square(30000))
console.log(square(30000))
console.log(square(30000)) */


function fib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result
  if (n <= 2) {
    result = 1
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues)
  }
  prevValues[n] = result
  return result
}

console.log(fib(500)) // it executes instantly! Without memoization, it would take forever to exucute the function.

/* When to use memoization:
1. if you have a really slow function that takes a long time to execute and you want to get the same value over and over.
2. When you're fetching external resources (using fetch API) then using memoization will save you from having to make a bunch of calls to the server, because you've essentially cached them (the results).
3. In Dynamic Programming -> when you take a recursive function that calls itself multiple times with the same inputs and you actually memoize those inputs. */