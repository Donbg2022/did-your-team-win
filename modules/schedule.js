import {chosenId, chosenTeamFullName} from './teamId.js'

// on next game button click get and display the chosen teams next game
async function statType(){
  const scheduleId = `https://statsapi.web.nhl.com/api/v1/teams/${chosenId}?expand=team.schedule.next`
  const data = await axios.get(scheduleId)

  const homeTeam = data.data.teams[0].nextGameSchedule.dates[0].games[0].teams.home.team.name
  const awayTeam = data.data.teams[0].nextGameSchedule.dates[0].games[0].teams.away.team.name
  const gameDate = new Date(data.data.teams[0].nextGameSchedule.dates[0].games[0].gameDate).toDateString()
  
  if (homeTeam === chosenTeamFullName){
      document.querySelector('#next-game').innerHTML =`<p>Next game the ${chosenTeamFullName} play is at home against the ${awayTeam} on ${gameDate}</p>`

  }else if (homeTeam !== chosenTeamFullName){
    document.querySelector('#next-game').innerHTML = `<p>Next game the ${chosenTeamFullName} play is  on the road against the ${homeTeam} on ${gameDate}</p>`
}
}


export default statType