import Container from './components/Container/Container';
import Form from './components/Form/Form';
import TeamsTable from './components/TeamsTable/TeamsTable';
import PlayersTable from './components/PlayersTable/PlayersTable';
import { Title } from './App.styled';

function App() {
  return (
    <Container>
      <Title>NBA profile</Title>
      <Form></Form>
      <TeamsTable></TeamsTable>
      <PlayersTable></PlayersTable>
    </Container>
  );
}

export default App;
