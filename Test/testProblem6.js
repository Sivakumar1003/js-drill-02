// Create a function to retrieve and display the first hobby of each individual in the dataset.

const arrayOfObjects = require('../database.js');
const firstHobby = require('../problem6.js');

const result = firstHobby(arrayOfObjects);

if (result.length == 0) {
    console.log("No one have hobby.")
} else {
    for(let hobby of result) {
        console.log(hobby);
    }
}