//Exercise 1

let people = ["Greg", "Mary", "Devon", "James"]
people.splice(0,1);
people [2] = "Jason";
people.push("Daniel");
console.log("Index of Mary is: " + people.indexOf("Mary"))
console.log("Index of Foo is: " + people.indexOf("Foo")) //Not in the array so it gives index of -1
let last = people.length-1
console.log(people[last])

//part 2
for (let i=0; i<people.length; i++) {
    console.log(people[i]);
    if (people[i] == "Jason"){
        break;
    }
}

//Exercise 2
let colors = ["red", "green", "yellow", "blue", "violet"]
let suffix = ["st", "nd", "rd", "th"]
for (let i=0; i<5; i++){
    if (i==0) {
        console.log(`My ${[i+1] + (suffix[i])} choice is ${colors[i]}`)
    }
    if (i==1) {
        console.log(`My ${[i+1] + (suffix[i])} choice is ${colors[i]}`)
    }
    if (i==2) {
        console.log(`My ${[i+1] + (suffix[i])} choice is ${colors[i]}`)
    }
    if (i>2) {
        console.log(`My ${[i+1] + (suffix[3])} choice is ${colors[i]}`)
    }
}

//Exercise 3 - I don't know how to convert the string from the prompt to a number

//Exercise 4 

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building.numberOfFloors)
console.log((building.numberOfAptByFloor.firstFloor)+(building.numberOfAptByFloor.thirdFloor))
console.log(`${building.nameOfTenants[1]} ${building.numberOfRoomsAndRent.dan[0]}`)
if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > (building.numberOfRoomsAndRent.dan[1])) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Prices were unfair, raising dan's rent to 1200")
} else {
    console.log("Prices are fair, no changes to rent were made")
}

//Exercise 5

let family = {
    familyCount: 3,
    familyHouse: "apartment",
    familyIncome: 10000,
}
for (let value in family) console.log(value)
for (let value in family) console.log(family[value])

//Exercise 6

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
for (let value in details) console.log(value, details[value])

//Exercise 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
for (let value of names) console.log(value[0]);