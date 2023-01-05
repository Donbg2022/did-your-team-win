import { winOrLose, mainImg, winOrLossText } from '../modules/winOrLose.js'
import teamRecord from '../modules/record.js'
import {displayImg, colorInvert, displayNextGame, nextGameBtn } from '../modules/displayInfo.js'
// import statType from '../modules/schedule.js'
import {teams, root, teamSelectMenu}from '../modules/teamColors.js'
import {teamId}from '../modules/teamId.js'


teamId()


//imported gameIdLocater which determines winner of the last played cancuks game

//imported canucksRecord which uses axios to determine the record of the canucks

//call statType to load get request straight away
// statType()

//logic to change display colors onclick
const navBtn = document.querySelector('#navbtn')
navBtn.addEventListener('click', colorInvert)

//win or lose button which displays the correct photo and text determining the winner
const btn = document.querySelector('#mainBtn');
btn.addEventListener('click', displayImg) 

nextGameBtn.addEventListener('click', displayNextGame)





