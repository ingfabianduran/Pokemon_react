import React from 'react';
import { Container, Grid } from '@mui/material';
import TiposPokemon from '../components/TiposPokemon';
import ListadoPokemon from '../components/ListadoPokemon';
import Favoritos from '../components/Favoritos';
import { getPokemonByType } from '../services/data';
import { getFavoritosByUser } from '../services/pocketBase';
import { useSelector } from 'react-redux';

export default function Home() {
  const [tipoSelect, setTipoSelect] = React.useState('');
  const [listaPokemon, setListaPokemon] = React.useState([]);
  const [listaFavoritos, setListaFavoritos] = React.useState([]);
  const user = useSelector(state => state.user);

  React.useEffect(() => {
    if (tipoSelect !== '') getListPokemon();
  }, [tipoSelect]);

  React.useEffect(() => {
    getFavoritos();
  }, []);

  const getFavoritos = async() => {
    const { items } = await getFavoritosByUser(user);
    setListaFavoritos(items);
  };

  const getListPokemon = async() => {
    const { pokemon } = await getPokemonByType(tipoSelect);
    setListaPokemon(pokemon);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}>
        <Grid
          item
          xs={12}>
          <TiposPokemon
            tipoSelect={tipoSelect}
            setTipoSelect={setTipoSelect} />
        </Grid>
        <Grid
          item
          xs={8}>
          {
            listaPokemon.length > 0 &&
              <ListadoPokemon 
                pokemones={listaPokemon} />
          }
        </Grid>
        <Grid
          item
          xs={4}>
          {
            listaFavoritos.length > 0 &&
            <Favoritos
              listaFavoritos={listaFavoritos} />
          }
        </Grid>
      </Grid>
    </Container>
  )
}