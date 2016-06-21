/**
 * A 3D Snake :-)
 */
export default class Snake
{
  /**
   * Constructor call
   */
  constructor() {
    this.step = 0
    this.inc = 0.01
    
    this.length = 30

    // Create the initial geometry
    this.geometry = new THREE.Geometry()
    
    for (let i=0; i<this.length; i+=1) {
      // Create vertices for the X, Y and Z-position:
      this.geometry.vertices.push(
        new THREE.Vector3(
          -1000 + Math.random() * 2000,
          -1000 + Math.random() * 2000,
          -1000 + Math.random() * 2000
        )
      )
      
      // Create a face according to the previously set 3 vertices:
      // this.geometry.faces.push(new THREE.Face3(i, i+1, i+2))
    }
    
    let material = new THREE.LineBasicMaterial()
    
    // Create a mesh, containing the geometry:
    this.mesh = new THREE.Line(this.geometry, material)
    
    console.log(this.mesh)
  }

  /**
   * Update method
   */
  update() {
    this.step += this.inc
    
    // Trigger a re-calculation of the geometry:
    this.geometry.verticesNeedUpdate = true
  }
}