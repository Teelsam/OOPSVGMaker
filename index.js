
function init() {

    const inquirer = require('inquirer');
    // const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
    const jest = require('jest');
    const fs = require('fs');
    const genSVG = require('./lib/shapes');

    inquirer
        .prompt([{
            type: 'input',
            message: 'Choose three characters to display:',
            name: 'Characters',
            maxLength: 3,
        },
        {
            type: 'input',
            message: 'Enter a text color:',
            name: 'textColor',
            maxLength: 20,
        },
        {
            type: 'list',
            message: 'Choose a shape:',
            name: "shape",
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'Enter a shape color:',
            name: 'shapeColor',
        }])
        .then(data => {
            console.log('data is: ', data);
            writeToFile(data);
        })
    function writeToFile(data) {
        const SVG = genSVG(data);
        fs.writeFile(
            'logo.svg', SVG, err => err ? console.log(err) : console.log('file created successfully')
        );
    }
};
init();