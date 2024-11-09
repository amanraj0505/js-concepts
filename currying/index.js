//infinite curry
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
console.log("Curry 1", add(1)(2)());

//convert f(a,b,c) into f(a)(b)(c) (Important)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sum);
console.log("Curry 2", totalSum(1)(2)(3)(4));
