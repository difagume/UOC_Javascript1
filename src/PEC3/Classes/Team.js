export default class Team {
  constructor(data) {
    const { team, teamId, stadium, website, logo } = data;

    this.teamId = teamId;
    this.team = team;
    this.stadium = stadium;
    this.website = website;
    this.logo = logo;
  }

  logData() {
    console.log('Team details');
    console.log(`${this.team} (${this.stadium}), ${this.website}`);
  }

  renderData() {
    let sidebarDiv = document.getElementById('sidebar');
    if (sidebarDiv === null) {
      sidebarDiv = document.getElementById('content');
    }

    const teamDiv = document.createElement('div');
    teamDiv.setAttribute('id', 'team');

    const tTitulo = document.createElement('h2');
    tTitulo.innerText = 'Team details';

    teamDiv.appendChild(tTitulo);

    const table = document.createElement('table');
    table.setAttribute('class', 'team');

    const header = document.createElement('tr');

    const cabeceras = ['logo', 'team', 'stadium', 'website'];

    cabeceras.forEach(cell => {
      const th = document.createElement('th');
      th.innerText = cell;
      header.appendChild(th);
    });

    table.appendChild(header);

    const row = document.createElement('tr');

    const logoCell = document.createElement('td');
    const teamCell = document.createElement('td');
    const stadiumCell = document.createElement('td');
    const websiteCell = document.createElement('td');

    const imageLogo = document.createElement('img');
    imageLogo.setAttribute('src', this.logo);

    logoCell.appendChild(imageLogo);
    teamCell.textContent = this.team;
    stadiumCell.textContent = this.stadium;
    websiteCell.textContent = this.website;

    logoCell.setAttribute('id', 'lCell');
    teamCell.setAttribute('id', 'tCell');
    stadiumCell.setAttribute('id', 'sCell');
    websiteCell.setAttribute('id', 'wCell');

    row.appendChild(logoCell);
    row.appendChild(teamCell);
    row.appendChild(stadiumCell);
    row.appendChild(websiteCell);

    table.appendChild(row);

    teamDiv.appendChild(table);

    sidebarDiv.appendChild(teamDiv);
  }

  refreshData() {
    const logo = document.querySelector('#lCell img');
    logo.setAttribute('src', this.logo);

    const teamCell = document.getElementById('tCell');
    teamCell.textContent = this.team;

    const stadiumCell = document.getElementById('sCell');
    stadiumCell.textContent = this.stadium;

    const webCell = document.getElementById('wCell');
    webCell.textContent = this.website;
  }
}
