import statType from './schedule.js';
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
let backColor = 'rgb(4,28,44)'
let count = 1

const body = document.querySelector('body')
const nextGameBtn = document.querySelector('#scheduleBtn');


const colorInvert = () => {

  count++
  body.style.backgroundColor = 'rgb(4,28,44)'
  mainBtn.style.backgroundColor = 'rgb(10,134,61)'
  nextGameBtn.style.backgroundColor = 'rgb(10,134,61)'
  navbtn.style.backgroundColor = 'rgb(10,134,61)'
  backColor = 'rgb(10,134,61)'
  statType()
  
  if (count % 2 !== 0){
    body.style.backgroundColor = 'rgb(10,134,61)'
    mainBtn.style.backgroundColor = 'rgb(4,28,44)'
    nextGameBtn.style.backgroundColor = 'rgb(4,28,44)'
    navbtn.style.backgroundColor = 'rgb(4,28,44)'
    backColor = 'rgb(4,28,44)'
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

export { displayImg, colorInvert, displayNextGame, backColor, nextGameBtn}