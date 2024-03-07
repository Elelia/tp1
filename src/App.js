import React from 'react';
import RegisterForm from './components/RegisterForm';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const port = process.env.PORT || 8000;
  let [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    async function countUsers() {
      try {
        const api = axios.create({
          baseURL: `http://localhost:${port}`,
        });
        const response = await api.get('/users');
        setUsersCount(response.data.utilisateurs.length);
      } catch (error) {
        console.error(error);
      }
    }
    countUsers();
  }, []);

  const handleSubmit = (formData) => {
    // Traitement de la soumission du formulaire
    console.log(formData); // Vous pouvez traiter les données ici
  };

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Formulaire d'inscription</h1>
        <p>Nombre d'utilisateurs inscrits: {usersCount}</p>
      </header>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}