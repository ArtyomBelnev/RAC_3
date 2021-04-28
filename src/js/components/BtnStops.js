import { elements } from '../elements/Elements'
import { readyNormStop } from './Mode'
import { normSTOP } from './HotProk'

export let clickNormStop = false

export function getBTNStop(e) {
  switch (e.target.className) {
    case 'stop-norm__btn':
      if (normSTOP == true && clickNormStop == false) readyNormStop()
      clickNormStop = true
      getStatus('Нажата НОРМАЛЬНАЯ ОСТАНОВКА')
      break
    case 'stop-war__btn':
      console.log('war')
      break
  }
}
