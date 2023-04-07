const modeles = require("../models");

const addUser = (req, res) => {
  const user = req.body;
  modeles.user
    .addUser(user)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllUsers = (req, res) => {
  modeles.user
    .findAll()
    .then((rows) => {
      rows.forEach((element) => {
        const user = element;
        delete user.hashedPassword;
        return user;
      });
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const displayUser = (req, res) => {
  res.send({ user: req.user });
};

const updateUser = (req, res) => {
  const user = req.body;
  const id = parseInt(req.params.id, 10);
  modeles.user
    .updateUser(user, id)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteUser = (req, res) => {
  modeles.user
    .deleteUser(req)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllUsers,
  displayUser,
  addUser,
  updateUser,
  deleteUser,
};
