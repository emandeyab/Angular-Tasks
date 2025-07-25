import {Shape} from './Shape.js';

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  area() {
    return 3.14 * this.radius * this.radius;
  }

  perimeter() {
    return 2 * 3.14 * this.radius;
  }
}

export {Circle};
