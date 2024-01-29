

async function nextGameInfo(chosenTeamAbb) {
  //get request to get chosenTeams schedule
  const teamInfo = await axios.get(`https://api-web.nhle.com/v1/club-schedule-season/${chosenTeamAbb}/now`)
  console.log(teamInfo)
  //loop through array of teams schedule to find last game played
  for(let i = 0; i < 83; i++){
    //check each index to see if gameOutcome is available. if not the last game played is index [i]
    if(teamInfo.data.games[i].gameOutcome != null &&  teamInfo.data.games[i+1].gameOutcome == null){
      //set gameID with the ID of the last played game for selected team
      gameID = teamInfo.data.games[i].id
    }
  }
}