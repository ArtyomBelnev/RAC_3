import { elements } from './Elements'

export let arrowTK = 0

let arrowST = 0

export function arrowUP() {
  if (arrowTK < 300) {
    arrowTK += 6
    elements.turnovers1.style.transform = `rotate(${arrowTK}deg)`
    elements.turnovers1.style.transition = `1.2s`
    elements.ObTK.innerHTML = +elements.ObTK.innerHTML + 200

    if (arrowTK >= 48) {
      arrowST += 6
      elements.turnovers2.style.transform = `rotate(${arrowST}deg)`
      elements.turnovers2.style.transition = `1.2s`
      elements.ObCT.innerHTML = +elements.ObCT.innerHTML + 200
    }
  }

  if (arrowTK == 54) {
    elements.ZwrapR.classList.remove('color-red')
  }

  if (arrowTK == 138) {
    elements.TCwrapR.classList.remove('color-red')
  }

  if (arrowTK == 228) {
    elements.ZwrapR.classList.add('color-red')
    elements.TCwrapR.classList.add('color-red')
  }
}

export function arrowDN() {
  if (arrowTK >= 6) {
    arrowTK -= 6
    elements.turnovers1.style.transform = `rotate(${arrowTK}deg)`
    elements.ObTK.innerHTML = +elements.ObTK.innerHTML - 200

    if (arrowTK >= 48) {
      arrowST -= 6
      elements.turnovers2.style.transform = `rotate(${arrowST}deg)`
      elements.ObCT.innerHTML = +elements.ObCT.innerHTML - 200
    }

    if (arrowTK == 42) {
      elements.turnovers2.style.transform = 'rotate(0deg)'
      elements.ObCT.innerHTML = 0
      arrowST = 0
    }
  }

  if (arrowTK == 48) {
    elements.ZwrapR.classList.add('color-red')
  }

  if (arrowTK == 132) {
    elements.TCwrapR.classList.add('color-red')
  }

  if (arrowTK == 222) {
    elements.ZwrapR.classList.remove('color-red')
    elements.TCwrapR.classList.remove('color-red')
  }
}
