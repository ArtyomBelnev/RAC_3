import { elements } from '../elements/Elements'
import { getPMC, getPgDG, delPgDG, getPmBC, delPmBC, getPmTK, delPmTK, getPmCT, delPmCT, getPg13, delPg13, getPgN, getPgpN, getdPkonf, getOSleft, getOSright } from './Canals'
import { d7_8, stopCanlsHOT2 } from './Canals'
import { blockPNSPNU, PNSon, PNUon } from './Btn'
import { getStatus } from './Journal'
import { readyRUN, readyRAZBC, readyZAJXX, readyFire, readyJOBRING, LOADTRASS, readyJOBS } from './Mode'
import { arrowUP, arrowDN, arrowTK } from './Arrow'
import { TK240 } from './Tumblers'
import { startVibTK, startVibCT, stopVibTK, stopVibCT, VVHH, getVib1T, getVib2T, getVib3T, getVib4T, getVib5T, getVib6T, getVibSred, hotT1, hotT2, stopHOT2 } from './Display'

let hotProOk = false
let tPlusTemp = ''

let Oborts = ''
let Pm = false,
  VibSred200 = false,
  tStab = false

let clikedT = getTemper.bind(getTemper)

export let G14 = false
export let Fire = false

let g1 = false,
  g3 = false,
  g5 = false,
  g6 = false,
  g7 = false,
  g9 = false,
  g10 = false,
  g11 = false,
  g12 = false,
  g13 = false,
  g14 = false,
  g15 = false,
  r6 = false,
  r8 = false,
  r10 = false,
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
          getStatus('Продувка', false, true, 0, 10).then(() => (g6 = true)) //10
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
            .then(() => getStatus('Стабилизация давления', false, true, 0, 20)) // 20
            .then(() => {
              r8 = true
            })

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

        if (b3 == false) getStatus('Ошибка', 'yellow')
        break
      case 'd8':
        if (d8 == false && b3 == true) {
          elements.D8.classList.remove('color-green')
          elements.D8.classList.add('color-red')
          d8 = true
        }

        if (b3 == false) getStatus('Ошибка', 'yellow')
        break
      case 'g10':
        if (g10 == false && d7 == true && d8 == true && d7_8 == true) {
          elements.G10.classList.add('color-green')
          elements.R10.classList.remove('color-red')
          elements.MFT.style.opacity = '1'
          g10 = true

          // getStatus('Подача питания на КПВ 1-5')
          getStatus('Вкл. эл.м. АУП-10(КПВ 1,5)')
          getStatus('Под. пит. на АУП-10 (ВНА на 16°)')

          getPmBC(0.3)
          getPmTK(0.1)
          getPmCT(0.05, 1400)
          getPg13(0.35)
          getdPkonf(3)
          getOSleft(0.1)
          getOSright(0.15)
          startVibTK(1.2, 1400)
          startVibCT(1.2, 1400)

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
        if (g15 == false || Pm == false) getStatus('Ошибка', 'yellow')
        break
      case 'b6':
        if (b6 == false && g7 == true) {
          elements.B6.classList.remove('color-red')
          elements.B6.classList.add('color-green')
          b6 = true
          hotProOk = true
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

  if (hotProOk == true) {
    switch (e.target.classList.value.slice(0, 3).split(' ').join('')) {
      case 'd8':
        if (d8 == true && b6 == true) {
          elements.D8.classList.add('color-green')
          elements.D8.classList.remove('color-red')
          elements.Vib1T.removeAttribute('disabled')
          elements.Vib2T.removeAttribute('disabled')
          elements.Vib3T.removeAttribute('disabled')
          elements.Vib4T.removeAttribute('disabled')
          elements.Vib5T.removeAttribute('disabled')
          elements.Vib6T.removeAttribute('disabled')
          elements.disT2.addEventListener('click', clikedT)
          d8 = false

          let count = 8440 / (198 - +elements.Vib3T.value)

          hotT1()

          getVib1T(196, count)
          getVib2T(195, count)
          getVib3T(196, count)
          getVib4T(198, count)
          getVib5T(198, count)
          getVib6T(196, count)
          startVibTK(3.2, 832)
          startVibCT(3.1, 832)

          getPmBC(0.4)
          getPmTK(0.25)
          getPmCT(0.27, 600)
          getPgpN(3.9)
          getPMC(0.21)
          getdPkonf(4)

          Oborts = setInterval(() => {
            if (arrowTK < 138) {
              arrowUP()
            } else {
              clearTimeout(Oborts)
            }
          }, 1280)
        }
        if (b6 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'd7':
        if (d7 == true && VibSred200 == true) {
          elements.disT2.removeEventListener('click', clikedT)
          elements.D7.classList.remove('color-red')
          elements.D7.classList.add('color-green')
          elements.Vib1T.setAttribute('disabled', 'true')
          elements.Vib2T.setAttribute('disabled', 'true')
          elements.Vib3T.setAttribute('disabled', 'true')
          elements.Vib4T.setAttribute('disabled', 'true')
          elements.Vib5T.setAttribute('disabled', 'true')
          elements.Vib6T.setAttribute('disabled', 'true')
          elements.ZwrapR.classList.add('color-red')
          delPmBC()
          hotT2()

          getVib1T(299, 100)
          getVib2T(300, 100)
          getVib3T(299.1, 100)
          getVib4T(299.5, 100)
          getVib5T(300.1, 100)
          getVib6T(299.6, 100)

          getPmTK(0.4)
          getPmCT(0.36, 600)
          getPgpN(4.1)
          getdPkonf(10)
          startVibTK(4, 272)
          startVibCT(4.1, 272)

          Oborts = setInterval(() => {
            if (arrowTK < 150) {
              arrowUP()
            } else {
              clearTimeout(Oborts)
              d7 = false
              stopHOT2()
              stopCanlsHOT2()
            }
          }, 1100)

          getStatus('Снятия питания с Э.М. ВНА на 28°')
        }
        if (VibSred200 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'b6':
        if (b6 == true && d7 == false) {
          elements.B6.classList.remove('color-green')
          elements.B6.classList.add('color-red')
          b6 = false
        }
        if (b6 == true && d8 == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r10':
        if (g10 == true && b6 == false) {
          elements.R10.classList.add('color-red')
          elements.G10.classList.remove('color-green')
          elements.MFT.style.opacity = '0'
          delPg13()
          g10 = false
        }
        if (b6 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'g2':
        if (g1 == true) getStatus('Ошибка', 'yellow')
        break
      case 'r1':
        if (g1 == true && g10 == false) {
          elements.G1.classList.remove('color-green')
          elements.R1.classList.add('color-red')
          elements.R2.classList.remove('color-red')
          elements.G2.classList.add('color-green')
          g1 = false

          delPmBC()
          getPmTK(0.4)
          getPmCT(0.36, 600)
          getPgpN(4.1)
          getdPkonf(10)
          hotT2()
          getVib1T(299, 59)
          getVib2T(300, 59)
          getVib3T(299.1, 59)
          getVib4T(299.5, 59)
          getVib5T(300.1, 59)
          getVib6T(299.6, 59)
          startVibTK(6.5, 384)
          startVibCT(6.6, 384)
          elements.TCwrapR.classList.add('color-red')

          Oborts = setInterval(() => {
            if (arrowTK < 198) {
              arrowUP()
            } else {
              clearTimeout(Oborts)
            }
          }, 1100)

          getStatus('Таймер КПВ', false, true, 0, 15)
            .then(() => (tStab = true))
            .then(() => {
              getStatus('Таймер закр. КПВ,ПНС,ПНУ', false, true, 0, 20).then(() => {
                if (PNSon == true) getStatus('Не закрыт. ПНС', 'red')
                if (PNUon == true) getStatus('Не закрыт. ПНУ', 'red')
                if (g14 == true) getStatus('Не закрыты КПВ', 'red')
                blockPNSPNU()
                getVib1T(319, 6875)
                getVib2T(320, 6875)
                getVib3T(319.1, 6875)
                getVib4T(319.5, 6875)
                getVib5T(320.1, 6875)
                getVib6T(319.6, 6875)
                getStatus('Прогрев ', false, true, 4, 40).then(() => {
                  getdPkonf(15)
                  getStatus('Время прогрева превышена', 'war')

                  Fire = true
                }) /// 5 0
                readyFire()
              })
            })
        }
        if (g10 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r12':
        if (g12 == true && g1 == false && tStab == true) {
          elements.R12.classList.add('color-red')
          elements.G12.classList.remove('color-green')
          g12 = false
        }
        if (tStab == false) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r13':
        if (g13 == true && g12 == false) {
          elements.R13.classList.add('color-red')
          elements.G13.classList.remove('color-green')
          g13 = false
        }
        if (g12 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r14':
        if (g14 == true && g13 == false) {
          elements.R14.classList.add('color-red')
          elements.G14.classList.remove('color-green')
          g14 = false
          G14 = true
          blockPNSPNU()
        }
        if (g13 == true) {
          getStatus('Ошибка', 'yellow')
        }
        break
      case 'r11':
        if (g11 == true && TK240 == true) {
          elements.G11.classList.remove('color-green')
          elements.R11.classList.add('color-red')
          g11 = false
        }
        if (TK240 == false) getStatus('Ошибка', 'yellow')
        break
      case 'r15':
        if (g15 == true && g11 == false) {
          elements.G15.classList.remove('color-green')
          elements.R15.classList.add('color-red')
          g15 = false
          readyJOBRING()
        }
        if (g11 == true) getStatus('Ошибка', 'yellow')
        break
      case 'g9':
        if (g9 == false && LOADTRASS == true) {
          elements.R9.classList.remove('color-red')
          elements.G9.classList.add('color-green')
          g9 = true
        }
        if (LOADTRASS == false) getStatus('Ошибка', 'yellow')
        break
      case 'r7':
        if (g7 == true && g9 == true) {
          elements.G7.classList.remove('color-green')
          elements.R7.classList.add('color-red')
          g7 = false
          readyJOBS()
        }
        if (g9 == false) getStatus('Ошибка', 'yellow')
        break
    }
  }
}

function getTemper() {
  getVibSred()

  if (+elements.VibSred.value == 200 && VibSred200 == false) {
    VibSred200 = true
  }
}
