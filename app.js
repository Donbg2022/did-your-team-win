//api fetch to get game boxscore 
  let nucksGoals = 0
  let other = 0
  const mainImg = document.querySelector('#mainimg')
  const winOrLossText = document.querySelector('#weWL')


  //function to determine the winner of most previous game





const gameIdLocater = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.previous')
.then((res) =>{
  //getting the game id and using a template literal to insert into a new api get request which will get the last game played 
  let id = res.data.teams[0].previousGameSchedule.dates[0].games[0].gamePk
  let nhlGameId = `https://statsapi.web.nhl.com/api/v1/game/${id}/boxscore`;
  const nhlStats = axios.get(nhlGameId)
  .then(({data})=> {
    if (data.teams.away.team.name === 'Vancouver Canucks' && data.teams.home.teamStats.teamSkaterStats.goals < data.teams.away.teamStats.teamSkaterStats.goals){
      let other = data.teams.home.team.name
      let score = data.teams.away.teamStats.teamSkaterStats.goals + '-' +  data.teams.home.teamStats.teamSkaterStats.goals
      winOrLossText.innerText = `We beat the ${other} ${score} !!!!`
      console.log('winnners')
      //make this a happy photo
      // mainImg.src = 'lumberjack.png'
    }else if (data.teams.home.team.name === 'Vancouver Canucks' && data.teams.away.teamStats.teamSkaterStats.goals < data.teams.home.teamStats.teamSkaterStats.goals){
      let other = data.teams.away.team.name
      let score = data.teams.home.teamStats.teamSkaterStats.goals + '-' +  data.teams.away.teamStats.teamSkaterStats.goals
      winOrLossText.innerText = `We beat the ${other} ${score} !!!!`
      console.log('winnners')
      //make this a happy photo
      // mainImg.src = 'lumberjack.png'
    }
    else if (data.teams.away.team.name === 'Vancouver Canucks' && data.teams.home.teamStats.teamSkaterStats.goals > data.teams.away.teamStats.teamSkaterStats.goals){
      let other = data.teams.home.team.name
      let score = data.teams.home.teamStats.teamSkaterStats.goals + '-' +  data.teams.away.teamStats.teamSkaterStats.goals
      winOrLossText.innerText = `We lost to the ${other} ${score}:(`
      console.log('losers')
      //change image here
     }
     else if (data.teams.home.team.name === 'Vancouver Canucks' && data.teams.away.teamStats.teamSkaterStats.goals > data.teams.home.teamStats.teamSkaterStats.goals) {
      let other = data.teams.away.team.name
      let score = data.teams.away.teamStats.teamSkaterStats.goals + '-' +  data.teams.home.teamStats.teamSkaterStats.goals
      winOrLossText.innerText = `We lost to the ${other} ${score}:(`
      console.log('losers')
      //change image here
     }

  })})

// get the record of the canucks
const canucksRecord = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23/stats')
.then(({data}) => {
  let trueRecord = data.stats[0].splits[0].stat.wins + '-' + data.stats[0].splits[0].stat.losses + '-' + data.stats[0].splits[0].stat.ot
  record.innerText = `Record: ${trueRecord}`
})

const roster = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23/roster')
.then(({data}) => {
  console.log(data)
})


//adding reacctivity to the navbar
const burger = document.querySelector('#burger')

let click = 1
//add event listener to make a drop down menu of options
burger.addEventListener('click', function(){
  //adds 1 to click variable and uses if statement to open and close the links 
  click++
  if (click % 2 !== 0){
    return document.querySelector('#reactivelinks').style.display = 'none'
  }else{
    return document.querySelector('#reactivelinks').style.display = 'block'
  }

})

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