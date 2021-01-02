import { createMockUser } from './UserHelper';

function createMockLeague(id, title, users) {
  return {
    id,
    title,
    users
  };
}

const defaultDummyLeagues = [
  createMockLeague(1, 'League 1', [createMockUser(1, 'user1'), createMockUser(2, 'user2')]),
  createMockLeague(2, 'League 2', [createMockUser(1, 'user1'), createMockUser(2, 'user2')]),
  createMockLeague(3, 'League 3', [createMockUser(2, 'user2'), createMockUser(3, 'user3')])
];

function createLeague(title, users) {
  const leagues = getLeagues();
  const newLeague = {
    id: leagues.length + 1,
    title,
    users
  };

  leagues.push(newLeague);
  const leaguesAsString = JSON.stringify(leagues);
  localStorage.setItem('leagues', leaguesAsString);
  return leagues;
}

function getLeagues() {
  const leaguesAsString = localStorage.getItem('leagues');
  if (leaguesAsString) {
    return JSON.parse(leaguesAsString);
  }
  return [];
}

function updateLeague() {}

function deleteLeague() {}

export { createLeague, getLeagues, updateLeague, deleteLeague };
