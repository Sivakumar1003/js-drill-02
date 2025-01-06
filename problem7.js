//  function to get name and email at particular age.
function getNameAndEmail(arrayOfObjects, age) {
    return arrayOfObjects.filter(user => {
        return user["age"] == age;
    })
    .map((user) => {
        return [user["name"], user["email"]]
    });
}
module.exports =  getNameAndEmail;