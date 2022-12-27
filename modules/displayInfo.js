import { mainImg, winOrLossText } from './winOrLose.js'


//win or loss photo and button display
const btn = document.querySelector('#buttons');
const record = document.querySelector('#record')
const displayImg = () => {
  mainImg.style.display = 'block'
  mainBtn.style.display = 'none'
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

// next game display
const nextGameText = document.querySelector('#next-game')
const displayNextGame = () => {
  btn.style.display = 'none'
  record.style.display = 'block'
  winOrLossText.style.display = 'block'
  nextGameText.style.display = 'block'

}

export { displayImg, colorInvert, displayNextGame }