import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { readyAPHP } from './Mode'

let tmbs = '',
  tmbu = '',
  tVibTK = '',
  tVibCT = '',
  mTMax = false,
  rtn = false,
  rtnn = false

export function startMBS(i) {
  tmbs = setInterval(() => {
    let x = +elements.mbs.innerHTML.replace(/[,]/g, '.')
    let y = +elements.mbu.innerHTML.replace(/[,]/g, '.')
    x += Math.random(0.1 - 0.39)

    if (x >= 15 && y >= 15 && rtn == false) {
      readyAPHP()
      rtn = true
    }

    if (x >= 30 && y >= 30 && mTMax == false) {
      getStatus('Темпер. в масла баках > 15℃', 'yellow')
      mTMax = true
    }

    elements.mbs.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
  }, 500)
}

export function startMBU() {
  tmbu = setInterval(() => {
    let x = +elements.mbs.innerHTML.replace(/[,]/g, '.')
    let y = +elements.mbu.innerHTML.replace(/[,]/g, '.')
    x += Math.random(0.1 - 0.39)

    if (x >= 15 && y >= 15 && rtnn == false) {
      readyAPHP()
      rtnn = true
    }

    if (x >= 30 && y >= 30 && mTMax == false) {
      getStatus('Темпер. в масла баках > 15℃', 'yellow')
      mTMax = true
    }
    elements.mbu.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
  }, 500)
}

export function stopMBS() {
  clearTimeout(tmbs)
}

export function stopMBU() {
  clearTimeout(tmbu)
}

export function startVibTK() {
  tVibTK = setInterval(() => {
    let x = +elements.VibTK.value
    x += 0.1
    if (x >= 1.2) {
      clearTimeout(tVibTK)
    }
    elements.VibTK.value = x.toFixed(1)
  }, 440)
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
  }, 420)
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
