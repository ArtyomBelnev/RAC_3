import Btn from './Btn'
import Journal from './Journal'

import { PowerOk } from './PowerUP'

export let SignalOk = false

export default class Tumblers {
  constructor(tumImg1, tumImg2, tumImg3, tumImg4, tumImg5, tumImg6, tumImg7, vpns, vpnu, vmr01, vmr02, vmr03, vmr04, PmBC, PmTK, PgDG, PmCT, Pg13, PgN, PgpN, PMC, dPkonf, OSleft, OSright, modeWrap, TCwrapR, ZwrapR) {
    this.tumImg1 = tumImg1
    this.tumImg2 = tumImg2
    this.tumImg3 = tumImg3
    ;(this.tumImg4 = tumImg4), (this.tumImg5 = tumImg5)
    this.tumImg6 = tumImg6
    this.tumImg7 = tumImg7
    this.modeWrap = modeWrap
    this.TCwrapR = TCwrapR
    this.ZwrapR = ZwrapR

    this.START = false
    this.STOP = false
    this.SignalR = false
    this.SignalL = true

    this.btn = new Btn(vpns, vpnu, vmr01, vmr02, vmr03, vmr04, PmBC, PmTK, PgDG, PmCT, Pg13, PgN, PgpN, PMC, dPkonf, OSleft, OSright)
    this.journal = new Journal()
  }
  getTumblers(e) {
    switch (e.target.value) {
      case '0':
        this.tumImg1.style.transform = 'rotate(-45deg)'
        this.START = true
        this.STOP = false
        break
      case '1':
        this.tumImg1.style.transform = 'rotate(0deg)'
        break
      case '2':
        this.tumImg1.style.transform = 'rotate(45deg)'
        this.STOP = true
        this.START = false
        break
      case '3':
        this.tumImg2.style.transform = 'rotate(-45deg)'
        setTimeout(() => (this.tumImg2.style.transform = 'rotate(0deg)'), 400)
        // if (PowerOk == true) {
        //   arrowUp()
        // }
        break
      case '4':
        this.tumImg2.style.transform = 'rotate(45deg)'
        setTimeout(() => (this.tumImg2.style.transform = 'rotate(0deg)'), 400)
        // if (PowerOk == true) {
        //   arrowDn()
        // }
        break
      case '5':
        this.tumImg3.style.transform = 'rotate(-45deg)'
        this.diotsOFF()
        break
      case '6':
        this.tumImg3.style.transform = 'rotate(0deg)'
        this.diotsOK()
        break
      case '7':
        this.tumImg3.style.transform = 'rotate(45deg)'
        this.diotsON()
        break
      case '8':
        this.tumImg4.style.transform = 'rotate(-45deg)'
        break
      case '9':
        this.tumImg4.style.transform = 'rotate(0deg)'
        break
      case '10':
        this.tumImg5.style.transform = 'rotate(-45deg)'
        // if (PowerOk == true) {
        //   loadDIST = false
        // }
        break
      case '11':
        this.tumImg5.style.transform = 'rotate(0deg)'
        // if (PowerOk == true) {
        //   loadDIST = true
        // }
        break
      case '12':
        this.tumImg5.style.transform = 'rotate(45deg)'
        // if (PowerOk == true) {
        //   loadDIST = false
        // }
        break
      case '13':
        this.tumImg6.style.transform = 'rotate(-45deg)'
        // if (PowerOk == true) {
        //   ModeHP = true
        //   ModeAU = false
        // }
        // if (
        //   +mbs.innerHTML > 15 &&
        //   +mbu.innerHTML > 15 &&
        //   PowerOk == true &&
        //   SignalOk == true &&
        //   KranOK == true &&
        //   ModeHP == true
        // ) {
        //   apXp.style.background = 'yellow'
        //   Gaphp = true
        // }
        break
      case '14':
        this.tumImg6.style.transform = 'rotate(0deg)'
        // if (PowerOk == true) {
        //   ModeAU = true
        //   ModeHP = false
        // }
        break
      case '15':
        this.tumImg6.style.transform = 'rotate(45deg)'
        // if (PowerOk == true) {
        //   ModeHP = false
        //   ModeAU = false
        //   apXp.style.background = null
        //   Gaphp = false
        // }
        // if (
        //   +mbs.innerHTML > 15 &&
        //   +mbu.innerHTML > 15 &&
        //   PowerOk == true &&
        //   SignalOk == true &&
        //   KranOK == true &&
        //   ModeHP == true
        // ) {
        //   apXp.style.background = 'yellow'
        //   Gaphp = true
        // }
        // if (PowerOk == true) {
        //   ModeHP = false
        //   ModeAU = false
        // }
        break
      case '16':
        this.tumImg7.style.transform = 'rotate(45deg)'
        setTimeout(() => (this.tumImg7.style.transform = 'rotate(0deg)'), 400)
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
      this.modeWrap.style.background = 'rgb(215, 245, 17)'
      this.TCwrapR.style.background = 'red'
      this.ZwrapR.style.background = 'red'

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
        getName.classList.add('color-green')
      }

      this.SignalR = true
    }
  }

  diotsOFF() {
    if (PowerOk == true && this.SignalR == true) {
      this.modeWrap.style.background = null
      this.TCwrapR.style.background = null
      this.ZwrapR.style.background = null

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
        getName.classList.remove('color-green')
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
    }
  }
}
