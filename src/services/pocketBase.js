import PocketBase from 'pocketbase';

const cliente = new PocketBase('http://127.0.0.1:8090');

const getFavoritosByUser = async(userId) => {
  const res = await cliente.Records.getList('favoritos', 1, 6, {
    filter: `user='${userId}'`
  });
  return res;
};

const addFavoritosByUser = async(record) => {
  const res = await cliente.Records.create('favoritos', record);
  return res;
};

const deleteFavoritosByUser = async(recordId) => {
  const res = await cliente.Records.delete('favoritos', recordId);
  return res;
};

export { getFavoritosByUser, addFavoritosByUser, deleteFavoritosByUser };