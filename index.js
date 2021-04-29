const express = require("express");
const cors = require("cors");

const { calculateResistor } = require("./domain/calculator");
const app = express();
const port = 3002;

// Needs cors middleware for localhost execution
app.use(cors());

app.get("/decode", (req, res) => {
  const colors = JSON.parse(req.query.colors);

  if (colors.length != 4) {
    res.status(400).send("you must send 4 color names");
  }

  try {
    const values = calculateResistor(colors);
    res.send(values);
  } catch (e) {
    res.status(400).send(`${e.name}: ${e.message}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
