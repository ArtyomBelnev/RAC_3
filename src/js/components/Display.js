import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { readyAPHP } from './Mode'
import { removeTAN } from './PowerUP'

let tmbs = '',
  tmbu = '',
  tVibTK = '',
  tVibCT = ''

export let mTMax = false
export let mmTMax = false

export let tmMBS = false
export let tmMBU = false
export let mbsOK = false
export let mbuOK = false
export let runMBS = false
export let runMBU = false

export function startMBS() {
  runMBS = true
  mTMax = false
  tmbs = setInterval(() => {
    let x = +elements.mbs.innerHTML.replace(/[,]/g, '.')
    let y = +elements.mbu.innerHTML.replace(/[,]/g, '.')
    x += 0.1

    if (x >= 50 && tmMBS == false) {
      tmMBS = true
      setTimeout(() => {
        readyAPHP()
      }, 200)
    }

    if (x >= 70 && y >= 70 && mTMax == false && mmTMax == false) {
      getStatus('Темпер. в масла баках > 70 ℃', 'yellow')
      mTMax = true
      mmTMax = true
    }

    if ((x >= 81 && y >= 81) || x >= 80) {
      getStatus('Темпер. в масла баках > 80 ℃', 'red')
      checkMBS()
    }

    elements.mbs.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
  }, 100)
}

export function startMBU() {
  runMBU = true
  mmTMax = false
  tmbu = setInterval(() => {
    let x = +elements.mbs.innerHTML.replace(/[,]/g, '.')
    let y = +elements.mbu.innerHTML.replace(/[,]/g, '.')
    y += 0.1

    if (y >= 50 && tmMBU == false) {
      tmMBU = true
      setTimeout(() => {
        readyAPHP()
      }, 80)
    }

    if (x >= 70 && y >= 70 && mmTMax == false && mTMax == false) {
      getStatus('Темпер. в масла баках > 70 ℃', 'yellow')
      mTMax = true
      mmTMax = true
    }

    if ((x >= 80 && y >= 81) || y >= 81) {
      getStatus('Темпер. в масла баках > 80 ℃', 'red')
      checkMBU()
    }

    elements.mbu.innerHTML = y.toFixed(1).replace(/[.]/g, ',')
  }, 80)
}

export function stopMBS() {
  clearTimeout(tmbs)
  runMBS = false
  if (+elements.mbs.innerHTML.replace(/[,]/g, '.') >= 50) {
    mbsOK = true
  }
}

export function stopMBU() {
  clearTimeout(tmbu)

  runMBU = false
  if (+elements.mbu.innerHTML.replace(/[,]/g, '.') >= 50) {
    mbuOK = true
  }
}

function checkMBS() {
  clearTimeout(tmbs)
  clearTimeout(tmbu)
  removeTAN()
  runMBS = false
  runMBU = false
  mTMax = true
}

function checkMBU() {
  clearTimeout(tmbs)
  clearTimeout(tmbu)
  removeTAN()
  runMBS = false
  runMBU = false
  mmTMax = true
}

export function startVibTK() {
  tVibTK = setInterval(() => {
    let x = +elements.VibTK.value
    x += 0.1
    if (x >= 1.2) {
      clearTimeout(tVibTK)
    }
    elements.VibTK.value = x.toFixed(1)
  }, 1400)
}

export function stopVibTK() {
  tVibTK = setInterval(() => {
    let x = +elements.VibTK.value
    x -= 0.1
    elements.VibTK.value = x.toFixed(2)
    if (x <= 0) {
      clearTimeout(tVibTK)
      elements.VibTK.value = 0
    }
  }, 440)
}

export function startVibCT() {
  tVibCT = setInterval(() => {
    let x = +elements.VibCT.value
    x += 0.1
    if (x >= 1.2) {
      clearTimeout(tVibCT)
    }
    elements.VibCT.value = x.toFixed(1)
  }, 1400)
}

export function stopVibCT() {
  tVibCT = setInterval(() => {
    let x = +elements.VibCT.value
    x -= 0.1
    elements.VibCT.value = x.toFixed(2)
    if (x <= 0) {
      clearTimeout(tVibCT)
      elements.VibCT.value = 0
    }
  }, 440)
}
