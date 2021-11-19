import sqlite from "sqlite3";

const sqlite3 = sqlite.verbose();
const dbName = "mydb.db";
const contactsTable = "contacts";

const db = new sqlite3.Database(dbName, (err) => {
  if (err) return console.log("error", err);
  console.log(`create ${dbName} memory success`);
});

db.serialize(() => {
  //   db.run(`DROP TABLE ${contactsTable}`);

  db.run(`CREATE TABLE IF NOT EXISTS ${contactsTable} (
    contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL UNIQUE
)`);

//   db.run(`INSERT INTO ${contactsTable} (first_name, last_name, email, phone) VALUES (
//     "Holy",
//     "Moly",
//     "SHIT@korea.ac.kr",
//     "010-2021-1119"
// )`);

//   db.run(`INSERT INTO ${contactsTable} (first_name, last_name, email, phone) VALUES (
//     "Doly",
//     "Jolly",
//     "GGGIT@korea.ac.kr",
//     "010-2021-1119-1"
// )`);

  db.get(`SELECT * FROM ${contactsTable}`, (err, row) => {
    if (err) {
      return console.log("error from select", err);
    }
    console.log("result from select", row);
  });

  db.all(`SELECT * FROM ${contactsTable}`, (err, rows) => {
    if (err) {
      return console.log("error from select", err);
    }
    console.log("result from select", rows);
  });

  db.close();
});
