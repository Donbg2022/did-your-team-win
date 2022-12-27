import { gameIdLocater, mainImg, winOrLossText } from '../modues/winOrLose.js'

//imported gameIdLocater which determines winner of the last played cancuks game



// get the record of the canucks
const canucksRecord = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23/stats')
.then(({data}) => {
  let trueRecord = data.stats[0].splits[0].stat.wins + '-' + data.stats[0].splits[0].stat.losses + '-' + data.stats[0].splits[0].stat.ot
  //add the record to a empty div to display at the press of the win button
  record.innerText = `Record: ${trueRecord}`

})
//win or lose button which displays the correct photo and text determining the winner
const btn = document.querySelector('#winorlosebtn');
const record = document.querySelector('#record')
btn.addEventListener('click', function(){
  mainImg.style.display = 'block'
  btn.style.display = 'none'
  record.style.display = 'block'
  winOrLossText.style.display = 'block'
})

//change color scheme with navbar button click
const navbtn = document.querySelector('#navbtn')
const body = document.querySelector('body')
const mainBtn = document.querySelector('#mainBtn')
let count = 1
navbtn.addEventListener('click', function(){
  count++
  body.style.backgroundColor = 'rgb(4,28,44)'
  mainBtn.style.backgroundColor = 'rgb(10,134,61)'
  navbtn.style.backgroundColor = 'rgb(10,134,61)'
  if (count % 2 !== 0){
    body.style.backgroundColor = 'rgb(10,134,61)'
    mainBtn.style.backgroundColor = 'rgb(4,28,44)'
    navbtn.style.backgroundColor = 'rgb(4,28,44)'
  }
})