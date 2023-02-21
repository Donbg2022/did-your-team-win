import statType from './schedule.js';
import { lastGame, winOrLose } from './winOrLose.js';
import {teamRecord} from './record.js'

    
// displays information regarding the next game that will be played by selected team
const nextGameText = document.querySelector('#next-game')
const displayNextGame = () => {
  statType()
  nextGameText.innerText = 'Loading...'
  nextGameText.style.display = 'block'
}

const record = document.querySelector('#record')
const displayRecord = () => {
  teamRecord()
  record.innerText = 'Loading...'
  record.style.display = 'block'
}

const displayLastGame = () => {
  winOrLose()
  lastGame.innerText = 'Loading...'
  lastGame.style.display = 'block'
}

export { displayNextGame, displayRecord, displayLastGame, lastGame, record, nextGameText }