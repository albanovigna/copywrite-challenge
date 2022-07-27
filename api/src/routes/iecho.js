const { Router } = require("express");
const router = Router();
const { reverseString, isPalindrome } = require("../utils");

router.get("/", (req, res) => {
  const { text } = req.query;
  try {
    if (text) {
      const obj = {
        text: reverseString(text),
        palindrome: isPalindrome(text),
      };
      res.status(200).json(obj);
    } else {
      res.status(400).json({ error: "no text" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "error" });
  }
});

module.exports = router;
