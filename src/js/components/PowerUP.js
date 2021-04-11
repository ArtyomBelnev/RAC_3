import PowerST from './PowerST'

import { elements } from './Elements'
import { getStatus } from './Journal'
import { startMBS, startMBU, stopMBS, stopMBU } from './Display'

export let PowerOk = false

export default class PowerUP {
  constructor() {
    this.power_1On = false
    this.power_1Off = true
    this.power_2On = false
    this.power_2Off = true
    this.power_3On = false
    this.power_3Off = true
    this.power_4On = false
    this.power_4Off = true
    this.power_5On = false
    this.power_5Off = true
    this.power_6On = false
    this.power_6Off = true
    this.power_7On = false
    this.power_7Off = true
    this.power_8On = false
    this.power_8Off = true
    this.power_1o2o = false
    this.power_2o1o = false

    this.TanOK = false
    this.clickNumber = 1

    this.powerST = new PowerST()
  }

  getPowers(e) {
    switch (e.target.id) {
      case 'switch_1':
        if (elements.switch1.checked == true) {
          this.power_1On = true
          this.power_1Off = false
        } else {
          this.power_1Off = true
          this.power_1On = false
        }
        break

      case 'switch_2':
        if (elements.switch2.checked == true) {
          this.power_2On = true
          this.power_2Off = false
        } else {
          this.power_2Off = true
          this.power_2On = false
        }
        break

      case 'switch_3':
        if (elements.switch3.checked == true) {
          this.power_3On = true
          this.power_3Off = false
        } else {
          this.power_3Off = true
          this.power_3On = false
        }
        break

      case 'switch_4':
        if (elements.switch4.checked == true) {
          this.power_4On = true
          this.power_4Off = false
        } else {
          this.power_4Off = true
          this.power_4On = false
        }
        break

      case 'switch_5':
        if (elements.switch5.checked == true) {
          this.power_5On = true
          this.power_5Off = false
        } else {
          this.power_5Off = true
          this.power_5On = false
        }
        break

      case 'switch_6':
        if (elements.switch6.checked == true) {
          this.power_6On = true
          this.power_6Off = false
        } else {
          this.power_6Off = true
          this.power_6On = false
        }
        break

      case 'switch_7':
        if (elements.switch7.checked == true) {
          this.power_7On = true
        } else {
          this.power_7Off = true
          this.power_7On = false
        }
        break

      case 'switch_8':
        if (elements.switch8.checked == true) {
          this.power_8On = true
          this.power_8Off = false
        } else {
          this.power_8Off = true
          this.power_8On = false
        }
        break
    }

    this.isPowers()
  }

  isPowers() {
    if (this.power_3On == true && this.power_4On == true && this.power_5On == true && this.power_6On == true && this.power_7On == true && this.power_8On == true && PowerOk == false) {
      getStatus('Питание включено')
      PowerOk = true
      this.powerST.getON()
    }

    if ((this.power_3On == false || this.power_4On == false || this.power_5On == false || this.power_6On == false || this.power_7On == false || this.power_8On == false) && PowerOk == true) {
      getStatus('Питание отключено')
      PowerOk = false
      this.powerST.getOFF()
    }

    if (this.power_1On == true && this.power_2On == true && this.TanOK == false && PowerOk == true) {
      getStatus(`Тэны включены`)
      this.TanOK = true
    }

    if (this.power_1Off == true && this.power_2Off == true && this.TanOK == true && PowerOk == true) {
      getStatus(`Тэны отключены`)
      this.TanOK = false
    }

    if (this.power_1On == true && this.power_1o2o == false && PowerOk == true) {
      this.power_1o2o = true
      startMBS()
    }

    if (this.power_2On == true && this.power_2o1o == false && PowerOk == true) {
      this.power_2o1o = true
      startMBU()
    }

    if (this.power_1Off == true && this.power_1o2o == true && PowerOk == true) {
      this.power_1o2o = false
      stopMBS()
    }

    if (this.power_2Off == true && this.power_2o1o == true && PowerOk == true) {
      this.power_2o1o = false
      stopMBU()
    }
  }
}
