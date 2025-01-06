// function to get all users first hobby.
function firstHobby(arrayOfObjects) {
    return arrayOfObjects.map((user) => {
        return user["hobbies"][0];
    });
}

module.exports = firstHobby;