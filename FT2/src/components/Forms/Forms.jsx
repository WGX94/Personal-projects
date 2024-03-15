import React, { useState } from 'react';
import './forms.scss'

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {

    if (typeof Storage !== 'undefined') {

      localStorage.setItem('user_name', name);
      localStorage.setItem('user_email', email);
    }

  };

  return (
    <div id='containerForm'>
      <h2>Modification des données personnelles</h2>
      <form>
        <label>
          Nom et Prénom :
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>

        <label>
          Adresse E-mail :
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>

        <button type="button" onClick={handleSubmit}>
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default SignupForm;