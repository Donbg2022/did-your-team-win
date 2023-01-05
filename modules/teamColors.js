import statType from "./schedule.js";
import { getTeamId } from "./teamId.js"
import { winOrLose } from './winOrLose.js';

//define root variable to be able to update css variables 
let root= document.querySelector(':root')


//object of teams colors and a nav image to update page theme based on users fave team
let teams = {
  Anaheim: { 
    primary: '#b5985a',
    secondary: '#111111',
    alternate: '#f95602',
    teamName: 'Anaheim Ducks'
    },
  Arizona: {
    primary: '#8c2633',
    secondary: '#e2d6b5',
    alternate: '#111111',
    teamName: 'Arizona Coyotes'
  },
  Boston: {
    primary: '#111111',
    secondary: '#fcb514',
    alternate: '#fff',
    teamName: 'Boston Bruins'
  },
  Buffalo: {
    primary: '#002654',
    secondary: '#fcb514',
    alternate: '#adafaa',
    teamName: 'Buffalo Sabres'
  },
  Calgary: {
    primary: '#ce1126',
    secondary: '#f3bc52',
    alternate: '#111111',
    teamName: 'Calgary Flames'
  },
  Carolina: {
    primary: '#ce0000',
    secondary: '#111111',
    alternate: '#a2a9ad',
    teamName: 'Carolina Hurricanes'
  },
  Chicago: {
    primary: 'cf0a2c#',
    secondary: '#ffd100',
    alternate: '#000000',
    teamName: 'Chicago Blackhawks'
  },
  Colorado: {
    primary: '#6f263d',
    secondary: '#236192',
    alternate: '#a2aaad',
    teamName: 'Colorado Avalanche'
  },
  Columbus: {
    primary: '#002654',
    secondary: '#ce1126',
    alternate: '#a4a9ad',
    teamName: 'Columbus Blue Jackets'
  },
  Dallas: {
    primary: '#006847',
    secondary: '#111111',
    alternate: '#8f8f8c',
    teamName: 'Dallas Stars'
  },
  Detroit: {
    primary: '#ce1126',
    secondary: '#fff',
    alternate: '#111111',
    teamName: 'Detroit Red Wings'
  },
  Edmonton: {
    primary: '#041e41',
    secondary: '#ff4c00',
    alternate: '#fff',
    teamName: 'Edmonton Oilers'
  },
  Florida: {
    primary: '#041e42',
    secondary: '#b9975b',
    alternate: '#c8102e',
    teamName: 'Florida Panthers'
  },
  LA: {
    primary: '#111111',
    secondary: '#acaea9',
    alternate: '#fff',
    teamName: 'Los Angeles Kings'
  },
  Minnesota: {
    primary: '#024930',
    secondary: '#af1e24',
    alternate: '#edaa00',
    teamName: 'Minnesota Wild'
  },
  Montreal: {
    primary: '#af1e2d',
    secondary: '#192168',
    alternate: '#fff',
    teamName: 'Montréal Canadiens'
  },
  Nashville: {
    primary: '#041e42',
    secondary: '#ffb81c',
    alternate: '#fff',
    teamName: 'Nashville Predators'
  },
  NJ: {
    primary: '#ce1126',
    secondary: '#111111',
    alternate: '#fff',
    teamName: 'New Jersey Devils'
  },
  NYI: {
    primary: '#00539b',
    secondary: '#f47d30',
    alternate: '#fff',
    teamName: 'New York Islanders'
  },
  NYR: {
    primary: '#0038a8',
    secondary: '#ce1126',
    alternate: '#fff',
    teamName: 'New York Rangers'
  },
  Ottawa: {
    primary: '#bf910c',
    secondary: '#ce1126',
    alternate: '#111111',
    teamName: 'Ottawa Senators'
  },
  Philadelphia: {
    primary: '#111111',
    secondary: '#f74902',
    alternate: '#fff',
    teamName: 'Philadelphia Flyers'
  },
  Pittsburgh: {
    primary: '#111111',
    secondary: '#fcb514',
    alternate: '#fff',
    teamName: 'Pittsburgh Penguins'
  },
  SanJose: {
    primary: '#006d75',
    secondary: '#ea7200',
    alternate: '#111111',
    teamName: 'San Jose Sharks'
  },
  Seattle: {
    primary: '#001628',
    secondary: '#99D9D9',
    alternate: '#68A2B9',
    teamName: 'Seattle Kraken'
  },
  StLouis: {
    primary: '#002654',
    secondary: '#fcb514',
    alternate: '#002f87',
    teamName: 'St. Louis Blues'
  },
  Tampa: {
    primary: '#002868',
    secondary: '#fff',
    alternate: '#00205b',
    teamName: 'Tampa Bay Lightning'
  },
  Toronto: {
    primary: '#000205b',
    secondary: '#white',
    alternate: '#003e7e',
    teamName: 'Toronto Maple Leafs'
  },
  Vancouver: {
    primary: '#001f5b',
    secondary: '#008852',
    alternate: '#99999a',
    teamName: 'Vancouver Canucks'
  },
  Vegas: {
    primary: '#b4975a',
    secondary: '#333f42',
    alternate: '#fff',
    teamName: 'Vegas Golden Knights'
  },
  Washington: {
    primary: '#041e41',
    secondary: '#cf0a2c',
    alternate: '#fff',
    teamName: 'Washington Capitals'
  },
  Winnipeg: {
    primary: '#041e41',
    secondary: '#ac162c',
    alternate: '#7b303e',
    teamName: 'Winnipeg Jets'
  }
  }


  //dropdown selector to choose fave team 
  const dropdownSubmit = document.querySelector('.form-btn')
  dropdownSubmit.addEventListener('click', teamSelect)
  
  //function to get the value of the dropdown menu
  //also calls colorChanger function which updates css variables to change theme of page
  //teamId is also called which updates the axios request to update selected team name and return correct one
const teamSelectMenu = document.querySelector('#team-names')
function teamSelect(e) {
  e.preventDefault()
  cssVarUpdate()
  getTeamId()

//rename functions

}

const navImg = document.querySelector('#nav-img')
//updates css variables based on the 'team' objecct
function cssVarUpdate(){
  root.style.setProperty('--primary-color', teams[teamSelectMenu.value].primary)
  root.style.setProperty('--secondary-color', teams[teamSelectMenu.value].secondary)
  root.style.setProperty('--alternate-color', teams[teamSelectMenu.value].alternate)
  navImg.src = `./images/logos/${teamSelectMenu.value}.png`
}


export {root, teams, teamSelectMenu}