import sqlite from "sqlite3";

const sqlite3 = sqlite.verbose();

class SurveyDB {
  surveyTable = "survey";
  questionTable = "questions";

  constructor(dbName = "db/survey.db") {
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

  createTable = () => {
    this.db.run(
      `CREATE TABLE IF NOT EXISTS ${this.surveyTable}(
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
      )`,
      (err) => {
        if (err) {
          console.log("error in creating table", err);
        }
        console.log("Successful !");
      }
    );
  };

  createQuestionTable = () => {
    this.db.run(
      `CREATE TABLE IF NOT EXISTS ${this.questionTable} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        qNum INTEGER,

      )`,
      (err) => {
        if (err) {
          console.log("error in creating table", err);
        }
        console.log("Successful !");
      }
    );
  };

  insertValue(Object) {
    this.db.run(
      `INSERT INTO ${this.surveyTable} (ages, gender, question1, question2, question3, question4, question5, question6, question7 ) VALUES (
        "${Object.Ages}",
        "${Object.Gender}",
        "${Object.Q1}",
        "${Object.Q2}",
        "${Object.Q3}",
        "${Object.Q4}",
        '${Object.Q5}',
        "${Object.Q6}",
        '${Object.Q7}'
        )`
    );
  }

  getValue = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT * FROM ${this.surveyTable}`,
        (err, rows) => {
          if (err) {
            console.log("err :", err);
            return reject(err);
          }
          resolve(rows);
        }
      );
    });
  };

  getAges = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT ages, COUNT(ages) FROM ${this.surveyTable} GROUP BY ages`,
        (err, rows) => {
          if (err) {
            console.log("err :", err);
            return reject(err);
          }
          resolve(rows);
        }
      );
    });
  };

  getGender = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT gender, COUNT(gender) FROM ${this.surveyTable} GROUP BY gender`,
        (err, rows) => {
          if (err) {
            console.log("err :", err);
            return reject(err);
          }
          resolve(rows);
        }
      );
    });
  };

  getQ1 = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT question1 FROM ${this.surveyTable}`,
        (err, rows) => {
          if (err) {
            console.log("err :", err);
            return reject(err);
          }
          resolve(rows);
        }
      );
    });
  };

  close() {
    this.db.close();
  }
}

export { SurveyDB };
