import { elements } from '../elements/Elements'
import { readyNormStop } from './Mode'
import { normSTOP } from './HotProk'
import { getStatus } from './Journal'

export let clickNormStop = false

export function getBTNStop(e) {
  switch (e.target.className) {
    case 'stop-norm__btn':
      if (normSTOP == true && clickNormStop == false) {
        clickNormStop = true
        readyNormStop()
        getStatus('Нажата НОРМ. ОСТАНОВКА')
      } else getStatus('Ошибка', 'yellow')

      break
    case 'stop-war__btn':
      console.log('war')
      break
  }
}
