export default class Step {
  /**
   * Constructor call
   * @param options
   */
  constructor(options = {}) {
    this.options = Object.assign({
      iterations : 1,
      increase : 0.1,
      maxSinOffset : 0,
      maxCosOffset : 0,
      maxSinMultiplier : 1,
      maxCosMultiplier : 1
    }, options)
    
    this.step = []
    this.inc  = []
    this.sinOffset = []
    this.cosOffset = []
    this.sinMultiplier = []
    this.cosMultiplier = []

    for (let i=0; i<this.options.iterations; i+=1) {
      // Random start position:
      this.step.push(Math.random() * 1000)
      // Random increment / decrement:
      this.inc.push((-this.options.increase / 2) + (Math.random() * this.options.increase))
      // Random offset:
      this.sinOffset.push(Math.random() * this.options.maxSinOffset)
      this.cosOffset.push(Math.random() * this.options.maxCosOffset)
      // Random multipliers:
      this.sinMultiplier.push(1 + (Math.random() * Math.abs(this.options.maxSinMultiplier - 1)))
      this.cosMultiplier.push(1 + (Math.random() * Math.abs(this.options.maxCosMultiplier - 1)))
    }
    
    // Initial start state:
    this.update()
  }

  /**
   * Increase the steps
   */
  update() {
    for (let i=0; i<this.options.iterations; i+=1) {
      this.step[i] += this.inc[i]
    }
  }

  /**
   * Get the average sin value
   * @returns {number}
   */
  sin(offset = 0) {
    let sinValue = 0;

    for (let i=0; i<this.options.iterations; i+=1) {
      sinValue += Math.sin(((this.step[i] + this.inc[i] * offset) * this.sinMultiplier[i]) + this.sinOffset[i])
    }

    sinValue /= this.options.iterations
    return sinValue
  }

  /**
   * Get the average sin value
   * @returns {number}
   */
  cos(offset = 0) {
    let cosValue = 0

    for (let i=0; i<this.options.iterations; i+=1) {
      cosValue += Math.cos(((this.step[i] + this.inc[i] * offset) * this.cosMultiplier[i]) + this.cosOffset[i])
    }
    
    cosValue /= this.options.iterations
    return cosValue
  }
}