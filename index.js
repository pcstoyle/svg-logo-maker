const inquirer = require('inquirer');

const fs = require('fs');
const { stripVTControlCharacters } = require('util');

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);

//prompt for text up to 3 characters 
//prompt for text color
//promot for shape
//propt for shape color
//generate logo.svg file
// confirm "generated logo.svg"