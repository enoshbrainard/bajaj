function processData(data) {
  let oddNumbers = [];
  let evenNumbers = [];
  let alphabets = [];
  let specialChars = [];
  let sum = 0;
  let lettersConcat = "";

  data.forEach((item) => {
    if (!isNaN(item)) {
      // It's a number
      let num = parseInt(item, 10);
      if (!isNaN(num)) {
        sum += num;
        if (num % 2 === 0) {
          evenNumbers.push(item.toString());
        } else {
          oddNumbers.push(item.toString());
        }
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      // Alphabet
      alphabets.push(item.toUpperCase());
      lettersConcat += item;
    } else {
      // Special char
      specialChars.push(item);
    }
  });

  // Create alternating caps reverse string
  let reversed = lettersConcat.split("").reverse().join("");
  let concatString = "";
  for (let i = 0; i < reversed.length; i++) {
    concatString +=
      i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
  }

  return {
    oddNumbers,
    evenNumbers,
    alphabets,
    specialChars,
    sum,
    concatString,
  };
}

module.exports = { processData };
