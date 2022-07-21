import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import FilaPokemon from './FilaPokemon';

export default function ListadoPokemon({ pokemones }) {
  const nameCabeceras = ['Nombre', 'Tipo', 'Imagen', 'Ver'];

  return (
    <TableContainer
      component={Paper}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: 'black',
            }}>
            {
              nameCabeceras.map(item => {
                return (
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center'
                    }}
                    key={item}>
                    { item }
                  </TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            pokemones.map(({ pokemon }) => {
              return (
                <FilaPokemon
                  key={pokemon.name} 
                  pokemon={pokemon} />
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}