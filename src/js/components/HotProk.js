import { elements } from '../elements/Elements'
import { getPgDG, delPgDG, getPmBC, delPmBC, getPmTK, delPmTK, getPmCT, delPmCT, getPg13, delPg13, getPgN, getPgpN } from './Canals'
import { d7_8 } from './Canals'
import { getStatus } from './Journal'
import { readyRUN, readyRAZBC, readyZAJXX } from './Mode'
import { arrowUP, arrowDN, arrowTK } from './Arrow'
import { startVibTK, startVibCT, stopVibTK, stopVibCT, VVHH, getVib1T, getVib2T, getVib3T, getVib4T, getVib5T, getVib6T } from './Display'

let hotProOk = false

let Oborts = ''
let Pm = false

let g1 = false,
  g3 = false,
  g5 = false,
  g6 = false,
  g7 = false,
  g10 = false,
  g11 = false,
  g12 = false,
  g13 = false,
  g14 = false,
  g15 = false,
  r6 = false,
  r8 = false,
  b3 = false,
  b6 = false,
  d7 = false,
  d8 = false

export function getHOTPRO(e) {
  if (hotProOk == false) {
    switch (e.target.classList.value.slice(0, 3).split(' ').join('')) {
      case 'g6':
        if (g6 == false) {
          elements.G6.classList.add('color-green')
          elements.R6.classList.remove('color-red')

          readyRUN()
          getStatus('ОГ-12 на упоре')
          getStatus('Заполнение контура', false, true, 0, 10).then(() => (g6 = true))
        }
        break
      case 'g9':
        if (r8 == false) getStatus('Ошибка', 'yellow')
        break
      case 'r8':
        if (r8 == false && g6 == true && elements.G8.classList.contains('color-green')) {
          elements.R8.classList.add('color-red')
          elements.G8.classList.remove('color-green')

          getPgN(3.8)
            .then(() => getStatus('Стабилизация давления', false, true, 0, 20))
            .then(() => (r8 = true))

          getPgpN(3.8)
        }
        if (g6 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g5':
        if (g5 == false && r8 == true) {
          elements.G5.classList.add('color-green')
          elements.R5.classList.remove('color-red')
          g5 = true
        }
        if (r8 == false) getStatus('Ошибка', 'yellow')
        break
      case 'r6':
        if (r6 == false && g5 == true) {
          elements.R6.classList.add('color-red')
          elements.G6.classList.remove('color-green')
          r6 = true
          readyRAZBC()
        }
        if (g5 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g1':
        if (g1 == false && r6 == true) {
          elements.G1.classList.add('color-green')
          elements.R1.classList.remove('color-red')
          elements.R2.classList.add('color-red')
          elements.G2.classList.remove('color-green')
          g1 = true
        }
        if (g1 == false) getStatus('Ошибка', 'yellow')
        break
      case 'r2':
        if (g1 == false) getStatus('Ошибка', 'yellow')
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
        if (g1 == false) getStatus('Ошибка', 'yellow')
        break
      case 'r4':
        if (g3 == false) getStatus('Ошибка', 'yellow')
        break
      case 'b3':
        if (b3 == false && g3 == true) {
          elements.B3.classList.add('color-green')
          b3 = true
          getPgDG(2)
        }
        if (b3 == false) getStatus('Ошибка', 'yellow')
        break
      case 'd7':
        if (d7 == false && b3 == true) {
          elements.D7.classList.remove('color-green')
          elements.D7.classList.add('color-red')
          d7 = true
        }
        if (d7 == false) getStatus('Ошибка', 'yellow')
        break
      case 'd8':
        if (d8 == false && b3 == true) {
          elements.D8.classList.remove('color-green')
          elements.D8.classList.add('color-red')
          d8 = true
        }

        if (d8 == true && b6 == true) {
          elements.D8.classList.add('color-green')
          elements.D8.classList.remove('color-red')
          d8 = false
          getVib1T(196)
          getVib2T(195)
          getVib3T(196)
          getVib4T(198)
          getVib5T(199)
          getVib6T(196)

          Oborts = setInterval(() => {
            if (arrowTK < 138) {
              arrowUp()
            } else {
              clearTimeout(Oborts)
            }
          }, 1400)
        }
        if (d8 == false || b6 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g10':
        if (g10 == false && d7 == true && d8 == true && d7_8 == true) {
          elements.G10.classList.add('color-green')
          elements.R10.classList.remove('color-red')
          elements.MFT.style.opacity = '1'
          g10 = true

          getStatus('Подача питани на КПВ 1-5')
          getStatus('Подача питания на АУ-10 (ВНА на 16°)')

          getPmBC(0.3)
          getPmTK(0.1)
          getPmCT(0.05)
          getPg13(0.35)
          startVibTK()
          startVibCT()

          Oborts = setInterval(() => {
            if (arrowTK < 60) {
              arrowUP()
            } else {
              getStatus('Pм перед ДГ > 1,5 МПа')
              Pm = true
              clearTimeout(Oborts)
            }
          }, 1500)
        }
        if (g10 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g12':
        if (g12 == false && arrowTK > 32) {
          elements.G12.classList.add('color-green')
          elements.R12.classList.remove('color-red')
          g12 = true
        }
        if (g12 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g13':
        if (g13 == false && g12 == true) {
          elements.G13.classList.add('color-green')
          elements.R13.classList.remove('color-red')
          g13 = true
        }
        if (g12 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g14':
        if (g14 == false && g13 == true) {
          elements.G14.classList.add('color-green')
          elements.R14.classList.remove('color-red')
          g14 = true
        }
        if (g13 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g11':
        if (g11 == false && g14 == true) {
          elements.G11.classList.add('color-green')
          elements.R11.classList.remove('color-red')
          g11 = true
        }
        if (g14 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g15':
        if (g15 == false && g11 == true) {
          elements.G15.classList.add('color-green')
          elements.R15.classList.remove('color-red')
          g15 = true
        }
        if (g11 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g7':
        if (g7 == false && g15 == true && Pm == true) {
          elements.G7.classList.add('color-green')
          elements.R7.classList.remove('color-red')
          g7 = true
          readyZAJXX()
        }
        if (r8 == false || g15 == false) getStatus('Ошибка', 'yellow')
        break
      case 'b6':
        if (b6 == false && g7 == true) {
          elements.B6.classList.remove('color-red')
          elements.B6.classList.add('color-green')
          b6 = true
          getStatus('Работа КНПС', false, true, 0, 10).then(() => {
            if (d8 == true) {
              getStatus('A3 не отрк.', 'red')
            }
          })
        }
        if (g7 == false) getStatus('Ошибка', 'yellow')
        break
    }
  }
}
