
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

    function svgInfo(data) {
        if (data.shape === 'circle') {
            return `
    <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="100" r="100" fill ="${data.shapeColor}"/>
    <text text-anchor="middle" x="200" y="100" font-size="60"fill="${data.textColor}">${data.Characters}</text>
    </svg> `
        }
        else if (data.shape === 'triangle') {
            return `
        <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,300 300,300 150,0" fill="${data.shapeColor}"/>
        <text text-anchor="middle"  x="150" y="200" font-size="60" fill="${data.textColor}">${data.Characters}</text>
        </svg> `
        }
        else if (data.shape === 'square') {
            return `
        <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="25" width="300" height="300" fill="${data.shapeColor}"/>
        <text text-anchor="middle" x="225" y="150" font-size="60" fill="${data.textColor}">${data.Characters}</text>
        </svg> `
        }
    }
    function writeToFile(data) {
        const SVG = svgInfo(data);
        fs.writeFile(
            'logo.svg', SVG, err => err ? console.log(err) : console.log('file created successfully')
        );
    }
};
init();