import { elements } from '../elements/Elements'
import { PowerOk } from './PowerUP'

let timer = ''
let timer1 = ''
let NumStatus = 1
let countErrors = 0

export let countErrorsactive = false

export function getStatus(x, y, w, z, s, n) {
  if (PowerOk == true) {
    let date = new Date()
    let times = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    let min = z
    let sec = s
    let ms = 100

    if (y == 'yellow') {
      countErrors++
      elements.disT4.innerHTML += `<div style="color: yellow;">${NumStatus}) ${x} ${times}</div>`
    } else if (y == 'green') {
      elements.disT4.innerHTML += `<div style="background-color: green; color: white;">${NumStatus}) ${x} ${times}</div>`
    } else if (y == 'red') {
      countErrors++
      elements.disT4.innerHTML += `<div style="color: red;">${NumStatus}) ${x} ${times}</div>`
    } else if (y == 'war') {
      elements.disT4.innerHTML += `<div style="background-color: yellow;">${NumStatus}) ${x} ${times}</div>`
    } else if (w == true) {
      return new Promise((resolve, reject) => {
        elements.disT4.innerHTML += `<div>${NumStatus})${x}<div class="stTimer"><span class="minContainer">${z}</span><span>мин : </span>
        <span class="secContainer">${s}</span><span> сек</span></div></div>`
        NumStatus++
        let checkReturn = false

        timer = setInterval(() => {
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

            if (checkReturn == false) {
              checkReturn = true
              let maxScroll = elements.disT4.scrollHeight
              elements.disT4.scrollTop = maxScroll
            }

            if (min == 0 && sec == 0) {
              document.querySelector('.minContainer').innerText = 0
              document.querySelector('.secContainer').innerText = 0
              document.querySelector('.minContainer').classList.remove('minContainer')
              document.querySelector('.secContainer').classList.remove('secContainer')
              clearTimeout(timer)
              resolve(timer)
            }
          }
        }, 10)
      })
    } else if (n == true) {
      elements.disT4.innerHTML += `<div>${NumStatus})${x}<div class="stTimer1"><span class="minContainer1">${z}</span><span>мин : </span>
        <span class="secContainer1">${s}</span><span> сек</span></div></div>`
      NumStatus++

      timer1 = setInterval(() => {
        ms--
        if (ms == 0) {
          ms = 100
          sec--
          if (sec == -1) {
            sec = 59
            min--
            document.querySelector('.minContainer1').innerText = min
          }

          document.querySelector('.secContainer1').innerText = sec
          document.querySelector('.minContainer1').innerText = min

          if (min == 0 && sec == 0) {
            document.querySelector('.minContainer1').innerText = 0
            document.querySelector('.secContainer1').innerText = 0
            document.querySelector('.minContainer1').classList.remove('minContainer1')
            document.querySelector('.secContainer1').classList.remove('secContainer1')
            clearTimeout(timer1)
          }
        }
      }, 10)
    } else {
      elements.disT4.innerHTML += `<p>${NumStatus}) ${x} ${times}</p>`
    }
    NumStatus++
    let maxScroll = elements.disT4.scrollHeight
    elements.disT4.scrollTop = maxScroll

    if (countErrors == 1 && countErrorsactive == true) {
      elements.rezultERROR.style.opacity = '1'
      elements.rezultERROR.style.visibility = 'visible'
      elements.rezultERROR.innerHTML = '<div class="rezult__error__main"><div class="rezult__error__main-name">ЭКЗАМЕН НЕ СДАН</div><a href="">Вернуться на главную страницу</a></div>'
    }
  }
}

export function errorActive() {
  countErrorsactive = true
}

export function warnigSTOPjournal() {
  clearTimeout(timer)
  clearTimeout(timer1)
}
