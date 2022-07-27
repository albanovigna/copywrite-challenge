const { Router } = require("express");
const router = Router();

function reverseString(string) {
  return string.split("").reverse().join("");
}

router.get("/", (req, res) => {
  const { text } = req.query;
  try {
    if (text) {
      const result = reverseString(text);
      res.status(200).json({ text: result });
    } else {
      res.status(400).json({ error: "no text" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "error" });
  }
});

module.exports = router;
