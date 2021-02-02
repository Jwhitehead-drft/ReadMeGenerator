// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },{
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },{
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?'
    },{
        type: 'input',
        name: 'description',
        message: 'Provide a short description of this project'
    },{
        type: 'input',
        name: 'license',
        message: 'Does your project require any licenses?'
    },{
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies'
    },{
        type: 'input',
        name: 'tests',
        message: 'What command is used to run tests?'
    },{
        type: 'input',
        name: 'knowledge',
        message: 'What does the user need to know before utilizing this repo?'
    },{
        type: 'input',
        name: 'contribute',
        message: 'What does user need to know about contributing to this repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
}
// fs module to write content to file after generating contents

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((questionResponses) => {
        console.log('Generating README...');
        console.log(questionResponses);
        writeToFile('README.md', generateMarkdown({ ...questionResponses}));
    });
}

// Function call to initialize app
init();
