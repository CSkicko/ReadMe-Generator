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
  
  // Set up installation and credits arrays
  const installationArray = installation.split(',');
  const creditsArray = credits.split('');
  
  // Return the readme file content as a string
  return `# ${title}
## Lisence
Application Lisence

## Description
${description}

## Table of Contents
* Installation
* Usage
* Collaborators
* Contribution Guidelines
* Tests

## Installation
\`\`\`
${createList(installationArray, 'Run the following commands on the command line to install the package:')}
\`\`\`

## Usage
${usage}

## Collaborators
${createList(creditsArray, 'The following personnel have contributed to the production of this project:')}

## Contributing
${contribution}

## Tests
${test}

## Questions
Contact information for questions
`;
}

module.exports = {
  generateMarkdown,
}
