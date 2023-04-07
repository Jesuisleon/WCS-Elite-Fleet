const modeles = require("../models");

const getOwners = (req, res) => {
  modeles.owner
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getOwners,
};
