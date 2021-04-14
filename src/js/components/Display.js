import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { readyAPHP } from './Mode'
// import { removeTAN } from './PowerUP'

let tmbs = '',
  tmbu = '',
  tVibTK = '',
  tVibCT = '',
  mTMax = false

export let tmMBS = false
export let tmMBU = false
export let runMBS = false
export let runMBU = false

export function startMBS() {
  mTMax = false
  runMBS = true
  tmbs = setInterval(() => {
    let x = +elements.mbs.innerHTML.replace(/[,]/g, '.')
    let y = +elements.mbu.innerHTML.replace(/[,]/g, '.')
    // x += Math.random(0.15)
    x += 0.12

    if (x >= 15 && y >= 15 && tmMBS == false) {
      tmMBS = true
      setTimeout(() => {
        readyAPHP()
      }, 200)
    }

    if (x >= 70 && y >= 70 && mTMax == false) {
      getStatus('Темпер. превышена в масла баках', 'yellow')
      mTMax = true
      // clearTimeout(tmbs)
      // clearTimeout(tmbu)
      // removeTAN()
      // runMBS = false
    }

    elements.mbs.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
  }, 100)
}

export function startMBU() {
  mTMax = false
  runMBU = true
  tmbu = setInterval(() => {
    let x = +elements.mbs.innerHTML.replace(/[,]/g, '.')
    let y = +elements.mbu.innerHTML.replace(/[,]/g, '.')
    // y += Math.random(0.15)
    y += 0.12

    if (x >= 15 && y >= 15 && tmMBU == false) {
      tmMBU = true
      setTimeout(() => {
        readyAPHP()
      }, 200)
    }

    if (x >= 30 && y >= 30 && mTMax == false) {
      getStatus('Темпер. превышена в масла баках', 'yellow')
      mTMax = true
      // clearTimeout(tmbs)
      // clearTimeout(tmbu)
      // removeTAN()
    }
    elements.mbu.innerHTML = y.toFixed(1).replace(/[.]/g, ',')
  }, 100)
}

export function stopMBS() {
  clearTimeout(tmbs)
  runMBS = false
}

export function stopMBU() {
  clearTimeout(tmbu)
  runMBU = false
}

// export function checkHOLOPROK() {
//   clearTimeout(tmbs)
//   clearTimeout(tmbu)
//   removeTAN()
//   runMBS = false
//   runMBU = false
// }

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
