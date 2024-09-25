// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'des1',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'des2',
        message: 'What problem does this solve?',
    },
    {
        type: 'input',
        name: 'des3',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions?'
    },
];

function generateContent(answers) {
    return `## ${answers.title}
    
    ## Description
    ${answers.des1}

    ## Problem
    ${answers.des2}

    ## Learning
    ${answers.des3}

    ## Installation
    ${answers.install}

    ## Usage
    ${answers.usage}`
};

// TODO: Create a function to write README file
function writeReadMeFile(content) {
    const file = 'README.md';

    fs.writeFile(file, content, (err) => {
        err ? console.error(err) : console.log(`${file} has been generated successfully!`);
    }
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(answers).then((answers) => {
        const content = generateContent(answers);
        writeReadMeFile(content);
    });
}

// Function call to initialize app
init();