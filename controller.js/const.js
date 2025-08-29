const { processData } = require("../utils/helpers");

const FULL_NAME = "john_doe";
const DOB = "17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

exports.handlePost = (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input. Expected { data: [ ... ] }",
      });
    }

    const result = processData(data);

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: result.oddNumbers,
      even_numbers: result.evenNumbers,
      alphabets: result.alphabets,
      special_characters: result.specialChars,
      sum: result.sum.toString(),
      concat_string: result.concatString,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      is_success: false,
      message: "Server error",
    });
  }
};
