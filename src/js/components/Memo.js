import { PowerOk } from './PowerUP'

export let KranOK = false

export default class Memo {
  constructor() {
    this.g = {
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
        if (e.target.classList.value.length <= 4) {
          let u = 'g' + x
          let w = document.querySelector(`.${u}`)
          let q = document.querySelector(`.${e.target.classList.value}`)

          // r[`${e.target.classList.value.slice(0, 3).split(' ').join('')}`] = true
          this.g[`${u}`] = false

          q.classList.add('color-red')
          w.classList.remove('color-green')
        }
      }

      if (y == 'g') {
        if (e.target.classList.value.length <= 4) {
          let u = 'r' + x
          let w = document.querySelector(`.${u}`)
          let q = document.querySelector(`.${e.target.classList.value}`)
          console.log(w)
          console.log(q)

          this.g[`${e.target.classList.value.slice(0, 3).split(' ').join('')}`] = true
          // r[`${u}`] = false

          w.classList.remove('color-red')
          q.classList.add('color-green')
        }
      }

      // if (y == 'b') {
      //   if (e.target.classList.value.slice(0, 2).trim() == 'b1') {
      //     e.target.classList.toggle('color-green')

      //     JalVOU = JalVOU == false ? true : false
      //   }

      //   // b[`${(e.target.classList.value).slice(0,3).split(' ').join('')}`] = true;
      // }

      // if (g.g1 === false && g.g2 === true && g.g3 === false && g.g4 === true && g.g5 === false && g.g6 === false && g.g7 === false && g.g8 === true && g.g9 === false && g.g10 === false && g.g11 === false && g.g12 === false && g.g13 === false && g.g14 === false && g.g15 === false && KranOK == false && JalVOU == true) {
      //   getStatus(`Краны готовы`)
      //   KranOK = true

      //   if (+mbs.innerHTML > 15 && +mbu.innerHTML > 15 && PowerOk == true && SignalOk == true && KranOK == true && ModeHP == true) {
      //     apXp.style.background = 'yellow'
      //     Gaphp = true
      //   }
      // }
    }
  }
}
