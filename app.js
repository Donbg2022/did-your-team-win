//api fetch to get game boxscore
const gameIdLocater = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.previous')
.then((res) =>{
  //getting the game id and using a template literal to insert into a new api get request which will get the last game played 
  let id = res.data.teams[0].previousGameSchedule.dates[0].games[0].gamePk
  let nhlGameId = `https://statsapi.web.nhl.com/api/v1/game/${id}/boxscore`;
  const nhlStats = axios.get(nhlGameId)
  .then(whoWon)
  })
  let nucksGoals = 0
  let other = 0


  //function to determine the winner of most previous game
function whoWon(result){
  if (result.data.teams.home.team.name === 'Vancouver Canucks'){
    //canucks and other team goal count updated
let nucksGoals = result.data.teams.home.teamStats.teamSkaterStats.goals
let other = result.data.teams.away.teamStats.teamSkaterStats.goals

//return an if statement 
if (nucksGoals > other){
 return 'winnner' + nucksGoals
}else if (nucksGoals === other){
  return 'OT' + nucksGoals + '-' + other
}else {
  return loser
}

}else if (result.data.teams.home.team.name !== 'Vancouver Canucks'){
let nucksGoals = result.data.teams.away.teamStats.teamSkaterStats.goals
let other = result.data.teams.home.teamStats.teamSkaterStats.goals

if (nucksGoals > other){
  return 'winnner' + nucksGoals
}else if (nucksGoals === other){
  return 'OT' + nucksGoals + '-' + other
}else {
  return loser
}
}
}



const roster = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23/roster')


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

//change photo if we lost vs if we won
const img = document.querySelector('img')
const winner = document.querySelector('#winbtn')

winner.addEventListener('click', gameIdLocater);