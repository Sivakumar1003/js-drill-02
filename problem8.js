function getCityAndCountry(arrayOfObjects) {
    let cityAndCountry = [];
    for(let details of arrayOfObjects) {
        let result = [details.city];
        result.push(details.country);
        cityAndCountry.push(result);
    }
    return cityAndCountry;
}

module.exports = getCityAndCountry;