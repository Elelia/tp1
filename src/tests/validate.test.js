import { validateName, validateEmail, validateCity, validatePostalCode, validatePassword, validateDate } from '../utils/validate.js';

describe('Validation functions', () => {
  test('validateName should return true for valid name', () => {
    expect(validateName('John Doe')).toBe(true);
  });

  test('validateName should return false for invalid name', () => {
    expect(validateName('123')).toBe(false);
  });

});