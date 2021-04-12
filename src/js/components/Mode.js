import { elements } from '../elements/Elements'

import { PowerOk } from './PowerUP'
import { KranOK } from './Memo'
import { SignalOk } from './Diots'
import { ModeHP } from './Tumblers'

export let gAPHP = false

export function readyAPHP() {
  if (+elements.mbs.innerHTML.replace(/[,]/g, '.') >= 15 && +elements.mbu.innerHTML.replace(/[,]/g, '.') >= 15 && PowerOk == true && SignalOk == true && KranOK == true && ModeHP == true && gAPHP == false) {
    elements.apXp.style.background = 'yellow'
    gAPHP = true
  }
}

export function readyHOLOPROK() {
  elements.apXp.style.background = null
  elements.holPro.style.background = 'yellow'
}

export function readyAPHPholoPROK() {
  elements.holPro.style.background = null
  elements.apXp.style.background = 'yellow'
}
