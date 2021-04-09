import Btn from './Btn'
import Journal from './Journal'
import Arrow from './Arrow'
import HoloProk from './HoloProk'

import Mode from './Mode'

import { PowerOk } from './PowerUP'
import { elements } from './Elements'
import { gAPHP } from './Mode'

import { removeCliked } from './Main'

export let SignalOk = false
export let loadDIST = false
export let ModeHP = false
export let ModeAU = false
export let holProk = false

export default class Tumblers {
  constructor() {
    this.START = false
    this.STOP = false
    this.SignalR = false
    this.SignalL = true

    this.btn = new Btn()
    this.journal = new Journal()
    this.arrow = new Arrow()
    this.mode = new Mode()
    this.holoprok = new HoloProk()

    this.cliked = this.holoprok.getHOLPRO.bind(this.holoprok)
  }

  getTumblers(e) {
    switch (e.target.value) {
      case '0':
        elements.tumImg1.style.transform = 'rotate(-45deg)'
        this.START = true
        this.STOP = false
        break
      case '1':
        elements.tumImg1.style.transform = 'rotate(0deg)'
        break
      case '2':
        elements.tumImg1.style.transform = 'rotate(45deg)'
        this.STOP = true
        this.START = false
        break
      case '3':
        elements.tumImg2.style.transform = 'rotate(-45deg)'
        setTimeout(() => (elements.tumImg2.style.transform = 'rotate(0deg)'), 400)
        if (PowerOk == true) {
          this.arrow.arrowUP()
        }
        break
      case '4':
        elements.tumImg2.style.transform = 'rotate(45deg)'
        setTimeout(() => (elements.tumImg2.style.transform = 'rotate(0deg)'), 400)
        if (PowerOk == true) {
          this.arrow.arrowDN()
        }
        break
      case '5':
        elements.tumImg3.style.transform = 'rotate(-45deg)'
        this.diotsOFF()
        break
      case '6':
        elements.tumImg3.style.transform = 'rotate(0deg)'
        this.diotsOK()
        break
      case '7':
        elements.tumImg3.style.transform = 'rotate(45deg)'
        this.diotsON()
        break
      case '8':
        elements.tumImg4.style.transform = 'rotate(-45deg)'
        break
      case '9':
        elements.tumImg4.style.transform = 'rotate(0deg)'
        break
      case '10':
        elements.tumImg5.style.transform = 'rotate(-45deg)'
        if (PowerOk == true) {
          loadDIST = false
        }
        break
      case '11':
        elements.tumImg5.style.transform = 'rotate(0deg)'
        if (PowerOk == true) {
          loadDIST = true
        }
        break
      case '12':
        elements.tumImg5.style.transform = 'rotate(45deg)'
        if (PowerOk == true) {
          loadDIST = false
        }
        break
      case '13':
        elements.tumImg6.style.transform = 'rotate(-45deg)'
        if (PowerOk == true) {
          ModeHP = true
          ModeAU = false
          this.mode.readyAPHP()
        }
        // if (
        //   +elements.mbs.innerHTML > 15 &&
        //   +elements.mbu.innerHTML > 15 &&
        //   PowerOk == true &&
        //   SignalOk == true &&
        //   KranOK == true &&
        //   ModeHP == true
        // ) {
        //   elements.apXp.style.background = 'yellow'
        //   Gaphp = true
        // }
        break
      case '14':
        elements.tumImg6.style.transform = 'rotate(0deg)'
        if (PowerOk == true) {
          ModeAU = true
          ModeHP = false
        }
        break
      case '15':
        elements.tumImg6.style.transform = 'rotate(45deg)'
        // if (PowerOk == true) {
        //   ModeHP = false
        //   ModeAU = false
        //   elements.apXp.style.background = null
        //   Gaphp = false
        // }
        // if (
        //   +elements.mbs.innerHTML > 15 &&
        //   +elements.mbu.innerHTML > 15 &&
        //   PowerOk == true &&
        //   SignalOk == true &&
        //   KranOK == true &&
        //   ModeHP == true
        // ) {
        //   elements.apXp.style.background = 'yellow'
        //   Gaphp = true
        // }
        // if (PowerOk == true) {
        //   ModeHP = false
        //   ModeAU = false
        // }
        break
      case '16':
        elements.tumImg7.style.transform = 'rotate(45deg)'
        setTimeout(() => (elements.tumImg7.style.transform = 'rotate(0deg)'), 400)
        break
      case 'enter':
        if (gAPHP == true && elements.PMC.innerHTML > 0.1 && elements.vpns.classList.contains('btn__style-green') && elements.vpnu.classList.contains('btn__style-green') && ModeHP == true && holProk == false) {
          this.journal.getStatus('Нажата испол. команда')
          holProk = true
          removeCliked()

          elements.mem.addEventListener('click', this.cliked)
          // elements.mem.removeEventListener('click', this.cliked)
        }
        break
    }
    if (this.START == true && PowerOk == true) {
      this.btn.getBtn(e)
    }
    if (this.STOP == true && PowerOk == true) {
      this.btn.delBtn(e)
    }
  }

  diotsON() {
    if (PowerOk == true && this.SignalR == false) {
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

      this.SignalR = true
    }
  }

  diotsOFF() {
    if (PowerOk == true && this.SignalR == true) {
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

      this.SignalL = true
    }
  }

  diotsOK() {
    if (PowerOk == true && this.SignalR == true && this.SignalL == true) {
      SignalOk = true
      this.SignalL = false
      this.SignalR = false
      this.journal.getStatus('Сигнализация проверена')
      this.mode.readyAPHP()
    }
  }

  delHoloholProk() {
    holProk = false
  }
}
