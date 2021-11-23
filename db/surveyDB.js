import sqlite from "sqlite3";

const sqlite3 = sqlite.verbose();

class MyDatabase {
  constructor(dbName = "survey.db") {
    this.surveyTable = "survey";
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
    this.db.run(`CREATE TABLE IF NOT EXISTS ${this.surveyTable}(
          survey_id INTEGER PRIMARY KEY AUTOINCREMENT,
          ages INTEGER NOT NULL,
          gender INTEGER NOT NULL,
          question1 BOOLEAN NOT NULL,
          question2 INTEGER,
          question3 TEXT,
          question4 TEXT,
          question5 TEXT,
          question6 TEXT,
          question7 TEXT
      )`);
  }

  insertValue(name) {
    this.db.run(
      `INSERT INTO ${this.surveyTable} (ages, gender, question1, question2, question3, question4, question5, question6, question7 ) VALUES (
        "10",
        "male",
        "yes",
        "2",
        "move,workout",
        "hiphop,rock",
        "korea",
        "youtube,etc",
        null        
        )`
    );
  }
}

export { MyDatabase };
