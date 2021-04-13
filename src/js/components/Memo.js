import { getStatus } from './Journal'
import { PowerOk } from './PowerUP'
import { readyAPHP } from './Mode'
import { removeCliked } from './PowerUP'
import { elements } from '../elements/Elements'

export let KranOK = false

let etarget = ''

let g = {
  b1: false,
  g1: false,
  g2: false,
  g3: false,
  g4: false,
  g5: false,
  g6: false,
  g7: false,
  g8: false,
  g9: false,
  g10: false,
  g11: false,
  g12: false,
  g13: false,
  g14: false,
  g15: false,
}

let g2 = false

export function getCranes(e) {
  if (PowerOk == true && KranOK == false) {
    switch (e.target.classList.value.slice(0, 2).split(' ').join('')) {
      case 'g1':
        elements.G1.classList.add('color-green')
        elements.R1.classList.remove('color-red')
        getStatus('Кран открыт в неправ. послед.', 'yellow')
        g.g1 = true
        break
      case 'r1':
        elements.G1.classList.remove('color-green')
        elements.R1.classList.add('color-red')
        g.g1 = false
        break
      case 'g2':
        elements.G2.classList.add('color-green')
        elements.R2.classList.remove('color-red')
        g.g2 = true
        break
      case 'r2':
        elements.G1.classList.remove('color-green')
        elements.R1.classList.add('color-red')
        g.g2 = false
        break
      case 'g3':
        elements.G3.classList.add('color-green')
        elements.R3.classList.remove('color-red')
        getStatus('Кран открыт в неправ. послед.', 'yellow')
        g.g3 = true
        break
      case 'r3':
        elements.G3.classList.remove('color-green')
        elements.R3.classList.add('color-red')
        g.g3 = false
        break
      case 'g4':
        elements.G4.classList.add('color-green')
        elements.R4.classList.remove('color-red')
        g.g4 = true
        break
      case 'r4':
        elements.G4.classList.remove('color-green')
        elements.R4.classList.add('color-red')
        g.g4 = false
        break
      case 'g5':
        elements.G5.classList.add('color-green')
        elements.R5.classList.remove('color-red')
        getStatus('Кран открыт в неправ. послед.', 'yellow')
        g.g5 = true
        break
      case 'r5':
        elements.G5.classList.remove('color-green')
        elements.R5.classList.add('color-red')
        g.g5 = false
        break
      case 'g6':
        elements.G6.classList.add('color-green')
        elements.R6.classList.remove('color-red')
        getStatus('Кран открыт в неправ. послед.', 'yellow')
        g.g6 = true
        break
      case 'r6':
        elements.G6.classList.remove('color-green')
        elements.R6.classList.add('color-red')
        g.g6 = false
        break
      case 'g7':
        elements.G7.classList.add('color-green')
        elements.R7.classList.remove('color-red')
        getStatus('Кран открыт в неправ. послед.', 'yellow')
        g.g7 = true
        break
      case 'r7':
        elements.G7.classList.remove('color-green')
        elements.R7.classList.add('color-red')
        g.g7 = false
        break
      case 'g8':
        elements.G8.classList.add('color-green')
        elements.R8.classList.remove('color-red')
        g.g8 = true
        break
      case 'r8':
        elements.G8.classList.remove('color-green')
        elements.R8.classList.add('color-red')
        g.g8 = false
        break
      case 'g9':
        elements.G9.classList.add('color-green')
        elements.R9.classList.remove('color-red')
        getStatus('Кран открыт в неправ. послед.', 'yellow')
        g.g9 = true
        break
      case 'r9':
        elements.G9.classList.remove('color-green')
        elements.R9.classList.add('color-red')
        g.g9 = false
        break
      case 'b1':
        if (g.b1 == false) {
          elements.B1.classList.add('color-green')
          g.b1 = true
        } else {
          elements.B1.classList.remove('color-green')
          g.b1 = false
        }
        break
    }

    if (g.b1 == true && g.g1 == false && g.g2 == true && g.g3 == false && g.g4 == true && g.g5 == false && g.g6 == false && g.g7 == false && g.g8 == true && g.g9 == false && KranOK == false) {
      getStatus(`Краны готовы`)
      KranOK = true
      removeCliked()
      readyAPHP()
    }
  }
}
