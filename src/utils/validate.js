function validateName(name) {
  console.log("BONJOUR");
  return /^[a-zA-ZÀ-ÿ\s'-]+$/.test(name.trim());
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email.trim());
}

function validateCity(city) {
  return /^[a-zA-ZÀ-ÿ\s'-]+$/.test(city.trim());
}

function validatePostalCode(postalCode) {
  return /^\d+$/.test(postalCode.trim());
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

/*export function validateForm(data) {
  const errors = {};
  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.trim())) {
    errors.firstName = "Nom invalide";
  }
  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.trim())) {
    errors.lastName = "Prénom invalide";
  }
  if (!/\S+@\S+\.\S+/.test(data.trim())) {
    errors.email = "Adresse e-mail invalide";
  }
  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.trim())) {
    errors.city = "Ville invalide";
  }
  if (!/^\d+$/.test(data.trim())) {
    errors.postalCode = "Code postal invalide";
  }
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(data.password)) {
    errors.password = "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
  }
  const today = new Date();
  const minAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  if (data > minAgeDate) {
    errors.selectedDate = "Vous devez être âgé d'au moins 18 ans.";
  }
  return errors;
}*/