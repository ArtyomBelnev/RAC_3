import { elements } from '../elements/Elements'

export function p_d() {
  elements.popup.style.opacity = '1'
  elements.popup.style.visibility = 'visible'
  elements.popup__content.classList.add('popup__content_disabled')
}

export function pc_d(e) {
  if (e.target.className == 'popup__body') {
    elements.popup.style.opacity = '0'
    elements.popup.style.visibility = 'hidden'
    elements.popup__content.classList.remove('popup__content_disabled')
  }
  if (e.target.className == 'popup__close') {
    elements.popup.style.opacity = '0'
    elements.popup.style.visibility = 'hidden'
    elements.popup__content.classList.remove('popup__content_disabled')
  }
}
