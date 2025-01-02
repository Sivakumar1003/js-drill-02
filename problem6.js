function firstHobby(arrayOfObjects) {
    let hobby = [];
    for(let details of arrayOfObjects) {
        hobby.push(details.hobbies[0]);
    }
    return hobby;
}

module.exports = firstHobby;