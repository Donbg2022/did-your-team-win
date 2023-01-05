
// async function statType(){
//   const data = await axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.next')


//   const homeTeam = data.data.teams[0].nextGameSchedule.dates[0].games[0].teams.home.team.name
//   const awayTeam = data.data.teams[0].nextGameSchedule.dates[0].games[0].teams.away.team.name
//   const gameDate = new Date(data.data.teams[0].nextGameSchedule.dates[0].games[0].gameDate).toDateString()
  
//   if (homeTeam === 'Vancouver Canucks'){
//       document.querySelector('#next-game').innerHTML =`<p>Next game the canucks play at home against the <span style="background-color: ${backColor}; padding: 0 .5rem">${awayTeam}</span> on <span style="background-color: ${backColor}; padding: 0 .5rem">${gameDate}</span></p>`

//   }else if (awayTeam === 'Vancouver Canucks'){
//     document.querySelector('#next-game').innerHTML = `<p>Next game the canucks play on the road against the <span style="background-color: ${backColor}; padding: 0 .5rem">${homeTeam}</span> on <span style="background-color: ${backColor}; padding: 0 .5rem">${gameDate}</span></p>`
// }
// }



// export default statType