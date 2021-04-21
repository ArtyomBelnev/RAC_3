import { elements } from '../elements/Elements'
import { PowerOk } from './PowerUP'
import { gAPHP } from './Mode'
import { arrowUP, arrowDN, arrowTK } from './Arrow'
import { getStatus } from './Journal'
import { diotsON, diotsOFF, diotsOK } from './Diots'
import { getHOLPRO } from './HoloProk'
import { getHOTPRO, G14, Fire } from './HotProk'
import { getBtn, delBtn, PNSonPNUon, PNSon, PNUon } from './Btn'
import { readyAPHP, readyOUTRING, JOBRING, readyLOADTRASS } from './Mode'

export let loadDIST = false
export let ModeHP = false
export let ModeAU = false
export let holProk = false
export let hotProk = false
export let TK240 = false

let START = false
let STOP = false
let HOLO = false
let isJobRing = false

let clikedHOL = getHOLPRO.bind(getHOLPRO)
let clikedHOT = getHOTPRO.bind(getHOTPRO)

export function getTumblers(e) {
  switch (e.target.value) {
    case '0':
      elements.tumImg1.style.transform = 'rotate(-45deg)'
      START = true
      STOP = false
      break
    case '1':
      elements.tumImg1.style.transform = 'rotate(0deg)'
      START = false
      STOP = false
      break
    case '2':
      elements.tumImg1.style.transform = 'rotate(45deg)'
      STOP = true
      START = false
      break
    case '3':
      if (PowerOk == true) {
        elements.tumImg2.style.transform = 'rotate(-45deg)'
        setTimeout(() => (elements.tumImg2.style.transform = 'rotate(0deg)'), 400)
        if (arrowTK >= 228 && arrowTK <= 236 && Fire == true && G14 == true && PNSon == false && PNUon == false) arrowUP()
        else return getStatus('Ошибка', 'yellow')
        console.log(arrowTK)
      }
      break
    case '4':
      if (PowerOk == true) {
        elements.tumImg2.style.transform = 'rotate(45deg)'
        setTimeout(() => (elements.tumImg2.style.transform = 'rotate(0deg)'), 400)
        if (arrowTK > 228 && arrowTK < 240 && Fire == true && G14 == true && PNSon == true && PNUon == true) arrowDN()
        else return getStatus('Ошибка', 'yellow')
      }
      break
    case '5':
      elements.tumImg3.style.transform = 'rotate(-45deg)'
      diotsOFF()
      break
    case '6':
      elements.tumImg3.style.transform = 'rotate(0deg)'
      diotsOK()
      break
    case '7':
      elements.tumImg3.style.transform = 'rotate(45deg)'
      diotsON()
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
        readyAPHP()
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
      let w = +elements.PMC.innerHTML.replace(/[,]/g, '.')

      if (gAPHP == true && w >= 0.1 && PNSonPNUon == true && ModeHP == true && holProk == false && HOLO == false) {
        getStatus('Нажата испол. команда')
        holProk = true
        elements.mem.addEventListener('click', clikedHOL)
      } else if (loadDIST == true && ModeAU == true && hotProk == false && HOLO == true && gAPHP == true) {
        // && HOLO == true && gAPHP == true
        getStatus('Нажата испол. команда')
        hotProk = true
        elements.mem.addEventListener('click', clikedHOT)
      } else if (arrowTK == 240 && TK240 == false) {
        TK240 = true
        getStatus('Нажата испол. команда')
        readyOUTRING()
      } else if (JOBRING == true && isJobRing == false) {
        isJobRing = true
        getStatus('Нажата испол. команда')
        readyLOADTRASS()
      } else {
        getStatus('Ошибка', 'yellow')
        break
      }
  }
  if (START == true && PowerOk == true) {
    getBtn(e)
  }
  if (STOP == true && PowerOk == true) {
    delBtn(e)
  }
}

export function delGotholProk() {
  holProk = false
  HOLO = true
  elements.mem.removeEventListener('click', clikedHOL)
}

export function checkTumb() {
  if (elements.tumImg1.style.transform === 'rotate(-45deg)') {
    START = true
    STOP = false
  }

  if (elements.tumImg3.style.transform === 'rotate(45deg)') {
    diotsON()
  }

  if (elements.tumImg5.style.transform === 'rotate(0deg)') {
    loadDIST = true
  }

  if (elements.tumImg6.style.transform === 'rotate(-45deg)') {
    ModeHP = true
  }

  if (elements.tumImg6.style.transform === 'rotate(0deg)') {
    ModeAU = true
  }
}

export function checkSTART() {
  START = false
  STOP = false
}
