import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import { AnswersRouter } from './routes/answer.js';
import { QuestionRouter } from './routes/question.js';
import { userRouter } from './routes/users.js';

dotenv.config();
const app = express();
app.use(cors())


const url = process.env.mongo_url;
const Port = process.env.PORT;

app.use(express.json());// this is step is important because when ever u send a data it converts into json.


async function connection() {
  const client = new MongoClient(url);
  await client.connect();
  console.log("back in online");
  return client;
}
export const client = await connection();

app.get("/", function (req, res) {
  res.send("Welcome back😎");
});

app.use("/answer", AnswersRouter)
app.use("/question", QuestionRouter)
app.use("/user", userRouter)
// app.listen(Port);
app.listen(Port,()=>console.log(`App is started in port ${Port}`))// the port is userdefined
