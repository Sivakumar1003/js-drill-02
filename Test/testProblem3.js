//  Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

const arrayOfObjects = require('../database.js');
const studentsInAustralia = require('../problem3.js');

const result = studentsInAustralia(arrayOfObjects);

if (result.length == 0) {
    console.log("No students found in Australia.")
} else {
    for(let name of result) {
        console.log(name);
    }
}