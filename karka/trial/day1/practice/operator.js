// Arithmetic Operator

let a = 10
let b = 3

let add = a + b
console.log(add) //13

let sub = a - b
console.log(sub) //7

let mul = a * b
console.log(mul) //30

let div = a / b
console.log(div) //3.3333333333333335

let modulus = a % b
console.log(modulus) //1

// --------------------------------------

// Arithmetic Assignment Operator

let c = 5
let d = 15

console.log(c += d) //5+15=20
console.log(c -= 3) //20-3=17
console.log(c /= 5) //17/15=3.4
console.log(c *= 2) //3.4*2=6.8
console.log(c %= 3) //6.8*3=0.7999999999999998

// --------------------------------------

// Comparison Operator

console.log(a == 10) //true
console.log(a < 10) //false
console.log(a > 10) //false
console.log(a <= 10) //true
console.log(a >= 10) //true
console.log(a != 10) //false

// --------------------------------------

// Logical Operator

console.log(a == 10 && b == 3) //true
console.log(a >= 10 && a < b) //false
console.log(a != 10 && b >= 3) //false
console.log(a <= 10 && b < 3) //false

console.log(a == 10 || b == 3) //true
console.log(a >= 10 || a < b) //true
console.log(a != 10 || b >= 3) //true
console.log(a != 10 || b < 3) //false

// --------------------------------------

// Increment Decrement Operator

a++
console.log(a) //11
a--
console.log(a) //10



