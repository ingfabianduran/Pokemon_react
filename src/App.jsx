import React from 'react';
import { Container } from '@mui/material';
import TiposPokemon from './components/TiposPokemon';

function App() {
  const [tipoSelect, setTipoSelect] = React.useState('');

  return (
    <Container
      maxWidth='md'>
      <TiposPokemon
        tipoSelect={tipoSelect}
        setTipoSelect={setTipoSelect} />
    </Container>
  )
}

export default App
