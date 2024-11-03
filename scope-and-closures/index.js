// Global scope in here
var foo = function () {
  // local scope in here
};

function foo() {
  var name = "Roadside Coder"; // name is a local variable created by foo
  function displayName() {
    //<----- A Closure // displayName() is the inner function
    alert(name); // variable used which is declared in the parent function
  }
  displayName();
}
foo();

/**
 *
 * Closures makes it possible for a function to have "private" variables.
 * JavaScript closure is used to control what is and isn't in scope in a particular
 * function, along with which variables are shared between sibling functions in
 * the same containing scope.
 */
function makeFunc() {
  var name = "Roadside Coder";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // Output ?
  }
  console.log(count); // Output?
})();

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

//solution ^^^^^

function createBase(baseNumber) {
  return function (N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  };
}

var addSix = createBase(6);
addSix(10);
addSix(21);

//How do you optimise time using closures?

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}

console.time("6");
find(6); // this takes 37ms
console.timeEnd("6");
console.time("12");
find(12); // this takes 135ms
console.timeEnd("12");

//solution
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6); // this takes 0.25 ms
console.timeEnd("6");
console.time("12");
closure(12); // this takes 0.025ms
console.timeEnd("12");

//closures output question
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

//module pattern
var Module = (function () {
  function privateMethod() {
    // do something
  }

  return {
    publicMethod: function () {
      // can call privateMethod();
    },
  };
})();
