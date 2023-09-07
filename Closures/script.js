//let myName = 'Kara'

//function printName() {
  //console.log(myName)
//}

//myName = 'Jackson'

//printName()

//myName = 'Nala'

//printName()


//function outerFunction(outerVariable) {
//  const outer2 ='Hi'
  //return function innerFunction(innerVariable) {
   // console.log('Outer Variable: ' + outerVariable)
   //  console.log('Inner Variable: ' + innerVariable)
   // console.log(outer2)
  //}
//}

//const newFunction = outerFunction('outside')
//newFunction('inside')


function outerFunction(url) {
  fetch('url').then(() => {
    console.log(url)
  })
}

const newFunction = outerFunction('outside')
newFunction('inside')