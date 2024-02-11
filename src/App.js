import React from 'react';
import RegisterForm from './components/RegisterForm';

export default function App() {
  const handleSubmit = (formData) => {
    // Traitement de la soumission du formulaire
    console.log(formData); // Vous pouvez traiter les données ici
  };

  return (
    <div className="App">
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}