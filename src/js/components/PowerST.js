export default class PowerST {
  constructor(TCwrapR, ZwrapR, powers, disT3, disOFF1, disOFF2, displayALL, inNamALL) {
    this.TCwrapR = TCwrapR
    this.ZwrapR = ZwrapR
    this.powers = powers
    this.disT3 = disT3
    this.disOFF1 = disOFF1
    this.disOFF2 = disOFF2
    this.displayALL = displayALL
    this.inNamALL = inNamALL
  }

  getON() {
    this.TCwrapR.classList.add('color-red')
    this.ZwrapR.classList.add('color-red')
    this.disT3.style.background = 'rgb(87, 7, 7)'

    this.disOFF1.style.opacity = '0'
    this.disOFF1.style.height = '0'
    this.disOFF1.style.opacity = '0'
    this.disOFF2.style.height = '0'

    for (let i = 0; i < this.displayALL.length; i++) {
      this.displayALL[i].classList.add('display-on')
      this.inNamALL[i].classList.add('inNam__on')
    }

    for (let i = 1; i < 16; i++) {
      let name = 'r' + i
      let getName = document.querySelector(`.${name}`)
      getName.classList.add('color-red')
    }

    for (let i = 1; i < 13; i++) {
      let name = 'b' + i
      let getName = document.querySelector(`.${name}`)
      getName.classList.add('color-red')
    }

    for (let i = 7; i < 9; i++) {
      let name = 'd' + i
      let getName = document.querySelector(`.${name}`)
      getName.classList.add('color-green')
    }
  }

  getOFF() {
    this.TCwrapR.classList.remove('color-red')
    this.ZwrapR.classList.remove('color-red')
    this.TCwrapR.style.background = null
    this.ZwrapR.style.background = null
    this.disT3.style.background = null

    this.disOFF1.style.opacity = null
    this.disOFF1.style.height = null
    this.disOFF1.style.opacity = null
    this.disOFF2.style.height = null

    for (let i = 0; i < this.displayALL.length; i++) {
      this.displayALL[i].classList.remove('display-on')
      this.inNamALL[i].classList.remove('inNam__on')
    }

    for (let i = 1; i < 13; i++) {
      let name = 'b' + i
      let getName = document.querySelector(`.${name}`)
      getName.classList.remove('color-red')
    }
    for (let i = 1; i < 16; i++) {
      let name = 'r' + i
      let getName = document.querySelector(`.${name}`)
      getName.classList.remove('color-red')
    }

    for (let i = 1; i < 16; i++) {
      let name = 'g' + i
      let getName = document.querySelector(`.${name}`)
      getName.classList.remove('color-green')
    }

    for (let i = 7; i < 9; i++) {
      let name = 'd' + i
      let getName = document.querySelector(`.${name}`)
      getName.classList.remove('color-green')
    }
  }
}
