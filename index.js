const inquirer = require('inquirer')
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const managerQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the name of the manager for this team?'
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is this employee\'s ID'
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is this employee\'s email address?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number for this manager?'
    }
]
const employeeSelect = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of employee would you like to add?',
        choices: ['Engineer','Intern']
    }
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the name of this engineer?',
    },{
        type: 'input',
        name: 'employeeID',
        message: 'What is this employee\'s ID'
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is this employee\'s email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the github username for this engineer?'
    }
]


inquirer
    .prompt(managerQuestions)
    .then(function(data) {
        const manager = new Manager(data.employeeName,data.emloyeeID, data.employeeEmail,data.officeNumber)
        
        inquirer
        .prompt(employeeSelect).then(function(data) {
            if(data.employeeType === 'Engineer') {
                inquirer.prompt(engineerQuestions).then(function(data) {
                    console.log(data)
                })
            } else {
                console.log('It\'s an intern.')
            }
            console.log(data)
        })
    })

// const one = 'yes'
// const two = 'no'
// const three = 'si'
// const four = 'nein'

// const manager = new Manager(one,two,three,four)

// console.log(manager)