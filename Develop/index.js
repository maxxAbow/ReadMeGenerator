// TODO: Include packages needed for this application
// https://www.npmjs.com/package/inquirer/v/8.2.4

// TODO: Create an array of questions for user input
const questions = [
    'What is your title?',
    'How would you describe the project',
    'What are the installation instructions?',
    'How is it used?',
    'What type of Licensing does this project fall under?',
    'Can anyone contribute to the project?',
    'How can the project be tested?',
    'What is your github username?',
    'What is the email associated with your github?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var inquirer = require('inquirer');
    inquirer
      .prompt([
        this.questions.forEach(console.log())
      ])
      .then((answers) => {
        // Use user feedback for... whatever!!
        //goal: store answers into appropriate section of generated README
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
