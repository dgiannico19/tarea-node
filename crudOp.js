const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const firstObject = {
  clientes: [],
};
//user default si no paso argumentos
const defaultUser = {
  id: uuidv4(),
  user: 'nuevo user',
  category: Math.floor(Math.random() * (10 - 1) + 1),
  address: 'Encalada 12',
};
const newUser = {
  id: uuidv4(),
  user: 'Esteban Quito',
  category: Math.floor(Math.random() * (10 - 1) + 1),
  address: 'Jujuy 112',
};

// extraigo el tercer argumento, destructurando y paso un valor default para q no tire error
const stringUser = JSON.stringify(defaultUser);
const [, , arg = `${stringUser}`] = process.argv;
const [, newUserToAdd = `${stringUser}`] = arg.split('=');
// console.log(newUserToAdsd);

const createFile = (place) => {
  let fileExists = fs.existsSync(place);

  if (!fileExists) {
    fs.writeFile(place, JSON.stringify(firstObject), 'utf8', (err) => {
      if (err) throw err;
      console.log(`Creaste el archivo "${place}"`);
    });
  } else {
    console.log(`Ya existe el archivo "${place}"`);
  }
};

const readFile = (place) => {
  let fileExists = fs.existsSync(place);

  if (fileExists) {
    fs.readFile(place, 'utf-8', (err, data) => {
      if (err) {
        console.log(err, 'Uy!');
      } else {
        try {
          const parsedData = JSON.parse(data);
          console.log(parsedData);
        } catch (error) {
          console.log(error);
        }
      }
    });
  } else {
    console.log(`No existe el archivo "${place}"`);
  }
};

const appendUser = (place) => {
  let fileExists = fs.existsSync(place);

  if (fileExists) {
    fs.readFile(place, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let user = JSON.parse(data);
        const userAdded = JSON.parse(newUserToAdd);
        let userJson = user.clientes;

        // userJson.push(userAdded);
        userJson.push(newUser);
        fs.writeFile(place, JSON.stringify(user, null, 2), (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, `Agregado Perfectamente en "${place}"`);
          }
        });
      }
    });
  } else {
    console.log(`No existe el archivo "${place}"`);
  }
};

const removeLast = (place) => {
  let fileExists = fs.existsSync(place);

  if (fileExists) {
    fs.readFile(place, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let user = JSON.parse(data);
        const userAdded = JSON.parse(newUserToAdd);
        let userJson = user.clientes;

        // userJson.push(userAdded);
        userJson.pop();
        fs.writeFile(place, JSON.stringify(user, null, 2), (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, `Agregado Perfectamente en "${place}"`);
          }
        });
      }
    });
  } else {
    console.log(`No existe el archivo "${place}"`);
  }
};
const removeById = (place, id) => {
  let fileExists = fs.existsSync(place);

  if (fileExists) {
    fs.readFile(place, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let user = JSON.parse(data);
        const userAdded = JSON.parse(newUserToAdd);
        let userJson = user.clientes;

        userJson.filter((usuario) => {
          if (id === usuario.id) {
            let userIndex = userJson.indexOf(usuario);
            userJson.splice(userIndex, 1);
            console.log(`El usuario con id ${id} ha sido removido`);
          } else {
            console.log(`Este usuario no coincide con el id ${id}`);
          }
        });

        fs.writeFile(place, JSON.stringify(user, null, 2), (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, `"${place}"`);
          }
        });
      }
    });
  } else {
    console.log(`No existe el archivo "${place}"`);
  }
};

module.exports = {
  readFile,
  createFile,
  appendUser,
  removeLast,
  removeById,
};
