import {teamRecord} from '../modules/record.js'
import {displayImg, displayNextGame, nextGameBtn } from '../modules/displayInfo.js'

//imported gameIdLocater which determines winner of the last played cancuks game

//imported canucksRecord which uses axios to determine the record of the canucks


//win or lose button which displays the correct photo and text determining the winner
const btn = document.querySelector('#mainBtn');
btn.addEventListener('click', displayImg) 

nextGameBtn.addEventListener('click', displayNextGame)















