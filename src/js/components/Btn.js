import { elements } from '../elements/Elements'
import { getStatus } from './Journal'
import { getPMC, stopPMC, delPMC } from './Canals'
import { T } from './PowerUP'
import { readyAPHP } from './Mode'
import { runOIL } from './Display'
import { checkSTART } from './Tumblers'

export let PNSonPNUon = false
export let PNSon = false
export let PNUon = false

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
        getStatus('ВМО1 включено')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM02':
      if (!elements.vmr02.classList.contains('btn__style-green')) {
        elements.vmr02.classList.add('btn__style-green')
        getStatus('ВМО2 включено')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM03':
      if (!elements.vmr03.classList.contains('btn__style-green')) {
        elements.vmr03.classList.add('btn__style-green')
        getStatus('ВМО3 включено')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM04':
      if (!elements.vmr04.classList.contains('btn__style-green')) {
        elements.vmr04.classList.add('btn__style-green')
        getStatus('ВМО4 включено')
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
          return getStatus('Не выкл. тэны', 'yellow')
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
        getStatus('ПНС включено')
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
          return getStatus('Не выкл. тэны', 'yellow')
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
        getStatus('ПНУ включено')
        elements.tumImg1.style.transform = 'rotate(0deg)'
        checkSTART()
        PNUon = true
      }
      break
  }

  if (PNSon == true && PMCok == false) {
    PMCok = true
    stopPMC()
    getPMC(0.15)
  }

  if (PNSon == true && PNUon == true && PNSonPNUon == false && countPNSPNU == 0) {
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
        getStatus('ВМО1 отключено')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM02':
      if (elements.vmr02.classList.contains('btn__style-green')) {
        elements.vmr02.classList.remove('btn__style-green')
        getStatus('ВМО2 отключено')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM03':
      if (elements.vmr03.classList.contains('btn__style-green')) {
        elements.vmr03.classList.remove('btn__style-green')
        getStatus('ВМО3 отключено')
        elements.tumImg1.style.transform = 'rotate(0deg)'
      }
      break
    case 'VM04':
      if (elements.vmr04.classList.contains('btn__style-green')) {
        elements.vmr04.classList.remove('btn__style-green')
        elements.tumImg1.style.transform = 'rotate(0deg)'
        getStatus('ВМО4 отключено')
      }
      break
    case 'PNS':
      if (elements.vpns.classList.contains('btn__style-green') && PMCok == true) {
        if (PNSonPNUon == true) {
          elements.tumImg1.style.transform = 'rotate(0deg)'
          return getStatus('Ошибка', 'yellow')
        }
        elements.vpns.classList.remove('btn__style-green')
        getStatus('ПНС отключено')
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
        getStatus('ПНУ отключено')
        elements.tumImg1.style.transform = 'rotate(0deg)'
        checkSTART()
        PNUon = false
      }
      break
  }

  // if (PNSon == false && PMCok == true) {
  //   PMCok = false

  //   stopPMC()
  //   delPMC()
  // }
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
