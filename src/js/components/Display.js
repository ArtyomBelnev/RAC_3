import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { readyAPHP } from './Mode'
import { removeTAN, T } from './PowerUP'

let tmbs = '',
  tmbu = '',
  tVibTK = '',
  tVibCT = ''

export let mTMax = false

export let tMBSMBU = false
export let runOIL = false

export function startMBSMBU() {
  mTMax = false
  runOIL = true
  let x = +elements.mbs.innerHTML.replace(/[,]/g, '.')
  let y = +elements.mbu.innerHTML.replace(/[,]/g, '.')

  tmbs = setInterval(() => {
    x += 0.1
    y += 0.1

    if (x >= 15 && tMBSMBU == false) {
      tMBSMBU = true
      setTimeout(() => {
        readyAPHP()
      }, 200)
    }

    if (x >= 60 && mTMax == false) {
      getStatus('Темпер. в масла баках > 60 ℃', 'yellow')
      mTMax = true
    }

    if (x >= 81) {
      getStatus('Темпер. в масла баках > 80 ℃', 'red')
      clearTimeout(tmbs)
      removeTAN()
      runOIL = false
    }

    elements.mbs.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
    elements.mbu.innerHTML = y.toFixed(1).replace(/[.]/g, ',')
  }, 50)
}

export function stopMBSMBU() {
  clearTimeout(tmbs)
  runOIL = false
  // runMBS = false
  // if (+elements.mbs.innerHTML.replace(/[,]/g, '.') >= 50) {
  //   mbsOK = true
  // }
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

export function VVHH() {
  let count = +elements.UP.innerHTML.replace(/[,]/g, '.')
  let count2 = +elements.VHOD.innerHTML.replace(/[,]/g, '.') + 0.3
  let interval = 0

  if (T <= -10) {
    count = 4
    interval = 11000 / count
  } else if (T <= -1) {
    count = 4.5
    interval = 11000 / (count - count2)
  } else if (T <= 6) {
    count = 5
    interval = 11000 / (count - count2)
  } else if (T > 6) {
    count = count2 + 0.3
    interval = 11000 / (count - count2)
  }

  let t = setInterval(() => {
    elements.VHOD.innerHTML = (+elements.VHOD.innerHTML.replace(/[,]/g, '.') + 0.1).toFixed(1).replace(/[.]/g, ',')
    elements.VIHOD.innerHTML = (+elements.VIHOD.innerHTML.replace(/[,]/g, '.') + 0.1).toFixed(1).replace(/[.]/g, ',')
    elements.HLSM.innerHTML = (+elements.HLSM.innerHTML.replace(/[,]/g, '.') + 0.1).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = (+elements.HLOP.innerHTML.replace(/[,]/g, '.') + 0.1).toFixed(1).replace(/[.]/g, ',')

    if (count <= +elements.VHOD.innerHTML.replace(/[,]/g, '.')) {
      clearInterval(t)
    }
  }, interval)
}
