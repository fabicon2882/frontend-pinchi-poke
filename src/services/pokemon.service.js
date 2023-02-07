import axiosConfig from '../clientProvider/axiosConfig';

export const getPokemons = async () => {
  const { data } = await axiosConfig.get('/pokemons');
  return data;
};

export const getPokemon = async (id) => {
  const { data } = await axiosConfig.get(`/pokemons/${id}`);
  return data;
};

export const createPokemon = async (pokemon) => {
  const resp = await axiosConfig.post('/pokemons', pokemon);
  return resp;
};

export const updatePokemon = async (id, pokemon) => {
  const resp = await axiosConfig.put(`/pokemons/${id}`, pokemon);
  return resp;
};

export const deletePokemon = async (id) => {
  const resp = await axiosConfig.delete(`/pokemons/${id}`);
  return resp;
};
