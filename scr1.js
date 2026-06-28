class Shape {
    constructor(name) {
        this.name = name;
    }

    calculateArea() {
        throw new Error("Метод calculate должен быть реализован")
    }

    describe() {
        console.log(`Это ${this.name} с площадью ${this.calculateArea()} `)
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle("Круг", 5);