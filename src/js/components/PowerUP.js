import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { startMBSMBU, stopMBSMBU, mbsOK, mTMax } from './Display'
import { getON, getOFF } from './PowerST'
import { getCranes } from './Memo'
import { checkTumb } from './Tumblers'

export let PowerOk = false
export let T = ''
export let minT = 0

let oilOK = false

let power_1On = false,
  power_1Off = true,
  power_2On = false,
  power_2Off = true,
  power_3On = false,
  power_3Off = true,
  power_4On = false,
  power_4Off = true,
  power_5On = false,
  power_5Off = true,
  power_6On = false,
  power_6Off = true,
  power_7On = false,
  power_7Off = true,
  power_8On = false,
  power_8Off = true,
  power_1o2o = false,
  power_2o1o = false,
  TanOK = false

let cliked = getCranes.bind(getCranes)

export function getPowers(e) {
  switch (e.target.id) {
    case 'switch_1':
      if (oilOK == true) {
        return (elements.switch1.checked = false)
      }
      if (minT >= +elements.mbs.innerHTML.replace(/[,]/g, '.') && power_1On == true) {
        elements.switch1.checked = true
        return getStatus(`Темпер. в масла баках < ${minT}`, 'yellow')
      }
      if (elements.switch1.checked == true) {
        power_1On = true
        power_1Off = false
      } else {
        power_1Off = true
        power_1On = false
      }
      break

    case 'switch_2':
      if (oilOK == true) {
        return (elements.switch2.checked = false)
      }
      if (minT >= +elements.mbs.innerHTML.replace(/[,]/g, '.') && power_2On == true) {
        elements.switch2.checked = true
        return getStatus(`Темпер. в масла баках < ${minT}`, 'yellow')
      }
      if (elements.switch2.checked == true) {
        power_2On = true
        power_2Off = false
      } else {
        power_2Off = true
        power_2On = false
      }
      break

    case 'switch_3':
      if (elements.switch3.checked == true) {
        power_3On = true
        power_3Off = false
      } else {
        power_3Off = true
        power_3On = false
      }
      break

    case 'switch_4':
      if (elements.switch4.checked == true) {
        power_4On = true
        power_4Off = false
      } else {
        power_4Off = true
        power_4On = false
      }
      break

    case 'switch_5':
      if (elements.switch5.checked == true) {
        power_5On = true
        power_5Off = false
      } else {
        power_5Off = true
        power_5On = false
      }
      break

    case 'switch_6':
      if (elements.switch6.checked == true) {
        power_6On = true
        power_6Off = false
      } else {
        power_6Off = true
        power_6On = false
      }
      break

    case 'switch_7':
      if (elements.switch7.checked == true) {
        power_7On = true
      } else {
        power_7Off = true
        power_7On = false
      }
      break

    case 'switch_8':
      if (elements.switch8.checked == true) {
        power_8On = true
        power_8Off = false
      } else {
        power_8Off = true
        power_8On = false
      }
      break
  }

  isPowers()
}

function isPowers() {
  if (power_3On == true && power_4On == true && power_5On == true && power_6On == true && power_7On == true && power_8On == true && PowerOk == false) {
    getStatus('Питание включено')
    PowerOk = true
    elements.mem.addEventListener('click', cliked)
    getON()
    getRandomTemp()
    checkTumb()
  }

  if ((power_3On == false || power_4On == false || power_5On == false || power_6On == false || power_7On == false || power_8On == false) && PowerOk == true) {
    getStatus('Питание отключено')
    PowerOk = false
    removeCliked()
    getOFF()
  }

  if (power_1On == true && power_2On == true && TanOK == false && PowerOk == true) {
    getStatus(`Тэны включены`)
    startMBSMBU()
    TanOK = true
  }

  if (power_1Off == true && power_2Off == true && TanOK == true && PowerOk == true) {
    getStatus(`Тэны отключены`)
    stopMBSMBU()
    TanOK = false

    if (minT < +elements.mbs.innerHTML.replace(/[,]/g, '.')) oilOK = true
  }

  // if (power_1On == true && power_1o2o == false && PowerOk == true) {
  //   power_1o2o = true
  //   if (mbsOK == false) {
  //     startMBS()
  //   }
  // }

  // if (power_2On == true && power_2o1o == false && PowerOk == true) {
  //   power_2o1o = true
  //   if (mbuOK == false) {
  //     startMBU()
  //   }
  // }

  // if (power_1Off == true && power_1o2o == true && PowerOk == true) {
  //   power_1o2o = false
  //   // stopMBS()
  // }

  // if (power_2Off == true && power_2o1o == true && PowerOk == true) {
  //   power_2o1o = false
  //   // stopMBU()
  // }
}

