import PocketBase from 'pocketbase';

const cliente = new PocketBase('http://127.0.0.1:8090');

const getFavoritosByUser = async(userId) => {
  const res = await cliente.Records.getList('favoritos', 1, 5, {
    filter: `user='${userId}'`
  });
  return res;
};

export { getFavoritosByUser };