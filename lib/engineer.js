const Employee = require('./employee')
// Class for engineers that extends to employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return `<a href="https://github.com/${this.github}" target="_blank">GitHub</a>`
    }
    getImage() {
        return '../Assets/img/engineer-img.jpg'
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer