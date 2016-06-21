import Box from "./scene/box"
import Camera from "./scene/camera"
import Snake from "./scene/snake"

export default class Scene {
  /**
   * Scene constructor call
   */
  constructor(scene, camera) {
    this.scene = scene
    let count = 1000

    // Create boxes:
    /*
    this.boxes = []
    for (let i=0; i<count; i+=1) {
      let box = new Box()
      box.mesh.rotation.x = Math.random() * Math.PI
      box.mesh.rotation.y = Math.random() * Math.PI
      box.mesh.rotation.z = Math.random() * Math.PI
      box.mesh.position.x = -5000 + Math.random() * 10000
      box.mesh.position.y = -5000 + Math.random() * 10000
      box.mesh.position.z = -5000 + Math.random() * 10000
      box.rotateInc = {
        x: -0.01 + Math.random() * 0.02,
        y: -0.01 + Math.random() * 0.02,
        z: -0.01 + Math.random() * 0.02
      }
      this.scene.add(box.mesh)
      this.boxes.push(box)
    }
    */

    this.snake = new Snake()
    this.scene.add(this.snake.mesh)
    
    // this.camera = new Camera(camera)
    // this.scene.add(this.camera.mesh)
  }

  /**
   * Update call
   */
  update() {
    /*
    for (let box of this.boxes) {
      box.mesh.rotateX(box.rotateInc.x)
      box.mesh.rotateY(box.rotateInc.y)
      box.mesh.rotateZ(box.rotateInc.z)
    }
    */
    // this.camera.update()
    this.snake.update()
  }
}
