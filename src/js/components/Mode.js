import { elements } from '../elements/Elements'

import { PowerOk } from './PowerUP'
import { KranOK } from './Memo'
import { SignalOk } from './Diots'
import { getStatus } from './Journal'
import { ModeHP } from './Tumblers'
import { startVibTK, startVibCT, tMBSMBU, getVib1T, getVib2T, getVib3T, getVib4T, getVib5T, getVib6T, stopHOT2 } from './Display'

export let gAPHP = false
export let JOBRING = false
export let LOADTRASS = false
export let OHLAJDEN = false

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
  stopHOT2()
  getVib1T(369, 170)
  getVib2T(370, 170)
  getVib3T(369.1, 170)
  getVib4T(369.5, 170)
  getVib5T(370.1, 170)
  getVib6T(369.6, 170)
  startVibTK(7.2, 400)
  startVibCT(7.3, 400)
  getStatus('Работа КНПС', false, false, 0, 10, true)
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
  stopHOT2()
  getVib1T(449, 300)
  getVib2T(450, 300)
  getVib3T(449.1, 300)
  getVib4T(449.5, 300)
  getVib5T(450.1, 300)
  getVib6T(449.6, 300)
  startVibTK(9, 300)
  startVibCT(9.1, 300)
}

export function readyNormStop() {
  elements.jobs.style.background = null
  elements.normstop.style.background = 'yellow'
  stopHOT2()
}

export function readyOHLAJDEN() {
  elements.ohlajde.style.background = 'yellow'
  OHLAJDEN = true
}
