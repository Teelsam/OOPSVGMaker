class Shape {// shape class creates a color uses a parameter to share with its children
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {//because triangles are polygons in svg it needs points
    constructor(shapeColor) {
        super(shapeColor);
    }
    render(){
        return `<polygon points="0,300 300,300 150,0" fill="${this.shapeColor}"/>`
    }
}
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render(){
        
        return `<circle cx="200" cy="100" r="100" fill ="${this.shapeColor}"/>`
    }
}
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render(){
        return `<rect x="90" y="25" width="300" height="300" fill="${this.shapeColor}"/>`

    }
}


module.exports = {Triangle,Circle,Square};



