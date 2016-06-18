// Entry point of all the JavaScript magic of the website
import Scene from "./scene"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 10000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Create the main scene, where everything happens
const myScene = new Scene(scene, camera)

// debugging purposes:
camera.position.z = 1000

/**
 * Render the Scene
 */
function render() {
  myScene.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(render)
}

render()
