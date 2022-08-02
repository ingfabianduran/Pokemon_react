import React from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';
import ImagePokemon from './ImagePokemon';

export default function Favoritos({ listaFavoritos, deleteFavorito }) {

  return (
    <div>
      <Typography
        variant='h4'
        component='div'
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          textDecoration: 'underline'
        }}>
        Mis Favoritos
      </Typography>
      <ImageList
        cols={3}
        rowHeight={150}>
        {
          listaFavoritos.map(item => {
            return (
              <ImageListItem
                key={item.id}>
                <ImagePokemon
                  data={item}
                  deleteFavorito={deleteFavorito} />
              </ImageListItem>
            )
          })
        }
      </ImageList>
    </div>
  )
}