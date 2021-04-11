import { elements } from './Elements'
import { PowerOk } from './PowerUP'
import { getStatus } from './Journal'
import { readyAPHP } from './Mode'

export let SignalOk = false

let SignalR = false
let SignalL = true

export function diotsON() {
  if (PowerOk == true && SignalR == false) {
    elements.modeWrap.style.background = 'rgb(215, 245, 17)'
    elements.TCwrapR.style.background = 'red'
    elements.ZwrapR.style.background = 'red'

    for (let i = 1; i < 16; i++) {
      let name = 'g' + i
      let getName = document.querySelector(`.${name}`)
      getName.style.background = 'green'
    }

    for (let i = 1; i < 13; i++) {
      let name = 'b' + i
      let getName = document.querySelector(`.${name}`)
      getName.style.background = 'red'
    }

    for (let i = 1; i < 16; i++) {
      let name = 'r' + i
      let getName = document.querySelector(`.${name}`)
      getName.style.background = 'red'
    }

    for (let i = 7; i < 9; i++) {
      let name = 'd' + i
      let getName = document.querySelector(`.${name}`)
      getName.style.background = 'green'
    }

    SignalR = true
  }
}

export function diotsOFF() {
  if (PowerOk == true && SignalR == true) {
    elements.modeWrap.style.background = null
    elements.TCwrapR.style.background = null
    elements.ZwrapR.style.background = null

    for (let i = 1; i < 16; i++) {
      let name = 'g' + i
      let getName = document.querySelector(`.${name}`)
      getName.style.background = null
    }

    for (let i = 1; i < 13; i++) {
      let name = 'b' + i
      let getName = document.querySelector(`.${name}`)
      getName.style.background = null
    }

    for (let i = 1; i < 16; i++) {
      let name = 'r' + i
      let getName = document.querySelector(`.${name}`)
      getName.style.background = null
    }

    for (let i = 7; i < 9; i++) {
      let name = 'd' + i
      let getName = document.querySelector(`.${name}`)
      getName.style.background = null
    }

    SignalL = true
  }
}

export function diotsOK() {
  if (PowerOk == true && SignalR == true && SignalL == true) {
    SignalOk = true
    SignalL = false
    SignalR = false
    getStatus('Сигнализация проверена')
    readyAPHP()
  }
}
