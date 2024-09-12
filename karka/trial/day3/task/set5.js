//1
for (i = 0; i <= 10; i++) {
    console.log(i)
}
//2
for (i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//3
for (i = 2; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

//4  
function factorial(n) {
    let result = 1
    for (i = 1; i <= n; i++) {
        result *= i
    }
    return result
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

// 5
let sum1 = 0
for (let i = 1; i <= 100; i++) {
    sum1 += i
}
console.log(sum1)

///6
let a=[13, 50, 20, 30, 10]
let sum = 0
for (let i = 0; i < a.length; i++) {
    sum += a[i]
}
let average = sum / a.length
console.log(average)

// 7
let p = 5
for (i = 0; i < p; i++) {
    let row = ""
    for (j = 0; j < p; j++) {
        row += " * "
    }
    console.log(row)
}


//8
for (i = 1; i <= 5; i++) {
    console.log(i)
}



//9

let k = 10
for (i = 1; i <= k; i++) {
    console.log((i))
}

// 10
let array = [10, 20, 30, 40, 10]
if (array[0] == array[array.length - 1]) {
    console.log(true)
}
else {
    console.log(false)
}

//11
let num = [10, 50, 45, 30, 34, 23, 98, 90]
for (i = 0; i < num.length; i++) {
    if (num[i] % 5 == 0) {
        console.log(num[i])
    }
    else {
        console.log()
    }
}

// 7
let n = 6
for (i = 0; i < n; i++) {
    let row = ""
    for (j = 0; j < n; j++) {
        row += " * "
    }
    console.log(row)
}

let m = 5
for (i = 0; i < m; i++) {
    let row = ""
    for (j = 0; j <= i; j++) {
        row += " * "
    }
    console.log(row)
}
//12
function vowel(x) {
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "U") {
        console.log("it is the vowel")
    }
    else {
        console.log("it is consonant")
    }
}
vowel("e")
vowel("t")

//13
let evennum = 0
let oddnum = 0
for (i = 10; i <= 55; i++) {
    if (i % 2 == 0) {
        evennum++
    }
    else{
        oddnum++
}
}


    console.log(evennum)
    console.log(oddnum)

//14

for(i=1;i<=25;i++){
    if(i%5!==0){
        console.log(i)
    }
    
}
//17
let s=95
let t=80
if(s>=t){
    console.log("s is greaterthan t ")
}
else{
    console.log("s is less than t")
}




//18
let d=40
let b=20
let c=10
if(d>=b && d>=c){
    console.log("d is greater than")
}
else if(b<=d && b>=c){
    console.log("b is greater than b")
}
else{
console.log("c is greater than")
}

function product(a,b){
let product=a*b
if(product>500){
return sum
}
let sum=a+b
}
console.log(product(10,10))




//19
let negative=[]
let positive=[]
let x=[23,4,-6,23,-9,21,3,-45,-8]
for(let i=0;i<x.length;i++){
    if(x[i]<0){
        positive.push(x[i])
    }
    else if(x[i]>0){
        negative.push(x[i])
    }
}
console.log(positive)
console.log(negative)




a=[22,44,34,89,99]
let even_num=[]
let odd_num=[]
for(i=0;i<a.length;i++){
    if(i%2==0){
        even_num.push(a[i])
    
    }
    else{
        odd_num.push(a[i])
        
    }
}
console.log(even_num)
console.log(odd_num)





function vowel(b){
if(b=="a"||b=="e"||b=="i"||b=="o"||b=="u"){
    console.log( "is the vowel")
}
else{
    console.log( "is the consonent")
}

}
vowel("i")
vowel("e")

// function vowel(x) {
//     if (x == "a" || x == "e" || x == "i" || x == "o" || x == "U") {
//         console.log("it is the vowel")
//     }
//     else {
//         console.log("it is consonant")
//     }
// }
// vowel("e")
// vowel("t")

let myname="sarsawathy"
let sname="s"
console.log(myname.toUpperCase())
console.log(myname.length)
let ans=myname.concat(sname)
console.log(ans)