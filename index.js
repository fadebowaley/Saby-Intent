const express = require("express");
const { IntentRecognizer } = require("./intentRecognizer");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const recognizer = new IntentRecognizer();

app.post("/recognize", (req, res) => {
  const text = req.body.text;
  if (!text) {
    return res.status(400).send({ error: "Text is required" });
  }
  const result = recognizer.recognize(text);
  res.send({ intent: result.intent, accuracy: result.score });
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { server };
