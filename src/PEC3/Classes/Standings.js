const TYPES = { total: "TOTAL", home: "HOME", away: "AWAY" };

export default class Standings {
  constructor(data) {
    const { competitionName, currentMatchday, total, home, away } = data;

    this.competitionName = competitionName;
    this.currentMatchday = currentMatchday;
    this.standings = {
      [TYPES.total]: {
        label: "Total standings",
        data: total
      },
      [TYPES.home]: {
        label: "Home standings",
        data: home
      },
      [TYPES.away]: {
        label: "Away standings",
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

      //console.log(label);
      //console.table(data);
    }
  }

  renderData() {
    const clasificacion = this.standings.TOTAL
    const { label, data } = clasificacion
    const cabeceras = Object.keys(data[0])

    const tTitulo = document.createElement('h2')
    tTitulo.innerText = label

    const mainDiv = document.getElementById('main')
    const contentDiv = document.createElement('div')
    contentDiv.setAttribute('id', 'content')

    mainDiv.appendChild(contentDiv)

    contentDiv.appendChild(tTitulo)

    const table = document.createElement('table');
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

          if (key !== 'teamId') {
            const element = clasificado[key];
            const cell = document.createElement('td')
            cell.textContent = element
            row.appendChild(cell)
          }
        }
      }
      table.appendChild(row)
    });

    contentDiv.appendChild(table);
  }
}
