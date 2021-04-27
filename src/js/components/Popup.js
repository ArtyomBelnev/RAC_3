import { elements } from '../elements/Elements'

export function p_d() {
  elements.popup.style.opacity = '1'
  elements.popup.style.visibility = 'visible'
  elements.popup.transition = 'all 0.8s ease 0s'
  elements.popup__content.classList.add('popup__content_disabled')
  elements.popupImages.style.background = 'url(../src/images/tab.png) no-repeat'
}

export function p_dd() {
  elements.popup.style.opacity = '1'
  elements.popup.style.visibility = 'visible'
  elements.popup.transition = 'all 0.8s ease 0s'
  elements.popup__content.classList.add('popup__content_disabled')
  elements.popupImages.style.background = 'url(../src/images/fon.jpg) no-repeat'
}

export function pc_d(e) {
  if (e.target.className == 'popup__body') {
    elements.popup.style.opacity = '0'
    elements.popup.style.visibility = 'hidden'
    elements.popup__content.classList.remove('popup__content_disabled')
    elements.popupImages.style.background = null
    elements.popup.transition = null
  }
  if (e.target.className == 'popup__close') {
    elements.popup.style.opacity = '0'
    elements.popup.style.visibility = 'hidden'
    elements.popup__content.classList.remove('popup__content_disabled')
    elements.popupImages.style.background = null
    elements.popup.transition = null
  }
}
