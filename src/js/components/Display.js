import Journal from './Journal'

export default class Display {
  constructor(mbs, mbu) {
    this.mbs = mbs
    this.mbu = mbu

    this.tmbs = ''
    this.tmbu = ''
    this.mTMax = false

    this.journal = new Journal()
  }

  startMBS(i) {
    let x = +this.mbs.innerHTML
    this.tmbs = setInterval(() => {
      x += Math.random(0.1 - 0.39)
      this.mbs.innerHTML = x.toFixed(2)

      if (+this.mbs.innerHTML > 30 && +this.mbu.innerHTML > 30 && this.mTMax == false) {
        this.journal.getStatus('Темпер. в масла баках > 15℃', 'yellow')
        this.mTMax = true
      }
    }, 500)
  }

  startMBU() {
    let x = +this.mbu.innerHTML
    this.tmbu = setInterval(() => {
      x += Math.random(0.1 - 0.39)
      this.mbu.innerHTML = x.toFixed(2)
      if (+this.mbs.innerHTML > 30 && +this.mbu.innerHTML > 30 && this.mTMax == false) {
        this.journal.getStatus('Темпер. в масла баках > 15℃', 'yellow')
        this.mTMax = true
      }
    }, 500)
  }

  stopMBS() {
    clearTimeout(this.tmbs)
  }

  stopMBU() {
    clearTimeout(this.tmbu)
  }
}
