var inquirer = require("inquirer");
var fs = require("fs");

// checklist of possible sections?
// Title
// TOC
// Description
// Installation
// Usage
// Technologies used
// Problems faced
// Credits
// License

// array of questions for user
inquirer.prompt([
  {
    type: "checkbox",
    message: "Which sections do you need?",
    name: "sections",
    choices: ["Title", "Description", "Installation", "Usage", "Technologies Used", "Problems Faced", "Credits", "License"]
  },
  { 
    type: "",
    message: "What is your project's title?",
    name: "title"
   },
   {
     type: "",
     message: "What is your project's description?",
     name: "description"
   },
   {
     type: "",
     message: "What are your project's installation instructions?",
     name: "install"
   },
   {
     type: "",
     message: "What is your project's intended usage?",
     name: "usage"
   },
   {
     type: "",
     message: "What technologies did your project use?",
     name: "tech"
   },
   {
     type: "",
     message: "What problems did you face?",
     name: "problems"
   },
   {
    type: "",
    message: "Who contributed to this project?",
    name: "credits"
  },
   {
     type: "checklist",
     message: "How is this project licensed?",
     name: "license",
     choices: ["MIT License", "ISC License", "Creative Commons", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense", "Other"]
   }

])
.then()

// function to write README file
fs.writeFile("README.md", data);
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

}

// function call to initialize program
init();
