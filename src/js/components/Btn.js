import Journal from './Journal'
import Canals from './Canals'

export default class Btn {
  constructor(vpns, vpnu, vmr01, vmr02, vmr03, vmr04, PmBC, PmTK, PgDG, PmCT, Pg13, PgN, PgpN, PMC, dPkonf, OSleft, OSright) {
    this.vpns = vpns
    this.vpnu = vpnu
    this.vmr01 = vmr01
    this.vmr02 = vmr02
    this.vmr03 = vmr03
    this.vmr04 = vmr04

    this.PNSon = false
    this.PNUon = false
    this.PMCok = false

    this.journal = new Journal()
    this.canals = new Canals(PmBC, PmTK, PgDG, PmCT, Pg13, PgN, PgpN, PMC, dPkonf, OSleft, OSright)
  }

  getBtn(e) {
    switch (e.target.id) {
      case 'VM01':
        if (!this.vmr01.classList.contains('btn__style-green')) {
          this.vmr01.classList.add('btn__style-green')
          this.journal.getStatus('ВМО1 включено')
        }
        break
      case 'VM02':
        if (!this.vmr02.classList.contains('btn__style-green')) {
          this.vmr02.classList.add('btn__style-green')
          this.journal.getStatus('ВМО2 включено')
        }
        break
      case 'VM03':
        if (!this.vmr03.classList.contains('btn__style-green')) {
          this.vmr03.classList.add('btn__style-green')
          this.journal.getStatus('ВМО3 включено')
        }
        break
      case 'VM04':
        if (!this.vmr04.classList.contains('btn__style-green')) {
          this.vmr04.classList.add('btn__style-green')
          this.journal.getStatus('ВМО4 включено')
        }
        break
      case 'PNS':
        if (!this.vpns.classList.contains('btn__style-green')) {
          this.vpns.classList.add('btn__style-green')
          this.journal.getStatus('ПНС включено')
          this.PNSon = true
        }
        break
      case 'PNU':
        if (!this.vpnu.classList.contains('btn__style-green')) {
          this.vpnu.classList.add('btn__style-green')
          this.journal.getStatus('ПНУ включено')
          this.PNUon = true
        }
        break
    }

    if (this.PNSon == true && this.PMCok == false) {
      this.PMCok = true

      this.canals.stopPMC()
      this.canals.getPMC()
    }
  }
  delBtn(e) {
    switch (e.target.id) {
      case 'VM01':
        if (this.vmr01.classList.contains('btn__style-green')) {
          this.vmr01.classList.remove('btn__style-green')
          this.journal.getStatus('ВМО1 отключено')
        }
        break
      case 'VM02':
        if (this.vmr02.classList.contains('btn__style-green')) {
          this.vmr02.classList.remove('btn__style-green')
          this.journal.getStatus('ВМО2 отключено')
        }
        break
      case 'VM03':
        if (this.vmr03.classList.contains('btn__style-green')) {
          this.vmr03.classList.remove('btn__style-green')
          this.journal.getStatus('ВМО3 отключено')
        }
        break
      case 'VM04':
        if (this.vmr04.classList.contains('btn__style-green')) {
          this.vmr04.classList.remove('btn__style-green')
          this.journal.getStatus('ВМО4 отключено')
        }
        break
      case 'PNS':
        if (this.vpns.classList.contains('btn__style-green') && this.PMCok == true) {
          this.vpns.classList.remove('btn__style-green')
          this.journal.getStatus('ПНС отключено')
          this.PNSon = false
        }
        break
      case 'PNU':
        if (this.vpnu.classList.contains('btn__style-green')) {
          this.vpnu.classList.remove('btn__style-green')
          this.journal.getStatus('ПНУ отключено')
          this.PNUon = false
        }
        break
    }

    if (this.PNSon == false && this.PMCok == true) {
      this.PMCok = false

      this.canals.stopPMC()
      this.canals.delPMC()
    }
  }
}
