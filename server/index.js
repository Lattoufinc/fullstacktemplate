const server = require('./app');

const port = 4001;

server.listen(port, () => console.log(`Listening on port ${port}`));
