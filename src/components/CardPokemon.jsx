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
         Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardPokemon({ dataPokemon }) {  
  return (
    <Card
      raised>
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
              color='success'>
              Favorito
            </Button>
          </Stack>
        </CardActions>
    </Card>
  )
}