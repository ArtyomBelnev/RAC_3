import Journal from './Journal'
import Canals from './Canals'

import { elements } from './Elements'

export default class Btn {
  constructor() {
    this.PNSon = false
    this.PNUon = false
    this.PMCok = false

    this.journal = new Journal()
    this.canals = new Canals()
  }

  getBtn(e) {
    switch (e.target.id) {
      case 'VM01':
        if (!elements.vmr01.classList.contains('btn__style-green')) {
          elements.vmr01.classList.add('btn__style-green')
          this.journal.getStatus('ВМО1 включено')
        }
        break
      case 'VM02':
        if (!elements.vmr02.classList.contains('btn__style-green')) {
          elements.vmr02.classList.add('btn__style-green')
          this.journal.getStatus('ВМО2 включено')
        }
        break
      case 'VM03':
        if (!elements.vmr03.classList.contains('btn__style-green')) {
          elements.vmr03.classList.add('btn__style-green')
          this.journal.getStatus('ВМО3 включено')
        }
        break
      case 'VM04':
        if (!elements.vmr04.classList.contains('btn__style-green')) {
          elements.vmr04.classList.add('btn__style-green')
          this.journal.getStatus('ВМО4 включено')
        }
        break
      case 'PNS':
        if (!elements.vpns.classList.contains('btn__style-green')) {
          elements.vpns.classList.add('btn__style-green')
          this.journal.getStatus('ПНС включено')
          this.PNSon = true
        }
        break
      case 'PNU':
        if (!elements.vpnu.classList.contains('btn__style-green')) {
          elements.vpnu.classList.add('btn__style-green')
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
        if (elements.vmr01.classList.contains('btn__style-green')) {
          elements.vmr01.classList.remove('btn__style-green')
          this.journal.getStatus('ВМО1 отключено')
        }
        break
      case 'VM02':
        if (elements.vmr02.classList.contains('btn__style-green')) {
          elements.vmr02.classList.remove('btn__style-green')
          this.journal.getStatus('ВМО2 отключено')
        }
        break
      case 'VM03':
        if (elements.vmr03.classList.contains('btn__style-green')) {
          elements.vmr03.classList.remove('btn__style-green')
          this.journal.getStatus('ВМО3 отключено')
        }
        break
      case 'VM04':
        if (elements.vmr04.classList.contains('btn__style-green')) {
          elements.vmr04.classList.remove('btn__style-green')
          this.journal.getStatus('ВМО4 отключено')
        }
        break
      case 'PNS':
        if (elements.vpns.classList.contains('btn__style-green') && this.PMCok == true) {
          elements.vpns.classList.remove('btn__style-green')
          this.journal.getStatus('ПНС отключено')
          this.PNSon = false
        }
        break
      case 'PNU':
        if (elements.vpnu.classList.contains('btn__style-green')) {
          elements.vpnu.classList.remove('btn__style-green')
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
