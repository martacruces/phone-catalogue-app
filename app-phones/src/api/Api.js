const ENDPOINT = 'http://localhost:3001/phones';

const fetchPhones = () => fetch(ENDPOINT).then(response => response.json());

export { fetchPhones };
