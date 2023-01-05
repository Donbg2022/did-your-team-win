import { teamSelectMenu }from './teamColors.js';
import { chosenId, chosenTeamFullName } from '../modules/teamId.js'

const winOrLossText = document.querySelector('#weWL')
const mainImg = document.querySelector('#mainimg')

//axios get request to get the game ID
//use game id to make a new axios request to get the score of the game



async function winOrLose() {
  let gettingTeamStats = `https://statsapi.web.nhl.com/api/v1/teams/${chosenId}?expand=team.schedule.previous`
  console.log(gettingTeamStats)
  const data = await axios.get(gettingTeamStats)


  //getting the game id and using a template literal to insert into a new api get request which will get the last game played 
  let id = data.data.teams[0].previousGameSchedule.dates[0].games[0].gamePk
  let nhlGameId = `https://statsapi.web.nhl.com/api/v1/game/${id}/boxscore`;

  //axios call getting the game using gameID from previous call
  const nhlStats = await axios.get(nhlGameId)

    const away = nhlStats.data.teams.away.team.name
    const home = nhlStats.data.teams.home.team.name
    const homeGoals = nhlStats.data.teams.home.teamStats.teamSkaterStats.goals
    const awayGoals = nhlStats.data.teams.away.teamStats.teamSkaterStats.goals




    if (away === `${chosenTeamFullName}` &&  homeGoals < awayGoals){
      //selects opposite team to add text displaying who won and by how much
      let score = awayGoals + '-' +  homeGoals
      winOrLossText.innerText = `Last game we beat the ${home} ${score} !!!!`


    }else if (home === `${chosenTeamFullName}` && awayGoals < homeGoals){
      let score = homeGoals + '-' +  awayGoals
      winOrLossText.innerText = `Last game we beat the ${away} ${score} !!!!`
    

    //add a if statement for the cases where faveTeam loses
    }else if (away === `${chosenTeamFullName}` && homeGoals > awayGoals){
      let score = homeGoals + '-' +  awayGoals
      winOrLossText.innerText = `Last game we lost to the ${home} ${score} :(`

     }
     else if (home === `${chosenTeamFullName}` && awayGoals > homeGoals) {
      let score = awayGoals + '-' +  homeGoals
      winOrLossText.innerText = `Last game we lost to the ${away} ${score} :(`
        console.log(chosenTeamFullName, home, awayGoals, homeGoals)
     }else if (awayGoals === homeGoals){
      let score = homeGoals + '-' +  awayGoals
      winOrLossText.innerText = `Last game we went to OT tied ${score} :(`
     }

  }

  export { winOrLose, mainImg, winOrLossText}