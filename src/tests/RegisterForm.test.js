import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import RegisterForm from '../components/RegisterForm';

describe('Tests d\'intégration pour le formulaire', () => {
  test('Soumet le formulaire avec des données valides', async () => {
    //const { debug } = render(<RegisterForm />);
    //debug();
    const { getByLabelText, getByText } = render(<RegisterForm />);

    // Remplissez le formulaire avec des données valides
    userEvent.type(getByLabelText('Nom'), 'Doe');
    userEvent.type(getByLabelText('Prénom'), 'John');
    userEvent.type(getByLabelText('Adresse mail'), 'john.doe@example.com');
    userEvent.type(getByLabelText('Mot de passe'), 'MotDePasse123');
    // Vous pouvez remplir d'autres champs de la même manière

    // Soumettez le formulaire
    fireEvent.click(getByText('Inscription'));

    // Attendez que le message de succès soit affiché
    await waitFor(() => expect(getByText('Formulaire soumis avec succès !')).toBeInTheDocument());

    // Assurez-vous que le formulaire a été vidé après la soumission
    expect(getByLabelText('Nom')).toHaveValue('');
    expect(getByLabelText('Prénom')).toHaveValue('');
    expect(getByLabelText('Adresse mail')).toHaveValue('');
    expect(getByLabelText('Mot de passe')).toHaveValue('');
    // Assurez-vous que les autres champs sont également vides
  });
});