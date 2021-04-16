import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { getPMC, stopPMC, delPMC } from './Canals'
import { T } from './PowerUP'
import { readyAPHP } from './Mode'
import { runOIL } from './Display'

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
        if (runOIL == true) {
          return getStatus('Не выкл. тэны', 'yellow')
        }
        elements.vpns.classList.add('btn__style-green')
        getStatus('ПНС включено')
        PNSon = true
      }
      break
    case 'PNU':
      if (!elements.vpnu.classList.contains('btn__style-green')) {
        if (runOIL == true) {
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
  let oil = +elements.mbs.innerHTML.replace(/[,]/g, '.')
  let count = 0
  let interval = 0
  let match = false

  if (T <= -10) {
    count = 8
    interval = 7000 / (count - start)
    finish = (count - start) * interval
  } else if (T <= -1) {
    count = 9
    interval = 6000 / (count - start)
    finish = (count - start) * interval
  } else if (T <= 10) {
    count = 10
    interval = 4500 / (count - start)
    finish = (count - start) * interval
  } else if (T <= 25) {
    if (oil <= 40 && oil >= 23.9) {
      count = +elements.UP.innerHTML.replace(/[,]/g, '.') + 1.1
      interval = 4200 / (count - start)
      finish = (count - start) * interval
    } else if (oil >= 41) {
      count = +elements.UP.innerHTML.replace(/[,]/g, '.') + 3.1
      interval = 4200 / (count - start)
      finish = (count - start) * interval
    } else {
      return
    }
  }

  tPlusTemp = setInterval(() => {
    elements.UP.innerHTML = (+elements.UP.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')
    elements.OP1.innerHTML = (+elements.OP1.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')
    elements.OP2.innerHTML = (+elements.OP2.innerHTML.replace(/[,]/g, '.') + 0.11).toFixed(1).replace(/[.]/g, ',')

    if (+elements.UP.innerHTML.replace(/[,]/g, '.') >= count) {
      clearInterval(tPlusTemp)
    }
  }, interval)
}

function minusOil() {
  let tMBS = +elements.mbs.innerHTML.replace(/[,]/g, '.')
  let count = 0

  if (T <= -10) {
    count = 17
    tMBS = tMBS - count
  } else if (T <= -1) {
    count = 19
    tMBS = tMBS - count
  } else if (T <= 10) {
    count = 20
    tMBS = tMBS - count
  } else if (T <= 25) {
    if (tMBS <= 40 && tMBS >= 23.9) {
      count = +elements.UP.innerHTML.replace(/[,]/g, '.') + 3.2
      tMBS = tMBS - count
    } else if (tMBS >= 41) {
      count = +elements.UP.innerHTML.replace(/[,]/g, '.') + 5.2
      tMBS = tMBS - count
    } else {
      return
    }
  }

  let interval = finish / tMBS

  tMinusOil = setInterval(() => {
    elements.mbs.innerHTML = (+elements.mbs.innerHTML.replace(/[,]/g, '.') - 0.11).toFixed(1).replace(/[.]/g, ',')
    elements.mbu.innerHTML = (+elements.mbu.innerHTML.replace(/[,]/g, '.') - 0.11).toFixed(1).replace(/[.]/g, ',')

    if (count >= +elements.mbs.innerHTML.replace(/[,]/g, '.')) {
      clearInterval(tMinusOil)
    }
  }, interval)
}
