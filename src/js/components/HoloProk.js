import { elements } from '../elements/Elements'
import { d7_8 } from './Canals'
import { getStatus } from './Journal'
import { delGotholProk } from './Tumblers'
import { arrowUP, arrowDN, arrowTK } from './Arrow'
import { T } from './PowerUP'
import { getPgDG, delPgDG, getPmBC, delPmBC, getPmTK, delPmTK, getPmCT, delPmCT, getPg13, delPg13 } from './Canals'
import { readyHOLOPROK, readyAPHPholoPROK } from './Mode'
import { startVibTK, startVibCT, stopVibTK, stopVibCT, checkHOLOPROK, runMBS, runMBU } from './Display'

let holProOk = false,
  HpObort = '',
  g1 = false,
  g3 = false,
  g10 = false,
  g11 = false,
  g12 = false,
  g13 = false,
  g14 = false,
  g15 = false,
  r2 = false,
  r4 = false,
  b3 = false,
  d7 = false,
  d8 = false

export function getHOLPRO(e) {
  let y = e.target.classList.value.slice(0, 3).split(' ').join('')

  if (y == 'g1' && g1 == false && holProOk == false) {
    elements.G1.classList.add('color-green')
    elements.R1.classList.remove('color-red')

    readyHOLOPROK()

    g1 = true
  }

  if (y == 'r2' && g1 == true && holProOk == false) {
    elements.R2.classList.add('color-red')
    elements.G2.classList.remove('color-green')
    r2 = true
  }

  if (y == 'g3' && r2 == true && g3 == false && holProOk == false) {
    elements.G3.classList.add('color-green')
    elements.R3.classList.remove('color-red')
    g3 = true
    getStatus('Ввод защиты по Pтг')
  }

  if (y == 'r4' && g3 == true && holProOk == false) {
    elements.R4.classList.add('color-red')
    elements.G4.classList.remove('color-green')
    r4 = true
  }

  if (y == 'b3' && r4 == true && b3 == false && holProOk == false) {
    elements.B3.classList.add('color-green')
    getPgDG(2)
    b3 = true
  }

  if (y == 'd7' && b3 == true && d7 == false && holProOk == false) {
    elements.D7.classList.remove('color-green')
    elements.D7.classList.add('color-red')
    d7 = true
  }

  if (y == 'd8' && b3 == true && d8 == false && holProOk == false) {
    elements.D8.classList.remove('color-green')
    elements.D8.classList.add('color-red')
    d8 = true
  }

  if (y == 'g10' && d8 == true && d7 == true && d7_8 == true && g10 == false && holProOk == false) {
    elements.G10.classList.add('color-green')
    elements.R10.classList.remove('color-red')
    getStatus('Удержание КПВ 1,5 в откр. полож.')

    elements.MFT.style.opacity = '1'

    if (runMBS == true && runMBU == true) {
      getStatus('Тэны не выключены', 'yellow')
      checkHOLOPROK()
    }

    getStatus('Время окончания ХП', false, true, 2, 0).then(() => isStatusHolPRo())

    minusMBSMBU()
    getPmBC(0.3)
    getPmTK(0.1)
    getPmCT(0.05)
    getPg13(0.35)
    startVibTK()
    startVibCT()

    g10 = true

    HpObort = setInterval(() => {
      if (arrowTK < 60) {
        arrowUP()
      } else {
        getStatus('Pm перед ДГ > 1,5 МПа')
        clearTimeout(HpObort)
      }
    }, 1500)
  }

  if (y == 'g12' && g10 == true && arrowTK > 32 && g12 == false && holProOk == false) {
    elements.G12.classList.add('color-green')
    elements.R12.classList.remove('color-red')
    g12 = true
  }

  if (y == 'g13' && g12 == true && g13 == false && holProOk == false) {
    elements.G13.classList.add('color-green')
    elements.R13.classList.remove('color-red')
    g13 = true
  }

  if (y == 'g14' && g13 == true && g14 == false && holProOk == false) {
    elements.G14.classList.add('color-green')
    elements.R14.classList.remove('color-red')
    g14 = true
  }

  if (y == 'g11' && g14 == true && g11 == false && holProOk == false) {
    elements.G11.classList.add('color-green')
    elements.R11.classList.remove('color-red')
    g11 = true
  }

  if (y == 'g15' && g11 == true && g15 == false && holProOk == false) {
    elements.G15.classList.add('color-green')
    elements.R15.classList.remove('color-red')
    g15 = true
  }

  if (y == 'r10' && holProOk == true && g10 == true) {
    elements.G10.classList.remove('color-green')
    elements.R10.classList.add('color-red')
    g10 = false
    elements.MFT.style.opacity = '0'

    HpObort = setInterval(() => {
      if (arrowTK <= 60) {
        arrowDN()
      }
      if (arrowTK == 0) {
        clearTimeout(HpObort)
      }
    }, 1000)

    delPmBC()
    delPmTK()
    delPmCT()
    delPg13()
    stopVibTK()
    stopVibCT()
  }

  if (y == 'r1' && holProOk == true && g10 == false && g1 == true) {
    elements.G1.classList.remove('color-green')
    elements.R1.classList.add('color-red')
    g1 = false
  }

  if (y == 'g2' && holProOk == true && g1 == false && r2 == true) {
    elements.G2.classList.add('color-green')
    elements.R2.classList.remove('color-red')
    r2 = false
  }

  if (y == 'r3' && holProOk == true && r2 == false && g3 == true) {
    elements.G3.classList.remove('color-green')
    elements.R3.classList.add('color-red')
    g3 = false
  }

  if (y == 'g4' && holProOk == true && g3 == false && r4 == true) {
    elements.R4.classList.remove('color-red')
    elements.G4.classList.add('color-green')
    r4 = false
  }

  if (y == 'b3' && holProOk == true && r4 == false && b3 == true) {
    elements.B3.classList.remove('color-green')
    delPgDG()
    b3 = false
  }

  if (y == 'd8' && holProOk == true && b3 == false && d8 == true) {
    elements.D8.classList.remove('color-red')
    elements.D8.classList.add('color-green')
    d8 = false
  }

  if (y == 'd7' && holProOk == true && b3 == false && d7 == true) {
    elements.D7.classList.remove('color-red')
    elements.D7.classList.add('color-green')
    d7 = false
  }

  if (y == 'r11' && holProOk == true && g11 == true && d7 == false && d8 == false && +elements.PgDG.innerHTML == 0 && g11 == true) {
    elements.G11.classList.remove('color-green')
    elements.R11.classList.add('color-red')
    g11 = false
  }

  if (y == 'r15' && holProOk == true && g15 == true && d7 == false && d8 == false && g15 == true) {
    elements.G15.classList.remove('color-green')
    elements.R15.classList.add('color-red')
    g15 = false
  }

  if (y == 'r12' && holProOk == true && g12 == true && g11 == false && g15 == false && g12 == true) {
    elements.G12.classList.remove('color-green')
    elements.R12.classList.add('color-red')
    g12 = false
  }

  if (y == 'r13' && holProOk == true && g13 == true && g11 == false && g15 == false && g13 == true) {
    elements.G13.classList.remove('color-green')
    elements.R13.classList.add('color-red')
    g13 = false
  }

  if (y == 'r14' && holProOk == true && g14 == true && g11 == false && g15 == false && g14 == true) {
    elements.G14.classList.remove('color-green')
    elements.R14.classList.add('color-red')
    g14 = false
  }

  if (holProOk == true && g11 == false && g15 == false && g12 == false && g13 == false && g14 == false && g15 == false && d7 == false && d8 == false) {
    holProOk = false
    readyAPHPholoPROK()
    delGotholProk()
  }
}

export function isStatusHolPRo() {
  if (g15 == true) {
    getStatus('ХОЛОДНАЯ ПРОКРУТКА ОКОНЧЕНА', 'green')
  } else {
    getStatus('ХОЛОДНАЯ ПРОКРУТКА ОКОНЧЕНА С ОШИБКАМИ', 'red')
  }
  getStatus('Снятия питания АУП-10')
  holProOk = true
}

function minusMBSMBU() {
  let w = (+elements.mbs.innerHTML.replace(/[,]/g, '.') / 2).toFixed(0)
  let tt = setInterval(() => {
    let x = +elements.mbs.innerHTML.replace(/[,]/g, '.')
    let y = +elements.mbu.innerHTML.replace(/[,]/g, '.')

    x -= 0.1
    y -= 0.1

    elements.mbs.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
    elements.mbu.innerHTML = y.toFixed(1).replace(/[.]/g, ',')

    if (x <= w) {
      clearInterval(tt)
    }
  }, 800)
}
