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
// Contributors
// License

// array of questions for user
inquirer.prompt([
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
    name: "contributors"
   },
   {
     type: "",
     message: "How is this project licensed?",
     name: "license"
   }

]);

// function to write README file
function writeToFile(fileName, data) {
  // appendFile
  /* fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

    if (err) {
      console.log(err);
    }
    else {
      console.log("Commit logged!");
    }
  
  }); */
  
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
