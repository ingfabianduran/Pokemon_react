import React from 'react'
import { TableRow, TableCell, Stack, Chip, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { getInfoPokemon } from '../services/data';

export default function FilaPokemon({ pokemon }) {
  const [dataAdicional, setDataAdicional] = React.useState({id: '', types: [], sprites: {} });

  React.useEffect(() => {
    getDataAdicional(pokemon.url);
  }, []);

  const getDataAdicional = async(url) => {
    const { id, types, sprites } = await getInfoPokemon(url);
    setDataAdicional({ id, types, sprites });
  };

  return (
    <TableRow>
      <TableCell>{ pokemon.name }</TableCell>
      <TableCell>
        <Stack
          direction='row'
          spacing={1}>
          {
            dataAdicional.types.map(({ type }) => {
              return (
                <Chip
                  key={type.name}
                  label={type.name}
                  color='secondary' />
              )
            })
          }
        </Stack>
      </TableCell>
      <TableCell>
        <Avatar
          alt={pokemon.name}
          src={dataAdicional.sprites.front_default} />
      </TableCell>
      <TableCell
        sx={{
          textAlign: 'center'
        }}>
        <Button
          variant='contained'
          component={Link} 
          to={`/pokemon/${dataAdicional.id}`}>
          Mas Detalles
        </Button>
      </TableCell>
    </TableRow>
  )
}