const Employee = require('./employee')
// Class for interns that extends to employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return `Current School: ${this.school}`
    }
    getImage() {
        return '../Assets/img/intern-img.jpg'
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern