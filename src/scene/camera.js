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

    this.camera.position.x = Math.sin(this.step) * 2500
    this.camera.position.y = Math.sin(20 + this.step * 0.811113) * 2500
    this.camera.position.z = Math.sin(40 + this.step * 1.111113) * 2500

    this.step += this.inc * 10

    this.x = Math.sin(this.step) * 2500
    this.y = Math.sin(20 + this.step * 0.811113) * 2500
    this.z = Math.sin(40 + this.step * 1.111113) * 2500

    this.step -= this.inc * 9

    this.mesh.position.x = this.x
    this.mesh.position.y = this.y
    this.mesh.position.z = this.z

    this.camera.lookAt(this.mesh.position)
  }
}
