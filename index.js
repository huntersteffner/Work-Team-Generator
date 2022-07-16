const inquirer = require('inquirer')
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
listOfCards = ''

const cardTemplate = function(name,id,email,unique,image) {
     return `<div class="card" style="width: 18rem">
     <img src="${image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5>${name}</h5>
      <ul class="list-group mg-2">
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">${email}</li>
        <li class="list-group-item">${unique}</li>
      </ul>
    </div>
  </div>`
}


const newEmployeeQuestion = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addAnother',
            message: 'Would you like to add another employee?',
            choices: ['Yes','No']
        }
    ]).then(function(data) {
        if(data.addAnother === 'Yes') {
            inquirer
                .prompt(employeeSelect)
                .then(function (data){
                    if(data.employeeType === 'Engineer') {
                        // Function for engineer questions
                        addNewEngineer()


                        console.log('Engineer')
                        // newEmployeeQuestion()
                    } else if (data.employeeType === 'Intern') {
                        // Function for intern questions
                        addNewIntern()


                        console.log('Intern')
                        // newEmployeeQuestion()
                    }
                    
                })
                // newEmployeeQuestion()
        }
    })
}
const addNewEngineer = function() {
    inquirer
    .prompt(engineerQuestions)
    .then(function(data) {
        // console.log(data)
        const engineer = new Engineer(data.employeeName,data.employeeID,data.employeeEmail,data.github)
        console.log(engineer)
        listOfCards += cardTemplate(engineer.getName(), engineer.getId(),engineer.getEmail(),engineer.getGithub(),engineer.getImage())
        console.log(listOfCards)

        
        newEmployeeQuestion()
    })
}
const addNewIntern = function() {
    inquirer
    .prompt(internQuestions)
    .then(function(data) {
        const intern = new Intern(data.employeeName,data.employeeID,data.employeeEmail,data.school)
        listOfCards += cardTemplate(intern.getName(), intern.getId(),intern.getEmail(),intern.getSchool(),intern.getImage())
        console.log(listOfCards)

        newEmployeeQuestion()
    })
}

inquirer
    .prompt(managerQuestions)
    .then(function(data) {
        const manager = new Manager(data.employeeName,data.employeeID, data.employeeEmail,data.officeNumber)

        listOfCards += cardTemplate(manager.getName(), manager.getId(),manager.getEmail(),manager.getOffice(),manager.getImage())
        console.log(listOfCards)
        


        newEmployeeQuestion()
        
    })



// console.log(manager)

