function getAllEmail(arrayOfObjects) {
    const allEmail = [];

    for(let details of arrayOfObjects) {
        allEmail.push(details.email);
    }
    return allEmail;
}

module.exports = getAllEmail;