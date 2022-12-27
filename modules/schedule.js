
const statType = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.next')
.then((data) => {
  console.log(data)

  const homeTeam = data.data.teams[0].nextGameSchedule.dates[0].games[0].teams.home.team.name
  const awayTeam = data.data.teams[0].nextGameSchedule.dates[0].games[0].teams.away.team.name
  const gameDate = new Date().toDateString(data.data.teams[0].nextGameSchedule.dates[0].games[0].gameDate)
  
  if (homeTeam === 'Vancouver Canucks'){
      document.querySelector('#next-game').innerText = `The canucks play at home against ${homeTeam} on ${gameDate}`
      
  }else if (awayTeam === 'Vancouver Canucks'){
    document.querySelector('#next-game').innerText = `The canucks play on the road against ${homeTeam} on ${gameDate}`
}
})


export default statType