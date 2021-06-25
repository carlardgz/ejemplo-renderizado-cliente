const drivers = [
  {
    name: "Kimi",
    number: 7,
    team: 1
  },
  {
    name: "Gio",
    number: 99,
    team: 1
  },
  {
    name: "Pierre",
    number: 10,
    team: 2
  },
  {
    name: "Yuki",
    number: 22,
    team: 2
  },
  {
    name: "Nando",
    number: 14,
    team: 3
  },
  {
    name: "Esteban",
    number: 31,
    team: 3
  },
  {
    name: "Seb",
    number: 5,
    team: 4
  },
  {
    name: "Lance",
    number: 18,
    team: 4
  },
  {
    name: "Charles",
    number: 16,
    team: 5
  },
  {
    name: "Carlos",
    number: 55,
    team: 5
  },
  {
    name: "Nikita",
    number: 9,
    team: 6
  },
  {
    name: "Mick",
    number: 47,
    team: 6
  },
  {
    name: "Daniel",
    number: 3,
    team: 7
  },
  {
    name: "Lando",
    number: 4,
    team: 7
  },
  {
    name: "Lewis",
    number: 44,
    team: 8
  },
  {
    name: "Valtteri",
    number: 77,
    team: 8
  },
  {
    name: "Sergio",
    number: 11,
    team: 9
  },
  {
    name: "Max",
    number: 33,
    team: 9
  },
  {
    name: "Nicholas",
    number: 6,
    team: 10
  },
  {
    name: "George",
    number: 63,
    team: 10
  },
]

const teams = [
  {
    id: 1,
    name: "Alfa Romeo"
  },
  {
    id: 2,
    name: "AlphaTauri"
  },
  {
    id: 3,
    name: "Alpine"
  },
  {
    id: 4,
    name: "Aston Martin"
  },
  {
    id: 5,
    name: "Ferrari"
  },
  {
    id: 6,
    name: "Haas"
  },
  {
    id: 7,
    name: "McLaren"
  },
  {
    id: 8,
    name: "Mercedes"
  },
  {
    id: 9,
    name: "Red Bull"
  },
  {
    id: 10,
    name: "Williams"
  }
]

const select = document.querySelector('#teams')
const table = document.querySelector('table')

function renderTeams(team) {
  const currentTeam = team

  const body = table.querySelector('tbody')

  while (body.lastChild) {
    body.removeChild(body.lastChild)
  }

  const data = drivers
    .sort((d1, d2) => d1.team - d2.team)
    .filter(d => d.team == currentTeam || currentTeam == 0)
    .map(function(d) {
      return {
        name: d.name,
        number: d.number,
        team: teams.find(t => t.id == d.team).name
      }
    })

  data.forEach(d => {
    const row = document.createElement('tr')
    const tdNumber = document.createElement('td')
    const tdName = document.createElement('td')
    const tdTeam = document.createElement('td')

    tdNumber.innerText = d.number
    tdName.innerText = d.name
    tdTeam.innerText = d.team

    row.appendChild(tdNumber)
    row.appendChild(tdName)
    row.appendChild(tdTeam)

    body.appendChild(row)
  })
}

select.addEventListener('change', function(ev) {
  renderTeams(ev.currentTarget.value)
})


const button = document.querySelector('#btn')

button.addEventListener('click', function() {
  drivers.push({
    number: document.querySelector('#number').value,
    name: document.querySelector('#name').value,
    team: document.querySelector('#team').value
  })

  renderTeams(document.querySelector('#team').value)
})