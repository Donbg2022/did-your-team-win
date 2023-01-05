import statType from './schedule.js';
import { mainImg, winOrLossText, winOrLose } from './winOrLose.js';
import {teamRecord} from './record.js'


// buttons to determine which photo to display and to hide button once it was pressed
const record = document.querySelector('#record')
const displayImg = () => {
  winOrLose()
  teamRecord()
  record.style.display = 'block'
  winOrLossText.style.display = 'block'
  
}


// displays information regarding the next game that will be played by selected team
const nextGameBtn = document.querySelector('#scheduleBtn');
const nextGameText = document.querySelector('#next-game')
const displayNextGame = () => {
  record.style.display = 'block'
  winOrLossText.style.display = 'block'
  nextGameText.style.display = 'block'
  statType()

}

export { displayImg, displayNextGame, nextGameBtn}