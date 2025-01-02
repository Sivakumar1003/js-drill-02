// Implement a loop to access and print the ages of all individuals in the dataset.

const arrayOfObjects = require('../database.js');
const allAges = require('../problem5.js');

const result = allAges(arrayOfObjects);

if (result.length == 0) {
    console.log("No one age found.")
} else {
    console.log(result);
}