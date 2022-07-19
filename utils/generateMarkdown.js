// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Lisence
    Application Lisence

    ## Description
    Application Description

    ## Table of Contents
    * Installation
    * Usage
    * Collaborators
    * Contribution Guidelines
    * Tests

    ## Installation
    Information on aplication installation:  
    \`npm install\`

    ## Usage
    Information on application usage

    ## Collaborators
    * Colab 1
    * Colab 2

    ## Contributing
    Information on how to contribute

    ## Tests
    Test information

    ## Questions
    Contact information for questions
    `;
}

module.exports = {
  generateMarkdown,
}
