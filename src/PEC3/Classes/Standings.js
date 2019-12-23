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

      console.log(label);
      console.table(data);
    }
  }

  renderData() {
    const tTitulo = document.createElement('h2')
    tTitulo.innerText = this.competitionName
    const targetDiv = document.getElementById('content')
    targetDiv.appendChild(tTitulo)
  }
}
