import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { getPMC, stopPMC, delPMC } from './Canals'
import { T } from './PowerUP'
import { readyAPHP } from './Mode'
import { runMBS, runMBU, tmMBS } from './Display'

export let PNSonPNUon = false

let PNSon = false,
  PNUon = false,
  PMCok = false,
  tPlusTemp = '',
  tMinusOil = ''

let finish = 0

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
        if (+elements.mbs.innerHTML.replace(/[,]/g, '.') <= 30) {
          return getStatus('Низкая темпер. в масла баках', 'yellow')
        }
        if (runMBS == true) {
          return getStatus('Не выкл. тэны', 'yellow')
        }
        elements.vpns.classList.add('btn__style-green')
        getStatus('ПНС включено')
        PNSon = true
      }
      break
    case 'PNU':
      if (!elements.vpnu.classList.contains('btn__style-green')) {
        if (+elements.mbs.innerHTML.replace(/[,]/g, '.') <= 30) {
          return getStatus('Низкая темпер. в масла баках', 'yellow')
        }
        if (runMBU == true) {
          return getStatus('Не выкл. тэны', 'yellow')
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
    PNSonPNUon = true
    plusTemp()
    minusOil()
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
        if (PNSonPNUon == true) {
          return getStatus('Ошибка', 'yellow')
        }
        elements.vpns.classList.remove('btn__style-green')
        getStatus('ПНС отключено')
        PNSon = false
      }
      break
    case 'PNU':
      if (PNSonPNUon == true) {
        return getStatus('Ошибка', 'yellow')
      }
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

function plusTemp() {
  let start = +elements.UP.innerHTML.replace(/[,]/g, '.')
  let count = 0
  let interval = 0
  let match = false

  if (T >= 18) {
    count = 22
    interval = 3000 / (count - start) // 6000
    finish = (count - start) * interval
  } else if (T > 10) {
    count = 20
    interval = 4000 / (count - start) // 12000
    finish = (count - start) * interval
  } else if (T > 0) {
    count = 15
    interval = 6000 / (count - start) // 18000
    finish = (count - start) * interval
  } else if (T <= 0) {
    count = 10
    interval = 8000 / (count - start) // 24000
    finish = (count - start) * interval
  }

  tPlusTemp = setInterval(() => {
    elements.UP.innerHTML = (+elements.UP.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = (+elements.OP1.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')
    elements.OP2.innerHTML = (+elements.OP2.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')

    if (+elements.UP.innerHTML.replace(/[,]/g, '.') >= count) {
      clearInterval(tPlusTemp)
    }

    if (+elements.UP.innerHTML.replace(/[,]/g, '.') >= 9 && match == false) {
      readyAPHP()
      match == false
    }
  }, interval)
}

function minusOil() {
  let tMBS = +elements.mbs.innerHTML.replace(/[,]/g, '.')
  if(T > 14 ) tMBS = tMBS/


  let interval = finish / tMBS

  
  tMinusOil = setInterval(() => {
    elements.mbs.innerHTML = (+elements.mbs.innerHTML.replace(/[,]/g, '.') - 0.11).toFixed(1).replace(/[.]/g, ',')
    elements.mbu.innerHTML = (+elements.mbu.innerHTML.replace(/[,]/g, '.') - 0.11).toFixed(1).replace(/[.]/g, ',')

    if (tMBS >= +elements.mbs.innerHTML.replace(/[,]/g, '.')) {
      clearInterval(tMinusOil)
    }
  }, interval)
}
