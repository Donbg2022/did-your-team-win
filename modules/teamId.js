import {teamSelectMenu, teams} from '../modules/teamColors.js';

//choosefullname is declared to be used to check if the teams name is correct on winOrLose
let chosenTeamFullName = ''
//chosen ID is the variable of the ID that represents the fave selected team
let chosenId = ''


//async function that calls a list of teams with corresponding ID's
//then runs a for loop over the array to check which ID should be used
async function getTeamId(){
  const chosenTeamId = await axios.get('https://statsapi.web.nhl.com/api/v1/teams')
for (let i = 0; i < chosenTeamId.data.teams.length; i++) {
  if (chosenTeamId.data.teams[i].name === teams[teamSelectMenu.value].teamName){
     chosenId = chosenTeamId.data.teams[i].id
     chosenTeamFullName = chosenTeamId.data.teams[i].name
}
console.log(chosenId, chosenTeamFullName)
}

}

export { getTeamId, chosenId, chosenTeamFullName}

