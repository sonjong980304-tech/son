document.getElementById('generate').addEventListener('click', () => {
  const namesText = document.getElementById('names').value;
  const teamCount = parseInt(document.getElementById('teamCount').value, 10);
  const names = namesText.split('\n').filter(name => name.trim() !== '');

  if (names.length < teamCount) {
    alert('You need more names than teams!');
    return;
  }

  const shuffledNames = names.sort(() => 0.5 - Math.random());
  const teams = Array.from({ length: teamCount }, () => []);
  shuffledNames.forEach((name, index) => {
    teams[index % teamCount].push(name);
  });

  const teamsContainer = document.getElementById('teams');
  teamsContainer.innerHTML = '';
  teams.forEach((team, index) => {
    const teamCard = document.createElement('div');
    teamCard.className = 'col-md-6 mb-3';
    let teamHtml = `<div class="card"><div class="card-body"><h5 class="card-title">Team ${index + 1}</h5><ul class="list-group list-group-flush">`;
    team.forEach(name => {
      teamHtml += `<li class="list-group-item">${name}</li>`;
    });
    teamHtml += '</ul></div></div>';
    teamCard.innerHTML = teamHtml;
    teamsContainer.appendChild(teamCard);
  });
});