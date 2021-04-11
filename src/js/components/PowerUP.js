import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { startMBS, startMBU, stopMBS, stopMBU } from './Display'
import { getON, getOFF } from './PowerST'
import { getCranes } from './Memo'

export let PowerOk = false

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
    startMBS()
  }

  if (power_2On == true && power_2o1o == false && PowerOk == true) {
    power_2o1o = true
    startMBU()
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
