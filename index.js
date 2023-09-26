

const SHAPES = require('./lib/shapes')

const shapes = new SHAPES();

shapes.run();

//prompt for text up to 3 characters ✅
//prompt for text color ✅
//promot for shape ✅
//propt for shape color ✅
//generate logo.svg file
// confirm "generated logo.svg"



// fs.readFile('data.csv', 'utf8', (error, data) =>
// error ? console.error(error) : console.log(data)
// );

// // fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
// //   err ? console.error(err) : console.log('Commit logged!')
// // );
// //generate logo.svg file
// // confirm "generated logo.svg"
// fs.writeFile('logo.svg', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Generated logo.svg!')
// );