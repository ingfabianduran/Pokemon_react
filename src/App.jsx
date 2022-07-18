import React from 'react';
import { Container, Stack } from '@mui/material';
import TiposPokemon from './components/TiposPokemon';
import ListadoPokemon from './components/ListadoPokemon';
import { getPokemonByType } from './services/data';

function App() {
  const [tipoSelect, setTipoSelect] = React.useState('');
  const [listaPokemon, setListaPokemon] = React.useState([]);

  React.useEffect(() => {
    if (tipoSelect !== '') getListPokemon();
  }, [tipoSelect]);

  const getListPokemon = async() => {
    const { pokemon } = await getPokemonByType(tipoSelect);
    setListaPokemon(pokemon);
  };

  return (
    <Container
      maxWidth='md'>
      <Stack
        mt={2}>
        <TiposPokemon
          tipoSelect={tipoSelect}
          setTipoSelect={setTipoSelect} />
      </Stack>
      <Stack
        mt={2}>
        <ListadoPokemon 
          pokemones={listaPokemon} />
      </Stack>
    </Container>
  )
}

export default App
