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
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What do you use for testing?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
];

function generateContent(answers) {
    return `# ${answers.title} ![Build Passing](https://img.shields.io/badge/any_text-you_like-blue)

    ## Table of Contents
    - [Description](#description)
    - [Problem](#problem)
    - [Learning](#learning)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Description
    ${answers.des1}

    ## Problem
    ${answers.des2}

    ## Learning
    ${answers.des3}

    ## Installation
    ${answers.install}

    ## Usage
    ${answers.usage}

    ## Contributing
    ${answers.contribute}
    
    ## Tests
    ${answers.test}
    
    ## Questions
    You can reach me at ${answers.github} or ${answers.email} for any follow up Questions!`
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
    inquirer.prompt(questions).then((answers) => {
        const content = generateContent(answers);
        writeReadMeFile(content);
    });
}

// Function call to initialize app
init();