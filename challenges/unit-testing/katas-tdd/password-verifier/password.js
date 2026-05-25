function verify(password) {
  // Step 2: null check
  if (password === null) {
    return "Password rejected";
  }

  // Step 1: length check
  if (password.length < 8) {
    return "Password rejected";
  }

  // Step 3: must contain uppercase
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    return "Password rejected";
  }

  // Step 4: must contain number
  const hasNumber = /[0-9]/.test(password);
  if (!hasNumber) {
    return "Password rejected";
  }

  return "Password accepted";
}

module.exports = verify;
