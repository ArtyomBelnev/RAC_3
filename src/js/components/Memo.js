import { getStatus } from './Journal'
import { PowerOk } from './PowerUP'
import { readyAPHP } from './Mode'

export let KranOK = false

export default class Memo {
  constructor() {
    this.etarget = ''
    this.g = {
      b1: false,
      g1: false,
      g2: false,
      g3: false,
      g4: false,
      g5: false,
      g6: false,
      g7: false,
      g8: false,
      g9: false,
      g10: false,
      g11: false,
      g12: false,
      g13: false,
      g14: false,
      g15: false,
    }
  }

  getCranes(e) {
    if (PowerOk == true && KranOK == false) {
      let x = e.target.classList.value.slice(1, 3).trim()
      let y = e.target.classList.value.slice(0, 1)

      if (y == 'r') {
        if (e.target.classList.value.length <= 2) {
          let u = 'g' + x
          let w = document.querySelector(`.${u}`)
          let q = document.querySelector(`.${e.target.classList.value}`)

          this.g[`${u}`] = false

          q.classList.add('color-red')
          w.classList.remove('color-green')
        }
      }

      if (y == 'g') {
        if (e.target.classList.value.length <= 2) {
          let u = 'r' + x
          let w = document.querySelector(`.${u}`)
          let q = document.querySelector(`.${e.target.classList.value}`)

          this.g[`${e.target.classList.value.slice(0, 3).split(' ').join('')}`] = true

          w.classList.remove('color-red')
          q.classList.add('color-green')
        }
      }

      if (y == 'b') {
        if (e.target.classList.value.slice(0, 2).trim() == 'b1') {
          e.target.classList.toggle('color-green')
          this.g[`${e.target.classList.value.slice(0, 3).split(' ').join('')}`] = this.g.b1 == false ? true : false
        }
      }

      if (this.g.b1 == true && this.g.g1 == false && this.g.g2 == true && this.g.g3 == false && this.g.g4 == true && this.g.g5 == false && this.g.g6 == false && this.g.g7 == false && this.g.g8 == true && this.g.g9 == false && KranOK == false) {
        getStatus(`Краны готовы`)
        KranOK = true

        readyAPHP()
      }
    }
  }
}
