import React from 'react';
import { Card, 
         CardHeader, 
         Avatar, 
         CardContent, 
         Typography, 
         CardActions, 
         Button, 
         List,
         ListItem,
         ListItemText,
         Stack,
         Snackbar,
         Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { addFavoritosByUser } from '../services/pocketBase';
import { useSelector } from 'react-redux';

export default function CardPokemon({ dataPokemon }) {
  const [snackBar, setSnackBar] = React.useState({ show: false, type: 'success', text: '' });
  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();

  const addFavorito = async() => {
    const record = {
      user: user.id,
      pokemon: dataPokemon.id
    };
    try {
      const newRecord = await addFavoritosByUser(record, dataPokemon.id);
      if (newRecord.hasOwnProperty('message')) {
        setSnackBar({ show: true, type: 'success', text: newRecord.message });
      } else {
        setSnackBar({ show: true, type: 'success', text: `Favorito ${newRecord.id} agregado correctamente` });
        setTimeout(() => {
          navigate('/pokemones');
        }, 3000);
      }
    } catch (error) {
      setSnackBar({ show: true, type: 'error', text: 'Algo raro paso aquí' });
    }
  };
  
  return (
    <Card
      raised>
      <Snackbar
        open={snackBar.show}>
        <Alert
          severity={snackBar.type}>
          { snackBar.text }
        </Alert>
      </Snackbar>
      <CardHeader
        avatar={
          <Avatar 
          alt={dataPokemon.name}
          src={dataPokemon.sprites.front_default} />
        }
        title={
          <Typography 
            variant="h2"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>
            { dataPokemon.name }
          </Typography>
        }/>
        <CardContent>
          <List>
            {
              dataPokemon.stats.map(item => {
                return (
                  <ListItem
                    key={item.stat.name}>
                    <ListItemText
                      secondary={
                        <Typography
                          sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase'
                          }}
                          component='span'
                          variant='body1'>
                          {`${item.stat.name}: ${item.base_stat}`}
                        </Typography>
                      } />
                      
                  </ListItem>
                )
              })
            }
          </List>
        </CardContent>
        <CardActions>
          <Stack
            direction='row'
            spacing={2}>
            <Button
              component={Link}
              to='/pokemones'
              size='large'
              variant='contained'>
              Volver
            </Button>
            <Button
              size='large'
              variant='contained'
              color='success'
              onClick={addFavorito}>
              Favorito
            </Button>
          </Stack>
        </CardActions>
    </Card>
  )
}