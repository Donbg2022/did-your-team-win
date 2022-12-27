import gameIdLocater from '../modues/winOrLose.js'


// sets variables to compare later to determine winner
  const mainImg = document.querySelector('#mainimg')
  const winOrLossText = document.querySelector('#weWL')


// //axios get request to get thelates game id
// //use game id to make a new axios request to get the goals for the game

// const gameIdLocater = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.previous')
// .then((res) =>{
//   //getting the game id and using a template literal to insert into a new api get request which will get the last game played 


//   let id = res.data.teams[0].previousGameSchedule.dates[0].games[0].gamePk
//   let nhlGameId = `https://statsapi.web.nhl.com/api/v1/game/${id}/boxscore`;

//   const nhlStats = axios.get(nhlGameId)

  
//   .then(({data})=> {
//     const away = data.teams.away.team.name
//     const home = data.teams.home.team.name

//     const homeGoals = data.teams.home.teamStats.teamSkaterStats.goals
//     const awayGoals = data.teams.away.teamStats.teamSkaterStats.goals

//     if (away === 'Vancouver Canucks' &&  homeGoals < awayGoals){
//       //selects opposite team to add text displaying who won and by how much
//       let score = awayGoals + '-' +  homeGoals
//       winOrLossText.innerText = `We beat the ${home} ${score} !!!!`
//       console.log(data)
//       // display this photo on a win
//       mainImg.src = './images/win.jpg'


//     }else if (home === 'Vancouver Canucks' && awayGoals < homeGoals){

//       let score = home + '-' +  away
//       winOrLossText.innerText = `We beat the ${away} ${score} !!!!`

//       // display this photo on a win
//       mainImg.src = './images/win.jpg'
//     }
//     //add a if statement for the cases where canucks lose
//     else if (away === 'Vancouver Canucks' && homeGoals > awayGoals){
      
//       let score = homeGoals + '-' +  awayGoals
//       winOrLossText.innerText = `We lost to the ${home} ${score} :(`

//       mainImg.src = './images/lose.jpg'

//      }
//      else if (home === 'Vancouver Canucks' && awayGoals > homeGoals) {
//       let score = awayGoals + '-' +  homeGoals
//       winOrLossText.innerText = `We lost to the ${away} ${score} :(`

//       mainImg.src = './images/lose.jpg'

//      }

//   })})

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