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
    this.segmentSize = 30
    
    // Create the initial geometry
    this.geometry = new THREE.Geometry()
    
    for (let i=0; i<this.length; i+=1) {
      // Create vertices for the X, Y and Z-position:
      this.geometry.vertices.push(
        new THREE.Vector3(
          (i * this.segmentSize) - (this.segmentSize * (this.length / 2)),
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
    this.step += this.inc

    for (let [index, vertice] of this.geometry.vertices.entries()) {
      //vertice.x = Math.random() * 100
      vertice.y = Math.sin(this.step + index / 3) * this.segmentSize
      vertice.z = Math.cos(this.step + index / 3) * this.segmentSize
    }

    // Trigger a re-calculation of the geometry:
    this.geometry.verticesNeedUpdate = true
  }
}