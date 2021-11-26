import express from "express";
import { MyDatabase } from "./db/MyDatabase.js";
import { SurveyDB } from "./db/surveyDB.js";

const app = express();

app.use(express.static("public"));
app.use(express.json()); // json body 처리

app.get("/hello", (req, res) => {
  console.log("hello get called");
  res.json({ message: "안녕하세요. Nodemon." });
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  console.log(req.body);

  const myDb = new MyDatabase();
  const mbd = new SurveyDB();

  mbd.createTable();

  myDb.insertValue(name);
  myDb.close();
  res.send("잘받았어");
});

app.listen(3000, () => console.log("server is running on port 3000"));
