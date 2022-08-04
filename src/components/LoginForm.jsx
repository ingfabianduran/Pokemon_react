import React from 'react';
import { Box,
         Card, 
         CardMedia, 
         CardContent,
         TextField, 
         CardActions,
         Button,
         Snackbar,
         Alert } from '@mui/material';
import { logInUser } from '../services/pocketBase';
import { useDispatch } from 'react-redux';
import { logIn } from '../reducers/user';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [user, setUser] = React.useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const [snackBar, setSnackBar] = React.useState({ show: false, type: 'success', text: '' });
  const navigate = useNavigate();

  const authUser = async(event) => {
    try {
      event.preventDefault();
      const isAuth = await logInUser(user);
      setSnackBar({ ...snackBar, show: true, text: 'Bienvenido al mundo Pokemon' });
      dispatch(logIn(isAuth.user));
      setTimeout(() => {
        navigate('/pokemones');
      }, 3000);
    } catch (error) {
      setSnackBar({ show: true, type: 'error', text: 'Usuario o contraseña incorrecta' });
    }
  };

  return (
    <Box
      component='form'
      noValidate
      autoComplete='off'>
      <Snackbar
        open={snackBar.show}>
        <Alert
          severity={snackBar.type}>
          { snackBar.text }
        </Alert>
      </Snackbar>
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
            margin='normal'
            value={user.email}
            onChange={ (event) => setUser({ ...user, email: event.target.value }) } />
          <TextField
            fullWidth
            required
            label='Password'
            type='password'
            variant='filled'
            margin='normal'
            value={user.password}
            onChange={ (event) => setUser({ ...user, password: event.target.value }) } />
        </CardContent>
        <CardActions>
          <Button
            type='submit'
            variant='contained'
            onClick={(event) => authUser(event)}>
            Ingresar
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
