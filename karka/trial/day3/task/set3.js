function sayhello(){
    console.log("hello world")
}
sayhello()

function sayHello1(name){
    console.log("hello" + name)
}
sayHello1(" swetha ")


///2
function add(a,b){
    let sum=a+b
    return sum
}
console.log(add(2,3))
console.log(add(4,5))
console.log(add(10,7))

//3

function Mul(x,y){
    let Mul=x*y
    return Mul
}
console.log(Mul(4,7))
console.log(Mul(9,7))
console.log(Mul(10,7))

//4
function multi(c,d){
    let multi=c*d
    return multi
}
console.log(multi(10,56))

//5
function div(i,j){
    let div=i/j
    return div
}
console.log(div(34,4))
/6

function factorial(n){
    let factorialval=1
    for(i=2;i<=n;i++){
        factorialval=factorialval*i;
    }
        return factorialval
}
console.log(factorial(6))


let n=5
let fact=1
for(i=n;i>=1;i--){
    fact*=i
}
console.log(fact)


//7

function square(n){
    let ans=n*n
    return ans
}
console.log(square(10))

        
