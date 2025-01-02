function getNameAndEmail(arrayOfObjects, age) {
    let nameAndEmail = [];
    for(let details of arrayOfObjects) {
        if(details.age == age) {
            let resultName = [details.name];
            resultName.push(details.email);
            nameAndEmail.push(resultName);
        }
    }
    return nameAndEmail;
}
module.exports =  getNameAndEmail;