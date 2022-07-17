const inquirer = require('inquirer')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const fs = require('fs')
// Questions for different scenarios
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
const internQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the name of this intern?',
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
        name: 'school',
        message: 'What school is this intern currently attending?'
    }
]
// This list will be appended to with HTML for a card every time an employee is generated in the command line
listOfCards = ''
// The function to generate the HTML for a card. It takes in the answers from classes that are created with the answers in the command line
const cardTemplate = function(name,id,email,unique,image,role) {
     return `<div class="card" style="width: 18rem">
     <img src="${image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5>${name}</h5>
      <ul class="list-group mg-2">
        <li class="list-group-item">${role}</li>
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">${unique}</li>
      </ul>
    </div>
  </div>`
}
// When the user selects that he/she does not want to add any more employees, all of the HTML cards that were created get added into the container of the master HTML template, which then can be used to write the file
const htmlTemplate = function(listOfCards) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossorigin="anonymous"
        />
        <style>
            .jumbotron {
                margin: 0;
            }
            .space {
                margin: 1rem;
            }
        </style>
      </head>
      <body>
        <div class="jumbotron bg-success">
          <h1 class="text-center">Your Team!</h1>
        </div>
        <div class="container-fluid d-flex m-0 bg-light">
          ${listOfCards}
        </div>
    
        <script src="index.js"></script>
      </body>
    </html>
    `
}
// Function to create the file. It writes the file to the dist folder.
const createFile = function() {
    console.log('Writing file...')
    const completeHTML = htmlTemplate(listOfCards)
    fs.writeFile('./dist/index.html', completeHTML, (err) => {
        if(err) {console.error(err)} else {console.log('File Written')}
    })
}
// This will run every time an employee is created. If the user selects yes, than he/she can add another employee; otherwise, it will generate the HTML file.
const newEmployeeQuestion = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addAnother',
            message: 'Would you like to add another employee?',
            choices: ['Yes','No']
        }
    ]).then(function(data) {
        // If the user wants to add another employee
        if(data.addAnother === 'Yes') {
            inquirer
                .prompt(employeeSelect)
                .then(function (data){
                    // If the user wants to add an engineer
                    if(data.employeeType === 'Engineer') {
                        addNewEngineer()
                    } else if (data.employeeType === 'Intern') {
                        // If the user wants to add an intern
                        addNewIntern()
                    }
                })
        } else {
            // If the user does not want to add another employee, it will write the file.
            createFile()
        }
    })
}
// Function that is called when the user wants to add an engineer
const addNewEngineer = function() {
    inquirer
    .prompt(engineerQuestions)
    .then(function(data) {
        const engineer = new Engineer(data.employeeName,data.employeeID,data.employeeEmail,data.github)
        // It appends data into the list of cards
        listOfCards += cardTemplate(engineer.getName(), engineer.getId(),engineer.getEmail(),engineer.getGithub(),engineer.getImage(),engineer.getRole())
        newEmployeeQuestion()
    })
}
// Function that is called when the user wants to add an intern.
const addNewIntern = function() {
    inquirer
    .prompt(internQuestions)
    .then(function(data) {
        const intern = new Intern(data.employeeName,data.employeeID,data.employeeEmail,data.school)
        // It appends the data into the list of cards
        listOfCards += cardTemplate(intern.getName(), intern.getId(),intern.getEmail(),intern.getSchool(),intern.getImage(),intern.getRole())
        newEmployeeQuestion()
    })
}
// Opening Message when program starts
console.log('Welcome to the Work Team Generator.\nPlease answer the following questions to generate your Team.')
// Begin the program by asking questions concerning the manager.
inquirer
    .prompt(managerQuestions)
    .then(function(data) {
        const manager = new Manager(data.employeeName,data.employeeID, data.employeeEmail,data.officeNumber)
        // It generates a card of HTML and appends it to a list of cards for use later
        listOfCards += cardTemplate(manager.getName(), manager.getId(),manager.getEmail(),manager.getOffice(),manager.getImage(),manager.getRole())
        // Prompt with question for next employee to be added
        newEmployeeQuestion()
    })