let a = "Priya"

// length
console.log(a.length)

// toUpperCase()
console.log(a.toUpperCase())

// toLowerCase()
console.log(a.toLowerCase())

// trim()
let text = "     Hi     Priya     "
let ans = text.trim()
console.log(ans, ans.length)

// trimStart()
let start = text.trimStart()
console.log(start, start.length)

// trimEnd()
let end = text.trimEnd()
console.log(end, end.length)

// split()
let splitWord = "How are you doing today?";
let myArray = splitWord.split(" ");
console.log(myArray)

console.log(myArray[2])

myArray = splitWord.split(" ", 3);
console.log(myArray)

myArray = splitWord.split("");
console.log(myArray)

myArray = splitWord.split("o");
console.log(myArray)

myArray = splitWord.split();
console.log(myArray)


// replace
let word1 = "Mr blue has a blue house and a blue car"
let replaceWord1 = word1.replace("blue","Red")
console.log(replaceWord1)

let word2 = "Mr Blue has a blue house and a blue car";
let replaceWord2 = word2.replace(/blue/g, "red"); //g means global replacement
console.log(replaceWord2)

let word3 = "Mr Blue has a blue house and a blue car";
let replaceWord3 = word3.replace(/blue/gi, "red"); //g means global replacement
console.log(replaceWord3)

// replaceAll
let replaceAll = "I love cats. Cats are very easy to love. Cats are very popular."
replaceAll = replaceAll.replaceAll("Cats","Dogs");
replaceAll = replaceAll.replaceAll("cats","dogs");
console.log(replaceAll)

let num=5
let text1= num.toString()
let padded=text1.padEnd(4,"0")

