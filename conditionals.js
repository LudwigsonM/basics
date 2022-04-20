
let firstName = "Ludwigson"
const lastName = "Morisseau"

if (firstName) {
    console.log(`Hello world, ${firstName}`)
} else if (lastName) {
    console.log("My last name is " + lastName)
} else {
    console.log("Hello world, stranger")
}


let fullName = firstName && lastName ? `My full name is ${firstName} ${lastName}` : "You are nameless"

const today = "Tuesday"

let result = today === "Monday"? "Ludwigson is getting paid" : "Ludwigson is broke"
console.log(result)

// Switch 

const fruit = ""

switch(fruit){ 
    case "orange":
        console.log("This is an orange")
        break
    case "apple":
        console.log("This is my apple")
        break
    default:
        console.log("We are out of fruit")
}
function sum (a, b) {
    const result = a + b
    return result


}

let addition = sum(2, 7)
console.log("the sum is ", addition)