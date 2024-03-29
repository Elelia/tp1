/**
 * Vérifie si le nom ou prénom est valide.
 * 
 * @param {string} name - Le nom ou prénom à valider.
 * @returns {boolean} Retourne true si le nom ou prénom est valide, sinon false.
 */
function validateName(name) {
  return /^[a-zA-ZÀ-ÿ\s'-]+$/.test(name.trim());
}

/**
 * Vérifie si l'adresse e-mail est valide.
 * 
 * @param {string} email - L'adresse e-mail à valider.
 * @returns {boolean} Retourne true si l'adresse e-mail est valide, sinon false.
 */
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email.trim());
}

/**
 * Vérifie si la ville est valide.
 * 
 * @param {string} city - La ville à valider.
 * @returns {boolean} Retourne true si la ville est valide, sinon false.
 */
function validateCity(city) {
  return /^[a-zA-ZÀ-ÿ\s'-]+$/.test(city.trim());
}

/**
 * Vérifie si le code postal est valide.
 * 
 * @param {string} postalCode - Le code postal à valider.
 * @returns {boolean} Retourne true si le code postal est valide, sinon false.
 */
function validatePostalCode(postalCode) {
  return /^\d{5}$/.test(postalCode.trim()) && /^\d+$/.test(postalCode.trim());
}

/**
 * Vérifie si le mot de passe est valide.
 * 
 * @param {string} password - Le mot de passe à valider.
 * @returns {boolean} Retourne true si le mot de passe est valide, sinon false.
 */
function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
}

/**
 * Vérifie si la date de naissance est valide.
 * 
 * @param {Date} date - La date de naissance à valider.
 * @returns {boolean} Retourne true si la date de naissance est valide, sinon false.
 */
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