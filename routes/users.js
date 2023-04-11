import express from "express";
import { client } from "../index.js";

const router = express.Router();


router.post("/signup", async function (req, res) {

    const { username, password } = req.body;
    const alreadyUser = await client.db("stackoverflow").collection("users").findOne({ username: username });
    if (alreadyUser) {
        res.send({ message: "user already exit" })
    }
    else {
        const result = await client.db("stackoverflow").collection("users").insertOne({ username: username, password: password });
        res.send(result);
    }
});
router.post("/login", async function (req, res) {
    const { username, password } = req.body;
    const result = await client.db("stackoverflow").collection("users").findOne({ username: username, password: password });
    console.log(result);
    if (result) {
        res.status(200).send({ message: "loginsuccesfull" })
    }
    else {
        res.status(500).send({ message: "invalid credentil" })
    }
})

export const userRouter = router;