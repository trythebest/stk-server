import express from "express";
import { client } from "../index.js";

const router = express.Router();

router.post("/", async function (req, res) {
    const data = req.body;
    const result = await client
        .db("stackoverflow")
        .collection("questions")
        .insertOne(data);

    res.send(result);
});

router.get("/", async function (req, res) {
    const result = await client
        .db("stackoverflow")
        .collection("questions")
        .find({})
        .toArray();
    res.send(result);
})

export const QuestionRouter = router;