import express from "express";
import { MyDatabase } from "./db/MyDatabase.js";
import { SurveyDB } from "./db/surveyDB.js";

const app = express();

app.use(express.static("public"));
app.use(express.json()); // json body 처리

app.get("/api", (req, res) => {
  res.json({ message: "안녕하세요. Nodemon." });
});

// apis.js
app.post("/api", (req, res) => {
  console.log("survey result : ", req.body);
  const surdb = new SurveyDB();

  surdb.createTable();
  surdb.insertValue(req.body);

  surdb.close();
});

app.listen(3000, () => console.log("server is running on port 3000"));
