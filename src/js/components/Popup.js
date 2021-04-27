import { elements } from '../elements/Elements'

export function p_d() {
  elements.popup.style.opacity = '1'
  elements.popup.style.visibility = 'visible'
  elements.popup.transition = 'all 0.8s ease 0s'
  elements.popup__content.classList.add('popup__content_disabled')
  elements.popupImages.style.background = 'url(../src/images/tab.png) 50% 50% no-repeat'
  elements.popupImages.style.height = '130px'
}

export function p_dd() {
  elements.popup.style.opacity = '1'
  elements.popup.style.visibility = 'visible'
  elements.popup.style.transition = 'all 0.8s ease 0s'
  elements.popupTextNames.style.display = 'block'
  elements.popupImages.style.height = '0'
  elements.popupTextNames.style.display = null
  elements.infoNO.style.color = null
  elements.infoGP.style.color = null
  elements.infoHP.style.color = null
  elements.popup__content.classList.add('popup__content_disabled')
}

export function pc_d(e) {
  if (e.target.className == 'popup__body') {
    elements.popup.style.opacity = '0'
    elements.popup.style.visibility = 'hidden'
    elements.popup__content.classList.remove('popup__content_disabled')
    elements.popupTextNames.style.display = 'none'
    elements.popupImages.style.background = null
    elements.popup.style.transition = null
  }
  if (e.target.className == 'popup__close') {
    elements.popup.style.opacity = '0'
    elements.popup.style.visibility = 'hidden'
    elements.popup__content.classList.remove('popup__content_disabled')
    elements.popupTextNames.style.display = 'none'
    elements.popupImages.style.background = null
    elements.popup.style.transition = null
  }

  if (e.target.id == 'info_HP') {
    elements.popupImages.style.background = 'url(../src/images/1.png) 50% 50% no-repeat'
    elements.popupImages.style.height = '500px'
    elements.infoHP.style.color = 'rgb(184, 17, 17)'
    elements.infoGP.style.color = null
    elements.infoNO.style.color = null
  }
  if (e.target.id == 'info_GP') {
    elements.popupImages.style.background = 'url(../src/images/2.png) 50% 50%no-repeat'
    elements.popupImages.style.height = '500px'
    elements.infoGP.style.color = 'rgb(184, 17, 17)'
    elements.infoHP.style.color = null
    elements.infoNO.style.color = null
  }
  if (e.target.id == 'info_NO') {
    elements.popupImages.style.background = 'url(../src/images/3.png) 50% 50% no-repeat'
    elements.popupImages.style.height = '500px'
    elements.infoNO.style.color = 'rgb(184, 17, 17)'
    elements.infoGP.style.color = null
    elements.infoHP.style.color = null
  }
}
