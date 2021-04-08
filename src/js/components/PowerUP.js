import Journal from './Journal'
import PowerST from './PowerST'
import Display from './Display'

export let PowerOk = false

export default class PowerUP {
  constructor(sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, mbs, mbu, TCwrapR, ZwrapR, powers, disT3, disOFF1, disOFF2, displayALL, inNamALL) {
    this.sw1 = sw1
    this.sw2 = sw2
    this.sw3 = sw3
    this.sw4 = sw4
    this.sw5 = sw5
    this.sw6 = sw6
    this.sw7 = sw7
    this.sw8 = sw8
    this.mbs = mbs
    this.mbu = mbu

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

    this.journal = new Journal()
    this.powerST = new PowerST(TCwrapR, ZwrapR, powers, disT3, disOFF1, disOFF2, displayALL, inNamALL)
    this.display = new Display(mbs, mbu)
  }

  getPowers(e) {
    if (this.clickNumber == 1) {
      this.clickNumber++
      return
    } else {
      this.clickNumber--
    }

    switch (e.target.id) {
      case 'switch_1':
        if (this.sw1.checked == true) {
          this.power_1On = true
          this.power_1Off = false
        } else {
          this.power_1Off = true
          this.power_1On = false
        }
        break

      case 'switch_2':
        if (this.sw2.checked == true) {
          this.power_2On = true
          this.power_2Off = false
        } else {
          this.power_2Off = true
          this.power_2On = false
        }
        break

      case 'switch_3':
        if (this.sw3.checked == true) {
          this.power_3On = true
          this.power_3Off = false
        } else {
          this.power_3Off = true
          this.power_3On = false
        }
        break

      case 'switch_4':
        if (this.sw4.checked == true) {
          this.power_4On = true
          this.power_4Off = false
        } else {
          this.power_4Off = true
          this.power_4On = false
        }
        break

      case 'switch_5':
        if (this.sw5.checked == true) {
          this.power_5On = true
          this.power_5Off = false
        } else {
          this.power_5Off = true
          this.power_5On = false
        }
        break

      case 'switch_6':
        if (this.sw6.checked == true) {
          this.power_6On = true
          this.power_6Off = false
        } else {
          this.power_6Off = true
          this.power_6On = false
        }
        break

      case 'switch_7':
        if (this.sw7.checked == true) {
          this.power_7On = true
          this.power_7Off = false
        } else {
          this.power_7Off = true
          this.power_7On = false
        }
        break

      case 'switch_8':
        if (this.sw8.checked == true) {
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
      this.journal.getStatus('Питание включено')
      PowerOk = true
      this.powerST.getON()
    }

    if ((this.power_3On == false || this.power_4On == false || this.power_5On == false || this.power_6On == false || this.power_7On == false || this.power_8On == false) && PowerOk == true) {
      this.journal.getStatus('Питание отключено')
      PowerOk = false
      this.powerST.getOFF()
    }

    if (this.power_1On == true && this.power_2On == true && this.TanOK == false && PowerOk == true) {
      this.journal.getStatus(`Тэны включены`)
      this.TanOK = true
    }

    if (this.power_1Off == true && this.power_2Off == true && this.TanOK == true && PowerOk == true) {
      this.journal.getStatus(`Тэны отключены`)
      this.TanOK = false
      this.display.mTMax = false
    }

    if (this.power_1On == true && this.power_1o2o == false && PowerOk == true) {
      this.power_1o2o = true
      this.display.startMBS()
    }

    if (this.power_2On == true && this.power_2o1o == false && PowerOk == true) {
      this.power_2o1o = true
      this.display.startMBU()
    }

    if (this.power_1Off == true && this.power_1o2o == true && PowerOk == true) {
      this.power_1o2o = false
      this.display.stopMBS()
    }

    if (this.power_2Off == true && this.power_2o1o == true && PowerOk == true) {
      this.power_2o1o = false
      this.display.stopMBU()
    }
  }
}
