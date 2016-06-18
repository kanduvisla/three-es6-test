export default class Box {
  /**
   * Constructor call
   */
  constructor() {
    this.geometry = new THREE.BoxGeometry(10, 10, 10)
    this.material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    this.mesh = new THREE.Mesh(this.geometry, this.material)
  }
}
