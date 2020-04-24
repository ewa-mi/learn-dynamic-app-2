const axios = require("axios");
const express = require("express");

const app = express();

const sourceApi = "http://localhost:30000/days";

app.get("/days", async (req, res) => {
  try {
    const sourceRes = await axios.get(sourceApi);
    const { data } = sourceRes;
    res.send(data);
  } catch (error) {
    console.log("error.message test:", error.message);
  }
});

const port = 40000;

app.listen(port, console.log(`Server started on: ${port}`));
