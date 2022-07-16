import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getTypes } from '../services/data';

export default function TiposPokemon({ tipoSelect, setTipoSelect }) {
  const [tiposPokemon, setTipoPokemon] = React.useState([]);

  React.useEffect(() => {
    const getDataTipos = async() => {
      const data = await getTypes();
      setTipoPokemon(data.results);
    };
    getDataTipos();
  }, []);

  const changeValueSelect = (event) => {
    setTipoSelect(event.target.value);
  };

  return (
    <FormControl
      fullWidth>
      <InputLabel id='label_select'>Tipos de Pokemon</InputLabel>
      <Select
        labelId='label_select'
        id='select_tipos'
        label='Tipos'
        value={tipoSelect}
        onChange={changeValueSelect}>
        {
          tiposPokemon.map(item => {
            return (
              <MenuItem
                value={item.name}
                key={item.name}>
                { item.name }
              </MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}
