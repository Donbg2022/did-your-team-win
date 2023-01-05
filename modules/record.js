import { chosenId } from "./teamId.js"
// get the record of the canucks

async function teamRecord(){
  let recordId = `https://statsapi.web.nhl.com/api/v1/teams/${chosenId}/stats`
  
  const data = await axios.get(recordId)
  console.log(data)
  let trueRecord = data.data.stats[0].splits[0].stat.wins + '-' + data.data.stats[0].splits[0].stat.losses + '-' + data.data.stats[0].splits[0].stat.ot
  //add the record to a empty div to display at the press of the win button
  record.innerText = `Record: ${trueRecord}`

}

export {teamRecord}