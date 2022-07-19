const DOMINIO = 'https://pokeapi.co/api/v2';

const getTypes = async() => {
  const res = await fetch(`${DOMINIO}/type`);
  const data = await res.json();
  return data;
};

const getPokemonByType = async(type) => {
  const res = await fetch(`${DOMINIO}/type/${type}/`);
  const data = await res.json();
  return data;
};

const getInfoPokemon = async(url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const pokemonByPage = async(id) => {
  const res = await fetch(`${DOMINIO}/pokemon/${id}/`);
  const data = await res.json();
  return data;
};

export { getTypes, getPokemonByType, getInfoPokemon, pokemonByPage };