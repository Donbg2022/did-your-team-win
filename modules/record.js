import axios from "axios"

//declare variables for the teams wins, losses, otLosses
let wins, losses, otLosses 

//variable to insert data into html
const record = document.querySelector("#record") 

//async function that gets the selected teams record and displays it
async function getRecord(teamSelected){
  //try catch block to catch any errors
  try{
      //awwait axios request to NHL API to get standings and stats
    const standings = await axios.get("https://api-web.nhle.com/v1/standings/now") 

    //loop through the API response to get the team that was chosen 
    for(let i = 0; i < 32; i++){
      //if the team selected matches the team of the current index execute following code
      if( standings.data.standings[i].teamAbbrev.default == teamSelected){
        //assign values to pre-declared variables 
        wins = standings.data.standings[i].wins
        losses = standings.data.standings[i].losses
        otLosses = standings.data.standings[i].otLosses

        //insert the variables into the html
        record.innerHTML = `${wins} - ${losses} - ${otLosses}`
      }
    }
  }catch(error){
    console.log(error)
  }


}

export {getRecord}