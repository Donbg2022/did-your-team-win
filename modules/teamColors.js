

let root= document.querySelector(':root')



let teams = {
  Anaheim: { 
    primary: '#b5985a',
    secondary: '#111111',
    alternate: '#f95602'
    },
  Arizona: {
    primary: '#8c2633',
    secondary: '#e2d6b5',
    alternate: '#111111'
  },
  Boston: {
    primary: '#111111',
    secondary: '#fcb514',
    alternate: '#fff'
  },
  Buffalo: {
    primary: '#002654',
    secondary: '#fcb514',
    alternate: '#adafaa'
  },
  Calgary: {
    primary: '#ce1126',
    secondary: '#f3bc52',
    alternate: '#111111'
  },
  Carolina: {
    primary: '#ce0000',
    secondary: '#111111',
    alternate: '#a2a9ad'
  },
  Chicago: {
    primary: 'cf0a2c#',
    secondary: '#ffd100',
    alternate: '#000000'
  },
  Colorado: {
    primary: '#6f263d',
    secondary: '#236192',
    alternate: '#a2aaad'
  },
  Columbus: {
    primary: '#002654',
    secondary: '#ce1126',
    alternate: '#a4a9ad'
  },
  Dallas: {
    primary: '#006847',
    secondary: '#111111',
    alternate: '#8f8f8c'
  },
  Detroit: {
    primary: '#ce1126',
    secondary: '#fff',
    alternate: '#ce1126'
  },
  Edmonton: {
    primary: '#041e41',
    secondary: '#ff4c00',
    alternate: '#fff'
  },
  Florida: {
    primary: '#041e42',
    secondary: '#b9975b',
    alternate: '#c8102e'
  },
  LA: {
    primary: '#111111',
    secondary: '#acaea9',
    alternate: '#fff'
  },
  Minnesota: {
    primary: '#024930',
    secondary: '#af1e24',
    alternate: '#edaa00'
  },
  Montreal: {
    primary: '#af1e2d',
    secondary: '#192168',
    alternate: '#fff'
  },
  Nashville: {
    primary: '#041e42',
    secondary: '#ffb81c',
    alternate: '#fff'
  },
  NJ: {
    primary: '#ce1126',
    secondary: '#111111',
    alternate: '#fff'
  },
  NYI: {
    primary: '#00539b',
    secondary: '#f47d30',
    alternate: '#fff'
  },
  NYR: {
    primary: '#0038a8',
    secondary: '#ce1126',
    alternate: '#fff'
  },
  Ottawa: {
    primary: '#bf910c',
    secondary: '#ce1126',
    alternate: '#111111'
  },
  Philadelphia: {
    primary: '#111111',
    secondary: '#f4902',
    alternate: '#fff'
  },
  Pittsburgh: {
    primary: '#black',
    secondary: '#fcb514',
    alternate: '#fff'
  },
  SJ: {
    primary: '#006d75',
    secondary: '#ea7200',
    alternate: '#111111'
  },
  Seattle: {
    primary: '#001628',
    secondary: '#99D9D9',
    alternate: '#68A2B9'
  },
  Stlouis: {
    primary: '#002654',
    secondary: '#fcb514',
    alternate: '#002f87'
  },
  Tampa: {
    primary: '#002868',
    secondary: '#fff',
    alternate: '#00205b'
  },
  Toronto: {
    primary: '#000205b',
    secondary: '#white',
    alternate: '#003e7e'
  },
  Vancouver: {
    primary: '#001f5b',
    secondary: '#008852',
    alternate: '#99999a'
  },
  Vegas: {
    primary: '#b4975a',
    secondary: '#333f42',
    alternate: '#fff'
  },
  Washington: {
    primary: '#041e41',
    secondary: '#cf0a2c',
    alternate: '#fff',
  },
  Winnipeg: {
    primary: '#041e41',
    secondary: '#ac162c',
    alternate: '#7b303e'
  }
  }


const teamSelectMenu = document.querySelector('#team-names')
function teamSelect(e) {
  e.preventDefault()
  console.log(teamSelectMenu.value)
  colorChanger()
}

function colorChanger(){
  root.style.setProperty('--primary-color', teams[teamSelectMenu.value].primary)
  root.style.setProperty('--secondary-color', teams[teamSelectMenu.value].secondary)
  root.style.setProperty('--alternate-color', teams[teamSelectMenu.value].alternate)
}


export {root, teams, teamSelect}