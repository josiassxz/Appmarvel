import axios from 'axios';

export const GET_CHARACTERS = 'FETCH_CHARACTERS';

const publicKey = '94045ba24b60ebb0a9ec2af33b780ac9';
const privateKey = 'a56921edd9c047886fa039622aa389aff3cde0f2';
const time = 1665939600;
const hash = 'dffef9efd2887d48725a893c4be93c19';
const limit = 20;
const base_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${limit}`;

export const getCharacters = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${base_url}`);

      if (res.data) {
        dispatch({
          type: GET_CHARACTERS,
          payload: res.data.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
  }
};
