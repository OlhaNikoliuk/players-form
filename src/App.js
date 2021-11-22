import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import TeamsTable from './components/TeamsTable/TeamsTable';
import PlayersTable from './components/PlayersTable/PlayersTable';
import { Title } from './App.styled';
import * as API from './services/api';
import { fetchTeams } from './redux/teams/teamsOperations';

function App() {
  const [players, setPlayers] = useState([]);
  const teams = useSelector((state) => state.teams.items);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPlayers() {
      const players = await API.getPlayersList();
      setPlayers((state) => [...state, ...players]);
    }
    fetchPlayers();
  }, []);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <Container>
      <Title>NBA profile</Title>
      <Form></Form>
      {teams.length > 0 && <TeamsTable teams={teams}></TeamsTable>}
      {players.length > 0 && <PlayersTable players={players}></PlayersTable>}
    </Container>
  );
}

export default App;
