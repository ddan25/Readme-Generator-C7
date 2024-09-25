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

inquirer.prompt(questions).then((answers) => {
    const content = `## ${answers.title}
    
    ## Description
    ${answers.des1}
    ${answers.des2}
    ${answers.des3}

    ## Installation
    ${answers.install}

    ## Usage
    ${answers.usage}`
}
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// import inquirer from 'inquirer';
// import fs from 'fs';


// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is your name?',
//             name: 'username',
//         },
//         {
//             type: 'input',
//             message: 'Where is your location?',
//             name: 'location',
//         },
//         {
//             type: 'input',
//             message: 'Tell me about yourself?',
//             name: 'bio',
//         },
//         {
//             type: 'input',
//             message: 'What is your LinkedIn URL?',
//             name: 'linkedin',
//         },
//         {
//             type: 'input',
//             message: 'What is your GitHub URL?',
//             name: 'github',
//         }
//     ])
//     .then((response) =>{
//         const HTML = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>My Website</title>
//         <link rel="stylesheet" href="./style.css">
//         <link rel="icon" href="./favicon.ico" type="image/x-icon">
//       </head>
//       <body>
//         <main>
//             <h1>Welcome to ${response.username}'s Website</h1> 
//             <h3>My name is ${response.username}.</h3>
//             <h3>I live at ${response.location}.</h3>
//             <h3>Bio: ${response.bio}</h3>
//             <h3>LinkedIn: ${response.linkedin}</h3>
//             <h3>GitHub: ${response.github}</h3> 
//         </main>
//         <script src="index.js"></script>
//       </body>
//     </html>
// `        
// fs.writeFile('index.html', HTML, (err) => {
//     err ? console.error(err) : console.log('html created!');
//   });
//     })

