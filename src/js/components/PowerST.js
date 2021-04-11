import { elements } from '../elements/Elements'

export function getON() {
  elements.TCwrapR.classList.add('color-red')
  elements.ZwrapR.classList.add('color-red')
  elements.disT3.style.background = 'rgb(87, 7, 7)'

  elements.disOFF1.style.opacity = '0'
  elements.disOFF1.style.height = '0'
  elements.disOFF1.style.opacity = '0'
  elements.disOFF2.style.height = '0'

  for (let i = 0; i < elements.displayALL.length; i++) {
    elements.displayALL[i].classList.add('display-on')
    elements.inNamALL[i].classList.add('inNam__on')
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

export function getOFF() {
  elements.TCwrapR.classList.remove('color-red')
  elements.ZwrapR.classList.remove('color-red')
  elements.TCwrapR.style.background = null
  elements.ZwrapR.style.background = null
  elements.disT3.style.background = null

  elements.disOFF1.style.opacity = null
  elements.disOFF1.style.height = null
  elements.disOFF1.style.opacity = null
  elements.disOFF2.style.height = null

  for (let i = 0; i < elements.displayALL.length; i++) {
    elements.displayALL[i].classList.remove('display-on')
    elements.inNamALL[i].classList.remove('inNam__on')
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
