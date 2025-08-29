const express = require("express");
const router = express.Router();

const FULL_NAME = "charmala Enosh Brainard";
const DOB = "08062004";
const EMAIL = "enoshbrainard8@gmail.com";
const ROLL_NUMBER = "22BCE2926";

// POST /bfhl
router.post("/", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input. Expected { data: [ ... ] }",
      });
    }

    // Processing logic directly here
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialChars = [];
    let sum = 0;
    let concatString = "";

    data.forEach((item) => {
      if (!isNaN(item)) {
        const num = parseInt(item, 10);
        sum += num;
        if (num % 2 === 0) {
          evenNumbers.push(num.toString());
        } else {
          oddNumbers.push(num.toString());
        }
      } else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
        concatString += item;
      } else {
        specialChars.push(item);
      }
    });

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: concatString,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      is_success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
