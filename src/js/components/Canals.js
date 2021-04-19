import { elements } from '../elements/Elements'
import { getStatus } from './Journal'

export let d7_8 = false

let intPms = '',
  vPgDG = '',
  vPmBC = '',
  vPmTK = '',
  vPmCT = '',
  vPg13 = '',
  vPgN = '',
  vPgpN = ''

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
    if (x <= 0) {
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
      if (Number.isInteger) {
        elements.PgDG.innerHTML = i
      }
    }
  }, 450)
}

export function delPgDG() {
  vPgDG = setInterval(() => {
    let x = +elements.PgDG.innerHTML.replace(/[,]/g, '.')
    x -= 0.25
    elements.PgDG.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= 0) {
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
    elements.PmBC.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPmBC)
      if (Number.isInteger) {
        elements.PmBC.innerHTML = i
      }
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
      if (Number.isInteger) {
        elements.PmTK.innerHTML = i
      }
    }
  }, 900)
}

export function delPmTK() {
  vPmTK = setInterval(() => {
    let x = +elements.PmTK.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PmTK.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
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
      if (Number.isInteger) {
        elements.PmCT.innerHTML = i
      }
    }
  }, 1400)
}

export function delPmCT() {
  vPmCT = setInterval(() => {
    let x = +elements.PmCT.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PmCT.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
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
      if (Number.isInteger) {
        elements.Pg13.innerHTML = i
      }
    }
  }, 300)
}

export function delPg13() {
  vPg13 = setInterval(() => {
    let x = +elements.Pg13.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.Pg13.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPg13)
      elements.Pg13.innerHTML = 0
    }
  }, 300)
}

export function getPgN(i) {
  return new Promise((resolve, reject) => {
    vPgN = setInterval(() => {
      let x = +elements.PgN.innerHTML
      elements.PgN.innerHTML = (x + 0.2).toFixed(1)
      if (+elements.PgN.innerHTML == i) {
        clearInterval(vPgN)
        resolve()
      }
      if (+elements.PgN.innerHTML == 3) {
        elements.B5.classList.add('color-green')
      }
    }, 350)
  })
}

export function getPgpN(i) {
  vPgpN = setInterval(() => {
    let x = +elements.PgpN.innerHTML
    elements.PgpN.innerHTML = (x + 0.1).toFixed(1)
    if (+elements.PgpN.innerHTML >= i) {
      clearInterval(vPgpN)
    }
  }, 350)
}
