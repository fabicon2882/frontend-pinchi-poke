import axiosConfig from '../clientProvider/axiosConfig';

export const getPokemons = async () => {
  const { data } = await axiosConfig.get(
    `/pokemon?idAuthor=${import.meta.env.VITE_API_ID_CLIENT}`
  );
  return data;
};

export const getPokemon = async (id) => {
  const { data } = await axiosConfig.get(`/pokemon/${id}`);
  return data;
};

export const createPokemon = async (pokemon) => {
  const resp = await axiosConfig.post('/pokemon', {
    ...pokemon,
    idAuthor: import.meta.env.VITE_API_ID_CLIENT,
  });
  return resp;
};

export const updatePokemon = async (id, pokemon) => {
  const resp = await axiosConfig.put(`/pokemon/${id}`, pokemon);
  return resp;
};

export const deletePokemon = async (id) => {
  const resp = await axiosConfig.delete(`/pokemon/${id}`);
  return resp;
};
