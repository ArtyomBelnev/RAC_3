export default class Canals {
  constructor(PmBC, PmTK, PgDG, PmCT, Pg13, PgN, PgpN, PMC, dPkonf, OSleft, OSright) {
    this.PmBC = PmBC
    this.PmTK = PmTK
    this.PgDG = PgDG
    this.PmCT = PmCT
    this.Pg13 = Pg13
    this.PgN = PgN
    this.PgpN = PgpN
    this.PMC = PMC
    this.dPkonf = dPkonf
    this.OSleft = OSleft
    this.OSright = OSright

    this.intPms = ''
  }

  getPMC() {
    this.intPms = setInterval(() => {
      let x = +this.PMC.innerHTML
      x += 0.01
      if (x === 0.14) {
        clearTimeout(this.intPms)
      }
      this.PMC.innerHTML = +x.toFixed(2)
    }, 500)
  }

  delPMC() {
    this.intPms = setInterval(() => {
      let x = +this.PMC.innerHTML
      x -= 0.01
      if (x === 0) {
        clearTimeout(this.intPms)
      }
      this.PMC.innerHTML = +x.toFixed(2)
    }, 500)
  }

  stopPMC() {
    clearTimeout(this.intPms)
  }
}
