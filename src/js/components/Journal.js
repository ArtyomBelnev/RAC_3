import { elements } from './Elements'

export default class Journal {
  constructor() {
    this.timer = ''
  }
  getStatus(x, y, w, z, s) {
    let date = new Date()
    let times = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    let NumStatus = 1

    let min = z
    let sec = s
    let ms = 100

    if (y == 'yellow') {
      elements.disT4.innerHTML += `<div style="color: yellow;">${NumStatus}) ${x} ${times}</div>`
    } else if (y == 'green') {
      elements.disT4.innerHTML += `<div style="color: green;">${NumStatus}) ${x} ${times}</div>`
    } else if (y == 'red') {
      elements.disT4.innerHTML += `<div style="color: yellow;">${NumStatus}) ${x} ${times}</div>`
    } else if (w == true) {
      return new Promise((resolve, reject) => {
        elements.disT4.innerHTML += `<div>${NumStatus})${x}<div class="stTimer"><span class="minContainer">${z}</span><span>мин : </span>
      <span class="secContainer">${s}</span><span> сек</span></div></div>`

        this.timer = setInterval(() => {
          ms--
          if (ms == 0) {
            ms = 100
            sec--
            if (sec == -1) {
              sec = 59
              min--
              document.querySelector('.minContainer').innerText = min
            }

            document.querySelector('.secContainer').innerText = sec
            document.querySelector('.minContainer').innerText = min

            if (min == 0 && sec == 0) {
              document.querySelector('.minContainer').innerText = 0
              document.querySelector('.secContainer').innerText = 0
              document.querySelector('.minContainer').classList.remove('minContainer')
              document.querySelector('.secContainer').classList.remove('secContainer')
              clearTimeout(this.timer)
              resolve(this.timer)
            }
          }
        }, 10)
      })
    } else {
      elements.disT4.innerHTML += `<p>${NumStatus}) ${x} ${times}</p>`
    }
    NumStatus++
    let maxScroll = elements.disT4.scrollHeight
    elements.disT4.scrollTop = maxScroll
  }
}
