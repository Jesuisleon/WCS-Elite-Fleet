const modeles = require("../models");

const getAllVehicles = (req, res) => {
  modeles.vehicule
    .findVehicle()
    .then((result) => {
      const reservation = [req.body.resa];
      const vehicles = result.map((element) => {
        const element2 = reservation.filter(
          (i) => i.id_vehicule === element.id
        );
        return { ...element, ...element2 };
      });
      res.status(200).json(vehicles);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneVehicle = (req, res) => {
  const { id } = req.params;
  modeles.vehicule
    .findById(id)
    .then((result) => {
      if (result.length) {
        const reservation = [req.body.resa];
        const vehicles = result.map((element) => {
          const element2 = reservation.filter(
            (i) => i.id_vehicule === element.id
          );
          return { ...element, ...element2 };
        });
        res.status(200).json(vehicles);
      } else {
        const message = "Véhicule non trouvé";
        res.status(404).json(message);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getVehicleByOwnerId = (req, res) => {
  const { id } = req.params;
  modeles.vehicule
    .findByOwnerId(id)
    .then(([result]) => {
      const reservation = req.body.resa;
      const vehicles = result.map((element) => {
        const element2 = reservation.filter(
          (i) => i.id_vehicule === element.id
        );
        return { ...element, ...element2 };
      });
      res.status(200).json(vehicles);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createVehicle = (req, res) => {
  const vehicle = req.body;
  vehicle.id_loueur = parseInt(req.params.id, 10);
  modeles.vehicule
    .addVehicle(vehicle)
    .then(([result]) => {
      const message = "Véhicule ajouté avec succès.";
      res.location(`/vehicle/${result.insertId}`).json({ message });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteVehicle = (req, res) => {
  const { id } = req.params;
  modeles.vehicule
    .deleteVehicle(id)
    .then(([result]) => {
      if (result.affectedRows > 0) {
        const message = "Véhicule supprimé avec succès.";
        res.status(200).json(message);
      } else {
        const message = " Véhicule non trouvé";
        res.status(404).json(message);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllVehicles,
  getVehicleByOwnerId,
  createVehicle,
  deleteVehicle,
  getOneVehicle,
};
