const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOffice() {
        return this.officeNumber
    }
    getImage() {
        return './Assets/img/manager-img.png'
    }
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager