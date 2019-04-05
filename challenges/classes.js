// 1. Copy and paste your prototype in here and refactor into class syntax.

/*function CuboidMaker(cubattr){
    this.length = cubattr.length;
    this.width =cubattr.width;
    this.height =cubattr.height;
    }*/

class CuboidMaker {
  constructor(cubattr) {
    this.length = cubattr.length;
    this.width = cubattr.width;
    this.height = cubattr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const cuboid = new CuboidMaker(
    {
      length: 4,
      width: 5, 
      height:5 
    }
  )
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods 
//using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//Firealem Formulas cube volume = height * length * width which are the same , surface area = 6* length* width ( dimentions are same)

class CubeMaker extends CuboidMaker{
    constructor(cubattr2){
        
        super(cubattr2)
    }

    cubevolume(){return this.length*this.height*this.width}
    cubesurfacearea(){return 6* this.length*this.height }
}

const Cube = new CubeMaker(
    {
      length: 8,
      width: 8, 
      height:8 
    }
  )

console.log(Cube.cubevolume()); 
console.log(Cube.cubesurfacearea())