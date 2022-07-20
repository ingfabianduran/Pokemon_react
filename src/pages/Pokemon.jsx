import React from 'react';
import { Container, Stack } from '@mui/material';
import CardPokemon from '../components/CardPokemon';
import { pokemonByPage } from '../services/data';
import { useParams } from 'react-router-dom';

export default function Pokemon() {
  let { id } = useParams();
  const [dataPokemon, setDataPokemon] = React.useState();

  const getDataPokemon = async() => {
    const data = await pokemonByPage(id);
    setDataPokemon(data);
  };

  React.useEffect(() => {
    if (!dataPokemon) getDataPokemon();
  }, [dataPokemon]);

  
  if (dataPokemon) {
    return (
      <Container
        maxWidth='md'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'>
          <CardPokemon 
            dataPokemon={dataPokemon} />
        </Stack>
      </Container>
    )
  }
  
  return (
    <p>Cargando...</p>
  )
}