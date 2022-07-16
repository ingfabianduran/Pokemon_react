const DOMINIO = 'https://pokeapi.co/api/v2';

const getTypes = async() => {
  const res = await fetch(`${DOMINIO}/type`);
  const data = await res.json();
  return data;
};

export { getTypes };