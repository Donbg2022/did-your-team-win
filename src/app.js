import { gameIdLocater, mainImg, winOrLossText } from '../modules/winOrLose.js'
import canucksRecord from '../modules/record.js'
import { displayImg, colorInvert } from '../modules/displayInfo.js'
import statType from '../modules/schedule.js'


//imported gameIdLocater which determines winner of the last played cancuks game

//imported canucksRecord which uses axios to determine the record of the canucks


//logic to change display colors onclick
const navBtn = document.querySelector('#navbtn')
navBtn.addEventListener('click', colorInvert)

//win or lose button which displays the correct photo and text determining the winner
const btn = document.querySelector('#mainBtn');
btn.addEventListener('click', displayImg) 
