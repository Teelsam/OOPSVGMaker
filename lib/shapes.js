class Shape {
    constructor(shapeColor) {
        this.shapeColor=shapeColor;
    }
}

class Triangle extends Shape {//because triangles are polygons in svg it needs points
    constructor(shapeColor) {
        super(shapeColor);
        return `<polygon points="0,200 200,200 300,0" fill=${shapeColor}`
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
        return `<circle cx="25" cy="75" r="20" fill=${shapeColor}`
    }

}
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
        return `<rec x="10" y="10" width="30" height="30" fill=${shapeColor}`
    }

}



module.exports = {Triangle,Circle,Square};


