const Employee = require('./employee')
// Class for managers that extends to employees
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOffice() {
        return `Office Number: ${this.officeNumber}`
    }
    getImage() {
        return '../Assets/img/manager-img.png'
    }
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager