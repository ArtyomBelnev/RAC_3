import { elements } from '../elements/Elements'

import { PowerOk } from './PowerUP'
import { KranOK } from './Memo'
import { SignalOk } from './Diots'
import { ModeHP } from './Tumblers'
import { tMBSMBU } from './Display'

export let gAPHP = false
export let JOBRING = false
export let LOADTRASS = false

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
  elements.pullContur.style.background = null
}

export function readyZAJXX() {
  elements.razVS.style.background = null
  elements.znXX.style.background = 'yellow'
}

export function readyFire() {
  elements.znXX.style.background = null
  elements.prog.style.background = 'yellow'
}

export function readyOUTRING() {
  elements.prog.style.background = null
  elements.ring.style.background = 'yellow'
}

export function readyJOBRING() {
  elements.ring.style.background = null
  elements.jobring.style.background = 'yellow'
  JOBRING = true
}

export function readyLOADTRASS() {
  elements.jobring.style.background = null
  elements.loadtrass.style.background = 'yellow'
  LOADTRASS = true
}

export function readyJOBS() {
  elements.loadtrass.style.background = null
  elements.run.style.background = null
  elements.jobs.style.background = 'yellow'
}
