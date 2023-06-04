import axios from 'axios';
const API_KEY = '35491048-668e63f7ba8686a686ff97f20';

export async function fetchItems(query, page) {
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(url);

  return response.data;
}
