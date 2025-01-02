// Write a function that accesses and prints the names and email addresses of individuals aged 25.

const arrayOfObjects = require('../database.js');
const getNameAndEmail = require('../problem7.js');

let age = 25;
const result = getNameAndEmail(arrayOfObjects, age);

if (result.length == 0) {
    console.log("No one found in that age.")
} else {
    for(let nameAndMEmail of result) {
        console.log("name: " + nameAndMEmail[0] + ", Email: " + nameAndMEmail[1]);
    }
}