//Exercise 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
fruits.sort();
fruits.push("kiwi");
let newFruits = fruits.slice(1);
newFruits.reverse()
console.log(newFruits)

//Exercise 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1])
