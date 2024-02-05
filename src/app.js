import { getRecord } from "../modules/record"
import { lastGameInfo } from "../modules/lastGame"
import { nextGameInfo } from "../modules/nextGame"
import { SignUp } from "../modules/signUp"

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
  buttons.style.display = "flex"
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


//signup signin form events

  const signUpBtn = document.getElementById('signUpBtn')
  const signInBtn = document.getElementById('signInBtn')
  let signInForm = document.getElementById('signInForm');
  let signUpForm = document.getElementById('signUpForm');

  signUpBtn.addEventListener('click', () => {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
  })
  signInBtn.addEventListener('click', () => {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
  })

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newUser = {
      name: document.querySelector('#signUpUsername').value,
      email: document.querySelector('#signUpEmail').value,
      password: document.querySelector('#signUpPassword').value,
      team: document.querySelector('#signUpTeam').value
    }
    console.log(newUser)

    SignUp(newUser)
  })  

