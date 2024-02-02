

async function nextGameInfo(chosenTeamAbb) {
  const teamInfo = await axios.get(`https://nhl-winners.onrender.com/nhl-api/${chosenTeamAbb}/club-schedule`)
  //variable to hold the gameID of the next game
  let gameID;

  //variable to insert text into page 
  const nextGame = document.querySelector("#nextGame")
  console.log(teamInfo)

  //loop through array of teams schedule to find the next game
  for(let i = 0; i < 83; i++){
    //check each index to see if gameOutcome is available. if not the next game is index [i]
    if(teamInfo.data.games[i].gameOutcome == null && teamInfo.data.games[i - 1] !== null){
      //set gameID with the ID of the next game for selected team
      gameID = teamInfo.data.games[i].id
      console.log(gameID)
   
    }
  }
  
  //Get request to get information on the next game using the gameID aquired earlier
  const game =  await axios.get(`https://nhl-winners.onrender.com/nhl-api/${gameID}/boxscore`)
  console.log(game)
  //declare variables to hold property path's
  let homeTeamAbb = game.data.homeTeam.abbrev
  let awayTeamAbb = game.data.awayTeam.abbrev

  //Display the next game info
  nextGame.innerHTML = `${awayTeamAbb} @ ${homeTeamAbb} `
}

export {nextGameInfo}