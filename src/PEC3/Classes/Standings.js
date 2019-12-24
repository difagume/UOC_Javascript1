import { handleGetTeamDetail } from '../utils/events';

const TYPES = { total: 'TOTAL', home: 'HOME', away: 'AWAY' };

export default class Standings {
  constructor(data) {
    const { competitionName, currentMatchday, total, home, away } = data;

    this.competitionName = competitionName;
    this.currentMatchday = currentMatchday;
    this.standings = {
      [TYPES.total]: {
        label: 'Total standings',
        data: total
      },
      [TYPES.home]: {
        label: 'Home standings',
        data: home
      },
      [TYPES.away]: {
        label: 'Away standings',
        data: away
      }
    };
  }

  getTypes() {
    return Object.values(TYPES);
  }

  logData() {
    console.log(`${this.competitionName}, jornada ${this.currentMatchday}`);

    for (const standingType in this.standings) {
      const { label, data } = this.standings[standingType];

      console.log(label);
      console.table(data);
    }
  }

  renderData() {
    const clasificacion = this.standings.TOTAL
    const { label, data } = clasificacion
    const cabeceras = Object.keys(data[0])

    const mainDiv = document.getElementById('main')
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute('id', 'content')
    const sidebarDiv = document.createElement('div')
    sidebarDiv.setAttribute('id', 'sidebar')

    const tTitulo = document.createElement('h2')
    tTitulo.innerText = label

    contentDiv.appendChild(tTitulo)

    const table = document.createElement('table');
    table.setAttribute('id', 'tableStandings')
    table.setAttribute('class', 'standings')

    const header = document.createElement('tr')

    for (let i = 1; i < cabeceras.length; i++) {
      const th = document.createElement('th')
      th.innerText = cabeceras[i]
      header.appendChild(th)
    }

    table.appendChild(header)

    data.forEach(clasificado => {

      const row = document.createElement('tr')

      for (const key in clasificado) {
        if (clasificado.hasOwnProperty(key)) {

          const cell = document.createElement('td')
          if (key === 'teamId') {
            const id = clasificado[key];
            //row.setAttribute('id', id)
            row.setAttribute('data-id', id)
          }
          else {
            const element = clasificado[key];
            cell.textContent = element
            row.appendChild(cell)
          }
        }
      }
      table.appendChild(row)
    });

    contentDiv.appendChild(table);

    mainDiv.appendChild(contentDiv)
    mainDiv.appendChild(sidebarDiv)


    this.addEventClick()
  }

  addEventClick() {
    const cells = document.querySelectorAll('#tableStandings tr')

    cells.forEach(e => e.addEventListener('click',
      function () {
        handleGetTeamDetail(e.dataset.id)
      }));
  }
}