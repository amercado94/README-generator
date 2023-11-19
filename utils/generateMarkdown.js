// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none") {
    return `\n* [License](#license)\n`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `## License
    
     Licensed under the ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation Instructions](#installation-instructions)
* [How to Use This Application](#how-to-use-this-application)
* [Contributors](#contributors)
* [Testing](#testing)
${renderLicenseLink(data.license)}
* [Questions](#questions)
## Installation Instructions
${data.installation}
## How to Use This Application:
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.test}
${renderLicenseSection(data.license)}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator})
`;
}

module.exports = generateMarkdown;
