import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { startMBS, startMBU, stopMBS, stopMBU } from './Display'
import { getON, getOFF } from './PowerST'
import { getCranes } from './Memo'
import { mMBSMBU } from './HoloProk'

export let PowerOk = false
export let T = ''

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
      if (elements.switch1.checked == true) {
        power_1On = true
        power_1Off = false
      } else {
        power_1Off = true
        power_1On = false
      }
      break

    case 'switch_2':
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
  }

  if ((power_3On == false || power_4On == false || power_5On == false || power_6On == false || power_7On == false || power_8On == false) && PowerOk == true) {
    getStatus('Питание отключено')
    PowerOk = false
    removeCliked()
    getOFF()
  }

  if (power_1On == true && power_2On == true && TanOK == false && PowerOk == true) {
    getStatus(`Тэны включены`)
    TanOK = true
  }

  if (power_1Off == true && power_2Off == true && TanOK == true && PowerOk == true) {
    getStatus(`Тэны отключены`)
    TanOK = false
  }

  if (power_1On == true && power_1o2o == false && PowerOk == true) {
    power_1o2o = true
    if (mMBSMBU == false) {
      startMBS()
    }
  }

  if (power_2On == true && power_2o1o == false && PowerOk == true) {
    power_2o1o = true
    if (mMBSMBU == false) {
      startMBU()
    }
  }

  if (power_1Off == true && power_1o2o == true && PowerOk == true) {
    power_1o2o = false
    stopMBS()
  }

  if (power_2Off == true && power_2o1o == true && PowerOk == true) {
    power_2o1o = false
    stopMBU()
  }
}

export function removeCliked() {
  elements.mem.removeEventListener('click', cliked)
}

// export function removeTAN() {
//   elements.switch1.checked = false
//   elements.switch2.checked = false
//   power_1On = false
//   power_1Off = true
//   power_2On = false
//   power_2Off = true
//   power_1o2o = false
//   power_2o1o = false
//   getStatus(`Тэны отключены`)
//   TanOK = false
// }

function getRandomTemp() {
  let rand = -20 + Math.random() * (25 + 1 - -20)
  T = Math.floor(rand)

  elements.disRandomTemp.innerHTML = T
  elements.info.style.display = 'block'
  elements.info.title = 'Таблица допустимых температур'
  elements.disRandomWT.style.background = 'rgb(37, 100, 16)'
  getTemp(T)
}

function getTemp(t) {
  if (t > 10) {
    elements.UP.innerHTML = (t - 3.3).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = t - 3
    elements.OP2.innerHTML = t - 3
    elements.VHOD.innerHTML = t - 3
    elements.VIHOD.innerHTML = (t - 3.2).toFixed(1).replace(/[.]/g, ',')
    elements.mbs.innerHTML = '5,8'
    elements.mbu.innerHTML = 6
    elements.HLSM.innerHTML = (t - 3.7).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = (t - 3.2).toFixed(1).replace(/[.]/g, ',')

    elements.Vib1T.value = (t - 3.3).toFixed(1)
    elements.Vib2T.value = t - 3
    elements.Vib3T.value = (t - 3.1).toFixed(1)
    elements.Vib4T.value = t - 3
    elements.Vib5T.value = t - 3
    elements.Vib6T.value = t - 3
    elements.VibSred.value = (t - 3.1).toFixed(1)
  } else if (5 < t && t <= 10) {
    elements.UP.innerHTML = (t - 2.3).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = t - 2
    elements.OP2.innerHTML = t - 2
    elements.VHOD.innerHTML = t - 2
    elements.VIHOD.innerHTML = (t - 2.2).toFixed(1).replace(/[.]/g, ',')
    elements.mbs.innerHTML = 3
    elements.mbu.innerHTML = '2,8'
    elements.HLSM.innerHTML = (t - 2.7).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = t - 2

    elements.Vib1T.value = (t - 2.3).toFixed(1)
    elements.Vib2T.value = t - 2
    elements.Vib3T.value = (t - 2.1).toFixed(1)
    elements.Vib4T.value = t - 2
    elements.Vib5T.value = t - 2
    elements.Vib6T.value = t - 2
    elements.VibSred.value = (t - 2.1).toFixed(1)
  } else if (0 <= t && t <= 5) {
    elements.UP.innerHTML = (t - 1.3).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = t - 1
    elements.OP2.innerHTML = t - 1
    elements.VHOD.innerHTML = t - 1
    elements.VIHOD.innerHTML = (t - 1.2).toFixed(1).replace(/[.]/g, ',')
    elements.mbs.innerHTML = '2.5'
    elements.mbu.innerHTML = '2,1'
    elements.HLSM.innerHTML = (t - 1.7).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = t - 1

    elements.Vib1T.value = (t - 1.3).toFixed(1)
    elements.Vib2T.value = t - 1
    elements.Vib3T.value = (t - 1.1).toFixed(1)
    elements.Vib4T.value = t - 1
    elements.Vib5T.value = t - 1
    elements.Vib6T.value = t - 1
    elements.VibSred.value = (t - 1.1).toFixed(1)
  } else if (-5 <= t && t < 0) {
    elements.UP.innerHTML = (t + 3.3).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = t + 3
    elements.OP2.innerHTML = t + 3
    elements.VHOD.innerHTML = t + 3
    elements.VIHOD.innerHTML = t + 3
    elements.mbs.innerHTML = 2
    elements.mbu.innerHTML = 2
    elements.HLSM.innerHTML = (t + 3.7).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = (t + 3).toFixed(0).replace(/[.]/g, ',')

    elements.Vib1T.value = (t + 3.3).toFixed(1)
    elements.Vib2T.value = t + 3
    elements.Vib3T.value = (t + 3.1).toFixed(1)
    elements.Vib4T.value = t + 3
    elements.Vib5T.value = t + 3
    elements.Vib6T.value = t + 3
    elements.VibSred.value = (t + 3.1).toFixed(1)
  } else if (-10 <= t && t <= -5) {
    elements.UP.innerHTML = (t + 4.3).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = t + 4
    elements.OP2.innerHTML = t + 4
    elements.VHOD.innerHTML = t + 4
    elements.VIHOD.innerHTML = t + 4
    elements.mbs.innerHTML = '1,8'
    elements.mbu.innerHTML = '1,7'
    elements.HLSM.innerHTML = (t + 4.7).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = (t + 4).toFixed(0).replace(/[.]/g, ',')

    elements.Vib1T.value = (t + 4.3).toFixed(1)
    elements.Vib2T.value = t + 4
    elements.Vib3T.value = (t + 4.1).toFixed(1)
    elements.Vib4T.value = t + 4
    elements.Vib5T.value = t + 4
    elements.Vib6T.value = t + 4
    elements.VibSred.value = (t + 4.1).toFixed(1)
  } else if (t < -10) {
    elements.UP.innerHTML = (t + 3.3).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = t + 3
    elements.OP2.innerHTML = t + 3
    elements.VHOD.innerHTML = t + 3
    elements.VIHOD.innerHTML = t + 3
    elements.mbs.innerHTML = '0,2'
    elements.mbu.innerHTML = '0,3'
    elements.HLSM.innerHTML = (t + 3.7).toFixed(0).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = t + 3

    elements.Vib1T.value = (t + 3.3).toFixed(1)
    elements.Vib2T.value = t + 3
    elements.Vib3T.value = (t + 3.1).toFixed(1)
    elements.Vib4T.value = t + 3
    elements.Vib5T.value = t + 3
    elements.Vib6T.value = t + 3
    elements.VibSred.value = (t + 3.1).toFixed(1)
  }
}
