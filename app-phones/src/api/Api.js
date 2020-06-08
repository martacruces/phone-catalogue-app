const HOST = 'http://localhost:3001';
const PHONES_ENDPOINT = `${HOST}/phones`;

const fetchPhones = () => fetch(PHONES_ENDPOINT).then(response => response.json());

export { HOST, fetchPhones };

