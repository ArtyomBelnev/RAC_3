import { elements } from './Elements'

export default class Arrow {
  constructor() {
    this.arrowTK = 0
    this.arrowST = 0
  }

  arrowUP() {
    if (this.arrowTK < 300) {
      this.arrowTK += 6
      elements.turnovers1.style.transform = `rotate(${this.arrowTK}deg)`
      elements.turnovers1.style.transition = `1.2s`
      elements.ObTK.innerHTML = +elements.ObTK.innerHTML + 200

      if (this.arrowTK >= 48) {
        this.arrowST += 6
        elements.turnovers2.style.transform = `rotate(${this.arrowST}deg)`
        elements.turnovers2.style.transition = `1.2s`
        elements.ObCT.innerHTML = +elements.ObCT.innerHTML + 200
      }
    }

    if (this.arrowTK == 54) {
      elements.ZwrapR.classList.remove('color-red')
    }

    if (this.arrowTK == 138) {
      elements.TCwrapR.classList.remove('color-red')
    }

    if (this.arrowTK == 228) {
      elements.ZwrapR.classList.add('color-red')
      elements.TCwrapR.classList.add('color-red')
    }
  }

  arrowDN() {
    if (this.arrowTK >= 6) {
      this.arrowTK -= 6
      elements.turnovers1.style.transform = `rotate(${this.arrowTK}deg)`
      elements.ObTK.innerHTML = +elements.ObTK.innerHTML - 200

      if (this.arrowTK >= 48) {
        this.arrowST -= 6
        elements.turnovers2.style.transform = `rotate(${this.arrowST}deg)`
        elements.ObCT.innerHTML = +elements.ObCT.innerHTML - 200
      }

      if (this.arrowTK == 42) {
        elements.turnovers2.style.transform = 'rotate(0deg)'
        elements.ObCT.innerHTML = 0
        this.arrowST = 0
      }
    }

    if (this.arrowTK == 48) {
      elements.ZwrapR.classList.add('color-red')
    }

    if (this.arrowTK == 132) {
      elements.TCwrapR.classList.add('color-red')
    }

    if (this.arrowTK == 222) {
      elements.ZwrapR.classList.remove('color-red')
      elements.TCwrapR.classList.remove('color-red')
    }
  }
}
