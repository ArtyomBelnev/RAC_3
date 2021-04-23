import '../styles/app.scss'

import { elements } from './elements/Elements'
import { getTumblers } from './components/Tumblers'
import { getPowers } from './components/PowerUP'
import { p_d, pc_d } from './components/Popup'
import { errorActive } from './components/Journal'

elements.tumBTN.addEventListener('click', getTumblers.bind(getTumblers))
elements.powers.addEventListener('click', getPowers.bind(getPowers))
elements.popup__close.addEventListener('click', pc_d.bind(pc_d))
elements.popup.addEventListener('click', pc_d.bind(pc_d))
elements.info.addEventListener('click', p_d)
elements.probTest.addEventListener('click', goTest)
elements.kontrols.addEventListener('click', goKontorls)

document.body.onload = function () {
  setTimeout(function () {
    elements.preloader.style.opacity = '0'
    elements.preloader.style.visibility = 'hidden'
    elements.preloader.style.transition = '1s all'
  }, 1500)
}

function goTest() {
  elements.registr.style.opacity = '0'
  elements.registr.style.visibility = 'hidden'
  elements.registr.style.transition = '1s all'
  elements.headerNAME.innerHTML = 'ПРОБНЫЙ ТЕСТ'
}

function goKontorls() {
  elements.registr.style.opacity = '0'
  elements.registr.style.visibility = 'hidden'
  elements.registr.style.transition = '1s all'
  elements.headerNAME.innerHTML = 'KOНТРОЛЬ ЗНАНИЙ'
  errorActive()
}
