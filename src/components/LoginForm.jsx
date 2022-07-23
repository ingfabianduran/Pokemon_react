import React from 'react';
import { Box,
         Card, 
         CardMedia, 
         CardContent,
         TextField, 
         CardActions,
         Button } from '@mui/material';

export default function LoginForm() {
  return (
    <Box
      component='form'
      noValidate
      autoComplete='off'>
      <Card
        raised>
        <CardMedia
          component='img'
          height='180'
          image='/public/Pokemon_Logo.png'
          alt='Pokemon Logo'>
        </CardMedia>
        <CardContent>
          <TextField
            fullWidth
            required
            label='Usuario'
            variant='filled'
            margin='normal' />
          <TextField
            fullWidth
            required
            label='Password'
            type='password'
            variant='filled'
            margin='normal' />
        </CardContent>
        <CardActions>
          <Button
            type='submit'
            variant='contained'>
            Ingresar
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
