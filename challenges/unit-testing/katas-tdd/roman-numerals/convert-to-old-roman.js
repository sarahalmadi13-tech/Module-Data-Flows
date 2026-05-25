function convertToOldRoman(num) {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 500, symbol: "D" },
    { value: 100, symbol: "C" },
    { value: 50, symbol: "L" },
    { value: 10, symbol: "X" },
    { value: 5, symbol: "V" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const entry of romanMap) {
    while (num >= entry.value) {
      result += entry.symbol;
      num -= entry.value;
    }
  }

  return result;
}

module.exports = convertToOldRoman;
