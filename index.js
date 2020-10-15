const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const path = require("path");

// checklist of possible sections?
// Title
// TOC
// Description
// Installation
// Usage
// Technologies used
// Problems faced
// Credits
// Collaborators
// License

// array of questions for user
const questions = [
  // {
  //   type: "checkbox",
  //   message: "Which sections do you need?",
  //   name: "sections",
  //   choices: ["Title", "Description", "Installation", "Usage", "Technologies Used", "Problems Faced", "Credits", "Collaborators", "License"]
  // },
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
     message: "What problems did you face?",
     name: "problems"
   },
   {
    type: "input",
    message: "Who needs credit on this project?",
    name: "credits"
  },
  {
    type: "input",
    message: "Who collaborated on this project?",
    name: "collaborators"
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
     choices: ["MIT License", "ISC License", "Creative Commons", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense", "Other"]
   }
]

function writeToFile(filename, data) {
  return fs.writeFileSync(path.join(process.cwd(), filename), data);
}


// function to write README file

  /* if (err) {
      console.log(err);
    }
    else {
      console.log("Commit logged!");
    }
  
  }); */
  // switch case for sections?
  

// function to initialize program
function init() {
  inquirer.prompt(questions).then(response => {
    writeToFile("sampleREADME.md", generateMarkdown(response))
  });
}

// function call to initialize program
init();
