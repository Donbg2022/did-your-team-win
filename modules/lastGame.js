

async function lastGameInfo(chosenTeamAbb) {
  //get request to get chosenTeams schedule
  const teamInfo = await axios.get(`https://whowon.netlify.app/nhl-api/${chosenTeamAbb}/club-schedule`)
  //variable to hold the gameID of the latest game
  let gameID;
  //variable to insert text into page 
  const lastGame = document.querySelector("#lastGame")


  //loop through array of teams schedule to find last game played
  for(let i = 0; i < 83; i++){
    //check each index to see if gameOutcome is available. if not the last game played is index [i]
    if(teamInfo.data.games[i].gameOutcome != null &&  teamInfo.data.games[i+1].gameOutcome == null){
      //set gameID with the ID of the last played game for selected team
      gameID = teamInfo.data.games[i].id
    }
  }
  
  //Get request to get information on the latest game using the gameID aquired earlier
  const test =  await axios.get(`https://whowon.netlify.app/nhl-api/${gameID}/boxscore`)

  //declare variables to hold property path's
  let homeScore = test.data.homeTeam.score
  let awayScore = test.data.awayTeam.score
  let homeTeamAbb = test.data.homeTeam.abbrev

  //check if the chosenTeam won the game and what the score was
  if(homeTeamAbb == chosenTeamAbb){
    if(homeScore > awayScore){
      lastGame.innerHTML = `${chosenTeamAbb} wins ${homeScore} to ${awayScore}`
    }else{
      lastGame.innerHTML = `${chosenTeamAbb} loses ${homeScore} to ${awayScore}`
    }
  }else{
    if(awayScore > homeScore){
      lastGame.innerHTML = `${chosenTeamAbb} wins ${awayScore} to ${homeScore}`
    }else{
      lastGame.innerHTML = `${chosenTeamAbb} loses ${homeScore} to ${awayScore}`
    }  
  }
}

export {lastGameInfo}