const {
  createFile,
  appendUser,
  readFile,
  removeLast,
  removeById,
} = require('./crudOp');

createFile('clients.json');
// readFile('clients.json');
appendUser('clients.json');
// removeById('clients.json', 'f820a90b-7659-4320-b97d-d94f4243600c');
// removeLast('clients.json');
