class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  find(id) {
    return new Promise((resolve, reject) => {
      const sql = `select * from  ${this.table} where id = ?`;
      this.connection.all(sql, [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      const sql = `select * from  ${this.table}`;
      this.connection.all(sql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `delete from ${this.table} where id = ?`;
      this.connection.all(sql, [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  setConnection(connection) {
    this.connection = connection;
  }
}

module.exports = AbstractManager;
