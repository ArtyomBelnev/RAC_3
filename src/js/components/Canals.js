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
  vPgpN = '',
  vdPkonf = '',
  vOSleft = '',
  vOSright = ''

export function getPMC(i) {
  intPms = setInterval(() => {
    let x = +elements.PMC.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    if (x >= i) {
      clearTimeout(intPms)
    }
    elements.PMC.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
  }, 500)
}

export function delPMC(i) {
  intPms = setInterval(() => {
    let x = +elements.PMC.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PMC.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= i) {
      clearTimeout(intPms)
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
    x += 0.1
    elements.PmBC.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPmBC)
    }
  }, 1500)
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
      if (x <= 0.1) {
        elements.PmTK.innerHTML = i.toFixed(1).replace(/[.]/g, ',')
      }
    }
  }, 900)
}

export function delPmTK(y) {
  vPmTK = setInterval(() => {
    let x = +elements.PmTK.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PmTK.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPmTK)
      elements.PmTK.innerHTML = 0
    }
  }, y) // 700
}

export function getPmCT(i, y) {
  vPmCT = setInterval(() => {
    let x = +elements.PmCT.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    elements.PmCT.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPmCT)
      if (x <= 0.1) {
        elements.PmCT.innerHTML = i.toFixed(1).replace(/[.]/g, ',')
      }
    }
  }, y)
}

export function delPmCT(y) {
  vPmCT = setInterval(() => {
    let x = +elements.PmCT.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.PmCT.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPmCT)
      elements.PmCT.innerHTML = 0
    }
  }, y) // 1000
}

export function getPg13(i) {
  vPg13 = setInterval(() => {
    let x = +elements.Pg13.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    elements.Pg13.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPg13)
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
      let x = +elements.PgN.innerHTML.replace(/[,]/g, '.')
      x += 0.1
      elements.PgN.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
      if (x >= i) {
        clearInterval(vPgN)
        resolve()
      }
      if (x == 3) {
        elements.B5.classList.remove('color-red')
        elements.B5.classList.add('color-green')
      }
    }, 200) //340
  })
}

export function delPgN(y) {
  vPgN = setInterval(() => {
    let x = +elements.PgN.innerHTML.replace(/[,]/g, '.')
    x -= 0.1
    elements.PgN.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPgN)
      elements.PgN.innerHTML = 0
    }
  }, y) // 1000
}

export function getPgpN(i) {
  vPgpN = setInterval(() => {
    let x = +elements.PgpN.innerHTML.replace(/[,]/g, '.')
    x += 0.1
    elements.PgpN.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vPgpN)
    }
  }, 200) // 340
}

export function delPgpN(y) {
  vPgpN = setInterval(() => {
    let x = +elements.PgpN.innerHTML.replace(/[,]/g, '.')
    x -= 0.1
    elements.PgpN.innerHTML = x.toFixed(1).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vPgpN)
      elements.PgpN.innerHTML = 0
    }
  }, y) // 1000
}

export function getdPkonf(i) {
  vdPkonf = setInterval(() => {
    let x = +elements.dPkonf.innerHTML.replace(/[,]/g, '.')
    x += 0.1
    elements.dPkonf.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vdPkonf)
      if (Number.isInteger) {
        elements.dPkonf.innerHTML = i
      }
    }
  }, 240)
}

export function deldPkonf(i, y) {
  vdPkonf = setInterval(() => {
    let x = +elements.dPkonf.innerHTML.replace(/[,]/g, '.')
    x -= 0.1
    elements.dPkonf.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= i) {
      clearInterval(vdPkonf)
      if (Number.isInteger) {
        elements.dPkonf.innerHTML = i
      }
    }
  }, y) // 240
}

export function getOSleft(i) {
  vOSleft = setInterval(() => {
    let x = +elements.OSleft.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    elements.OSleft.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vOSleft)
      elements.OSleft.innerHTML = i.toFixed(1).replace(/[.]/g, ',')
    }
  }, 550)
}

export function delOSleft(y) {
  vOSleft = setInterval(() => {
    let x = +elements.OSleft.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.OSleft.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vOSleft)
      elements.OSleft.innerHTML = 0
    }
  }, y) // 1000
}

export function getOSright(i) {
  vOSright = setInterval(() => {
    let x = +elements.OSright.innerHTML.replace(/[,]/g, '.')
    x += 0.01
    elements.OSright.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x >= i) {
      clearInterval(vOSright)
      // elements.OSright.innerHTML = i.toFixed(1).replace(/[.]/g, ',')
    }
  }, 570)
}

export function delOSright(y) {
  vOSright = setInterval(() => {
    let x = +elements.OSright.innerHTML.replace(/[,]/g, '.')
    x -= 0.01
    elements.OSright.innerHTML = x.toFixed(2).replace(/[.]/g, ',')
    if (x <= 0) {
      clearInterval(vOSright)
      elements.OSright.innerHTML = 0
    }
  }, y) // 1000
}

export function stopCanlsHOT2() {
  clearInterval(vPmBC)
  clearInterval(vPmTK)
  clearInterval(vPmCT)
  clearInterval(vPgpN)
  clearInterval(vdPkonf)
}
