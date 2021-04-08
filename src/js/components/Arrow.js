export default class Arrow {
  constructor(TCwrapR, ZwrapR) {
    this.TCwrapR = TCwrapR
    this.ZwrapR = ZwrapR
    this.ObCT = document.getElementById('ObCT')
    this.ObTK = document.getElementById('ObTK')
    this.turnovers1 = document.querySelector('.turnovers-1')
    this.turnovers2 = document.querySelector('.turnovers-2')
    this.arrowTK = 0
    this.arrowST = 0
  }

  arrowUP() {
    if (this.arrowTK < 300) {
      this.arrowTK += 6
      this.turnovers1.style.transform = `rotate(${this.arrowTK}deg)`
      this.turnovers1.style.transition = `1.2s`
      this.ObTK.innerHTML = +this.ObTK.innerHTML + 200

      if (this.arrowTK >= 48) {
        this.arrowST += 6
        this.turnovers2.style.transform = `rotate(${this.arrowST}deg)`
        this.turnovers2.style.transition = `1.2s`
        this.ObCT.innerHTML = +this.ObCT.innerHTML + 200
      }
    }

    if (this.arrowTK == 54) {
      this.ZwrapR.classList.remove('color-red')
    }

    if (this.arrowTK == 138) {
      this.TCwrapR.classList.remove('color-red')
    }

    if (this.arrowTK == 228) {
      this.ZwrapR.classList.add('color-red')
      this.TCwrapR.classList.add('color-red')
    }
  }

  arrowDN() {
    if (this.arrowTK >= 6) {
      this.arrowTK -= 6
      this.turnovers1.style.transform = `rotate(${this.arrowTK}deg)`
      this.ObTK.innerHTML = +this.ObTK.innerHTML - 200

      if (this.arrowTK >= 48) {
        this.arrowST -= 6
        this.turnovers2.style.transform = `rotate(${this.arrowST}deg)`
        this.ObCT.innerHTML = +this.ObCT.innerHTML - 200
      }

      if (this.arrowTK == 42) {
        this.turnovers2.style.transform = 'rotate(0deg)'
        this.ObCT.innerHTML = 0
        this.arrowST = 0
      }
    }

    if (this.arrowTK == 48) {
      this.ZwrapR.classList.add('color-red')
    }

    if (this.arrowTK == 132) {
      this.TCwrapR.classList.add('color-red')
    }

    if (this.arrowTK == 222) {
      this.ZwrapR.classList.remove('color-red')
      this.TCwrapR.classList.remove('color-red')
    }
  }
}
