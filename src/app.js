import {teamRecord} from '../modules/record.js'
import {displayNextGame, displayRecord, displayLastGame } from '../modules/displayInfo.js'

//imported gameIdLocater which determines winner of the last played cancuks game

//imported canucksRecord which uses axios to determine the record of the canucks


//win or lose button which displays the correct photo and text determining the winner
const lastGameBtn = document.querySelector('#lastGameBtn');
lastGameBtn.addEventListener('click', displayLastGame) 

const nextGameBtn = document.querySelector('#scheduleBtn');
nextGameBtn.addEventListener('click', displayNextGame)

const recordBtn = document.querySelector('#recordBtn')
recordBtn.addEventListener('click', displayRecord)












