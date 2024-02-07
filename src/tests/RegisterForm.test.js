import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegisterForm from '../components/RegisterForm';

test('RegisterForm should submit form with valid data', () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(<RegisterForm onSubmit={onSubmit} />);

  fireEvent.change(getByPlaceholderText('First Name'), { target: { value: 'John' } });
  fireEvent.change(getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
  fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(getByPlaceholderText('Date of Birth'), { target: { value: '2000-01-01' } });
  fireEvent.change(getByPlaceholderText('City'), { target: { value: 'Paris' } });
  fireEvent.change(getByPlaceholderText('Postal Code'), { target: { value: '75001' } });
  fireEvent.click(getByText('Register'));

  expect(onSubmit).toHaveBeenCalledWith({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    dob: '01/01/2000',
    city: 'Paris',
    postalCode: '75001',
  });
});