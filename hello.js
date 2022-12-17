/*

// declared a function named sayHello 

const sayHello  = function () {
  console.log("Hello, world");
}


*/

/*


// call sayHello() three times 

const sayHello  = function (name) {
  console.log("Hello, " + name);
}


sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");


*/

/*
// return & console.log
*/

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);