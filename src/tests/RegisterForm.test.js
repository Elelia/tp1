import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';

import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import RegisterForm from '../components/RegisterForm';
const dayjs = require('dayjs');

describe('Tests d\'intégration pour le formulaire', () => {
  // Test de rendu du formulaire
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

  // Test de désactivation du bouton d'inscription
  test("Le bouton d'inscription est désactivé à l'ouverture du composant", () => {
    render(<RegisterForm />);
  
    const submitButton = screen.getByRole("button", { name: /Inscription/ });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  // Test de désactivation du bouton d'inscription si un champ est vide
  test("Le bouton d'inscription est désactivé si le nom est vide", () => {
    render(<RegisterForm />);
  
    const submitButton = screen.getByRole("button", { name: /Inscription/ });
    expect(submitButton).toBeDisabled();
  
    fireEvent.change(screen.getByLabelText(/Prénom/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Adresse mail/), { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/), { target: { value: 'Jk0nl!56HJ' } });
    fireEvent.change(screen.getByLabelText(/Date de naissance/), { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(screen.getByLabelText(/Ville/), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/Code postal/), { target: { value: '10001' } });
    fireEvent.change(screen.getByLabelText(/Nom/), {target: { value: "" },});
  
    expect(submitButton).toBeDisabled();
  });

  // Test de désactivation du bouton d'inscription si un champ est vide
  test("Le bouton d'inscription est désactivé si le prénom est vide", () => {
    render(<RegisterForm />);
  
    const submitButton = screen.getByRole("button", { name: /Inscription/ });
    expect(submitButton).toBeDisabled();
  
    fireEvent.change(screen.getByLabelText(/Nom/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Adresse mail/), { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/), { target: { value: 'Jk0nl!56HJ' } });
    fireEvent.change(screen.getByLabelText(/Date de naissance/), { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(screen.getByLabelText(/Ville/), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/Code postal/), { target: { value: '10001' } });
    fireEvent.change(screen.getByLabelText(/Prénom/), {target: { value: "" },});
  
    expect(submitButton).toBeDisabled();
  });

  // Test de désactivation du bouton d'inscription si un champ est vide
  test("Le bouton d'inscription est désactivé si l'adresse mail est vide", () => {
    render(<RegisterForm />);
  
    const submitButton = screen.getByRole("button", { name: /Inscription/ });
    expect(submitButton).toBeDisabled();
  
    fireEvent.change(screen.getByLabelText(/Nom/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Prénom/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/), { target: { value: 'Jk0nl!56HJ' } });
    fireEvent.change(screen.getByLabelText(/Date de naissance/), { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(screen.getByLabelText(/Ville/), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/Code postal/), { target: { value: '10001' } });
    fireEvent.change(screen.getByLabelText(/Adresse mail/), {target: { value: "" },});
  
    expect(submitButton).toBeDisabled();
  });

  // Test de désactivation du bouton d'inscription si un champ est vide
  test("Le bouton d'inscription est désactivé si le mot de passe est vide", () => {
    render(<RegisterForm />);
  
    const submitButton = screen.getByRole("button", { name: /Inscription/ });
    expect(submitButton).toBeDisabled();
  
    fireEvent.change(screen.getByLabelText(/Nom/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Prénom/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Adresse mail/), { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Date de naissance/), { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(screen.getByLabelText(/Ville/), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/Code postal/), { target: { value: '10001' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/), {target: { value: "" },});
  
    expect(submitButton).toBeDisabled();
  });

  // Test de désactivation du bouton d'inscription si un champ est vide
  test("Le bouton d'inscription est désactivé si la ville est vide", () => {
    render(<RegisterForm />);
  
    const submitButton = screen.getByRole("button", { name: /Inscription/ });
    expect(submitButton).toBeDisabled();
  
    fireEvent.change(screen.getByLabelText(/Nom/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Prénom/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Adresse mail/), { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/), { target: { value: 'Jk0nl!56HJ' } });
    fireEvent.change(screen.getByLabelText(/Date de naissance/), { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(screen.getByLabelText(/Code postal/), { target: { value: '10001' } });
    fireEvent.change(screen.getByLabelText(/Ville/), {target: { value: "" },});
  
    expect(submitButton).toBeDisabled();
  });

  // Test de désactivation du bouton d'inscription si un champ est vide
  test("Le bouton d'inscription est désactivé si le code postal est vide", () => {
    render(<RegisterForm />);
  
    const submitButton = screen.getByRole("button", { name: /Inscription/ });
    expect(submitButton).toBeDisabled();
  
    fireEvent.change(screen.getByLabelText(/Nom/), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Prénom/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Adresse mail/), { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Mot de passe/), { target: { value: 'Jk0nl!56HJ' } });
    fireEvent.change(screen.getByLabelText(/Date de naissance/), { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(screen.getByLabelText(/Ville/), { target: { value: 'New York' } });
    fireEvent.change(screen.getByLabelText(/Code postal/), {target: { value: "" },});
  
    expect(submitButton).toBeDisabled();
  });

  // Test d'attribution de valeur aux éléments du formulaire
  test('Attribution de valeur aux éléments du formulaire et vérification', async () => {
    render(<RegisterForm />);

    const firstNameInput = screen.getByLabelText(/Nom/);
    const lastNameInput = screen.getByLabelText(/Prénom/);
    const emailInput = screen.getByLabelText(/Adresse mail/);
    const passwordInpud = screen.getByLabelText(/Mot de passe/);
    const birthDateInput = screen.getByLabelText(/Date de naissance/);
    const cityInput = screen.getByLabelText(/Ville/);
    const postalCodeInput = screen.getByLabelText(/Code postal/);

    fireEvent.change(firstNameInput, { target: { value: 'Doe' } });
    fireEvent.change(lastNameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordInpud, { target: { value: 'Jk0nl!56HJ' } });
    fireEvent.change(birthDateInput, { target: { value: dayjs('01-01-2000') } });
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.change(postalCodeInput, { target: { value: '10001' } });

    expect(firstNameInput.value).toBe('Doe');
    expect(lastNameInput.value).toBe('John');
    expect(emailInput.value).toBe('johndoe@gmail.com');
    expect(passwordInpud.value).toBe('Jk0nl!56HJ');
    expect(birthDateInput.value).toBe(dayjs('01-01-2000'));
    expect(cityInput.value).toBe('New York');
    expect(postalCodeInput.value).toBe('10001');
  });

  // Test de soumission du formulaire avec des données valides
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

  // Test de soumission du formulaire avec des données valides et vérification du local storage
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

  // Test de soumission du formulaire avec des données invalides et vérification de l'affichage du toaster
  test('Soumet le formulaire avec des données invalides et vérifie l\'affichage du toaster', async () => {
    jest.mock('react-toastify', () => ({
      toast: jest.fn()
    }));
    render(<RegisterForm />);

    const firstNameInput = screen.getByLabelText(/Nom/);
    const lastNameInput = screen.getByLabelText(/Prénom/);
    const emailInput = screen.getByLabelText(/Adresse mail/);
    const passwordInpud = screen.getByLabelText(/Mot de passe/);
    const birthDateInput = screen.getByLabelText(/Date de naissance/);
    const cityInput = screen.getByLabelText(/Ville/);
    const postalCodeInput = screen.getByLabelText(/Code postal/);
    const submitButton = screen.getByRole('button', { name: /Inscription/ });

    fireEvent.change(firstNameInput, { target: { value: '123434' } });
    fireEvent.change(lastNameInput, { target: { value: '65645' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@' } });
    fireEvent.change(passwordInpud, { target: { value: 'happy' } });
    fireEvent.change(birthDateInput, { target: { value: dayjs('01-01-2015') } });
    fireEvent.change(cityInput, { target: { value: '7888' } });
    fireEvent.change(postalCodeInput, { target: { value: '99' } });

    fireEvent.click(submitButton);

    expect(toast).toHaveBeenCalledWith('Le formulaire contient des erreurs. Veuillez vérifier les champs.');
  });
});