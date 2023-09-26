const inquirer = require('inquirer');
const fs = require('fs');

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

const { writeFile } = require('fs').promises;
 
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const questions = () => {
    return inquirer.prompt([
            {
                type: 'list',
                name: 'logo',
                choices: ['Circle', 'Square', 'Triangle', ],
                messagee: 'Select the shape of your logo',
            },
            {
                type: 'input',
                name: 'fill',
                message: 'Enter logo color',
            },
            {
                type: 'maxlength-input',
                name: 'text',
                message: 'Enter logo text',
                maxLength: 3
            },
            {
                type: 'input',
                name: 'txtColor',
                message: 'Enter text color',
            },
        ])
    }


function renderShape(logo) {
    let logoSh = logo;
    let logoShape = ''
    if (logoSh === 'Circle') {
        logoShape = `circle cx="150" cy="100" r="80"`
    } else if (logoSh === 'Square') {
    logoShape = `rect x="75" y="25" height="150" width="150"`
    } else if (logoSh === 'Triangle') {
        logoShape = `polygon points="150,0 50,150 250,150"`
    }
    return logoShape;
};

const writeToFile = ({ logo, fill, text, txtColor}) =>
`<svg version="1.1"
width="300" height="400"
xmlns="http://www.w3.org/2000/svg">

<${renderShape(logo)} fill="${fill}"/>


<text x="150" y="125" font-size="50" text-anchor="middle" fill="${txtColor}">${text}</text>

</svg>`;



const init = () => {
    questions()
    .then((answers) => writeFile('NewLogo.svg', writeToFile(answers)))
    .then(() => console.log('Generated NewLogo.svg!'))
    .catch((err) => console.error(err));
}

init();

module.exports = init;