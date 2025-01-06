// function to get students who all are in Australia.
function studentsInAustralia(arrayOfObjects) {
    return arrayOfObjects.filter(user => {
        return user.isStudent && user["country"] === 'Australia';
    })
    .map((user) => {
        return user["name"];
    });
}
module.exports = studentsInAustralia;