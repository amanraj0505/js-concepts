//Object calculator

let calculator = {
  read() {
    this.a = +prompt("a: ", 0);
    this.b = +prompt("b: ", 0);
  },
  add() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  divide() {
    return this.a / this.b;
  },
  subtract() {
    return this.a - this.b;
  },
};

calculator.read();
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.mul());

/**
 * implement the following calc.add(10).multiply(5).subtract(30).add(10).....and so on
 */

const calc = {
  result: 0,
  add(val) {
    this.result += val;
    return this;
  },
  multiply(val) {
    this.result *= val;
    return this;
  },
  subtract(val) {
    this.result -= val;
    return this;
  },
  divide(val) {
    this.result /= val;
    return this;
  },
};
const res = calc.add(2).multiply(3).subtract(1).result;
console.log(res);
