import { getRecord } from "../modules/record"
import { lastGameInfo } from "../modules/lastGame"
import { nextGameInfo } from "../modules/nextGame"

//declare variables to manipulate buttons
const recordBtn = document.querySelector("#recordBtn")
const lastGameBtn = document.querySelector("#lastGameBtn")
const nextGameBtn = document.querySelector("#nextGameBtn")
const teamChoiceForm = document.querySelector("form")
const buttons = document.querySelector("#buttons")

//variables to display information processed
const record = document.querySelector("#record")
const lastGame = document.querySelector("#lastGame")
const nextGame = document.querySelector("#nextGame")

//variable to update the team that is selected
const teamNames = document.getElementById("team-names")
let teamSelected;

//on form submit this will display more options in the form of buttons
teamChoiceForm.addEventListener('submit', (e) => {
  //prevents the page from reloading
  e.preventDefault()
  //displays the button div
  buttons.style.display = "block"
  // updates the teamSelected variable to utilize throughout code
  teamSelected = teamNames.value

})

//listens for a click on the record button and calls function to get the wins, losses for the specific team
recordBtn.addEventListener("click", () => {
  getRecord(teamSelected)
  //display set to block to show thew record
  record.innerHTML = "Loading...."
  record.style.display = "block"
})

//listens for click on last game button and calls fucntion to get info
lastGameBtn.addEventListener("click", () => {
  lastGameInfo(teamSelected)

  //display loading until the lastGame is updated
  lastGame.innerHTML = "Loading...."
  lastGame.style.display = "block"
})

nextGameBtn.addEventListener("click", () => {
  nextGameInfo(teamSelected)

  //display loading until the lastGame is updated
  nextGame.innerHTML = "Loading...."
  nextGame.style.display = "block"
})