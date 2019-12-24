import { getTeamDetails } from '../api';

export async function handleGetTeamDetail(teamId) {
  setLoading('block')
  //const row = document.getElementById(e.dataset.id)

  /*row.style.backgroundColor = '#d3d3d369'
  row.style.fontStyle = 'italic'
  if (rowSelected) {
    const rowAnterior = document.getElementById(rowSelected)
    rowAnterior.style.backgroundColor = 'transparent'
    rowAnterior.style.fontStyle = 'normal'
  }
  rowSelected = e.dataset.id*/

  //const teamDetails = await getTeamDetails(e.dataset.id)
  const teamDetails = await getTeamDetails(teamId)
  const teamDiv = document.getElementById('team')

  if (teamDiv === null) {
    teamDetails.renderData()
  }
  else {
    teamDetails.refreshData()
  }

  setLoading('none')
}

export function setLoading(display) {
  const loader = document.querySelector('.loader')
  loader.style.display = display
}