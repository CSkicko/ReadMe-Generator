// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter relevant usage information for your project:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter the test instructions for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the applicable license for your project:',
        choices: ['TBD1', 'TBD2'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`${fileName}.md`, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
