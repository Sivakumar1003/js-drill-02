//  Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

const arrayOfObjects = require('../database.js');
const getAllEmail = require('../problem1.js');

const result = getAllEmail(arrayOfObjects);

if (result.length == 0) {
    console.log("No email found.")
} else {
    for (let email of result) {
        console.log(email);
    }
}