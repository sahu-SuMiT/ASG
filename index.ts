import express from "express"
import os from "os"

export const app = express()

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/cpu", (req, res) => {
    for (let i = 0; i < 1000000000; i++) {
        Math.random();
    }
    res.send("Hello world after 1billion random ops")
})

app.get("/host", (req, res) => {
    res.send(os.hostname())
})
