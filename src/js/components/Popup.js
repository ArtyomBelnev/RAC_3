import { elements } from '../elements/Elements'

export function p_d() {
  elements.popup.style.opacity = '1'
  elements.popup.style.visibility = 'visible'
  elements.popup.transition = 'all 0.8s ease 0s'
  elements.popup__content.classList.add('popup__content_disabled')
  elements.popupTextNames.classList.add('disabled')

  elements.infoLink.forEach((el) => el.classList.remove('active'))
  elements.infoImg.forEach((el) => el.classList.remove('active'))

  elements.infoImg.forEach((el) => {
    if (el.classList.contains('info__img4')) {
      el.classList.add('active')
    } else el.classList.remove('active')
  })
}

export function p_dd() {
  elements.popup.style.opacity = '1'
  elements.popup.style.visibility = 'visible'
  elements.popup.style.transition = 'all 0.8s ease 0s'
  elements.popup__content.classList.add('popup__content_disabled')
  elements.popupTextNames.classList.remove('disabled')
  elements.infoLink.forEach((el) => el.classList.remove('active'))
  elements.infoImg.forEach((el) => el.classList.remove('active'))
}

export function p_ddd() {
  elements.popup.style.opacity = '1'
  elements.popup.style.visibility = 'visible'
  elements.popup.transition = 'all 0.8s ease 0s'
  elements.popup__content.classList.add('popup__content_disabled')
  elements.popupTextNames.classList.add('disabled')
  elements.infoLink.forEach((el) => el.classList.remove('active'))
  elements.infoImg.forEach((el) => el.classList.remove('active'))

  elements.scrolllist.scrollTo(0, 0)

  elements.infoImg.forEach((el) => {
    if (el.classList.contains('info__img5')) {
      el.classList.add('active')
      if (localStorage.getItem('GPA')) {
        let arr = JSON.parse(localStorage.getItem('GPA'))

        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < 1; j++) {
            let arrN = arr[i]

            let x = `<div class="persons">
              <p>${i + 1}</p>
              <p>${arrN[0]}</p>
              <p>${arrN[1]} (${arrN[2]})</p>
            </div>`
            elements.infolistfname.insertAdjacentHTML('beforeend', x)
          }
        }
      }
    } else el.classList.remove('active')
  })
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

  if (e.target.className == 'info__link') {
    let target = e.target.dataset.targ
    elements.infoLink.forEach((el) => el.classList.remove('active'))
    elements.infoImg.forEach((el) => el.classList.remove('active'))
    e.target.classList.add('active')

    elements.infoImg.forEach((el) => {
      if (el.classList.contains(target)) {
        el.classList.add('active')
      }
    })
  }
}
