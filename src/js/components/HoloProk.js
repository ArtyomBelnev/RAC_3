import Mode from './Mode'
import Canals from './Canals'

import { elements } from './Elements'
import { d7_8 } from './Canals'
import { getStatus } from './Journal'
import { delGotholProk } from './Tumblers'
import { arrowUP, arrowDN, arrowTK } from './Arrow'

let holProOk = false

let HpObort = ''

let g1 = false
let g2 = false
let g3 = false
let g4 = false
let g10 = false
let g11 = false
let g12 = false
let g13 = false
let g14 = false
let g15 = false
let r2 = false
let r4 = false
let b3 = false
let d7 = false
let d8 = false

export function getHOLPRO(e) {
  let mode = new Mode()
  let canals = new Canals()

  let y = e.target.classList.value.slice(0, 3).split(' ').join('')

  if (y == 'g1' && g1 == false && holProOk == false) {
    document.querySelector('.g1').classList.add('color-green')
    document.querySelector('.r1').classList.remove('color-red')

    mode.readyHOLOPROK()

    g1 = true
  }

  if (y == 'r2' && g1 == true && holProOk == false) {
    document.querySelector('.r2').classList.add('color-red')
    document.querySelector('.g2').classList.remove('color-green')
    r2 = true
  }

  if (y == 'g3' && r2 == true && g3 == false && holProOk == false) {
    document.querySelector('.g3').classList.add('color-green')
    document.querySelector('.r3').classList.remove('color-red')
    g3 = true
    getStatus('Ввод защиты по Pтг')
  }

  if (y == 'r4' && g3 == true && holProOk == false) {
    document.querySelector('.r4').classList.add('color-red')
    document.querySelector('.g4').classList.remove('color-green')
    r4 = true
  }

  if (y == 'b3' && r4 == true && b3 == false && holProOk == false) {
    document.querySelector('.b3').classList.add('color-green')
    canals.getPgDG(2)
    b3 = true
  }

  if (y == 'd7' && b3 == true && d7 == false && holProOk == false) {
    document.querySelector('.d7').classList.remove('color-green')
    document.querySelector('.d7').classList.add('color-red')
    d7 = true
  }

  if (y == 'd8' && b3 == true && d8 == false && holProOk == false) {
    document.querySelector('.d8').classList.remove('color-green')
    document.querySelector('.d8').classList.add('color-red')
    d8 = true
  }

  if (y == 'g10' && d8 == true && d7 == true && d7_8 == true && g10 == false && holProOk == false) {
    document.querySelector('.g10').classList.add('color-green')
    document.querySelector('.r10').classList.remove('color-red')
    getStatus('Удержание КПВ 1,5 в откр. полож.')

    elements.MFT.style.opacity = '1'

    getStatus('Время окончания ХП', false, true, 0, 25).then(() => isStatusHolPRo())

    canals.getPmBC(0.3)
    canals.getPmTK(0.1)
    canals.getPmCT(0.05)
    canals.getPg13(0.35)

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
    document.querySelector('.g12').classList.add('color-green')
    document.querySelector('.r12').classList.remove('color-red')
    g12 = true
  }

  if (y == 'g13' && g12 == true && g13 == false && holProOk == false) {
    document.querySelector('.g13').classList.add('color-green')
    document.querySelector('.r13').classList.remove('color-red')
    g13 = true
  }

  if (y == 'g14' && g13 == true && g14 == false && holProOk == false) {
    document.querySelector('.g14').classList.add('color-green')
    document.querySelector('.r14').classList.remove('color-red')
    g14 = true
  }

  if (y == 'g11' && g14 == true && g11 == false && holProOk == false) {
    document.querySelector('.g11').classList.add('color-green')
    document.querySelector('.r11').classList.remove('color-red')
    g11 = true
  }

  if (y == 'g15' && g11 == true && g15 == false && holProOk == false) {
    document.querySelector('.g15').classList.add('color-green')
    document.querySelector('.r15').classList.remove('color-red')
    g15 = true
  }

  if (y == 'r10' && holProOk == true) {
    document.querySelector('.g10').classList.remove('color-green')
    document.querySelector('.r10').classList.add('color-red')
    g10 = false
    elements.MFT.style.opacity = '0'

    HpObort = setInterval(() => {
      if (arrowTK <= 60) {
        arrowDN()
      }
      if (arrowTK == 0) {
        clearTimeout(HpObort)
      }
    }, 1200)

    canals.deltPmBC()
    canals.delPmTK()
    canals.delPmCT()
    canals.delPg13()
  }

  if (y == 'r1' && holProOk == true && g10 == false) {
    document.querySelector('.g1').classList.remove('color-green')
    document.querySelector('.r1').classList.add('color-red')
    g1 = false
  }

  if (y == 'g2' && holProOk == true && g1 == false) {
    document.querySelector('.g2').classList.add('color-green')
    document.querySelector('.r2').classList.remove('color-red')
    g2 = false
  }

  if (y == 'r3' && holProOk == true && g2 == false) {
    document.querySelector('.g3').classList.remove('color-green')
    document.querySelector('.r3').classList.add('color-red')
    g3 = false
  }

  if (y == 'g4' && holProOk == true && g3 == false) {
    document.querySelector('.r4').classList.remove('color-red')
    document.querySelector('.g4').classList.add('color-green')
    g4 = false
  }

  if (y == 'b3' && holProOk == true && g4 == false) {
    document.querySelector('.b3').classList.remove('color-green')
    canals.delPgDG()
    b3 = false
  }

  if (y == 'd8' && holProOk == true && b3 == false) {
    document.querySelector('.d8').classList.remove('color-red')
    document.querySelector('.d8').classList.add('color-green')
    d8 = false
  }

  if (y == 'd7' && holProOk == true && b3 == false) {
    document.querySelector('.d7').classList.remove('color-red')
    document.querySelector('.d7').classList.add('color-green')
    d7 = false
  }

  if (y == 'r11' && holProOk == true && g11 == true && d7 == false && d8 == false && +elements.PgDG.innerHTML == 0) {
    document.querySelector('.g11').classList.remove('color-green')
    document.querySelector('.r11').classList.add('color-red')
    g11 = false
  }

  if (y == 'r15' && holProOk == true && g15 == true && d7 == false && d8 == false) {
    document.querySelector('.g15').classList.remove('color-green')
    document.querySelector('.r15').classList.add('color-red')
    g15 = false
  }

  if (y == 'r12' && holProOk == true && g12 == true && g11 == false && g15 == false) {
    document.querySelector('.g12').classList.remove('color-green')
    document.querySelector('.r12').classList.add('color-red')
    g12 = false
  }

  if (y == 'r13' && holProOk == true && g13 == true && g11 == false && g15 == false) {
    document.querySelector('.g13').classList.remove('color-green')
    document.querySelector('.r13').classList.add('color-red')
    g13 = false
  }

  if (y == 'r14' && holProOk == true && g14 == true && g11 == false && g15 == false) {
    document.querySelector('.g14').classList.remove('color-green')
    document.querySelector('.r14').classList.add('color-red')
    g14 = false
  }

  if (holProOk == true && g11 == false && g15 == false && g12 == false && g13 == false && g14 == false && g15 == false && d7 == false && d8 == false) {
    holProOk = false
    mode.readyAPHPholoPROK()
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
