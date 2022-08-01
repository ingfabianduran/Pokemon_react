import React from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';

export default function Favoritos({ listaFavoritos }) {
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
                <img
                  src={item.url}
                  alt={item.name}
                  loading='lazy' />
              </ImageListItem>
            )
          })
        }
      </ImageList>
    </div>
  )
}