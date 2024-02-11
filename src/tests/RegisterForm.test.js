import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import RegisterForm from '../components/RegisterForm';
const dayjs = require('dayjs');

describe('Tests d\'intégration pour le formulaire', () => {
  test('Vérification des éléments présents dans le formulaire', async () => {
    render(<RegisterForm />);
  
    const firstNameLabel = screen.getByLabelText(/Nom/);
    expect(firstNameLabel).toBeInTheDocument();

    const lastNameInput = screen.getByLabelText(/Prénom/);
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/Adresse mail/);
    expect(emailInput).toBeInTheDocument();

    const passwordInpud = screen.getByLabelText(/Mot de passe/);
    expect(passwordInpud).toBeInTheDocument();

    const birthDateInput = screen.getByLabelText(/Date de naissance/);
    expect(birthDateInput).toBeInTheDocument();

    const cityInput = screen.getByLabelText(/Ville/);
    expect(cityInput).toBeInTheDocument();

    const postalCodeInput = screen.getByLabelText(/Code postal/);
    expect(postalCodeInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /Inscription/ });
    expect(submitButton).toBeInTheDocument();
  });

  test("submit button is disabled initially", () => {
    render(<RegisterForm />);
  
    const submitButton = screen.getByRole("button", { name: /Inscription/ });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('Attribution de valeur aux éléments du formulaire et vérification', async () => {
    render(<RegisterForm />);

    const firstNameInput = screen.getByLabelText(/Nom/);
    const lastNameInput = screen.getByLabelText(/Prénom/);
    const emailInput = screen.getByLabelText(/Adresse mail/);
    const passwordInpud = screen.getByLabelText(/Mot de passe/);
    //const birthDateInput = screen.getByLabelText(/Date de naissance/);
    const cityInput = screen.getByLabelText(/Ville/);
    const postalCodeInput = screen.getByLabelText(/Code postal/);

    //const date = dayjs('01-01-2000');

    fireEvent.change(firstNameInput, { target: { value: 'Doe' } });
    fireEvent.change(lastNameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordInpud, { target: { value: 'Jk0nl!56HJ' } });
    //fireEvent.change(birthDateInput, { target: { value: '01-01-2000' } });
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.change(postalCodeInput, { target: { value: '10001' } });

    expect(firstNameInput.value).toBe('Doe');
    expect(lastNameInput.value).toBe('John');
    expect(emailInput.value).toBe('johndoe@gmail.com');
    expect(passwordInpud.value).toBe('Jk0nl!56HJ');
    //expect(birthDateInput.value).toBe('01-01-2000');
    expect(cityInput.value).toBe('New York');
    expect(postalCodeInput.value).toBe('10001');
  });

  test('Soumet le formulaire avec des données valides', async () => {
    const handleSubmit = jest.fn();
    render(
      <RegisterForm onSubmit={handleSubmit} />
    );

    const firstNameInput = screen.getByLabelText(/Nom/);
    const lastNameInput = screen.getByLabelText(/Prénom/);
    const emailInput = screen.getByLabelText(/Adresse mail/);
    const passwordInpud = screen.getByLabelText(/Mot de passe/);
    const birthDateInput = screen.getByLabelText(/Date de naissance/);
    const cityInput = screen.getByLabelText(/Ville/);
    const postalCodeInput = screen.getByLabelText(/Code postal/);
    const submitButton = screen.getByRole('button', { name: /Inscription/ });

    fireEvent.change(firstNameInput, { target: { value: 'Doe' } });
    fireEvent.change(lastNameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordInpud, { target: { value: 'Jk0nl!56HJ' } });
    fireEvent.change(birthDateInput, { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.change(postalCodeInput, { target: { value: '10001' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: 'Doe',
        lastName: 'John',
        email: 'johndoe@gmail.com',
        password: 'Jk0nl!56HJ',
        selectedDate: dayjs('01-01-2000'),
        city: 'New York',
        postalCode: '10001'
      });
    });
  });

  test('Soumet le formulaire avec des données valides et vérifie le local storage', async () => {
    render(<RegisterForm />);

    const firstNameInput = screen.getByLabelText(/Nom/);
    const lastNameInput = screen.getByLabelText(/Prénom/);
    const emailInput = screen.getByLabelText(/Adresse mail/);
    const passwordInpud = screen.getByLabelText(/Mot de passe/);
    const birthDateInput = screen.getByLabelText(/Date de naissance/);
    const cityInput = screen.getByLabelText(/Ville/);
    const postalCodeInput = screen.getByLabelText(/Code postal/);
    const submitButton = screen.getByRole('button', { name: /Inscription/ });

    fireEvent.change(firstNameInput, { target: { value: 'Doe' } });
    fireEvent.change(lastNameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordInpud, { target: { value: 'Jk0nl!56HJ' } });
    fireEvent.change(birthDateInput, { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.change(postalCodeInput, { target: { value: '10001' } });

    fireEvent.click(submitButton);

    const storedData = JSON.parse(localStorage.getItem('formData'));
    expect(storedData).toEqual({
      firstName: 'Doe',
      lastName: 'John',
      email: 'johndoe@gmail.com',
      password: 'Jk0nl!56HJ',
      selectedDate: dayjs('01-01-2000'),
      city: 'New York',
      postalCode: '10001'
    });
  });
});