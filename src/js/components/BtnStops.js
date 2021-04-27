import { elements } from '../elements/Elements'

export function getBTNStop(e) {
  switch (e.target.className) {
    case 'stop-norm__btn':
      console.log('norm')
      break
    case 'stop-war__btn':
      console.log('war')
      break
  }
}
