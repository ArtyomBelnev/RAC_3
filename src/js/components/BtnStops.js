import { elements } from '../elements/Elements'
import { readyNormStop } from './Mode'
import { normSTOP, warnigSTOPhotprok } from './HotProk'
import { getStatus, warnigSTOPjournal, countErrorsactive } from './Journal'
import { warningSTOPdisplay } from './Display'
import { warnigSTOPcanals } from './Canals'
import { warnigSTOPholprok } from './HoloProk'
import { PowerOk } from './PowerUP'

export let clickNormStop = false

export function getBTNStop(e) {
  switch (e.target.className) {
    case 'stop-norm__btn':
      if (normSTOP == true && clickNormStop == false && PowerOk == true) {
        clickNormStop = true
        readyNormStop()
        getStatus('Нажата НОРМ. ОСТАНОВКА')
      } else getStatus('Ошибка', 'yellow')

      break
    case 'stop-war__btn':
      if (PowerOk == true) {
        elements.rezultERROR.style.opacity = '1'
        elements.rezultERROR.style.visibility = 'visible'
        elements.rezultERROR.innerHTML = `<div class="rezult__error__main"><div class="rezult__error__main-name">
      ${countErrorsactive == false ? 'АВАРИЙНАЯ ОСТАНОВКА' : 'ЭКЗАМЕН НЕ СДАН'}</div><a href="">Вернуться на главную страницу</a></div>`
        warningSTOPdisplay()
        warnigSTOPcanals()
        warnigSTOPholprok()
        warnigSTOPhotprok()
        warnigSTOPjournal()
      }
      break
  }
}
