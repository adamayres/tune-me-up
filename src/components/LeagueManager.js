import LeagueList from './LeagueList';
import LeagueEditForm from './LeagueEditForm';
import Container from 'react-bootstrap/Container';
import { createLeague, getLeagues } from '../helpers/LeagueHelper';
import { useState } from 'react';

const LeagueManager = () => {
  const [leagues, setLeagues] = useState(getLeagues());

  function onSubmit(title, users) {
    const updatedLeagues = createLeague(title, users);
    setLeagues(updatedLeagues);
  }

  return (
    <Container>
      <LeagueList leagues={leagues} />
      <LeagueEditForm onSubmit={onSubmit} />
    </Container>
  );
};

export default LeagueManager;
