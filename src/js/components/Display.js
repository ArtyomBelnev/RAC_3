import { elements } from './Elements'
import { getStatus } from './Journal'
import { readyAPHP } from './Mode'

let tmbs = '',
  tmbu = '',
  mTMax = false,
  rtn = false

export function startMBS(i) {
  let x = +elements.mbs.innerHTML
  tmbs = setInterval(() => {
    x += Math.random(0.1 - 0.39)
    elements.mbs.innerHTML = x.toFixed(2)

    if (+elements.mbs.innerHTML > 15 && +elements.mbu.innerHTML > 15 && rtn == false) {
      readyAPHP()
      rtn = true
    }

    if (+elements.mbs.innerHTML > 30 && +elements.mbu.innerHTML > 30 && mTMax == false) {
      getStatus('Темпер. в масла баках > 15℃', 'yellow')
      mTMax = true
    }
  }, 500)
}

export function startMBU() {
  let x = +elements.mbu.innerHTML
  tmbu = setInterval(() => {
    x += Math.random(0.1 - 0.39)
    elements.mbu.innerHTML = x.toFixed(2)

    if (+elements.mbs.innerHTML > 15 && +elements.mbu.innerHTML > 15 && rtn == false) {
      readyAPHP()
      rtn = true
    }

    if (+elements.mbs.innerHTML > 30 && +elements.mbu.innerHTML > 30 && mTMax == false) {
      getStatus('Темпер. в масла баках > 15℃', 'yellow')
      mTMax = true
    }
  }, 500)
}

export function stopMBS() {
  clearTimeout(tmbs)
}

export function stopMBU() {
  clearTimeout(tmbu)
}
