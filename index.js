const inquirer = require('inquirer')
const fs = require("fs")

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const template = require("./src/template")

const engineerInfo = [
    {
        type: "input",
        message: "What is the name of the Engineer?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the ID of the Engineer?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the email of the Engineer?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the github of the Engineer?",
        name: "engineerGithub"
    }
]

const internInfo = [
    {
        type: "input",
        message: "What is the name of the Intern?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the ID of the Intern?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the email of the Intern?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the school of the Intern?",
        name: "internSchool"
    }
]

const managerInfo = [
    {
        type: "input",
        message: "What is the name of the Manager?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the ID of the Manager?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the email of the Manager?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the office number of the Manager?",
        name: "managerOfficeNumber"
    }
]

function begin() {

    inquirer.prompt(engineerInfo)
        .then(response => {
            const engineer = new Engineer(
                response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub)

            employeeArray.push(engineer)

            continueAdd()
        })

        inquirer.prompt(internInfo)
        .then(response => {
            const intern = new Intern(
                response.internName,
                response.internId,
                response.internEmail,
                response.internGithub)

            employeeArray.push(intern)

            continueAdd()
        })

        inquirer.prompt(managerInfo)
        .then(response => {
            const manager = new Manager(
                response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber)

            employeeArray.push(manager)

            continueAdd()
        })
}

function continueAdd() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to add more employees",
            name: "add"
        }
    ])
        .then(response => {
            if (add === true) {
                addMore()
            }
            else {
                generateHTML()
            }
        })
}

function addMore() {
    inquirer.prompt([
        {
            type: "list",
            message:"Do you want to add Engineer or Intern?",
            choices:["Engineer", "Intern"],
            name:""

        }
    ])
}


function generateHTML() {
    
}

begin()