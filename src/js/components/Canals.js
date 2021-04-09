import { elements } from './Elements'

export default class Canals {
  constructor() {
    this.intPms = ''
  }

  getPMC() {
    this.intPms = setInterval(() => {
      let x = +elements.PMC.innerHTML
      x += 0.01
      if (x === 0.14) {
        clearTimeout(this.intPms)
      }
      elements.PMC.innerHTML = +x.toFixed(2)
    }, 500)
  }

  delPMC() {
    this.intPms = setInterval(() => {
      let x = +elements.PMC.innerHTML
      x -= 0.01
      if (x === 0) {
        clearTimeout(this.intPms)
      }
      elements.PMC.innerHTML = +x.toFixed(2)
    }, 500)
  }

  stopPMC() {
    clearTimeout(this.intPms)
  }
}
