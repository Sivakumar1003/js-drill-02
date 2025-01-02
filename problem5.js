function allAges(arrayOfObjects) {
    let allAge = [];

    for(let details of arrayOfObjects) {
        allAge.push(details.age);
    }
    return allAge;
}

module.exports =allAges;