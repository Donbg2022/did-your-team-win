// sets variables to compare later to determine winner
  let nucksGoals = 0
  let other = 0
  const mainImg = document.querySelector('#mainimg')
  const winOrLossText = document.querySelector('#weWL')


//axios get request to get thelates game id
//use game id to make a new axios request to get the goals for the game

const gameIdLocater = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.previous')
.then((res) =>{
  //getting the game id and using a template literal to insert into a new api get request which will get the last game played 
  let id = res.data.teams[0].previousGameSchedule.dates[0].games[0].gamePk
  let nhlGameId = `https://statsapi.web.nhl.com/api/v1/game/${id}/boxscore`;
  const nhlStats = axios.get(nhlGameId)
  .then(({data})=> {
    if (data.teams.away.team.name === 'Vancouver Canucks' && data.teams.home.teamStats.teamSkaterStats.goals < data.teams.away.teamStats.teamSkaterStats.goals){
      //selects opposite team to add text displaying who won and by how much
      let other = data.teams.home.team.name
      let score = data.teams.away.teamStats.teamSkaterStats.goals + '-' +  data.teams.home.teamStats.teamSkaterStats.goals
      winOrLossText.innerText = `We beat the ${other} ${score} !!!!`

      //make this a winning photo
      mainImg.src = 'win.jpg'
    }else if (data.teams.home.team.name === 'Vancouver Canucks' && data.teams.away.teamStats.teamSkaterStats.goals < data.teams.home.teamStats.teamSkaterStats.goals){
      let other = data.teams.away.team.name
      let score = data.teams.home.teamStats.teamSkaterStats.goals + '-' +  data.teams.away.teamStats.teamSkaterStats.goals
      winOrLossText.innerText = `We beat the ${other} ${score} !!!!`

      //make this a winning photo
      mainImg.src = 'win.jpg'
    }
    //add a if statement for the cases where canucks lose
    else if (data.teams.away.team.name === 'Vancouver Canucks' && data.teams.home.teamStats.teamSkaterStats.goals > data.teams.away.teamStats.teamSkaterStats.goals){
      let other = data.teams.home.team.name
      let score = data.teams.home.teamStats.teamSkaterStats.goals + '-' +  data.teams.away.teamStats.teamSkaterStats.goals
      winOrLossText.innerText = `We lost to the ${other} ${score} :(`
      console.log('losers')

      mainImg.src = 'lose.jpg'
     }
     else if (data.teams.home.team.name === 'Vancouver Canucks' && data.teams.away.teamStats.teamSkaterStats.goals > data.teams.home.teamStats.teamSkaterStats.goals) {
      let other = data.teams.away.team.name
      let score = data.teams.away.teamStats.teamSkaterStats.goals + '-' +  data.teams.home.teamStats.teamSkaterStats.goals
      winOrLossText.innerText = `We lost to the ${other} ${score} :(`
      console.log('losers')
      mainImg.src = 'lose.jpg'

     }

  })})

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