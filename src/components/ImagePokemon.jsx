import React from 'react';
import { Box, Button } from '@mui/material';
import { pokemonByPage } from '../services/data';

export default function ImagePokemon({ data }) {
  const [urlImage, setUrlImage] = React.useState('');

  React.useEffect(() => {
    getImgByPokemon();
  }, []);

  const getImgByPokemon = async() => {
    const { sprites } = await pokemonByPage(data.pokemon);
    setUrlImage(sprites.front_default);
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <img
      src={urlImage}
      alt={`Pokemon ${data.pokemon}`}
      loading='lazy' />
      <Button
        variant='contained'
        color='error'
        size='small'>
        Eliminar
      </Button>
    </Box>
  )
}