import PowerUP from './PowerUP'
import Tumblers from './Tumblers'
import Memo from './Memo'

import { elements } from './Elements'

const memo = new Memo()
let cliked = memo.getCranes.bind(memo)

elements.mem.addEventListener('click', cliked)

export default class Main {
  setActions() {
    const powerUP = new PowerUP()

    const tumblers = new Tumblers()

    elements.powers.addEventListener('click', powerUP.getPowers.bind(powerUP))
    elements.tumBTN.addEventListener('click', tumblers.getTumblers.bind(tumblers))
  }
}

export function removeCliked() {
  elements.mem.removeEventListener('click', cliked)
}
