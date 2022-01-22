//Exercise 1
let favFood = (`sushi`);
let favMeal = (`dinner`);
console.log (`I eat ${favFood} at every ${favMeal}`);

//Exercise 2
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = "black mirror, money heist, and the big bang theory";
console.log (`I watched ${watchedSeriesLength} series: ${myWatchedSeries}`)

watchedSeries[2] = "friends"
watchedSeries.push("the witcher")
watchedSeries.splice(0,1,"arcane")
let moneyString = watchedSeries[1];
console.log (moneyString.substring(2,3))
console.log (watchedSeries)

//Exercise 3
let temperatureC = (30);
let temperatureF = ((temperatureC)/5*9+32);
console.log (`${temperatureC}°C is ${temperatureF}°F`)

//Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: a=34 + b=21 = 55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction: a=2 is not defined so it will still stay 55
// Actual:23

//What is the value of c?
console.log(c)
// Prediction: no value as we did not define it
// Actual:undefined

//Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// Prediction: it will do a calculation of 3+4 = 7, and add the number 5 as a variable giving us 75
// Actual:75

//Exercise 5

console.log (typeof(15))
// Prediction:number
// Actual:number

console.log (typeof(5.5))
// Prediction:number
// Actual:number

console.log (typeof(NaN))
// Prediction:unidentified 
// Actual:number

console.log (typeof("hello"))
// Prediction:string
// Actual:string

console.log (typeof(true))
// Prediction:boolean
// Actual:boolean

console.log (typeof(1 != 2))
// Prediction:boolean
// Actual:boolean

console.log ("hamburger" + "s")
// Prediction:hamburgers
// Actual:hamburgers

console.log ("hamburgers" - "s")
// Prediction:hamburger
// Actual:NaN

console.log ("1" + "3")
// Prediction:13
// Actual:13

console.log ("1" - "3")
// Prediction:1
// Actual:-2

console.log ("johnny" + 5)
// Prediction:johnny5
// Actual:johnny5

console.log ("johnny" - 5)
// Prediction:johnny
// Actual:NaN

console.log (99 * "hello")
// Prediction:invalid
// Actual:NaN

console.log (1 != 1)
// Prediction:false
// Actual:false

console.log (1 == "1")
// Prediction:true
// Actual:true

console.log (1 === "1")
// Prediction:false
// Actual:false

//Exercsice 6

console.log (5 + "34")
// Prediction:534
// Actual:534

console.log (5 - "4")
// Prediction:1
// Actual:1

console.log (10 % 5)
// Prediction:0
// Actual:0

console.log (5 % 10)
// Prediction:5
// Actual:5

console.log ("Java" + "Script")
// Prediction:JavaScript
// Actual:JavaScript

console.log (" " + " ")
// Prediction:(  )
// Actual:(  )

console.log (" " + 0)
// Prediction:( 0)
// Actual:( 0)

console.log (true + true)
// Prediction:true
// Actual:2

console.log (true + false)
// Prediction:false
// Actual:1

console.log (false + true)
// Prediction:true
// Actual:1

console.log (false - true)
// Prediction:-1
// Actual:-1

console.log (!true)
// Prediction:false
// Actual:false

console.log (3 - 4)
// Prediction:-1
// Actual:-1

console.log ("Bob" - "bill")
// Prediction:NaN
// Actual:NaN