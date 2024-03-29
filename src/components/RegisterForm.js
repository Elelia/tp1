import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import verification from '../utils/validate';

const defaultTheme = createTheme();

/**
 * Composant de formulaire d'inscription
 * 
 * @param {Object} props - Les propriétés du composant.
 * @see https://mui.com/components/text-fields/#validation
 * @see https://mui.com/components/date-picker/#date-picker
 * @see https://mui.com/components/tooltips/#customized-tooltips
 */
export default function RegisterForm({ onSubmit }) {
  /**
   * État local pour les données du formulaire.
   */
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    postalCode: '',
    selectedDate: null
  });

  /**
   * État local pour les erreurs du formulaire.
   */
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    postalCode: '',
    selectedDate: null
  });

  /**
   * Vérifie si tous les champs du formulaire sont remplis.
   * 
   * @returns {boolean} Retourne true si tous les champs du formulaire sont remplis, sinon false.
   */
  const isFormFilled = () => {
    return Object.values(formData).every(value => {
      if (typeof value === 'string') {
        return value.trim() !== '';
      } else if (value instanceof Date) {
        return value !== null;
      } else if(value === null) {
        return false;
      }
      return true;
    });
  };

  /** 
   * Met à jour les valeurs des champs du formulaire en fonction des modifications de l'utilisateur.
   * 
   * @param {Event} e - L'événement de modification de champ (onChange).
   * 
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  /**
   * Met à jour la valeur du champ de la date sélectionnée dans le formulaire.
   * 
   * @param {Date} date - La date sélectionnée par l'utilisateur.
   */
  const handleDateChange = (date) => {
    setFormData(prevState => ({
      ...prevState,
      selectedDate: date
    }));
  };

  /**
   * Valide les données du formulaire et renvoie un objet d'erreurs pour les champs invalides.
   * 
   * @param {Object} formData - Les données du formulaire à valider.
   * @returns {Object} Un objet contenant les erreurs de validation pour les champs invalides.
   */
  const validateForm = (formData) => {
    const errors = {};
    if(!verification.validateName(formData.firstName)){
      errors.firstName = "Nom invalide";
    }
    if(!verification.validateName(formData.lastName)){
      errors.lastName = "Prénom invalide";
    }
    if(!verification.validateEmail(formData.email)){
      errors.email = "Adresse e-mail invalide";
    }
    if(!verification.validateCity(formData.city)){
      errors.city = "Ville invalide";
    }
    if(!verification.validatePostalCode(formData.postalCode)){
      errors.postalCode = "Code postal invalide";
    }
    if(!verification.validatePassword(formData.password)){
      errors.password = "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";
    }
    if(!verification.validateDate(formData.selectedDate)){
      errors.selectedDate = "Vous devez être âgé d'au moins 18 ans.";
    }
    return errors;
  };

  /**
   * Gère la soumission du formulaire.
   * 
   * @param {Event} e - L'événement de soumission du formulaire.
   */
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem('formData', JSON.stringify(formData));
      toast.success('Formulaire soumis avec succès !');
      onSubmit(formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '',
        postalCode: '',
        selectedDate: null
      });
    } else {
      setFormErrors(errors);
      toast.error('Le formulaire contient des erreurs. Veuillez vérifier les champs.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HowToRegIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inscrivez-vous !
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmitForm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nom"
                  autoFocus
                  onChange={handleInputChange}
                  value={formData.firstName}
                  error={!!formErrors.firstName}
                  helperText={formErrors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Prénom"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleInputChange}
                  value={formData.lastName}
                  error={!!formErrors.lastName}
                  helperText={formErrors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse mail"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInputChange}
                  value={formData.password}
                  error={!!formErrors.password}
                  helperText={formErrors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider 
                  dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    fullWidth
                    label="Date de naissance"
                    id="birthDate"
                    value={formData.selectedDate}
                    onChange={handleDateChange}
                    format="DD/MM/YYYY"
                    //slotProps={{ input: {...params} }}
                    //renderInput={(params) => <input {...params} />} 
                    error={!!formErrors.selectedDate}
                    helperText={formErrors.selectedDate}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="Ville"
                  name="city"
                  autoComplete="city-name"
                  onChange={handleInputChange}
                  value={formData.city}
                  error={!!formErrors.city}
                  helperText={formErrors.city}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="postalCode"
                  label="Code postal"
                  name="postalCode"
                  autoComplete="postal-code"
                  onChange={handleInputChange}
                  value={formData.postalCode}
                  error={!!formErrors.postalCode}
                  helperText={formErrors.postalCode}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmitForm}
              disabled={!isFormFilled()}
              sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
            >
              Inscription
            </Button>
            <ToastContainer />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}