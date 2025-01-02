function studentsInAustralia(arrayOfObjects) {
    let student = [];

    for(let details of arrayOfObjects) {
        if(details.isStudent && details.country == "Australia") {
            student.push(details.name);
        }
    }
    return student;
}
module.exports = studentsInAustralia;