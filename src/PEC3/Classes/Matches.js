export default class Matches {
  constructor(data) {
    this.matches = data;
  }

  getMatchByDay(numDay) {
    return this.matches[numDay]
  }

  logData() {
    console.log(`Matches`);

    for (const matchDayNumber in this.matches) {
      const matchDayResults = this.matches[matchDayNumber];

      console.log(`Matchday #${matchDayNumber}`);

      matchDayResults.forEach(match => match.logData());
    }
  }

  renderData() {
    const mainDiv = document.getElementById('main')
    const contentDiv = document.getElementById('content')
    const matchesDiv = document.createElement('div')
    matchesDiv.setAttribute('id', 'content')
    const sideBar = document.getElementById('sidebar')

    const tTitulo = document.createElement('h2')
    tTitulo.innerText = 'Matches'

    matchesDiv.appendChild(tTitulo)

    const table = this.fillTable()

    matchesDiv.appendChild(table);

    this.setPaginacion(matchesDiv)

    mainDiv.removeChild(sideBar)

    mainDiv.replaceChild(matchesDiv, contentDiv)
  }


  setPaginacion(divPadre) {
    const temporadas = Object.keys(this.matches).length
    const h4 = document.createElement('h4')
    h4.textContent = 'Season: '

    const nav = document.createElement('nav')
    nav.style.display = 'flex'
    nav.style.justifyContent = 'center'
    nav.style.borderTop = '1px solid black'

    const ul = document.createElement('ul')
    ul.style.listStyle = 'none'
    ul.style.display = 'flex'
    ul.style.alignItems = 'center'

    for (let i = 1; i <= temporadas; i++) {
      const li = document.createElement('li')
      li.style.margin = '0 1px'
      const a = document.createElement('a')
      a.setAttribute('id', i)
      a.setAttribute('data-id', i)
      a.setAttribute('href', '#')
      if (i === 1) {
        a.setAttribute('class', 'is-active')
      }

      a.addEventListener('click', e => {
        this.fillTable(e.target.dataset.id)
      })

      a.style.fontSize = 'small'
      a.style.padding = '3px 6px'
      a.style.border = '1px solid #999'
      a.style.borderRadius = '.2em'
      a.style.textDecoration = 'none'
      a.textContent = i

      li.appendChild(a)
      ul.appendChild(li)
    }

    nav.appendChild(h4)
    nav.appendChild(ul)
    divPadre.appendChild(nav)
  }


  fillTable(seasonNum = 1) {
    const a = document.getElementById(seasonNum)
    if (a) {
      const aActive = document.querySelector('a.is-active')
      a.setAttribute('class', 'is-active')
      aActive.removeAttribute('class')
    }

    let table = document.getElementById('tableMatches')
    if (table === null) {
      table = document.createElement('table');
      table.setAttribute('id', 'tableMatches')
      table.setAttribute('class', 'matches')
      table.style.paddingBottom = '15px'
    }
    else {
      while (table.firstChild) {
        table.firstChild.remove()
      }
    }

    const cabeceras = ['date', 'Home team', 'Away team', 'Home score', 'Away score']

    const header = document.createElement('tr')

    for (let i = 0; i < cabeceras.length; i++) {
      const th = document.createElement('th')
      th.innerText = cabeceras[i]
      header.appendChild(th)
    }

    table.appendChild(header)

    const listMatches = this.getMatchByDay(seasonNum).map(({ matchDay, homeTeamId, awayTeamId, ...item }) => item);

    listMatches.forEach(match => {

      const row = document.createElement('tr')

      for (const key in match) {
        if (match.hasOwnProperty(key)) {

          const cell = document.createElement('td')
          const element = match[key];
          if (key === 'date') {
            const date = new Date(element)
            cell.textContent = date.toLocaleDateString()
          }
          else {
            cell.textContent = element
          }

          row.appendChild(cell)
        }
      }
      table.appendChild(row)
    });

    return table
  }
}
