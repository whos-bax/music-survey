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
      this.createQuestionTable();
      this.createAnswerTable();
    });
  }

  getAdmin = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT * FROM admin`, (err, row) => {
        if (err) {
          console.log("err :", err);
          return reject(err);
        }
        resolve(row);
      });
    });
  };

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
      }
    );
  };

  // question 테이블 생성
  createQuestionTable = () => {
    this.db.run(
      `CREATE TABLE IF NOT EXISTS ${this.questionTable} (
        questionId INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        answerId INTEGER,
        FOREIGN KEY(answerId) REFERENCES ${this.answerTable}(answerId)        
      )`,
      (err) => {
        if (err) {
          console.log("error in creating table", err);
        }
      }
    );
  };

  // answer 테이블 생성
  createAnswerTable = () => {
    this.db.run(
      `CREATE TABLE IF NOT EXISTS ${this.questionTable} (
        answerId INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT,
        questionId INTEGER,
        FOREIGN KEY(questionId) REFERENCES ${this.questionTable}(questionId)        
      )`,
      (err) => {
        if (err) {
          console.log("error in creating table", err);
        }
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
        "${Object.Q5}",
        "${Object.Q6}",
        "${Object.Q7}"
        )`
    );
  }

  getValue = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT * FROM ${this.surveyTable}`, (err, rows) => {
        if (err) {
          console.log("err :", err);
          return reject(err);
        }
        resolve(rows);
      });
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
        `SELECT question1, COUNT(question1) FROM ${this.surveyTable} GROUP BY question1`,
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

  getQ2 = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT question2, COUNT(question2) FROM ${this.surveyTable} GROUP BY question2`,
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

  getQ3 = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT question3, COUNT(question3) FROM ${this.surveyTable} GROUP BY question3`,
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

  getQ4 = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT question4, COUNT(question4) FROM ${this.surveyTable} GROUP BY question4`,
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

  getQ5 = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT question5, COUNT(question5) FROM ${this.surveyTable} GROUP BY question5`,
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

  getQ6 = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT question6, COUNT(question6) FROM ${this.surveyTable} GROUP BY question6`,
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

  getQ7 = async () => {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT question7, COUNT(question7) FROM ${this.surveyTable} GROUP BY question7`,
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
