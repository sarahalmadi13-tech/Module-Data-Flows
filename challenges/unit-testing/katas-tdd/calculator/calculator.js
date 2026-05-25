function add(numbers) {
  if (numbers === "") return 0;

  const parts = numbers.split(",").map(Number);

  // Step 4: detect negatives
  const negatives = parts.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  // Step 3: ignore numbers > 1000
  const filtered = parts.filter((n) => n <= 1000);

  // Step 1 + 2: sum all numbers
  return filtered.reduce((sum, n) => sum + n, 0);
}

module.exports = add;
