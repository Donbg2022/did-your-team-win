import { teamSelectMenu }from './teamColors.js'

const winOrLossText = document.querySelector('#weWL')
const mainImg = document.querySelector('#mainimg')

//axios get request to get the game id
//use game id to make a new axios request to get the goals for the game

const gameIdLocater = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.previous')
.then((res) =>{
  
  //getting the game id and using a template literal to insert into a new api get request which will get the last game played 
  let id = res.data.teams[0].previousGameSchedule.dates[0].games[0].gamePk
  let nhlGameId = `https://statsapi.web.nhl.com/api/v1/game/${id}/boxscore`;

  const nhlStats = axios.get(nhlGameId)
.then(({data})=> {
    const away = data.teams.away.team.name
    const home = data.teams.home.team.name
    const homeGoals = data.teams.home.teamStats.teamSkaterStats.goals
    const awayGoals = data.teams.away.teamStats.teamSkaterStats.goals

    if (away === `${teamSelectMenu.value}` &&  homeGoals < awayGoals){
      //selects opposite team to add text displaying who won and by how much
      let score = awayGoals + '-' +  homeGoals
      winOrLossText.innerText = `Last game we beat the ${home} ${score} !!!!`
      // display this photo on a win
      mainImg.src = './images/win.jpg'


    }else if (home === 'Vancouver Canucks' && awayGoals < homeGoals){
      let score = homeGoals + '-' +  awayGoals
      winOrLossText.innerText = `Last game we beat the ${away} ${score} !!!!`
      // display this photo on a win
      mainImg.src = './images/win.jpg'
    

    //add a if statement for the cases where canucks lose
    }else if (away === 'Vancouver Canucks' && homeGoals > awayGoals){
      let score = homeGoals + '-' +  awayGoals
      winOrLossText.innerText = `Last game we lost to the ${home} ${score} :(`
      mainImg.src = './images/lose.jpg'


     }
     else if (home === 'Vancouver Canucks' && awayGoals > homeGoals) {
      let score = awayGoals + '-' +  homeGoals
      winOrLossText.innerText = `Last game we lost to the ${home} ${score} :(`
      mainImg.src = './images/lose.jpg'
     }

  })})

  export { gameIdLocater, mainImg, winOrLossText }