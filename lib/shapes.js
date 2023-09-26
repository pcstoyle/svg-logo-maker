const inquirer = require('inquirer');
const fs = require('fs');

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

const { writeFile } = require('fs').promises;
 
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

class SHAPES {
    constructor() {
        this.shape = '';
    }
    run() {
        return inquirer
        .prompt ([
            {
                type: 'list',
                name: 'logo',
                choices: ['Circle', 'Square', 'Triangle', 'None',],
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
}

function renderShape(logo) {
    let logoSh = logo;
    let logoShape = ''
    if (logoSh === 'circle') {
        logoShape = `circle cx="150" cy="100" r="80"`
    } else if (logoSh === 'square') {
    logoShape = `rect x="75" y="25" height="150" width="150"`
    } else if (logoSh === triangle) {
        logoShape = `polygon points="150,0 50,150 250,150"`
    }
}

function renderLogoShape (logo) {
    console.log(logo);
    if (logo != 'None') {
   return  `${logo} 
    ${renderShape(logo)}`
    }
    return ""
};



const writeToFile = ({ logo, fill, text, txtColor}) =>
`<svg version="1.1"
width="300" height="400"
xmlns="http://www.w3.org/2000/svg">

<${renderLogoShape(logo)} ${fill}/>


<text x="100" y="125" font-size="50" text-anchor="middle" fill="${txtColor}">${text}</text>

</svg>`

const init = () => {
    SHAPES()
    .then((answers) => writeFile('NewLogo.svg', writeToFile(answers)))
    .then(() => console.log('Generated NewLogo.svg!'))
    .catch((err) => console.error(err));
}

module.exports = SHAPES;