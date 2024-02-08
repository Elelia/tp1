function validateName(name) {
  return /^[a-zA-ZÀ-ÿ\s'-]+$/.test(name.trim());
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email.trim());
}

function validateCity(city) {
  return /^[a-zA-ZÀ-ÿ\s'-]+$/.test(city.trim());
}

function validatePostalCode(postalCode) {
  return /^\d{5}$/.test(postalCode.trim()) && /^\d+$/.test(postalCode.trim());
}

function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
}

function validateDate(date) {
  const today = new Date();
  const minAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  if(date <= minAgeDate) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  validateName,
  validateEmail,
  validateCity,
  validatePostalCode,
  validatePassword,
  validateDate
}