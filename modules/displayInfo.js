import statType from './schedule.js';
import { mainImg, winOrLossText, winOrLose } from './winOrLose.js';
import {teamRecord} from './record.js'


// buttons to determine which photo to display and to hide button once it was pressed


  
  

// displays information regarding the next game that will be played by selected team
const nextGameText = document.querySelector('#next-game')
const displayNextGame = () => {
  statType()
  nextGameText.style.display = 'block'
}

const record = document.querySelector('#record')
const displayRecord = () => {
  teamRecord()
  record.style.display = 'block'
}

const lastGame = document.querySelector('#lastGame')
const displayLastGame = () => {
  winOrLose()
  lastGame.style.display = 'block'
}

export { displayNextGame, displayRecord, displayLastGame, record, lastGame, nextGameText }