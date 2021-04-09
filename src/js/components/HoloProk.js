import Mode from './Mode'
import Journal from './Journal'
import Canals from './Canals'
import Arrow from './Arrow'
import Tumblers from './Tumblers'

import { elements } from './Elements'
import { d7_8 } from './Canals'
import { arrowTK } from './Arrow'

export default class HoloProk {
  constructor() {
    this.holProOk = false

    this.HpObort = ''

    this.g1 = false
    this.g3 = false
    this.g10 = false
    this.g11 = false
    this.g12 = false
    this.g13 = false
    this.g14 = false
    this.g15 = false
    this.r2 = false
    this.r4 = false
    this.b3 = false
    this.d7 = false
    this.d8 = false

    this.mode = new Mode()
    this.journal = new Journal()
    this.canals = new Canals()
    this.arrow = new Arrow()
    this.tumblers = new Tumblers()
  }

  getHOLPRO(e) {
    let y = e.target.classList.value.slice(0, 3).split(' ').join('')

    if (y == 'g1' && this.g1 == false && this.holProOk == false) {
      document.querySelector('.g1').classList.add('color-green')
      document.querySelector('.r1').classList.remove('color-red')

      this.mode.readyHOLOPROK()

      this.g1 = true
    }

    if (y == 'r2' && this.g1 == true && this.holProOk == false) {
      document.querySelector('.r2').classList.add('color-red')
      document.querySelector('.g2').classList.remove('color-green')
      this.r2 = true
    }

    if (y == 'g3' && this.r2 == true && this.g3 == false && this.holProOk == false) {
      document.querySelector('.g3').classList.add('color-green')
      document.querySelector('.r3').classList.remove('color-red')
      this.g3 = true
      this.journal.getStatus('Ввод защиты по Pтг')
    }

    if (y == 'r4' && this.g3 == true && this.holProOk == false) {
      document.querySelector('.r4').classList.add('color-red')
      document.querySelector('.g4').classList.remove('color-green')
      this.r4 = true
    }

    if (y == 'b3' && this.r4 == true && this.b3 == false && this.holProOk == false) {
      document.querySelector('.b3').classList.add('color-green')
      this.canals.getPgDG(2)
      this.b3 = true
    }

    if (y == 'd7' && this.b3 == true && this.d7 == false && this.holProOk == false) {
      document.querySelector('.d7').classList.remove('color-green')
      document.querySelector('.d7').classList.add('color-red')
      this.d7 = true
    }

    if (y == 'd8' && this.b3 == true && this.d8 == false && this.holProOk == false) {
      document.querySelector('.d8').classList.remove('color-green')
      document.querySelector('.d8').classList.add('color-red')
      this.d8 = true
    }

    if (y == 'g10' && this.d8 == true && this.d7 == true && d7_8 == true && this.g10 == false && this.holProOk == false) {
      document.querySelector('.g10').classList.add('color-green')
      document.querySelector('.r10').classList.remove('color-red')
      this.journal.getStatus('Удержание КПВ 1,5 в откр. полож.')

      elements.MFT.style.opacity = '1'

      this.journal.getStatus('Время окончания ХП', false, true, 0, 25).then(() => this.isStatusHolPRo())

      this.canals.getPmBC(0.3)
      this.canals.getPmTK(0.1)
      this.canals.getPmCT(0.05)
      this.canals.getPg13(0.35)

      this.g10 = true

      this.HpObort = setInterval(() => {
        if (arrowTK < 60) {
          this.arrow.arrowUP()
        } else {
          this.journal.getStatus('Pm перед ДГ > 1,5 МПа')
          clearTimeout(this.HpObort)
        }
      }, 1500)
    }

    if (y == 'g12' && this.g10 == true && arrowTK > 32 && this.g12 == false && this.holProOk == false) {
      document.querySelector('.g12').classList.add('color-green')
      document.querySelector('.r12').classList.remove('color-red')
      this.g12 = true
    }

    if (y == 'g13' && this.g12 == true && this.g13 == false && this.holProOk == false) {
      document.querySelector('.g13').classList.add('color-green')
      document.querySelector('.r13').classList.remove('color-red')
      this.g13 = true
    }

    if (y == 'g14' && this.g13 == true && this.g14 == false && this.holProOk == false) {
      document.querySelector('.g14').classList.add('color-green')
      document.querySelector('.r14').classList.remove('color-red')
      this.g14 = true
    }

    if (y == 'g11' && this.g14 == true && this.g11 == false && this.holProOk == false) {
      document.querySelector('.g11').classList.add('color-green')
      document.querySelector('.r11').classList.remove('color-red')
      this.g11 = true
    }

    if (y == 'g15' && this.g11 == true && this.g15 == false && this.holProOk == false) {
      document.querySelector('.g15').classList.add('color-green')
      document.querySelector('.r15').classList.remove('color-red')
      this.g15 = true
    }

    if (y == 'r10' && this.holProOk == true) {
      document.querySelector('.g10').classList.remove('color-green')
      document.querySelector('.r10').classList.add('color-red')
      this.g10 = false
      elements.MFT.style.opacity = '0'

      this.HpObort = setInterval(() => {
        if (arrowTK <= 60) {
          this.arrow.arrowDN()
        }
        if (arrowTK == 0) {
          clearTimeout(this.HpObort)
        }
      }, 1200)

      this.canals.deltPmBC()
      this.canals.delPmTK()
      this.canals.delPmCT()
      this.canals.delPg13()
    }

    if (y == 'r1' && this.holProOk == true && this.g10 == false) {
      document.querySelector('.g1').classList.remove('color-green')
      document.querySelector('.r1').classList.add('color-red')
      this.g1 = false
    }

    if (y == 'g2' && this.holProOk == true && this.g1 == false) {
      document.querySelector('.g2').classList.add('color-green')
      document.querySelector('.r2').classList.remove('color-red')
      this.g2 = false
    }

    if (y == 'r3' && this.holProOk == true && this.g2 == false) {
      document.querySelector('.g3').classList.remove('color-green')
      document.querySelector('.r3').classList.add('color-red')
      this.g3 = false
    }

    if (y == 'g4' && this.holProOk == true && this.g3 == false) {
      document.querySelector('.r4').classList.remove('color-red')
      document.querySelector('.g4').classList.add('color-green')
      this.g4 = false
    }

    if (y == 'b3' && this.holProOk == true && this.g4 == false) {
      document.querySelector('.b3').classList.remove('color-green')
      this.canals.delPgDG()
      this.b3 = false
    }

    if (y == 'd8' && this.holProOk == true && this.b3 == false) {
      document.querySelector('.d8').classList.remove('color-red')
      document.querySelector('.d8').classList.add('color-green')
      this.d8 = false
    }

    if (y == 'd7' && this.holProOk == true && this.b3 == false) {
      document.querySelector('.d7').classList.remove('color-red')
      document.querySelector('.d7').classList.add('color-green')
      this.d7 = false
    }

    if (y == 'r11' && this.holProOk == true && this.g11 == true && this.d7 == false && this.d8 == false && +elements.PgDG.innerHTML == 0) {
      document.querySelector('.g11').classList.remove('color-green')
      document.querySelector('.r11').classList.add('color-red')
      this.g11 = false
    }

    if (y == 'r15' && this.holProOk == true && this.g15 == true && this.d7 == false && this.d8 == false) {
      document.querySelector('.g15').classList.remove('color-green')
      document.querySelector('.r15').classList.add('color-red')
      this.g15 = false
    }

    if (y == 'r12' && this.holProOk == true && this.g12 == true && this.g11 == false && this.g15 == false) {
      document.querySelector('.g12').classList.remove('color-green')
      document.querySelector('.r12').classList.add('color-red')
      this.g12 = false
    }

    if (y == 'r13' && this.holProOk == true && this.g13 == true && this.g11 == false && this.g15 == false) {
      document.querySelector('.g13').classList.remove('color-green')
      document.querySelector('.r13').classList.add('color-red')
      this.g13 = false
    }

    if (y == 'r14' && this.holProOk == true && this.g14 == true && this.g11 == false && this.g15 == false) {
      document.querySelector('.g14').classList.remove('color-green')
      document.querySelector('.r14').classList.add('color-red')
      this.g14 = false
    }

    if (this.holProOk == true && this.g11 == false && this.g15 == false && this.g12 == false && this.g13 == false && this.g14 == false && this.g15 == false && this.d7 == false && this.d8 == false) {
      this.holProOk = false
      this.mode.readyAPHPholoPROK()
      this.tumblers.delHoloholProk()
    }
  }

  isStatusHolPRo() {
    if (this.g15 == true) {
      this.journal.getStatus('ХОЛОДНАЯ ПРОКРУТКА ОКОНЧЕНА', 'green')
    } else {
      this.journal.getStatus('ХОЛОДНАЯ ПРОКРУТКА ОКОНЧЕНА С ОШИБКАМИ', 'red')
    }
    this.journal.getStatus('Снятия питания АУП-10')
    this.holProOk = true
  }
}
