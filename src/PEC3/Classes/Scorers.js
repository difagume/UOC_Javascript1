export default class Scorers {
  constructor(data) {
    this.scorers = data;
  }

  logData() {
    console.log("Scorers:");

    this.scorers.forEach(scorer => {
      const { player, team, goals } = scorer;

      console.log(`${player} (${team}): ${goals}`);
    });
  }

  renderData() {
    const sidebarDiv = document.getElementById('sidebar')
    const scorersDiv = document.createElement('div')
    scorersDiv.setAttribute('id', 'scorers')

    const tTitulo = document.createElement('h2')
    tTitulo.innerText = 'Scorers'

    scorersDiv.appendChild(tTitulo)

    const table = document.createElement('table');
    table.setAttribute('class', 'scorers')

    const header = document.createElement('tr')

    const playerHeaderCell = document.createElement('th')
    const teamHeaderCell = document.createElement('th')
    const goalsHeaderCell = document.createElement('th')

    playerHeaderCell.innerText = 'Player'
    teamHeaderCell.innerText = 'Team'
    goalsHeaderCell.innerText = 'Goals'

    header.appendChild(playerHeaderCell)
    header.appendChild(teamHeaderCell)
    header.appendChild(goalsHeaderCell)

    table.appendChild(header)


    this.scorers.forEach(scorer => {

      //console.log(scorer);

      const { player, team, goals } = scorer

      const row = document.createElement('tr')

      const playerCell = document.createElement('td')
      const teamCell = document.createElement('td')
      const goalsCell = document.createElement('td')

      playerCell.textContent = player
      teamCell.textContent = team
      goalsCell.textContent = goals

      row.appendChild(playerCell)
      row.appendChild(teamCell)
      row.appendChild(goalsCell)

      table.appendChild(row)
    })

    scorersDiv.appendChild(table);

    sidebarDiv.appendChild(scorersDiv)
  }
}
