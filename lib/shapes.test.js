const { Triangle, Circle, Square } = require('./shapes'); //imports class objs

describe('Triangle', () => { // tests triangle shape class

    it('should render a blue triangle', () => {
        const shape = new Triangle('blue'); //sets shape to triangle class with blue as color param
        const output = `<polygon points="0,300 300,300 150,0" fill="blue"/>`;
        expect(shape.render()).toEqual(output);
    });

});

describe('Circle', () => { // tests circle shape class

    it('should render a blue circle', () => {
        const shape = new Circle('blue');//sets shape to circle class with blue as color param
        const output = `<circle cx="200" cy="100" r="100" fill ="blue"/>`;
        expect(shape.render()).toEqual(output);
    });

});

describe('Square', () => { //test square shape class

    it('should render a blue Square', () => {
        const shape = new Square('blue');//sets shape to square class with blue as color param
        const output = `<rect x="90" y="25" width="300" height="300" fill="blue"/>`
        expect(shape.render()).toEqual(output);
    });

});