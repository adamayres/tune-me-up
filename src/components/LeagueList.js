import Table from 'react-bootstrap/Table';

const LeagueList = ({ leagues }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        {leagues.map(league => {
          return (
            <tr key={league.id}>
              <td>{league.id}</td>
              <td>{league.title}</td>
              <td>{league.users.map(user => user.username).join(', ')}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LeagueList;