export function removeCliked() {
  elements.mem.removeEventListener('click', cliked)
}

export function removeTAN() {
  elements.switch1.checked = false
  elements.switch2.checked = false
  power_1On = false
  power_1Off = true
  power_2On = false
  power_2Off = true
  power_1o2o = false
  power_2o1o = false
  getStatus(`Тэны отключены`)
  TanOK = false
}

function getRandomTemp() {
  let rand = -20 + Math.random() * (25 + 1 - -20)
  T = Math.floor(rand)
  // T = 5
  minT = T <= 0 ? (minT = 50) : T > 0 && T < 15 ? (minT = 40) : (minT = 30)

  elements.disRandomTemp.innerHTML = T
  elements.info.style.display = 'block'
  elements.info.title = 'Таблица допустимых температур'
  elements.disRandomWT.style.background = 'rgb(37, 100, 16)'
  getTemp()
}

function getTemp() {
  let i = T > 0 ? (i = 1) : T == 0 || T == -1 ? (i = 0) : (i = 1)
  if (T >= 0) {
    elements.UP.innerHTML = (T - (i + 0.1)).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = T - i
    elements.OP2.innerHTML = T - i
    elements.VHOD.innerHTML = (T - (i + 0.2)).toFixed(1).replace(/[.]/g, ',')
    elements.VIHOD.innerHTML = (T - (i + 0.2)).toFixed(1).replace(/[.]/g, ',')
    elements.mbs.innerHTML = (T / 2).toFixed(0)
    elements.mbu.innerHTML = (T / 2).toFixed(0)
    elements.HLSM.innerHTML = (T - (i + 0.3)).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = (T - (i + 0.2)).toFixed(1).replace(/[.]/g, ',')

    elements.Vib1T.value = (T - (i + 0.3)).toFixed(1)
    elements.Vib2T.value = T - 1
    elements.Vib3T.value = (T - (i + 0.1)).toFixed(1)
    elements.Vib4T.value = T - 1
    elements.Vib5T.value = T - 1
    elements.Vib6T.value = T - 1
    elements.VibSred.value = (T - (i + 0.1)).toFixed(1)
  } else {
    elements.UP.innerHTML = (T + (+i + 0.1)).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = T + i
    elements.OP2.innerHTML = T + i
    elements.VHOD.innerHTML = (T + (i + 0.2)).toFixed(1).replace(/[.]/g, ',')
    elements.VIHOD.innerHTML = (T + (i + 0.2)).toFixed(1).replace(/[.]/g, ',')
    elements.mbs.innerHTML = (T / 2).toFixed(0)
    elements.mbu.innerHTML = (T / 2).toFixed(0)
    elements.HLSM.innerHTML = (T + (i + 0.3)).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = (T + (i + 0.2)).toFixed(1).replace(/[.]/g, ',')

    elements.Vib1T.value = (T + (i + 0.3)).toFixed(1)
    elements.Vib2T.value = T + 1
    elements.Vib3T.value = (T + (i + 0.1)).toFixed(1)
    elements.Vib4T.value = T + 1
    elements.Vib5T.value = T + 1
    elements.Vib6T.value = T + 1
    elements.VibSred.value = (T - (i + 0.1)).toFixed(1)
  }
}
