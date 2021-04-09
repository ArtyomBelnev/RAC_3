import { elements } from './Elements'

import { PowerOk } from './PowerUP'
import { KranOK } from './Memo'
import { SignalOk } from './Tumblers'
import { ModeHP } from './Tumblers'

export let gAPHP = false

export default class Mode {
  constructor() {}

  readyAPHP() {
    if (+elements.mbs.innerHTML > 15 && +elements.mbu.innerHTML > 15 && PowerOk == true && SignalOk == true && KranOK == true && ModeHP == true && gAPHP == false) {
      elements.apXp.style.background = 'yellow'
      gAPHP = true
    }
  }

  readyHOLOPROK() {
    elements.apXp.style.background = null
    elements.holPro.style.background = 'yellow'
  }

  readyAPHPholoPROK() {
    elements.holPro.style.background = null
    elements.apXp.style.background = 'yellow'
  }
}
