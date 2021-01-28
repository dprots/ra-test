import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api',
  responseType: 'json'
});
