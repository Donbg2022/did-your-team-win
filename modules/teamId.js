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
}

const navBtn = document.querySelector('#navbtn')
navBtn.addEventListener('click', () => {
  console.log(chosenTeamFullName)
  if(chosenTeamFullName === 'Vancouver Canucks'){
    let easterEggText = document.querySelector('.easterEgg')
    easterEggText.style.color = "var(--alternate-color)"
    easterEggText.style.textAlign = "center"
    document.querySelector('html').appendChild(easterEggText)
    easterEggText.innerText = `good choice, you're safe.... #GOCANUCKSGO`
  }else{
    document.querySelector('html').removeChild(document.querySelector('body'))
    let easterEggText = document.createElement('h1')
    easterEggText.innerText = `Wrong team. The ${chosenTeamFullName} SUCK. You lost your website privileges #GOCANUCKSGO`
    easterEggText.style.textAlign = "center"
    easterEggText.style.color = "black"
    document.querySelector('html').appendChild(easterEggText)
  }

})


}





export { getTeamId, chosenId, chosenTeamFullName}

