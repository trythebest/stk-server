import express from "express";
import { client } from "../index.js";

const router = express.Router();


router.get("/", async function (req, res) {
    const results = await client
        .db("stackoverflow")
        .collection("answer")
        .find({})
        .toArray();
    res.send(results);
})

router.post("/", async function (req, res) {

    const answer = req.body;
    const result = await client
        .db("stackoverflow")
        .collection("answer")
        .insertOne(answer);
    res.send(result);

});



export const AnswersRouter = router;