import '../styles/app.scss'

import { elements } from './elements/Elements'
import { getTumblers } from './components/Tumblers'
import { getPowers } from './components/PowerUP'
import { p_d, pc_d } from './components/Popup'

elements.tumBTN.addEventListener('click', getTumblers.bind(getTumblers))
elements.powers.addEventListener('click', getPowers.bind(getPowers))
elements.popup__close.addEventListener('click', pc_d.bind(pc_d))
elements.popup.addEventListener('click', pc_d.bind(pc_d))
elements.info.addEventListener('click', p_d)

document.body.onload = function () {
  setTimeout(function () {
    elements.preloader.style.opacity = '0'
    elements.preloader.style.visibility = 'hidden'
    elements.preloader.style.transition = '1s all'
  }, 1500)
}

// window.onbeforeunload = () => {
//   elements.preloader.style.opacity = '1'
//   elements.preloader.style.visibility = 'visible'
// }
