// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name your project:",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide any installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to your project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "creator",
        message: "Enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List any collaborators. (Use GitHub usernames)",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating a README.md File");
        writeToFile("./newReadMe/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();