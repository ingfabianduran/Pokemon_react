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
         ListItemText } from '@mui/material';
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
          <Button
            component={Link}
            to='/pokemones'
            size='large'
            variant='contained'>
            Volver
          </Button>
        </CardActions>
    </Card>
  )
}