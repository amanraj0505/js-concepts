// polyfill for map
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    temp.push(cb(this[index], index, this));
  }
  return temp;
};

// polyfill for filter
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) temp.push(this[index]);
  }
  return temp;
};

// polyfill for reduce
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator
      ? cb(accumulator, this[index], this)
      : this[index];
  }
  return accumulator;
};

const a = [1, 2, 3];
console.log(
  a.myMap((item) => {
    return item * 2;
  })
);
console.log(
  a.myFilter((item) => {
    return item === 2;
  })
);
console.log(
  a.myReduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0)
);

// run once polyfill (using apply)
function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}
const hello = once((a, b) => {
  console.log("Function Ran...");
  console.log(a, b);
});
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);

//memoize polyfill using apply
const memoize = (func) => {
  const cache = {};

  return (...args) => {
    const argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log("Fetching From Cache...");
      return cache[argsToString];
    } else {
      console.log("Computing Value...");
      const result = func.apply(this, args);
      cache[argsToString] = result;
      return result;
    }
  };
};

const memoizeCalculate = memoize((a, b) => a * a + b * b);

console.log(memoizeCalculate(5, 2));
console.log(memoizeCalculate(5, 2));
console.log(memoizeCalculate(5, 2));
