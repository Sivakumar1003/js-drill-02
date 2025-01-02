// Implement a loop to access and log the city and country of each individual in the dataset.

const arrayOfObjects = require('../database.js');
const getCityAndCountry = require('../problem8.js');

const result = getCityAndCountry(arrayOfObjects);


if (result.length == 0) {
    console.log("No one found in database.")
} else {
    for(let cityAndCountry of result) {
        console.log("City: " + cityAndCountry[0]+ ", Country: " +cityAndCountry[1]);
    }
}