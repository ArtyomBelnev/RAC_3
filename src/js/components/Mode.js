import { elements } from '../elements/Elements'

import { PowerOk } from './PowerUP'
import { KranOK } from './Memo'
import { SignalOk } from './Diots'
import { ModeHP } from './Tumblers'
import { tMBSMBU } from './Display'

export let gAPHP = false

export function readyAPHP() {
  if (tMBSMBU == true && PowerOk == true && SignalOk == true && KranOK == true && ModeHP == true && gAPHP == false) {
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

export function readyRUN() {
  elements.apXp.style.background = null
  elements.run.style.background = 'yellow'
  elements.pullContur.style.background = 'yellow'
}

export function readyRAZBC() {
  elements.razVS.style.background = 'yellow'
  elements.run.style.background = null
  elements.pullContur.style.background = null
}

export function readyZAJXX() {
  elements.razVS.style.background = null
  elements.znXX.style.background = 'yellow'
}
