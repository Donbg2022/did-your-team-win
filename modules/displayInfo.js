import { mainImg, winOrLossText } from './winOrLose.js'


const btn = document.querySelector('#winorlosebtn');
const record = document.querySelector('#record')
const displayImg = () => {
  mainImg.style.display = 'block'
  btn.style.display = 'none'
  record.style.display = 'block'
  winOrLossText.style.display = 'block'
}

//change color scheme with navbar button click



const body = document.querySelector('body')
let count = 1
const colorInvert = () => {
  count++
  body.style.backgroundColor = 'rgb(4,28,44)'
  mainBtn.style.backgroundColor = 'rgb(10,134,61)'
  navbtn.style.backgroundColor = 'rgb(10,134,61)'
  if (count % 2 !== 0){
    body.style.backgroundColor = 'rgb(10,134,61)'
    mainBtn.style.backgroundColor = 'rgb(4,28,44)'
    navbtn.style.backgroundColor = 'rgb(4,28,44)'
  }
}

export { displayImg, colorInvert }