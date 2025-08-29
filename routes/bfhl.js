const express = require("express");
const router = express.Router();

const FULL_NAME = "charmala_Enosh_Brainard";
const DOB = "08062004";
const EMAIL = "charmala.enosh2022@vitstudent.ac.in";
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

    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialChars = [];
    let sum = 0;
    let lettersConcat = "";

    data.forEach((item) => {
      if (!isNaN(item)) {
        const num = parseInt(item, 10);
        if (!isNaN(num)) {
          sum += num;
          if (num % 2 === 0) {
            evenNumbers.push(num.toString());
          } else {
            oddNumbers.push(num.toString());
          }
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        lettersConcat += item;
      } else {
        specialChars.push(item);
      }
    });

    // Create alternating caps reverse string
    let reversed = lettersConcat.split("").reverse().join("");
    let concatString = "";
    for (let i = 0; i < reversed.length; i++) {
      concatString += i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
    }

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets,
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
