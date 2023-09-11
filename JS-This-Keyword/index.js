//'this' keyword is used to reference the object that is executing the current running function.

//function test() {
 // console.log(this);
//}

//test();

/* const user = { //user object
  firstName: "Patrick" ,
  lastName: "Scott" ,
  fullName: function() {   //this function will print out the full and last name together when called. //
    console.log(this)
    console.log(this.firstName + " " +this.lastName)
  }
}
user.fullName(); */

/* const user = { 
  firstName: "Patrick" ,
  lastName: "Scott" ,
  fullName: function() { 

    const arrowFunction =() => {
      console.log(this)
      console.log(this.firstName + " " +this.lastName)
    }
    arrowFunction(); // Arrow Functions don't have their own 'this' scope, so it will inherit the 'this' scope of the nearest containing regular function that surrounds it. //
  }
}
user.fullName(); */

/* const user = { 
  firstName: "Patrick" ,
  lastName: "Scott" ,
  hobbies: ["programming", "piano"], 
  listHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(hobby) // inside of listHobbies, we are able to grab the hobbies from the user object, loop over all those hobbies and print them out. //
    })
  }
}

user.listHobbies(); */

/* const user = { 
  firstName: "Patrick" ,
  lastName: "Scott" ,
  hobbies: ["programming", "piano"], 
  listHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(this.firstName)
      console.log(hobby) 
    }, this);
  }
}

user.listHobbies(); */ 

function user(name) {
  this.name = name;
  console.log(this);
}

const devsage = new user("DevSage");
const codingphase = new user("CodingPhase");
