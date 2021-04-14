import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { getPMC, stopPMC, delPMC } from './Canals'
import { T } from './PowerUP'

let PNSon = false,
  PNUon = false,
  PMCok = false,
  tPlusTemp = '',
  PNSonPNUon = false

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
        if (+elements.mbs.innerHTML.replace(/[,]/g, '.') <= 15) {
          return getStatus('Низкая темпер. в масла баках', 'yellow')
        }
        elements.vpns.classList.add('btn__style-green')
        getStatus('ПНС включено')
        PNSon = true
      }
      break
    case 'PNU':
      if (!elements.vpnu.classList.contains('btn__style-green')) {
        if (+elements.mbs.innerHTML.replace(/[,]/g, '.') <= 15) {
          return getStatus('Низкая темпер. в масла баках', 'yellow')
        }
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

  if (PNSon == true && PNUon == true && PNSonPNUon == false) {
    if (0 <= T && T <= 10) plusTemp(0.1, 2)
    else if (T > 10) plusTemp(0.1, 1)
    else if (-10 <= T && T <= 0) plusTemp(0.2, 4)
    else if (-10 > T) plusTemp(0.2, 6)
    PNSonPNUon = true
  }
}

function plusTemp(i, w) {
  if (T > +elements.mbs.innerHTML.replace(/[,]/g, '.')) {
    clearInterval(tPlusTemp)
  }
  let count = i
  tPlusTemp = setInterval(() => {
    elements.UP.innerHTML = (+elements.UP.innerHTML.replace(/[,]/g, '.') + i).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = (+elements.OP1.innerHTML.replace(/[,]/g, '.') + i).toFixed(1).replace(/[.]/g, ',')
    elements.OP2.innerHTML = (+elements.OP2.innerHTML.replace(/[,]/g, '.') + i).toFixed(1).replace(/[.]/g, ',')
    elements.VHOD.innerHTML = (+elements.VHOD.innerHTML.replace(/[,]/g, '.') + i).toFixed(1).replace(/[.]/g, ',')
    elements.VIHOD.innerHTML = (+elements.VIHOD.innerHTML.replace(/[,]/g, '.') + i).toFixed(1).replace(/[.]/g, ',')
    elements.HLSM.innerHTML = (+elements.HLSM.innerHTML.replace(/[,]/g, '.') + i).toFixed(1).replace(/[.]/g, ',')
    elements.HLOP.innerHTML = (+elements.HLOP.innerHTML.replace(/[,]/g, '.') + i).toFixed(1).replace(/[.]/g, ',')

    elements.Vib1T.value = (+elements.Vib1T.value + i).toFixed(1)
    elements.Vib2T.value = (+elements.Vib2T.value + i).toFixed(1)
    elements.Vib3T.value = (+elements.Vib3T.value + i).toFixed(1)
    elements.Vib4T.value = (+elements.Vib4T.value + i).toFixed(1)
    elements.Vib5T.value = (+elements.Vib5T.value + i).toFixed(1)
    elements.Vib6T.value = (+elements.Vib6T.value + i).toFixed(1)
    elements.VibSred.value = (+elements.VibSred.value + i).toFixed(1)
    count += i
    if (count >= w) {
      clearInterval(tPlusTemp)
    }
  }, 9000)
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
