// eslint-disable-next-line max-len
const API_URL = 'https://fakestoreapi.com/products';

export const ProductApi = () => {
  return fetch(API_URL)
    .then(response => response.json());
};
