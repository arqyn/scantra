export function checkPasswordStrength(password: string) {
  if (!password) return "";

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[\W_]/.test(password);
  const length = password.length;

  if (length >= 8 && hasLower && hasUpper && hasNumber && hasSpecial) {
    return "Strong";
  } else if (
    length >= 6 &&
    ((hasLower && hasUpper) ||
      (hasLower && hasNumber) ||
      (hasUpper && hasNumber))
  ) {
    return "Medium";
  } else {
    return "Weak";
  }
}
