import Step from "../util/step"

/**
 * A 3D Snake :-)
 */
export default class Snake
{
  /**
   * Constructor call
   */
  constructor() {
    // The number of iterations to create a random path
    this.step = new Step({
      iterations: 10,
      increase: 0.1,
      maxSinMultiplier: 1,
      maxCosMultiplier: 1
    })
    
    // The length of the snake
    this.length = 100
    
    // The resolution of the snake (how many vertices are around)
    this.resolution = 4
    
    // Create the initial geometry
    this.geometry = new THREE.Geometry()
    
    for (let i=0; i<this.length; i+=1) {
      // Create vertices for the X, Y and Z-position:
      
      // The first vertice is in the center:
      this.geometry.vertices.push(
        new THREE.Vector3(
          0,
          0,
          0
        )
      )
      
      // The next vertices are around, and create the resolution:
      for (let j=0; j<this.resolution; j+=1) {
        this.geometry.vertices.push(
          new THREE.Vector3(
            0,
            0,
            0
          )
        )
      }
      
      // Create a face according to the previously set 3 vertices:
      // this.geometry.faces.push(new THREE.Face3(i, i+1, i+2))
    }
    
    let material = new THREE.LineBasicMaterial()

    // Create a mesh, containing the geometry:
    this.mesh = new THREE.Line(this.geometry, material)
  }
  
  /**
   * Update method
   */
  update() {
    this.step.update()
    
    for (let index=0; index<this.length; index+=this.resolution) {
      // First position the center vertice:
      let vertice = this.geometry.vertices[index]

      vertice.x = this.step.sin(index) * 1000
      vertice.y = this.step.cos(index) * 1000
      vertice.z = 0 //this.step.sin(index / 5) * 250
      
      // The position the resolution vertices around this center:
      for (let j=1; j<=this.resolution; j+=1) {
        let vertice = this.geometry.vertices[index + j]

        vertice.x = this.step.sin(index) * 1000
        vertice.y = this.step.cos(index) * 1000
        vertice.z = 0 //this.step.sin(index / 5) * 250
        
      }
    }
    
    /*
    for (let [index, vertice] of this.geometry.vertices.entries()) {
      vertice.x = this.step.sin(index) * 1000
      vertice.y = this.step.cos(index) * 1000
      vertice.z = 0 //this.step.sin(index / 5) * 250
    }
    */
    
    // Trigger a re-calculation of the geometry:
    this.geometry.verticesNeedUpdate = true
  }
}