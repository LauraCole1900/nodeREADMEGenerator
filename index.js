const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// Title
// TOC
// Description
// Installation
// Usage
// Technologies used
// Tests
// Problems faced
// Credits
// Collaborators
// Contact
// License

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project's title?",
    name: "title"
  },
  {
    type: "input",
    message: "What is your project's description?",
    name: "description"
  },
  {
    type: "input",
    message: "What are your project's installation instructions?",
    name: "install",
    default: "npm i"
  },
  {
    type: "input",
    message: "What is your project's intended usage?",
    name: "usage"
  },
  {
    type: "input",
    message: "What technologies did your project use?",
    name: "tech"
  },
  {
    type: "input",
    message: "What commands should be run to run tests?",
    name: "tests",
    default: "npm run test"
  },
  {
    type: "input",
    message: "Who needs credit on this project?",
    name: "credits"
  },
  {
    type: "input",
    message: "How does someone contribute to this project?",
    name: "contribute"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  },
  {
    type: "list",
    message: "How is this project licensed?",
    name: "license",
    choices: ["Apache", "Boost Software", "Creative Commons", "GNU", "ISC", "MIT", "Mozilla Public", "The Unlicense", "Other"]
  }
]

// function to write README file
function writeToFile(filename, data) {
  return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(response => {
    writeToFile("sampleREADME.md", generateMarkdown(response))
  });
}

// function call to initialize program
init();
