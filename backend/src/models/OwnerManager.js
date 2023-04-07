const AbstractManager = require("./AbstractManager");

class OwnerManager extends AbstractManager {
  constructor() {
    super({ table: "owner" });
  }

  findOwners() {
    return new Promise((resolve, reject) => {
      const sql = `select entreprise, email, ville, estValide, logo from  ${this.table}`;
      this.connection?.all(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = OwnerManager;
