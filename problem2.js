function getHobbiesByAge(arrayOfObjects, age) {
    let hobbies = [];
    for(let details of arrayOfObjects) {
        if(details.age === age) {
            for(let index=0; index<details.hobbies.length; index++) {
                hobbies.push(details.hobbies[index]);
            }
        }
    }
    return hobbies;
}

module.exports = getHobbiesByAge;