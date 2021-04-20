import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { readyAPHP } from './Mode'
import { removeTAN, T } from './PowerUP'

let tmbs = '',
  tmbu = '',
  tVibTK = '',
  tVibCT = '',
  vVib1T = '',
  vVib2T = '',
  vVib3T = '',
  vVib4T = '',
  vVib5T = '',
  vVib6T = ''

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
    interval = 11000 / (count - count2)
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

export function getVib1T(i, y) {
  vVib1T = setInterval(() => {
    let x = +elements.Vib1T.value
    elements.Vib1T.value = (x + 0.5).toFixed(1)
    if (+elements.Vib1T.value >= i) {
      clearInterval(vVib1T)
    }
  }, y)
}

export function getVib2T(i, y) {
  vVib2T = setInterval(() => {
    let x = +elements.Vib2T.value
    elements.Vib2T.value = (x + 0.5).toFixed(1)
    if (+elements.Vib2T.value >= i) {
      clearInterval(vVib2T)
    }
  }, y)
}

export function getVib3T(i, y) {
  vVib3T = setInterval(() => {
    let x = +elements.Vib3T.value
    elements.Vib3T.value = (x + 0.5).toFixed(1)
    if (+elements.Vib3T.value >= i) {
      clearInterval(vVib3T)
    }
  }, y)
}

export function getVib4T(i, y) {
  vVib4T = setInterval(() => {
    let x = +elements.Vib4T.value

    elements.Vib4T.value = (x + 0.5).toFixed(1)
    if (+elements.Vib4T.value >= i) {
      clearInterval(vVib4T)
    }
  }, y)
}

export function getVib5T(i, y) {
  vVib5T = setInterval(() => {
    let x = +elements.Vib4T.value
    elements.Vib5T.value = (x + 0.6).toFixed(1)
    if (+elements.Vib5T.value >= i) {
      clearInterval(vVib5T)
    }
  }, y)
}

export function getVib6T(i, y) {
  vVib6T = setInterval(() => {
    let x = +elements.Vib4T.value
    elements.Vib6T.value = (x + 0.5).toFixed(1)
    if (+elements.Vib6T.value >= i) {
      clearInterval(vVib6T)
    }
    getVibSred()
  }, y)
}

export function getVibSred() {
  elements.VibSred.value = ((+elements.Vib1T.value + +elements.Vib2T.value + +elements.Vib3T.value + +elements.Vib4T.value + +elements.Vib5T.value + +elements.Vib6T.value) / 6).toFixed(0)
}

export function hotT1() {
  let start = +elements.UP.innerHTML.replace(/[,]/g, '.')
  let start2 = +elements.VHOD.innerHTML.replace(/[,]/g, '.')
  let count = 0
  let count2 = 0
  let interval = 0
  let interval2 = 0

  if (T <= -1) {
    count = 16
    interval = 1660 / (count - start)
  } else if (T <= 11) {
    count = 18
    interval = 1660 / (count - start)
  } else if (T <= 13) {
    count = +elements.UP.innerHTML.replace(/[,]/g, '.') * 1.6
    interval = 1660 / (count - start)
  } else if (T <= 15) {
    count = +elements.UP.innerHTML.replace(/[,]/g, '.') * 1.5
    interval = 1660 / (count - start)
  } else if (T >= 16) {
    count = 30
    interval = 1660 / (count - start)
  }

  if (T <= -10) {
    count2 = 6
    interval2 = 1660 / (count2 - start2)
  } else if (T <= -1) {
    count2 = 7
    interval2 = 1660 / (count2 - start2)
  } else if (T <= 6) {
    count2 = 7.5
    interval2 = 1660 / (count2 - start2)
  } else if (T > 6) {
    count2 = count2 + 2.3
    interval2 = 1660 / (count2 - start2)
  }

  let t1 = (tPlusTemp = setInterval(() => {
    elements.UP.innerHTML = (+elements.UP.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = (+elements.OP1.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')
    elements.OP2.innerHTML = (+elements.OP2.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')

    if (+elements.UP.innerHTML.replace(/[,]/g, '.') >= count) {
      clearInterval(t1)
    }
  }, interval))

  let t2 = setInterval(() => {
    elements.VHOD.innerHTML = (+elements.VHOD.innerHTML.replace(/[,]/g, '.') + 0.1).toFixed(1).replace(/[.]/g, ',')
    elements.VIHOD.innerHTML = (+elements.VIHOD.innerHTML.replace(/[,]/g, '.') + 0.165).toFixed(1).replace(/[.]/g, ',')
    elements.HLSM.innerHTML = (+elements.HLSM.innerHTML.replace(/[,]/g, '.') + 0.1).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = (+elements.HLOP.innerHTML.replace(/[,]/g, '.') + 0.1).toFixed(1).replace(/[.]/g, ',')

    if (count <= +elements.VHOD.innerHTML.replace(/[,]/g, '.')) {
      clearInterval(t2)
    }
  }, interval2)
}
