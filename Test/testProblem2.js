//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

const arrayOfObjects = require('../database.js');
const getHobbiesByAge = require('../problem2.js');

let age = 30;
const result = getHobbiesByAge(arrayOfObjects, age);

if (result.length == 0) {
    console.log("No hobbies found in 30 years old.")
} else {
    for(let hobbies of result) {
        console.log(hobbies);
    }
}