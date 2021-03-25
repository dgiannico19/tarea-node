const {
  createFile,
  appendUser,
  readFile,
  removeLast,
  removeById,
} = require('./crudOp');

createFile('clients/clients.json');
// readFile('clients/clients.json');
appendUser('clients/clients.json');
// removeById('clients/clients.json', 'f820a90b-7659-4320-b97d-d94f4243600c');
// removeLast('clients/clients.json');
