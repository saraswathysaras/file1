// 1
let dateOfBirth = "05-12-2000"
console.log(dateOfBirth)

// 2
const p = 10
console.log(p)
// a=5
// console.log(a)

// 3
let names = ["Priya", "Jaya", "Vidhya", "Minu", "Defi"]
let numbers = [10, 20, [30, 40], 50, 60, 70]
console.log(numbers.length)

numbers.push(80, 90, 100, 110)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.unshift(0, 5)
console.log(numbers)

numbers.shift()
console.log(numbers)

console.log(names.at(3))

let flatnumber = numbers.flat()
console.log(flatnumber)

let name_numbers = names.concat(flatnumber)
console.log(name_numbers)

let join = names.join(" @ ")
console.log(join)

let splice1 = names.splice(4, 0, "Vino", "Deepa")
console.log(names)
console.log("splice1 removed:", splice1)

let splice2 = names.splice(1, 2)
console.log(names)
console.log("splice2 removed:", splice2)

let splice3 = names.splice(3, 1, "Ranju", "Indhu")
console.log(names)
console.log("splice3 removed:", splice3)

let slice1 = names.slice(1, 3)
console.log(slice1)

let slice2 = names.slice(2)
console.log(slice2)

let slice3 = names.slice(0, 3)
console.log(slice3)

// 4
let x = 10, y = 15
function sum() {
    let add = x + y
    console.log(add)
}
sum()

// 5
let pi = 3.14
function area(r) {
    // let pi=3.14
    let areaOfCircle = pi * r * r
    return areaOfCircle
}
let Area = area(5)
console.log(Area)

// 6
function rectangleArea(b, h) {
    let areaOfRectangle = b * h
    console.log(areaOfRectangle)
}
rectangleArea(4, 3)

// 7
function trianlgeArea(b, h) {
    let areaOfTriangle = 1 / 2 * b * h
    return areaOfTriangle
}
8

function cal(s,t){
    console.log(s+t)
    console.log(s-t)
    console.log(s*t)
    console.log(s/t)
    console.log(s%t)
}
cal(35,55)

//9
let  m=30
let n=14
console.log(m =30)
console.log(m +=2)
console.log(n -=4)
console.log(m *=5)
console.log(m %=3)
console.log(n /=2)


//10

let v=12
console.log(v--)
console.log(v)
console.log(v++)
console.log(v)

let e=13
console.log(++e)

console.log(--e)

//11
console.log(a == 10 && b == 3) //true
console.log(a >= 10 && a < b) //false
console.log(a != 10 && b >= 3) //false
console.log(a <= 10 && b < 3) //false

console.log(a == 10 || b == 3) //true
console.log(a >= 10 || a < b) //true
console.log(a != 10 || b >= 3) //true
console.log(a != 10 || b < 3) //false


13

let g=10
let f=30
function swapnum(){
    [g,f]=[f,g]
console.log(g)
}
swapnum()


//14

let u=[10,20,30,40]
let sum=0
for(let i =0; i<u.length; i++){
     sum+=a[i]
         }
let findaverage=sum/u.length
console.log(findaverage)

//15

let a=10
let b=30
let c=12
let d=3
let add=a+b
console.log(add)
let mul=add*c
console.log(mul)
let div=mul/d
console.log(div)


//16
  function mark(){
    let tamil=90
    let english=60
    let maths=90
    let science=99
    let social=98
    let totalmark=tamil+english+maths+science+social
    console.log(totalmark)
    let averagemark=totalmark /5
    console.log(averagemark)
}
mark()










