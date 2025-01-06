// function to get all email.
function getAllEmail(arrayOfObjects) {
    return arrayOfObjects.map(user => {
        return user["email"];
    });
}

module.exports = getAllEmail;