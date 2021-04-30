import { elements } from '../elements/Elements'
import { countErrorsactive, getStatus } from './Journal'
import { getPMC, stopPMC, delPMC } from './Canals'
import { T } from './PowerUP'
import { readyAPHP } from './Mode'
import { runOIL } from './Display'
import { checkSTART } from './Tumblers'
import { FIHISH, normSTOP } from './HotProk'
import { arrowUP, arrowDN, arrowTK } from './Arrow'

export let PNSonPNUon = false
export let PNSon = false
export let PNUon = false
export let OHLOJDEPNSPNU = false

let PMCok = false,
  tPlusTemp = '',
  tMinusOil = ''

let finish = 0
let countPNSPNU = 0

let hot = false

export function getBtn(e) {
  switch (e.target.id) {
    case 'VM01':
      if (!elements.vmr01.classList.contains('btn__style-green')) {
        elements.vmr01.classList.add('btn__style-green')
        getStatus('ВМО1 включен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM02':
      if (!elements.vmr02.classList.contains('btn__style-green')) {
        elements.vmr02.classList.add('btn__style-green')
        getStatus('ВМО2 включен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM03':
      if (!elements.vmr03.classList.contains('btn__style-green')) {
        elements.vmr03.classList.add('btn__style-green')
        getStatus('ВМО3 включен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM04':
      if (!elements.vmr04.classList.contains('btn__style-green')) {
        elements.vmr04.classList.add('btn__style-green')
        getStatus('ВМО4 включен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'PNS':
      if (countPNSPNU == 1) {
        elements.tumImg1.style.transform = 'rotate(0deg)'
        return getStatus('Ошибка', 'yellow')
      }
      if (!elements.vpns.classList.contains('btn__style-green')) {
        if (runOIL == true) {
          elements.tumImg1.style.transform = 'rotate(0deg)'
          return getStatus('Не отключены тэны', 'yellow')
        }
        if (hot == true) {
          elements.tumImg1.style.transform = 'rotate(0deg)'
          return getStatus('Ошибка', 'yellow')
        }
        if (+elements.mbs.innerHTML.replace(/[,]/g, '.') <= 15) {
          elements.tumImg1.style.transform = 'rotate(0deg)'
          return getStatus('Ошибка', 'yellow')
        }

        elements.vpns.classList.add('btn__style-green')
        getStatus('ПНС включен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
        checkSTART()
        PNSon = true
      }
      break
    case 'PNU':
      if (countPNSPNU == 1) {
        elements.tumImg1.style.transform = 'rotate(0deg)'
        return getStatus('Ошибка', 'yellow')
      }

      if (!elements.vpnu.classList.contains('btn__style-green')) {
        if (runOIL == true) {
          elements.tumImg1.style.transform = 'rotate(0deg)'
          return getStatus('Не отключены тэны', 'yellow')
        }
        if (hot == true) {
          elements.tumImg1.style.transform = 'rotate(0deg)'
          return getStatus('Ошибка', 'yellow')
        }
        if (+elements.mbs.innerHTML.replace(/[,]/g, '.') <= 15) {
          elements.tumImg1.style.transform = 'rotate(0deg)'
          return getStatus('Ошибка', 'yellow')
        }
        elements.vpnu.classList.add('btn__style-green')
        getStatus('ПНУ включен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
        checkSTART()
        PNUon = true
      }
      break
  }

  if (PNSon == true && PNUon == true && normSTOP == true) {
    OHLOJDEPNSPNU = true
  }

  if (PNSon == true && PMCok == false && normSTOP == false) {
    PMCok = true
    stopPMC()
    getPMC(0.15)
  }

  if (PNSon == true && PNUon == true && PNSonPNUon == false && countPNSPNU == 0 && normSTOP == false) {
    PNSonPNUon = true
    countPNSPNU = 1
    plusTemp()
    minusOil()
  }
}

export function delBtn(e) {
  switch (e.target.id) {
    case 'VM01':
      if (elements.vmr01.classList.contains('btn__style-green')) {
        elements.vmr01.classList.remove('btn__style-green')
        getStatus('ВМО1 отключен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM02':
      if (elements.vmr02.classList.contains('btn__style-green')) {
        elements.vmr02.classList.remove('btn__style-green')
        getStatus('ВМО2 отключен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM03':
      if (elements.vmr03.classList.contains('btn__style-green')) {
        elements.vmr03.classList.remove('btn__style-green')
        getStatus('ВМО3 отключен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM04':
      if (elements.vmr04.classList.contains('btn__style-green')) {
        elements.vmr04.classList.remove('btn__style-green')
        elements.tumImg1.style.transform = 'rotate(0deg)'
        getStatus('ВМО4 отключен')
      }
      break
    case 'PNS':
      if (elements.vpns.classList.contains('btn__style-green') && PMCok == true) {
        if (PNSonPNUon == true) {
          elements.tumImg1.style.transform = 'rotate(0deg)'
          return getStatus('Ошибка', 'yellow')
        }
        elements.vpns.classList.remove('btn__style-green')
        getStatus('ПНС отключен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
        checkSTART()
        PNSon = false
      }
      break
    case 'PNU':
      if (PNSonPNUon == true) {
        elements.tumImg1.style.transform = 'rotate(0deg)'
        return getStatus('Ошибка', 'yellow')
      }
      if (elements.vpnu.classList.contains('btn__style-green')) {
        elements.vpnu.classList.remove('btn__style-green')
        getStatus('ПНУ отключен')
        elements.tumImg1.style.transform = 'rotate(0deg)'
        checkSTART()
        PNUon = false
      }
      break
  }

  if (PNSon == false && PNUon == false && FIHISH == true && countErrorsactive == false) {
    elements.PMC.innerHTML = 0
    elements.rezultERROR.style.opacity = '1'
    elements.rezultERROR.style.visibility = 'visible'
    elements.rezultERROR.innerHTML = '<div class="rezult__test__main"><div class="rezult__test__main-name">ПРОБНЫЙ ТЕСТ ПРОЙДЕТ</div><a href="">Вернутся на главную страницу</a></div>'
  } else if (PNSon == false && PNUon == false && FIHISH == true && countErrorsactive == true) {
    elements.PMC.innerHTML = 0
    elements.rezultERROR.style.opacity = '1'
    elements.rezultERROR.style.visibility = 'visible'
    elements.rezultERROR.innerHTML = '<div class="rezult__finish__main"><div class="rezult__finish__main-name">ЭКЗАМЕН СДАН</div><a href="">Вернутся на главную страницу</a></div>'
  }
}

function plusTemp() {
  let start = +elements.UP.innerHTML.replace(/[,]/g, '.')
  let oil = +elements.mbs.innerHTML.replace(/[,]/g, '.')
  let count = 0
  let interval = 0
  let match = false

  if (T <= -10) {
    count = 7
    interval = 6500 / (count - start) //6500
    finish = (count - start) * interval
  } else if (T <= -1) {
    count = 8
    interval = 5500 / (count - start) // 5500
    finish = (count - start) * interval
  } else if (T <= 5) {
    count = 9
    interval = 4500 / (count - start) // 4500
    finish = (count - start) * interval
  } else if (T <= 10 && oil <= 45) {
    count = 10
    interval = 4500 / (count - start) // 4500
    finish = (count - start) * interval
  } else if (T <= 10 && oil <= 55) {
    count = 13
    interval = 4500 / (count - start) // 4500
    finish = (count - start) * interval
  } else if (T <= 10 && oil <= 82) {
    count = 16
    interval = 4500 / (count - start) // 4500
    finish = (count - start) * interval
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
    count = 18
    tMBS = tMBS - count
  } else if (T <= -1) {
    count = 19
    tMBS = tMBS - count
  } else if (T <= 5) {
    count = 20
    tMBS = tMBS - count
  } else if (T <= 10 && tMBS <= 45) {
    count = 21
    tMBS = tMBS - count
  } else if (T <= 10 && tMBS <= 55) {
    count = 23
    tMBS = tMBS - count
  } else if (T <= 10 && tMBS <= 82) {
    count = 27
    tMBS = tMBS - count
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

export function blockPNSPNU() {
  PNSonPNUon = false
  hot = true
}

export function block2PNSPNU(x, y) {
  if (x == true && y == true) {
    countPNSPNU = 0
    PNSonPNUon = true
    hot = false
    getStatus('Под. пит. на АУП-10 (ВНА на 16°)')
  }
}
