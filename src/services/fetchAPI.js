const fetchAPI = async (url) => fetch(url)
  .then((response) => response.json());

export default fetchAPI;
