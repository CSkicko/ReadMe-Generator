const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// Questions to be asked to user to generate dynamic content
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
        message: 'Please enter the installation commands required for your project. Note each step must be separated by a comma:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter relevant usage information for your project:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter the other contributors to this project. Note each person must be separated by a comma:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter the test instructions for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the applicable license for your project:',
        choices: ['Apache 2.0', 'Boost 1.0', 'BSD 3', 'GNU GPL v3', 'GNU AGPL v3', 'GNU LGPL v3', 'IBM', 'ISC', 'MIT'],
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

// Accepts the filename and data and generated the readme file
function writeToFile(fileName, data) {
    fs.writeFileSync(`${fileName}.md`, generate.generateMarkdown(data));
}

// Initialises the application
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README', data);
        });
}

init();
