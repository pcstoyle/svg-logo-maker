const inquirer = require('inquirer');
const fs = require('fs');

const { writeFile } = require('fs').promises;

class SHAPES {
    constructor() {
        this.shape = '';
    }
    run() {
        return inquirer
        .prompt ([
            {
                type: 'input',
                name: 'text',
                message: 'Enter logo text',
            },
            {
                type: 'list',
                name: 'shape',
                choices: ['circle', 'square', 'triangle',],
                messagee: 'Select the shape of your logo',
            },
            {
                type: 'input',
                name: 'background',
                message: 'Enter background color',
            },
            {
                type: 'input',
                name: 'logo',
                message: 'Enter logo color',
            }
        ])
    }
}

const writeToFile = ({text, shape, background, logo})
module.exports = SHAPES;