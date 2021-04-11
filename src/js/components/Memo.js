import { getStatus } from './Journal'
import { PowerOk } from './PowerUP'
import { readyAPHP } from './Mode'
import { removeCliked } from './PowerUP'

export let KranOK = false

let etarget = ''

let g = {
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

export function getCranes(e) {
  if (PowerOk == true && KranOK == false) {
    let x = e.target.classList.value.slice(1, 3).trim()
    let y = e.target.classList.value.slice(0, 1)

    if (y == 'r') {
      if (e.target.classList.value.length <= 2) {
        let u = 'g' + x
        let w = document.querySelector(`.${u}`)
        let q = document.querySelector(`.${e.target.classList.value}`)

        g[`${u}`] = false

        q.classList.add('color-red')
        w.classList.remove('color-green')
      }
    }

    if (y == 'g') {
      if (e.target.classList.value.length <= 2) {
        let u = 'r' + x
        let w = document.querySelector(`.${u}`)
        let q = document.querySelector(`.${e.target.classList.value}`)

        g[`${e.target.classList.value.slice(0, 3).split(' ').join('')}`] = true

        w.classList.remove('color-red')
        q.classList.add('color-green')
      }
    }

    if (y == 'b') {
      if (e.target.classList.value.slice(0, 2).trim() == 'b1') {
        e.target.classList.toggle('color-green')
        g[`${e.target.classList.value.slice(0, 3).split(' ').join('')}`] = g.b1 == false ? true : false
      }
    }

    if (g.b1 == true && g.g1 == false && g.g2 == true && g.g3 == false && g.g4 == true && g.g5 == false && g.g6 == false && g.g7 == false && g.g8 == true && g.g9 == false && KranOK == false) {
      getStatus(`Краны готовы`)
      KranOK = true
      removeCliked()
      readyAPHP()
    }
  }
}
