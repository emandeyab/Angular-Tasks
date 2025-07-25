import {Shape} from './Shape.js';

class Square extends Shape {
  constructor(side) {
    super('Square');
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }
}

export {Square};
