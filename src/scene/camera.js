export default class Camera {
  constructor(camera) {
    // debugging purposes:
    this.geometry = new THREE.BoxGeometry(10, 10, 10)
    this.material = new THREE.MeshBasicMaterial({color: 0xff0000})
    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.x = 0
    this.y = 0
    this.z = 0
    this.step = 0
    this.inc = 0.01

    this.camera = camera
  }

  update() {

    this.camera.position.x = -125 + Math.sin(this.step) * 250
    this.camera.position.y = -125 + Math.sin(20 + this.step * 0.811113) * 250
    this.camera.position.z = -125 + Math.sin(40 + this.step * 1.111113) * 250

    this.step += this.inc * 10

    this.x = -125 + Math.sin(this.step) * 250
    this.y = -125 + Math.sin(20 + this.step * 0.811113) * 250
    this.z = -125 + Math.sin(40 + this.step * 1.111113) * 250

    this.step -= this.inc * 9

    this.mesh.position.x = this.x
    this.mesh.position.y = this.y
    this.mesh.position.z = this.z

    this.camera.lookAt(this.mesh.position)
  }
}
