import { elements } from '../elements/Elements'
import { getStatus } from './Journal'

export let d7_8 = false

let intPms = '',
  vPgDG = '',
  vPmBC = '',
  vPmTK = '',
  vPmCT = '',
  vPg13 = ''

export function getPMC() {
  intPms = setInterval(() => {
    let x = +elements.PMC.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    if (x >= 0.14) {
      clearTimeout(intPms)
    }
    elements.PMC.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
  }, 500)
}

export function delPMC() {
  intPms = setInterval(() => {
    let x = +elements.PMC.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PMC.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x == 0) {
      clearTimeout(intPms)
      elements.PMC.innerHTML = 0
    }
  }, 500)
}

export function stopPMC() {
  clearTimeout(intPms)
}

export function getPgDG(i) {
  vPgDG = setInterval(() => {
    let x = +elements.PgDG.innerHTML.replace(/[,]/g, '.')
    x += 0.25
    elements.PgDG.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPgDG)
      elements.B2.classList.add('color-green')
      d7_8 = true
      getStatus('Ввод защиты по ССК')
      elements.PgDG.innerHTML = i
    }
  }, 450)
}

export function delPgDG() {
  vPgDG = setInterval(() => {
    let x = +elements.PgDG.innerHTML.replace(/[,]/g, '.')
    x -= 0.25
    elements.PgDG.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= 0) {
      clearInterval(vPgDG)
      elements.PgDG.innerHTML = 0
      d7_8 = false
      elements.B2.classList.remove('color-green')
    }
  }, 450)
}

export function getPmBC(i) {
  vPmBC = setInterval(() => {
    let x = +elements.PmBC.innerHTML.replace(/[,]/g, '.')
    x += 0.05
    elements.PmBC.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPmBC)
      elements.PmBC.innerHTML = i
    }
  }, 200)
}

export function delPmBC() {
  vPmBC = setInterval(() => {
    let x = +elements.PmBC.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PmBC.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPmBC)
      elements.PmBC.innerHTML = 0
    }
  }, 250)
}

export function getPmTK(i) {
  vPmTK = setInterval(() => {
    let x = +elements.PmTK.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    elements.PmTK.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPmTK)
      elements.PmTK.innerHTML = i.replace(/[.]/g, ',')
    }
  }, 900)
}

export function delPmTK() {
  vPmTK = setInterval(() => {
    let x = +elements.PmTK.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PmTK.innerHTML = x.toFixed(0).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPmTK)
      elements.PmTK.innerHTML = 0
    }
  }, 700)
}

export function getPmCT(i) {
  vPmCT = setInterval(() => {
    let x = +elements.PmCT.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    elements.PmCT.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPmCT)
      lements.PmCT.innerHTML = i.replace(/[.]/g, ',')
    }
  }, 1400)
}

export function delPmCT() {
  vPmCT = setInterval(() => {
    let x = +elements.PmCT.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PmCT.innerHTML = x.toFixed(0).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPmCT)
      elements.PmCT.innerHTML = 0
    }
  }, 1000)
}

export function getPg13(i) {
  vPg13 = setInterval(() => {
    let x = +elements.Pg13.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    elements.Pg13.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPg13)
      elements.Pg13.innerHTML = i.replace(/[.]/g, ',')
    }
  }, 300)
}

export function delPg13() {
  vPg13 = setInterval(() => {
    let x = +elements.Pg13.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.Pg13.innerHTML = x.toFixed(0).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPg13)
      elements.Pg13.innerHTML = 0
    }
  }, 300)
}
