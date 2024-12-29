class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }
}

// Usage:
const rect = new Rectangle(10, 5);
console.log(rect.getWidth()); // Output: 10
