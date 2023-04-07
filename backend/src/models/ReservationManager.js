const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    super({ table: "reservation" });
  }

  findReservation() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT id_vehicule, user.prenom + ' ' + user.nom AS user_renter, locationDebut, locationFin FROM ${this.table}
      INNER JOIN user ON  user.id = reservation.id_utlisateur`;
      this.connection.all(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    // return this.connection.query(
    //   `SELECT id_vehicule, CONCAT(user.prenom, ' ', user.nom) AS user_renter, locationDebut, locationFin FROM ${this.table}
    //   INNER JOIN user ON  user.id = reservation.id_utlisateur`
    // );
  }

  addReservation(reservation) {
    return this.connection.query(
      `INSERT INTO ${this.table} (id_vehicule, id_utlisateur, locationDebut, locationFin) VALUES (?, ?, ?, ?)`,
      [
        reservation.id_vehicule,
        reservation.id_loggedIn,
        reservation.locationDebut,
        reservation.locationFin,
      ]
    );
  }
}
module.exports = ReservationManager;
