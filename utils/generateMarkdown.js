// License information sourced from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const licenseInfo = [
  {
    name: 'Apache 2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    link: '(https://opensource.org/licenses/Apache-2.0)',
  },
  {
    name: 'Boost 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
    link: '(https://www.boost.org/LICENSE_1_0.txt)',
  },
  {
    name: 'BSD 3',
    badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
    link: '(https://opensource.org/licenses/BSD-3-Clause)',
  },
  {
    name: 'GNU GPL v3',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/gpl-3.0)',
  },
  {
    name: 'GNU AGPL v3',
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/agpl-3.0)',
  },
  {
    name: 'GNU LGPL v3',
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/lgpl-3.0)',
  },
  {
    name: 'IBM',
    badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
    link: '(https://opensource.org/licenses/IPL-1.0)',
  },
  {
    name: 'ISC',
    badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
    link: '(https://opensource.org/licenses/ISC)',
  },
  {
    name: 'MIT',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    link: '(https://opensource.org/licenses/MIT)',
  }
];

function renderLicenseBadge(license) {
  const licenseData = licenseInfo.filter(index => index.name == license);
  return licenseData[0].badge;
}

function renderLicenseLink(license) {
  const licenseData = licenseInfo.filter(index => index.name == license);
  return licenseData[0].link;
}

function renderLicenseSection(license) {
  return `${renderLicenseBadge(license) + renderLicenseLink(license)}`
}

// Creates lists of information based on dynamic array content
function createList(array, message) {
  return array.reduce((a, b) => a + ' \n- ' + b, message);
}


// Generates and returns the readme content
function generateMarkdown(data) {
  const {title, description, installation, usage, credits, contribution, test, license, username, email} = data;
  
  // Set up installation and credits arrays. Note map is used to get rid of additional white space at the start of elements from index 1 onwards
  const installationArray = installation.split(',').map(index => index.trim());
  const creditsArray = credits.split(',').map(index => index.trim());
  
  // Return the readme file content as a string
  return `# ${title ? title : 'Untitled'}
## License
${license ? renderLicenseSection(license) : 'Not Applicable'} \n
The applicable license for this project is ${license}. Click on the badge above for further license information.

## Description
${description ? description : 'Not Available'}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Collaborators](#collaborators)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
\`\`\`
${installationArray[0] ? createList(installationArray, 'Run the following commands on the command line to install the package:') : 'Not Applicable'}
\`\`\`

## Usage
${usage ? usage : 'Not Available'}

## Collaborators
${creditsArray[0] ? createList(creditsArray, 'The following personnel have contributed to the production of this project:') : "No other collaborators"}

## Contributing
${contribution ? contribution : "Not Applicable"}

## Tests
${test ? test : 'Not Applicable'}

## Questions
Should you have any questions, please contact me via [GitHub](https://github.com/${username}) or by [email](mailto:${email})`
}

// Exports the generate markdown function to be used in other files
module.exports = {
  generateMarkdown,
}
