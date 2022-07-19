import React from 'react';
import { Container, Stack, Card, CardHeader, Avatar } from '@mui/material';
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
    console.log(dataPokemon);
  }, [id, dataPokemon]);

  
  if (dataPokemon) {
    return (
      <Container
        maxWidth='sm'>
        <Stack>
          <Card>
            <CardHeader
              avatar={
                <Avatar 
                alt={dataPokemon.name}
                src={dataPokemon.sprites.front_default} />
              }
              title={dataPokemon.name} />
          </Card>
        </Stack>
      </Container>
    )
  }
  return (
    <p>Cargando...</p>
  )
}