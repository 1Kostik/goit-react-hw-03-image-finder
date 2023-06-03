import axios from 'axios';

 export async function fetchItems(url) {   
  const response = await axios.get(url);
  return response.data.hits;
};
