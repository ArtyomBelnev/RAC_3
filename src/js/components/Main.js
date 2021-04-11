import PowerUP from './PowerUP'
import Memo from './Memo'

import { elements } from './Elements'
import { getTumblers } from './Tumblers'

const memo = new Memo()
let cliked = memo.getCranes.bind(memo)

elements.mem.addEventListener('click', cliked)

elements.tumBTN.addEventListener('click', getTumblers.bind(getTumblers))

export default class Main {
  setActions() {
    const powerUP = new PowerUP()

    elements.mem.addEventListener('click', cliked)

    elements.powers.addEventListener('click', powerUP.getPowers.bind(powerUP))
  }
}

export function removeCliked() {
  elements.mem.removeEventListener('click', cliked)
}
