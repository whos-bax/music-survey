import express, { json } from "express";
// import { MyDatabase } from "./db/MyDatabase.js";
import { SurveyDB } from "./db/surveyDB.js";

const app = express();

app.use(express.static("public"));
app.use(express.json()); // json body 처리

const surdb = new SurveyDB();

app.get("/api", async (req, res) => {
  const value = await surdb.getValue();
  const getAges = await surdb.getAges();
  const getGender = await surdb.getGender();
  const getQ1 = await surdb.getQ1();
  res.json({ ages: getAges, gender: getGender, Q1: getQ1, all: value });
});

// apis.js
app.post("/api", (req, res) => {
  console.log("survey result : ", req.body);

  surdb.createTable();
  surdb.insertValue(req.body);
});

app.listen(3000, () => console.log("server is running on port 3000"));
