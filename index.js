const inquirer = require('inquirer')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'employeeType',
            message: 'What is the name of the manager for this team?'
        }
    ])