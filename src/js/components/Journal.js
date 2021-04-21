import { elements } from '../elements/Elements'

let timer = ''
let NumStatus = 1
let countError = 0

export function getStatus(x, y, w, z, s) {
  let date = new Date()
  let times = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  let min = z
  let sec = s
  let ms = 100

  if (y == 'yellow') {
    countError++
    elements.disT4.innerHTML += `<div style="color: yellow;">${NumStatus}) ${x} ${times}</div>`
  } else if (y == 'green') {
    elements.disT4.innerHTML += `<div style="background-color: green;">${NumStatus}) ${x} ${times}</div>`
  } else if (y == 'red') {
    elements.disT4.innerHTML += `<div style="color: red;">${NumStatus}) ${x} ${times}</div>`
  } else if (y == 'war') {
    elements.disT4.innerHTML += `<div style="background-color: yellow;">${NumStatus}) ${x} ${times}</div>`
  } else if (w == true) {
    return new Promise((resolve, reject) => {
      elements.disT4.innerHTML += `<div>${NumStatus})${x}<div class="stTimer"><span class="minContainer">${z}</span><span>мин : </span>
      <span class="secContainer">${s}</span><span> сек</span></div></div>`
      NumStatus++

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
  } else {
    elements.disT4.innerHTML += `<p>${NumStatus}) ${x} ${times}</p>`
  }
  NumStatus++
  let maxScroll = elements.disT4.scrollHeight
  elements.disT4.scrollTop = maxScroll

  // if (countError == 2) {
  //   alert('Тест провален')
  // }
}
