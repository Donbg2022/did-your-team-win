import {chosenId, chosenTeamFullName} from './teamId.js'


async function statType(){
  console.log(chosenId, chosenTeamFullName)
  const scheduleId = `https://statsapi.web.nhl.com/api/v1/teams/${chosenId}?expand=team.schedule.next`
  const data = await axios.get(scheduleId)
console.log(data)

  const homeTeam = data.data.teams[0].nextGameSchedule.dates[0].games[0].teams.home.team.name
  const awayTeam = data.data.teams[0].nextGameSchedule.dates[0].games[0].teams.away.team.name
  const gameDate = new Date(data.data.teams[0].nextGameSchedule.dates[0].games[0].gameDate).toDateString()
  
  if (homeTeam === chosenTeamFullName){
      document.querySelector('#next-game').innerHTML =`<p>Next game the ${chosenTeamFullName} play is at home against the ${awayTeam} on ${gameDate}</p>`

  }else if (awayTeam === 'Vancouver Canucks'){
    document.querySelector('#next-game').innerHTML = `<p>Next game the ${chosenTeamFullName} play is  on the road against the ${homeTeam} on ${gameDate}</p>`
}
}



export default statType