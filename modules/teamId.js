import {teamSelectMenu, teams} from '../modules/teamColors.js';


let chosenTeamFullName = ''
let chosenId = ''
async function teamId(){
  const chosenTeamId = await axios.get('https://statsapi.web.nhl.com/api/v1/teams')
  
for (let i = 0; i < chosenTeamId.data.teams.length; i++) {
  if (chosenTeamId.data.teams[i].name === teams[teamSelectMenu.value].teamName){
     chosenId = chosenTeamId.data.teams[i].id
     chosenTeamFullName = chosenTeamId.data.teams[i].name
}else{
  console.log('fail')
}



}

}

export { teamId, chosenId, chosenTeamFullName}

