import express, { json } from "express";
import { SurveyDB } from "./db/surveyDB.js";

const app = express();

app.use(express.static("public"));
app.use(express.json()); // json body 처리

const surdb = new SurveyDB();

app.get("/api/admin", async (req, res) => {
  const admin = await surdb.getAdmin();
  res.json(admin);
});

app.get("/api", async (req, res) => {
  const value = await surdb.getValue();
  const getAges = await surdb.getAges();
  const getGender = await surdb.getGender();
  const getQ1 = await surdb.getQ1();
  const getQ2 = await surdb.getQ2();
  const getQ3 = await surdb.getQ3();
  const getQ4 = await surdb.getQ4();
  const getQ5 = await surdb.getQ5();
  const getQ6 = await surdb.getQ6();
  const getQ7 = await surdb.getQ7();
  res.json({
    ages: getAges,
    gender: getGender,
    Q1: getQ1,
    Q2: getQ2,
    Q3: getQ3,
    Q4: getQ4,
    Q5: getQ5,
    Q6: getQ6,
    Q7: getQ7,
    all: value,
  });
});

// apis.js
app.post("/api", (req, res) => {
  surdb.createQuestionTable();
  surdb.createAnswerTable();
  surdb.insertValue(req.body);
});

app.listen(3000, () => console.log("server is running on port 3000"));
