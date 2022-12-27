// get the record of the canucks
const canucksRecord = axios.get('https://statsapi.web.nhl.com/api/v1/teams/23/stats')
.then(({data}) => {
  let trueRecord = data.stats[0].splits[0].stat.wins + '-' + data.stats[0].splits[0].stat.losses + '-' + data.stats[0].splits[0].stat.ot
  //add the record to a empty div to display at the press of the win button
  record.innerText = `Record: ${trueRecord}`

})

export default { canucksRecord }