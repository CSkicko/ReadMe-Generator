// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Creates lists of information based on dynamic array content
function createList(array, message) {
  return array.reduce((a, b) => a + ' \n- ' + b, message);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Deconstruct data object
  const {title, description, installation, usage, credits, contribution, test, license, username, email} = data;
  
  // Set up installation and credits arrays. Note map is used to get rid of additional white space at the start of elements from index 1 onwards
  const installationArray = installation.split(',').map(index => index.trim());
  const creditsArray = credits.split(',').map(index => index.trim());
  
  // Return the readme file content as a string
  return `# ${title}
## Lisence
Application Lisence

## Description
${description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Collaborators](#collaborators)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
\`\`\`
${createList(installationArray, 'Run the following commands on the command line to install the package:')}
\`\`\`

## Usage
${usage}

## Collaborators
${createList(creditsArray, 'The following personnel have contributed to the production of this project:')}

## Contribution Guidelines
${contribution}

## Tests
${test}

## Questions
Should you have any questions, please contact me via [GitHub](https://github.com/${username}) or by email at ${email}
`;
}

module.exports = {
  generateMarkdown,
}
