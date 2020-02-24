// ASSESSMENT 3: Coding Practical Questions

// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// creating a function that takes in an argument
const fibonacciSeq = (num) => {
//  declaring an array to start adding and creating a loop
    let newArry = [1, 1];
    for(let i = 2; i < num + 1; i++){
        newArry.push(newArry[i - 2] + newArry[i -1])
    }
    return newArry
}
console.log(fibonacciSeq(9))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// creating a function that will take in the variables 
const newOddLeastToGreatest = (array) => {
    let newArry = array.filter(value => typeof value === "number").filter( value => value % 2).sort((a, b) => a-b)
    return newArry
}

console.log(newOddLeastToGreatest(fullArr1))
console.log(newOddLeastToGreatest(fullArr2))





// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const myFunc = (string) => {
    let theMiddle = string.substr(string.length - 1 >>> 1, (~string.length & 1) + 1);
    return theMiddle
}

console.log(myFunc(middleLetters1))

// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
    constructor(){
        this.sphere = 0;
    }
    
}

// i had lots of trouble with this one ill be diffenatly be reviewing this during class :(





// ---------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []



// creating a function that can take in the arrays above
// declaring a variable  to hold the index data

const accumulate = (array) =>{
    let temp = 0;
    let tempArray = []
    for (let i = 0; i<array.length; i++){
        temp = array[i] + tempArray
        tempArray.push(temp)
    }
   
    return tempArray
}


console.log(accumulate(numbersToAdd1))
console.log(accumulate(numbersToAdd2))
console.log(accumulate(numbersToAdd3))
