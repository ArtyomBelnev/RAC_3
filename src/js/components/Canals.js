import { elements } from './Elements'
import Journal from './Journal'

export let d7_8 = false

export default class Canals {
  constructor() {
    this.intPms = ''
    this.vPgDG = ''
    this.vPmBC = ''
    this.vPmTK = ''
    this.vPmCT = ''
    this.vPg13 = ''

    this.journal = new Journal()
  }

  getPMC() {
    this.intPms = setInterval(() => {
      let x = +elements.PMC.innerHTML
      x += 0.01
      if (x === 0.14) {
        clearTimeout(this.intPms)
      }
      elements.PMC.innerHTML = +x.toFixed(2)
    }, 500)
  }

  delPMC() {
    this.intPms = setInterval(() => {
      let x = +elements.PMC.innerHTML
      x -= 0.01
      if (x === 0) {
        clearTimeout(this.intPms)
      }
      elements.PMC.innerHTML = +x.toFixed(2)
    }, 500)
  }

  stopPMC() {
    clearTimeout(this.intPms)
  }

  getPgDG(i) {
    this.vPgDG = setInterval(() => {
      let x = +elements.PgDG.innerHTML
      elements.PgDG.innerHTML = x + 0.25
      if (+elements.PgDG.innerHTML == i) {
        clearInterval(this.vPgDG)
        document.querySelector('.b2').classList.add('color-green')
        d7_8 = true
        this.journal.getStatus('Ввод защиты по ССК')
      }
    }, 450)
  }

  delPgDG() {
    this.vPgDG = setInterval(() => {
      let x = +elements.PgDG.innerHTML
      elements.PgDG.innerHTML = x - 0.25
      if (+elements.PgDG.innerHTML == 0) {
        clearInterval(this.vPgDG)
        elements.PgDG.innerHTML = 0
        d7_8 = false
        document.querySelector('.b2').classList.remove('color-green')
      }
    }, 450)
  }

  getPmBC(i) {
    this.vPmBC = setInterval(() => {
      let x = +elements.PmBC.innerHTML
      elements.PmBC.innerHTML = (x + 0.05).toFixed(2)
      if (+elements.PmBC.innerHTML == i) {
        clearInterval(this.vPmBC)
        elements.PmBC.innerHTML = i
      }
    }, 200)
  }

  deltPmBC() {
    this.vPmBC = setInterval(() => {
      let x = +elements.PmBC.innerHTML
      elements.PmBC.innerHTML = (x - 0.01).toFixed(2)
      if (+elements.PmBC.innerHTML == 0) {
        clearInterval(this.vPmBC)
        elements.PmBC.innerHTML = 0
      }
    }, 250)
  }

  getPmTK(i) {
    this.vPmTK = setInterval(() => {
      let x = +elements.PmTK.innerHTML
      elements.PmTK.innerHTML = (x + 0.01).toFixed(2)
      if (+elements.PmTK.innerHTML == i) {
        clearInterval(this.vPmTK)
        elements.PmTK.innerHTML = i
      }
    }, 900)
  }

  delPmTK() {
    this.vPmTK = setInterval(() => {
      let x = +elements.PmTK.innerHTML
      elements.PmTK.innerHTML = (x - 0.01).toFixed(2)
      if (+elements.PmTK.innerHTML == 0) {
        clearInterval(this.vPmTK)
        elements.PmTK.innerHTML = 0
      }
    }, 700)
  }

  getPmCT(i) {
    this.vPmCT = setInterval(() => {
      let x = +elements.PmCT.innerHTML
      elements.PmCT.innerHTML = (x + 0.01).toFixed(2)
      if (+elements.PmCT.innerHTML == i) {
        clearInterval(this.vPmCT)
      }
    }, 1400)
  }

  delPmCT() {
    this.vPmCT = setInterval(() => {
      let x = +elements.PmCT.innerHTML
      elements.PmCT.innerHTML = (x - 0.01).toFixed(2)
      if (+elements.PmCT.innerHTML == 0) {
        clearInterval(this.vPmCT)
        elements.PmCT.innerHTML = 0
      }
    }, 1000)
  }

  getPg13(i) {
    this.vPg13 = setInterval(() => {
      let x = +elements.Pg13.innerHTML
      elements.Pg13.innerHTML = (x + 0.01).toFixed(2)
      if (+elements.Pg13.innerHTML == i) {
        clearInterval(this.vPg13)
      }
    }, 300)
  }

  delPg13() {
    this.vPg13 = setInterval(() => {
      let x = +elements.Pg13.innerHTML
      elements.Pg13.innerHTML = (x - 0.01).toFixed(2)
      if (+elements.Pg13.innerHTML == 0) {
        clearInterval(this.vPg13)
        elements.Pg13.innerHTML = 0
      }
    }, 200)
  }
}
