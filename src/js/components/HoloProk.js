import { elements } from '../elements/Elements'
import { d7_8 } from './Canals'
import { getStatus } from './Journal'
import { delGotholProk } from './Tumblers'
import { arrowUP, arrowDN, arrowTK } from './Arrow'
import { getPgDG, delPgDG, getPmBC, delPmBC, getPmTK, delPmTK, getPmCT, delPmCT, getPg13, delPg13 } from './Canals'
import { readyHOLOPROK, readyAPHPholoPROK } from './Mode'
import { startVibTK, startVibCT, stopVibTK, stopVibCT, VVHH } from './Display'

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
  b3 = false,
  d7 = false,
  d8 = false

export function getHOLPRO(e) {
  if (holProOk == false) {
    switch (e.target.classList.value.slice(0, 3).split(' ').join('')) {
      case 'g1':
        if (g1 == false) {
          elements.G1.classList.add('color-green')
          elements.R1.classList.remove('color-red')
          elements.R2.classList.add('color-red')
          elements.G2.classList.remove('color-green')
          g1 = true
          readyHOLOPROK()
        }
        break
      case 'r2':
        if (g1 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g3':
        if (g3 == false && g1 == true) {
          elements.G3.classList.add('color-green')
          elements.R3.classList.remove('color-red')
          elements.R4.classList.add('color-red')
          elements.G4.classList.remove('color-green')
          g3 = true
          getStatus('Ввод защиты по Pтг')
        }
        if (g1 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r4':
        if (g3 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'b3':
        if (b3 == false && g3 == true) {
          elements.B3.classList.add('color-green')
          b3 = true
          getPgDG(2)
        }
        if (b3 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'd7':
        if (d7 == false && b3 == true) {
          elements.D7.classList.remove('color-green')
          elements.D7.classList.add('color-red')
          d7 = true
        }
        if (d7 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'd8':
        if (d8 == false && b3 == true) {
          elements.D8.classList.remove('color-green')
          elements.D8.classList.add('color-red')
          d8 = true
        }
        if (d8 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g10':
        if (g10 == false && d7 == true && d8 == true && d7_8 == true) {
          elements.G10.classList.add('color-green')
          elements.R10.classList.remove('color-red')
          elements.MFT.style.opacity = '1'
          g10 = true

          getStatus('Подача питания на КПВ 1-5')

          getStatus('Время окончания ХП', false, true, 2, 0).then(() => isStatusHolPRo()) // 2 0

          getPmBC(0.3)
          getPmTK(0.1)
          getPmCT(0.05, 1400)
          getPg13(0.35)
          startVibTK()
          startVibCT()
          VVHH()

          HpObort = setInterval(() => {
            if (arrowTK < 60) {
              arrowUP()
            } else {
              clearTimeout(HpObort)
            }
          }, 1500)
        }
        if (g10 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g12':
        if (g12 == false && arrowTK > 32) {
          elements.G12.classList.add('color-green')
          elements.R12.classList.remove('color-red')
          g12 = true
        }
        if (g12 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g13':
        if (g13 == false && g12 == true) {
          elements.G13.classList.add('color-green')
          elements.R13.classList.remove('color-red')
          g13 = true
        }
        if (g12 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g14':
        if (g14 == false && g13 == true) {
          elements.G14.classList.add('color-green')
          elements.R14.classList.remove('color-red')
          g14 = true
        }
        if (g13 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g11':
        if (g11 == false && g14 == true) {
          elements.G11.classList.add('color-green')
          elements.R11.classList.remove('color-red')
          g11 = true
        }
        if (g14 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g15':
        if (g15 == false && g11 == true) {
          elements.G15.classList.add('color-green')
          elements.R15.classList.remove('color-red')
          g15 = true
        }
        if (g11 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
    }
  }

  if (holProOk == true) {
    switch (e.target.classList.value.slice(0, 3).split(' ').join('')) {
      case 'r10':
        if (g10 == true) {
          elements.G10.classList.remove('color-green')
          elements.R10.classList.add('color-red')
          elements.MFT.style.opacity = '0'
          g10 = false

          delPmBC()
          delPmTK()
          delPmCT()
          delPg13()
          stopVibTK()
          stopVibCT()

          HpObort = setInterval(() => {
            if (arrowTK <= 60) {
              arrowDN()
            }
            if (arrowTK == 0) {
              clearTimeout(HpObort)
            }
          }, 1000)
        }
        break
      case 'r1':
        if (g1 == true && g10 == false) {
          elements.G1.classList.remove('color-green')
          elements.R1.classList.add('color-red')
          elements.G2.classList.add('color-green')
          elements.R2.classList.remove('color-red')
          g1 = false
        }
        if (g10 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g2':
        if (g1 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r3':
        if (g3 == true && g1 == false) {
          elements.G3.classList.remove('color-green')
          elements.R3.classList.add('color-red')
          elements.R4.classList.remove('color-red')
          elements.G4.classList.add('color-green')
          g3 = false
        }
        if (g1 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g4':
        if (g3 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'b3':
        if (b3 == true && g3 == false) {
          elements.B3.classList.remove('color-green')
          b3 = false
          delPgDG()
        }
        if (g3 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'd7':
        if (d7 == true && b3 == false) {
          elements.D7.classList.remove('color-red')
          elements.D7.classList.add('color-green')
          d7 = false
        }
        if (b3 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'd8':
        if (d8 == true && b3 == false) {
          elements.D8.classList.remove('color-red')
          elements.D8.classList.add('color-green')
          d8 = false
        }
        if (b3 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r11':
        if (g11 == true && d7 == false && d8 == false) {
          elements.G11.classList.remove('color-green')
          elements.R11.classList.add('color-red')
          g11 = false
        }
        if (d7 == true || d8 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r15':
        if (g15 == true && g11 == false && d7 == false && d8 == false) {
          elements.G15.classList.remove('color-green')
          elements.R15.classList.add('color-red')
          g15 = false
        }
        if (d7 == true || d8 == true || g11 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r12':
        if (g12 == true && g15 == false && d7 == false && d8 == false) {
          elements.G12.classList.remove('color-green')
          elements.R12.classList.add('color-red')
          g12 = false
        }
        if (d7 == true || d8 == true || g15 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r13':
        if (g13 == true && g12 == false && d7 == false && d8 == false) {
          elements.G13.classList.remove('color-green')
          elements.R13.classList.add('color-red')
          g13 = false
        }
        if (d7 == true || d8 == true || g12 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r14':
        if (g14 == true && g13 == false && d7 == false && d8 == false) {
          elements.G14.classList.remove('color-green')
          elements.R14.classList.add('color-red')
          g14 = false
        }
        if (d7 == true || d8 == true || g13 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
    }

    if (g11 == false && g15 == false && g12 == false && g13 == false && g14 == false && d7 == false && d8 == false) {
      holProOk = false
      readyAPHPholoPROK()
      delGotholProk()
    }
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
