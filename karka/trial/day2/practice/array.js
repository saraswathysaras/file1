let a = [1, 2, 3, 4, 5]
console.log(a[3])
a[2] = 2
console.log(a)
// ---------------------

console.log(a.length)
let b = a.length
console.log(b)
// ---------------------

console.log(a.toString())

let c = ["Apple", "Mango", "Banana"];
console.log(c.toString());

a.push(6, 7, 8)
console.log(a)

a.pop()
console.log(a)

let cars = ["i10", "benz", "dzire", "bmw"]
console.log(cars.reverse()) //[ 'bmw', 'dzire', 'benz', 'i10' ]

let sorted = cars.sort()
console.log(sorted) //[ 'benz', 'bmw', 'dzire', 'i10' ]

sorted.reverse()
console.log(sorted) //[ 'i10', 'dzire', 'bmw', 'benz' ]

let fruits=["apple","orange","mango"]
console.log(fruits.join(" and "))

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

