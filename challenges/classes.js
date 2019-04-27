
// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }

    volume() {
        return this.width * this.length * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


cuboid = new CuboidMakerClass({length: 4, width: 5, height: 5});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
