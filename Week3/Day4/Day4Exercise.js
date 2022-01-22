//Exercise 1

let x = 10;
let y = 15;
if (x>y) {
    console.log(`${x} is the bigger number`)
} else if (x==y) {
    console.log(`${x} equals ${y}`)
} else if (x<y) {
    console.log(`${y} is the bigger number`)
}

//Exercise 2

let newDog = "Chihuahua";
console.log (newDog.length)
console.log (newDog.toLocaleUpperCase())
console.log (newDog.toLocaleLowerCase())
if (newDog=="Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
    console.log("I dont care, I prefer cats")}

//Exercise 3

let number = prompt("Pick a number",)

if ( (number)%2==0) {
    alert(`${number} is even`)
} else  alert(`${number} is odd`) 

//Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length == 0) {
    console.log(`No one is online`)
} else if (users.length == 1) {
    console.log(`${users[0]} is online`)
} else if (users.length == 2) {
    console.log(`${users[0]} and ${users[1]} are online`)
} else if (users.length > 2) {
    console.log(`${users[0]} and ${users[1]} are online and ${(users.length - 2)} more are online`)
}