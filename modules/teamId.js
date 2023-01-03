import {teamSelectMenu, teams} from '../modules/teamColors.js'
let chosenId = ''
async function teamId(){
  const chosenTeamId = await axios.get('https://statsapi.web.nhl.com/api/v1/teams')
  console.log(chosenTeamId)

for (let i = 0; i < chosenTeamId.data.teams.length; i++) {
  if (chosenTeamId.data.teams[i].name === teams[teamSelectMenu.value].teamName){
     let chosenId = chosenTeamId.data.teams[i].id
     console.log(chosenId)
}else{
  console.log('fail')
}




}

}

export { teamId }

