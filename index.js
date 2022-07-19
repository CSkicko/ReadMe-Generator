// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'Please enter your project title:', 
    'Please enter a description of your project:', 
    'Please enter the installation instructions for your project:', 
    'Please enter relevant usage information for your project:',
    'Please enter the contribution guidelines for your project:',
    'Please enter the test instructions for your project',
    'Please select the applicable liscence for your project:',
    'Please enter your GitHub username:',
    'Please enter your email address:'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
