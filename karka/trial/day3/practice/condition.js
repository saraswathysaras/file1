let age = 23
if (age >= 18) {
    console.log("you are eligible for vote")
}

if (-55) {
    console.log("hi")
}

if (true) {
    console.log("Karka")
}

if (false) {
    console.log("Karka")
}

if (0) {
    console.log("hi")
}
// =====================================

age = 54
if (age > 75) {
    console.log("Your are not ELigible")
}
// =====================================

age = 45
if (age < 5) {
    console.log("Baby")
}
else if (age > 5 && age <= 10) {
    console.log("Kid")
}
else if (age > 10 && age <= 18) {
    console.log("Teen")
}
else if (age > 18 && age <= 35) {
    console.log("Middle")
}
else if (age > 35 && age <= 50) {
    console.log("Adult")
}
else if (age > 50 && age <= 75) {
    console.log("50 Plus")
}
else {
    console.log("old")
}
// Else if Condition =====================================


for (let i = 0; i <= 10; i++) {
    console.log(i)
}
// Loop =====================================

let i = 0
while (i <= 10) {
    console.log(i)
    i++
}
// While Loop =====================================

let j = 15
do {
    console.log(j)
    j++
}
while (j <= 10)
// Do While Loop =====================================

let a = [8, 5, 3, 9, 12]
let even_num = []
let odd_num = []
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
    if (a[i] % 2 == 0) {
        even_num.push(a[i])
    }else{
        odd_num.push(a[i])
    }
}
console.log(even_num)
console.log(odd_num)

// for loop using array ==============================


