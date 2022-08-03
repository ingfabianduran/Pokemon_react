import React from 'react';
import { Container, Grid, Snackbar, Alert } from '@mui/material';
import TiposPokemon from '../components/TiposPokemon';
import ListadoPokemon from '../components/ListadoPokemon';
import Favoritos from '../components/Favoritos';
import { getPokemonByType } from '../services/data';
import { getFavoritosByUser, deleteFavoritosByUser } from '../services/pocketBase';
import { useSelector } from 'react-redux';

export default function Home() {
  const [tipoSelect, setTipoSelect] = React.useState('');
  const [listaPokemon, setListaPokemon] = React.useState([]);
  const [listaFavoritos, setListaFavoritos] = React.useState([]);
  const [snackBar, setSnackBar] = React.useState({ show: false, type: 'success', text: '' });
  const { user } = useSelector(state => state.user);
 

  React.useEffect(() => {
    if (tipoSelect !== '') getListPokemon();
  }, [tipoSelect]);

  React.useEffect(() => {
    getFavoritos();
  }, []);

  const getFavoritos = async() => {
    const { items } = await getFavoritosByUser(user.id);
    setListaFavoritos(items);
  };

  const getListPokemon = async() => {
    const { pokemon } = await getPokemonByType(tipoSelect);
    setListaPokemon(pokemon);
  };

  const deleteFavorito = async(idRecord) => {
    try {
      const deletePokemon = await deleteFavoritosByUser(idRecord);
      setSnackBar({ ...snackBar, show: true, text: 'Favorito eliminado correctamente' });
      setTimeout(() => {
        setSnackBar({ ...snackBar, show: false });
      }, 3000);
      await getFavoritos();
    } catch (error) {
      setSnackBar({ show: true, type: 'error', text: 'Algo raro ocurrio aquí' });
    }
  };

  return (
    <Container>
      <Snackbar
        open={snackBar.show}>
        <Alert
          severity={snackBar.type}>
          { snackBar.text }
        </Alert>
      </Snackbar>
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
              listaFavoritos={listaFavoritos}
              deleteFavorito={deleteFavorito} />
          }
        </Grid>
      </Grid>
    </Container>
  )
}