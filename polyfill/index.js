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
