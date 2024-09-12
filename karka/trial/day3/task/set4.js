// 1 st
let a = -10
if (a > 0) {
    console.log("The number is positive")
}
else {
    console.log("The number is negative")
}

// 2 nd
let b = 4
if (b % 2 == 0) {
    console.log("The number is even")
}
else {
    console.log("The number is odd")
}

//3

let n=8
let pow=2
let result=1
for(i=0;i<pow;i++){
  result*=n 
}
console.log(result)

// 4
let num1=40
let num2=40
if(num1>num2)
{
    console.log("num1 is greater than num2")
}
else if(num1==num2)
{
    console.log("num1 and num2 is equal")
}
else{
    console.log("num1 is less than num2")
}

//5
let year =2100
if(year%4==0){
console.log("it is a leap year")
}
else{
    console.log("it is a not leap year")
}

//6
let score=25
if(score>=90){
console.log("Grade: A")
}
else if(score>=80){
    console.log("Grade: B")
}
else if(score>=70){
    console.log("Grade: C")
}
else if(score>=60){
    console.log("Grade: D")
}
else{
    console.log("Grade: F")
}
//7 th 
let age = 23
if (age < 16) {
    console.log("You can't drive.")
}
else if (age == 16 || age == 17) {
    console.log("You can drive but not vote.")
}
else if (age >= 18 && age <= 24) {
    console.log("You can vote but not rent a car.")
}
else {
    console.log("You can do pretty much anything.")
}
//8
for(i=0;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("fizzbuzz")
    }
else if(i%3===0){
    console.log("fizz")
}
else if(i%5===0){
    console.log("buzz")
}
else{
    console.log(i)
}
}
