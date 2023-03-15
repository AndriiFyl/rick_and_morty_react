import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

// ф-я отримання списку персонажів
export const getListOfCharacters = async () => {
  const { data } = await axios.get(`character`);
  return data.results;
};

// ф-я отримання інфи за конкретним персонажем
export const getOneCharacterById = async id => {
  const response = await axios.get(`character/${id}`);
  return response.data;
};
