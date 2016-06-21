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
      increase: 0.2,
      maxSinMultiplier: 1,
      maxCosMultiplier: 1
    })
    
    this.length = 30
    
    // Create the initial geometry
    this.geometry = new THREE.Geometry()
    
    for (let i=0; i<this.length; i+=1) {
      // Create vertices for the X, Y and Z-position:
      this.geometry.vertices.push(
        new THREE.Vector3(
          0,
          0,
          0
        )
      )
      
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
    
    for (let [index, vertice] of this.geometry.vertices.entries()) {
      vertice.x = this.step.sin(index) * 250
      vertice.y = this.step.cos(index) * 250
      vertice.z = 0 //this.step.sin(index / 5) * 250
    }
    
    // Trigger a re-calculation of the geometry:
    this.geometry.verticesNeedUpdate = true
  }
}