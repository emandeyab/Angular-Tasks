class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return 0;
  }

  perimeter() {
    return 0;
  }

  displayDetails() {
    console.log(`${this.name} ==> Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
  }
}

export {Shape};
