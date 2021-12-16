import '../styles/app.scss'

import { elements } from './elements/Elements'
import { getTumblers } from './components/Tumblers'
import { getPowers } from './components/PowerUP'
import { p_d, p_dd, pc_d } from './components/Popup'
import { errorActive } from './components/Journal'
import { getBTNStop } from './components/BtnStops'

elements.tumBTN.addEventListener('click', getTumblers.bind(getTumblers))
elements.powers.addEventListener('click', getPowers.bind(getPowers))
elements.popup__close.addEventListener('click', pc_d.bind(pc_d))
elements.popup.addEventListener('click', pc_d.bind(pc_d))
elements.info.addEventListener('click', p_d)
elements.information.addEventListener('click', p_dd)
elements.probTest.addEventListener('click', goTest)
elements.kontrols.addEventListener('click', goKontorls)
elements.btnStops.addEventListener('click', getBTNStop.bind(getBTNStop))

let isPass = function () {
  if (elements.checkPass.value === '123452022') {
    elements.checkPass.removeEventListener('keydown', isPass)
    elements.checkPass.removeEventListener('keyup', isPass)

    elements.password.style.opacity = '0'
    elements.password.style.visibility = 'hidden'
    elements.password.style.transition = '1s all'
  }
}

elements.checkPass.focus()
elements.checkPass.addEventListener('keydown', isPass)
elements.checkPass.addEventListener('keyup', isPass)

document.body.onload = function () {
  setTimeout(function () {
    elements.preloader.style.opacity = '0'
    elements.preloader.style.visibility = 'hidden'
    elements.preloader.style.transition = '1s all'
    elements.header.style.height = null
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
  elements.information.remove()
  errorActive()
}

document.addEventListener('contextmenu', (event) => event.preventDefault())

document.onkeydown = function (e) {
  // disable F12 key
  if (e.keyCode == 123) {
    return false
  }

  // disable I key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false
  }

  // disable J key
  if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    return false
  }

  // disable U key
  if (e.ctrlKey && e.keyCode == 85) {
    return false
  }

  // disable P key
  if (e.ctrlKey && e.keyCode == 80) {
    return false
  }
}
