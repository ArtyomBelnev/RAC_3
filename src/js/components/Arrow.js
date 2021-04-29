import { elements } from '../elements/Elements'

export let arrowTK = 0

let arrowST = 0

export function arrowUP() {
  let a = 6
  let b = 200
  if (arrowTK < 300) {
    arrowTK += 6
    elements.turnovers1.style.transform = `rotate(${arrowTK}deg)`
    elements.turnovers1.style.transition = `1.2s`
    elements.ObTK.innerHTML = +elements.ObTK.innerHTML + 200

    if (arrowTK >= 48) {
      if (arrowTK > 180 && arrowTK <= 198) {
        a = 12
        b = 400
      }
      arrowST += a
      elements.turnovers2.style.transform = `rotate(${arrowST}deg)`
      elements.turnovers2.style.transition = `1.2s`
      elements.ObCT.innerHTML = +elements.ObCT.innerHTML + b
    }
  }

  if (arrowTK == 54) {
    elements.ZwrapR.classList.remove('color-red')
  }

  if (arrowTK == 138) {
    elements.TCwrapR.classList.remove('color-red')
  }

  // if (arrowTK == 228) {
  //   elements.ZwrapR.classList.add('color-red')
  //   elements.TCwrapR.classList.add('color-red')
  // }
}

export function arrowDN() {
  let a = 6
  let b = 200
  if (arrowTK >= 6) {
    arrowTK -= 6
    elements.turnovers1.style.transform = `rotate(${arrowTK}deg)`
    elements.ObTK.innerHTML = +elements.ObTK.innerHTML - 200

    if (arrowTK >= 48) {
      if (arrowTK > 180 && arrowTK <= 198) {
        a = 12
        b = 400
      }
      arrowST -= a
      elements.turnovers2.style.transform = `rotate(${arrowST}deg)`
      elements.ObCT.innerHTML = +elements.ObCT.innerHTML - b
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

  // if (arrowTK == 132) {
  //   elements.TCwrapR.classList.add('color-red')
  // }

  if (arrowTK == 222) {
    elements.ZwrapR.classList.add('color-red')
    elements.TCwrapR.classList.add('color-red')
  }
}
