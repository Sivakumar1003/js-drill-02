//  function to get all ages.
function allAges(arrayOfObjects) {
    return arrayOfObjects.map((user) => {
        return user["age"];
    })
}

module.exports =allAges;