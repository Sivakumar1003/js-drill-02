// function to get hobbies at particular age.
function getHobbiesByAge(arrayOfObjects, age) {
    return arrayOfObjects.filter(user => {
        return user.age === age;
    })
    .map((user) => {
        return user["hobbies"];
    })
    .flat();

}

module.exports = getHobbiesByAge;