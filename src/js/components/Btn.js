import { elements } from './Elements'
import { getStatus } from './Journal'
import { getPMC, stopPMC, delPMC } from './Canals'

let PNSon = false,
  PNUon = false,
  PMCok = false

export function getBtn(e) {
  switch (e.target.id) {
    case 'VM01':
      if (!elements.vmr01.classList.contains('btn__style-green')) {
        elements.vmr01.classList.add('btn__style-green')
        getStatus('ВМО1 включено')
      }
      break
    case 'VM02':
      if (!elements.vmr02.classList.contains('btn__style-green')) {
        elements.vmr02.classList.add('btn__style-green')
        getStatus('ВМО2 включено')
      }
      break
    case 'VM03':
      if (!elements.vmr03.classList.contains('btn__style-green')) {
        elements.vmr03.classList.add('btn__style-green')
        getStatus('ВМО3 включено')
      }
      break
    case 'VM04':
      if (!elements.vmr04.classList.contains('btn__style-green')) {
        elements.vmr04.classList.add('btn__style-green')
        getStatus('ВМО4 включено')
      }
      break
    case 'PNS':
      if (!elements.vpns.classList.contains('btn__style-green')) {
        elements.vpns.classList.add('btn__style-green')
        getStatus('ПНС включено')
        PNSon = true
      }
      break
    case 'PNU':
      if (!elements.vpnu.classList.contains('btn__style-green')) {
        elements.vpnu.classList.add('btn__style-green')
        getStatus('ПНУ включено')
        PNUon = true
      }
      break
  }

  if (PNSon == true && PMCok == false) {
    PMCok = true

    stopPMC()
    getPMC()
  }
}
export function delBtn(e) {
  switch (e.target.id) {
    case 'VM01':
      if (elements.vmr01.classList.contains('btn__style-green')) {
        elements.vmr01.classList.remove('btn__style-green')
        getStatus('ВМО1 отключено')
      }
      break
    case 'VM02':
      if (elements.vmr02.classList.contains('btn__style-green')) {
        elements.vmr02.classList.remove('btn__style-green')
        getStatus('ВМО2 отключено')
      }
      break
    case 'VM03':
      if (elements.vmr03.classList.contains('btn__style-green')) {
        elements.vmr03.classList.remove('btn__style-green')
        getStatus('ВМО3 отключено')
      }
      break
    case 'VM04':
      if (elements.vmr04.classList.contains('btn__style-green')) {
        elements.vmr04.classList.remove('btn__style-green')
        getStatus('ВМО4 отключено')
      }
      break
    case 'PNS':
      if (elements.vpns.classList.contains('btn__style-green') && PMCok == true) {
        elements.vpns.classList.remove('btn__style-green')
        getStatus('ПНС отключено')
        PNSon = false
      }
      break
    case 'PNU':
      if (elements.vpnu.classList.contains('btn__style-green')) {
        elements.vpnu.classList.remove('btn__style-green')
        getStatus('ПНУ отключено')
        PNUon = false
      }
      break
  }

  if (PNSon == false && PMCok == true) {
    PMCok = false

    stopPMC()
    delPMC()
  }
}
