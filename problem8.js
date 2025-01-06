// function to get all city and country.
function getCityAndCountry(arrayOfObjects) {
    return arrayOfObjects.map((user) => {
        return [user["city"], user["country"]];
    });
}

module.exports = getCityAndCountry;