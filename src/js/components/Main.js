import PowerUP from './PowerUP'
import Tumblers from './Tumblers'
import Memo from './Memo'

import { elements } from './Elements'

export default class Main {
  setActions() {
    const powerUP = new PowerUP()

    const tumblers = new Tumblers()

    const memo = new Memo()

    elements.mem.addEventListener('click', memo.getCranes.bind(memo))
    elements.powers.addEventListener('click', powerUP.getPowers.bind(powerUP))
    elements.tumBTN.addEventListener('click', tumblers.getTumblers.bind(tumblers))
  }
}
