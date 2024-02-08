import React from 'react';
import { validateName, validateEmail, validateCity, validatePostalCode, validatePassword, validateDate } from '../utils/validate.js';

describe('Validation functions', () => {
  test('validateName should return true for valid name', () => {
    expect(validateName('John')).toBe(true);
  });

  test('validateName should return false for invalid name', () => {
    expect(validateName('123')).toBe(false);
  });

  test('validateEmail should return true for valid name', () => {
    expect(validateEmail('lisa.lucas@youhou.com')).toBe(true);
  });

  test('validateEmail should return false for invalid name', () => {
    expect(validateEmail('lemail.com')).toBe(false);
  });

  test('validateCity should return true for valid name', () => {
    expect(validateCity('Antibes')).toBe(true);
  });

  test('validateCity should return false for invalid name', () => {
    expect(validateCity('1234')).toBe(false);
  });

  test('validatePostalCode should return true for valid name', () => {
    expect(validatePostalCode('06600')).toBe(true);
  });

  test('validatePostalCode should return false for invalid name', () => {
    expect(validatePostalCode('code postal')).toBe(false);
  });

  test('validatePassword should return false for invalid name', () => {
    expect(validatePassword('7777777')).toBe(false);
  });

  test('validatePassword should return true for valid password', () => {
    expect(validatePassword('bnE43!uuH')).toBe(true);
  });

  test('validatePassword should return false for invalid password', () => {
    expect(validatePassword('oui')).toBe(false);
  });

  test('validateDate should return true for valid date', () => {
    expect(validateDate('01-01-2000')).toBe(true);
  });

  test('validateDate should return false for invalid date', () => {
    expect(validateDate('01-01-2020')).toBe(false);
  });

});