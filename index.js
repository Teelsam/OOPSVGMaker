
function init() {//makes sure the entire code is initiallized.
    //loads the needed content to run this code
    const inquirer = require('inquirer');
    // const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
    const fs = require('fs');
    const {Triangle,Circle,Square} = require('./lib/shapes');
    

    inquirer
        .prompt([{ //asks the user quesitons in the terminal
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
        .then(data => {//sends the data to the function writeFile
            console.log('data is: ', data);
            writeToFile(data);
        })

    function svgInfo(data) { // this file sets up the content for the next function to create SVG, by checking for shapeinfo
        let shape;
        if (data.shape === 'circle') {
            shape = new Circle(data.shapeColor);
            return `
    <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text text-anchor="middle" x="200" y="100" font-size="60" fill="${data.textColor}">${data.Characters}</text>
    </svg> `
        }
        else if (data.shape === 'triangle') {
            shape = new Triangle(data.shapeColor);
            return `
        <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text text-anchor="middle"  x="150" y="200" font-size="60" fill="${data.textColor}">${data.Characters}</text>
        </svg> `
        }
        else if (data.shape === 'square') {
            shape = new Square(data.shapeColor);
            return `
        <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text text-anchor="middle" x="225" y="150" font-size="60" fill="${data.textColor}">${data.Characters}</text>
        </svg> `
        }
    }
    function writeToFile(data) { //after SVG info picks which shape to build, this function writes that new files content
        const SVG = svgInfo(data);
        fs.writeFile(
            'logo.svg', SVG, err => err ? console.log(err) : console.log('file created successfully')
        );
    }
};
init();