import { useState } from 'react';
import Container from './components/Container';
import Sertificate from './components/Sertificate';
import Drop from './components/Drop';
// import styles from './App.module.css';

function App() {
  const [dropWindow, setDropWindow] = useState(true);
  const [activeContact, setActiveContact] = useState('')

  const toggleDrop = () => {
    setDropWindow(!dropWindow);
  }

  const activeList = (id) => {
    setActiveContact(id);
  }

  return (
    <Container>
      <Sertificate dataClass={dropWindow} active={activeContact} onClick={activeList} />
      <Drop dataClass={dropWindow} active={activeContact} onDropWindow={toggleDrop} />
    </Container>
  );
}

export default App;
