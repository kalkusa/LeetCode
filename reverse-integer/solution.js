let solution = (x) => {
  let stringNumber = x.toString();
  let output = "";
  let omitFirstZeroes = true;
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    if (stringNumber[i] === "-") {
      output = "-" + output;
      continue;
    }

    if (omitFirstZeroes && stringNumber[i] !== "0") {
      omitFirstZeroes = false;
    }

    if (stringNumber[i] === "0") {
      if (!omitFirstZeroes) {
        output = output + "0";
      }
    } else {
      output = output + stringNumber[i];
    }
  }
  if (output >= 2147483648 - 1) {
    return 0;
  }
  if (output <= -2147483648) {
    return 0;
  }
  return Number(output);
};

module.exports = solution;
