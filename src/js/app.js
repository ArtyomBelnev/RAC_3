import '../styles/app.scss'

import { elements } from './elements/Elements'
import { getTumblers } from './components/Tumblers'
import { getCranes } from './components/Memo'
import { getPowers } from './components/PowerUP'

elements.tumBTN.addEventListener('click', getTumblers.bind(getTumblers))
elements.powers.addEventListener('click', getPowers.bind(getPowers))

document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById('page__preloader')

    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
  }, 1500)
}
