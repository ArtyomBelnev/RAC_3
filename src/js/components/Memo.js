import { getStatus } from './Journal'
import { PowerOk } from './PowerUP'
import { readyAPHP } from './Mode'
import { removeCliked } from './PowerUP'
import { elements } from '../elements/Elements'

export let KranOK = false

let b1 = false,
  g2 = false,
  g4 = false,
  g8 = false

export function getCranes(e) {
  if (PowerOk == true && KranOK == false) {
    switch (e.target.classList.value.slice(0, 2).split(' ').join('')) {
      case 'g1':
        getStatus('Ошибка', 'yellow')
        break
      case 'g2':
        elements.G2.classList.add('color-green')
        elements.R2.classList.remove('color-red')
        g2 = true
        break
      case 'g3':
        getStatus('Ошибка', 'yellow')
        break
      case 'g4':
        elements.G4.classList.add('color-green')
        elements.R4.classList.remove('color-red')
        g4 = true
        break
      case 'g5':
        getStatus('Ошибка', 'yellow')
        break
      case 'g6':
        getStatus('Ошибка', 'yellow')
        break
      case 'g7':
        getStatus('Ошибка', 'yellow')
        break
      case 'g8':
        elements.G8.classList.add('color-green')
        elements.R8.classList.remove('color-red')
        g8 = true
        break
      case 'g9':
        getStatus('Ошибка', 'yellow')
      case 'b1':
        elements.B1.classList.add('color-green')
        b1 = true
        break
    }

    if (b1 == true && g2 == true && g4 == true && g8 == true && KranOK == false) {
      getStatus(`Краны готовы`)
      KranOK = true
      removeCliked()
      readyAPHP()
    }
  }
}
