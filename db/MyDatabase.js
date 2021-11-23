import sqlite from "sqlite3";

const sqlite3 = sqlite.verbose();

class MyDatabase {
  constructor(dbName = "mydb.db") {
    this.artistTable = "artists";
    this.db = new sqlite3.Database(dbName, (err) => {
      if (err) {
        return console.log("error in creating db", err);
      }

      console.log(`create ${dbName} successfully.`);
    });
    this.db.serialize(() => {
      this.createTable();
    });
  }

  createTable() {
    this.db.run(`CREATE TABLE IF NOT EXISTS ${this.artistTable}(
          artist_id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL
      )`);
  }

  insertValue(name) {
    this.db.run(`INSERT INTO ${this.artistTable} (name) VALUES ('${name}')`);
  }
}

export { MyDatabase };
