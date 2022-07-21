import React from 'react';
import { Container, Box, Backdrop, CircularProgress } from '@mui/material';
import CardPokemon from '../components/CardPokemon';
import { pokemonByPage } from '../services/data';
import { useParams } from 'react-router-dom';

export default function Pokemon() {
  let { id } = useParams();
  const [dataPokemon, setDataPokemon] = React.useState();
  const [open, setOpen] = React.useState(true);

  const getDataPokemon = async() => {
    const data = await pokemonByPage(id);
    setDataPokemon(data);
  };

  React.useEffect(() => {
    if (!dataPokemon) {
      setTimeout(() => {
        getDataPokemon();
      }, 2000);
    }
  }, [dataPokemon]);

  
  if (dataPokemon) {
    return (
      <Container
        maxWidth='md'>
        <Box
          minHeight='95vh'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'>
          <CardPokemon 
            dataPokemon={dataPokemon} />
        </Box>
      </Container>
    )
  }
  
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}>
      <CircularProgress 
        color='inherit' />
    </Backdrop>
  )
}