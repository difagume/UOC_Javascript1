import { getScorers, getStandings } from './api';
import { handleTabs, setLoading } from './utils/events';

export async function init() {
  setLoading('block');

  const nav = document.getElementById('navigation');

  const btnStandings = document.createElement('button');
  btnStandings.setAttribute('id', 'btnSandings');
  btnStandings.className = 'is-active';
  btnStandings.textContent = 'Standings';

  const btnMatches = document.createElement('button');
  btnMatches.setAttribute('id', 'btnMatches');
  btnMatches.textContent = 'Matches';

  nav.appendChild(btnStandings);
  nav.appendChild(btnMatches);

  const botones = document.querySelectorAll('button');
  botones.forEach(e =>
    e.addEventListener('click', async function() {
      handleTabs(e.id);
    })
  );

  const standings = await getStandings();
  standings.renderData();

  const scorers = await getScorers();
  scorers.renderData();

  setLoading('none');
}
