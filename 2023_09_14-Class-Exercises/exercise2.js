// Objective: Understand and Apply Destructuring in JavaScript.

//Instructions:

// I. Destructure the person object to extract the name and age properties into variables.
// II. Use array destructuring to get the second and fourth items from the fruits array.
// III. Extract the city and country properties from the address object nested within the person object using nested destructuring.
// https://www.codelabsdash.com/lessons/frontend/javascript/advance-concepts // 

const person = {
  name: 'John',
  age: 30, 
  address: {
    city: 'New York', 
    country: 'USA',
  },
};

const fruits = ['apple', 'banana', 'cherry', 'date'];