import Journal from './Journal'
import Mode from './Mode'

import { elements } from './Elements'

export default class Display {
  constructor() {
    this.tmbs = ''
    this.tmbu = ''
    this.mTMax = false

    this.journal = new Journal()
    this.mode = new Mode()
  }

  startMBS(i) {
    let x = +elements.mbs.innerHTML
    this.tmbs = setInterval(() => {
      x += Math.random(0.1 - 0.39)
      elements.mbs.innerHTML = x.toFixed(2)

      if (+elements.mbs.innerHTML > 15 && +elements.mbu.innerHTML > 15) {
        this.mode.readyAPHP
      }

      if (+elements.mbs.innerHTML > 30 && +elements.mbu.innerHTML > 30 && this.mTMax == false) {
        this.journal.getStatus('Темпер. в масла баках > 15℃', 'yellow')
        this.mTMax = true
      }
    }, 500)
  }

  startMBU() {
    let x = +elements.mbu.innerHTML
    this.tmbu = setInterval(() => {
      x += Math.random(0.1 - 0.39)
      elements.mbu.innerHTML = x.toFixed(2)

      if (+elements.mbs.innerHTML > 15 && +elements.mbu.innerHTML > 15) {
        this.mode.readyAPHP
      }

      if (+elements.mbs.innerHTML > 30 && +elements.mbu.innerHTML > 30 && this.mTMax == false) {
        this.journal.getStatus('Темпер. в масла баках > 15℃', 'yellow')
        this.mTMax = true
      }
    }, 500)
  }

  stopMBS() {
    clearTimeout(this.tmbs)
  }

  stopMBU() {
    clearTimeout(this.tmbu)
  }
}
