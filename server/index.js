const app = require('./server').server;
const server = app.listen(3001, () => { console.log('Server started in port 3001') });