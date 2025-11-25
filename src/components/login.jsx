import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import PassengerScreen from './passenger'; 
import DriverScreen from './driver';    // Το μετονομάσαμε
import EmployeeScreen from './employee'; // ΝΕΟ Component

// 0: Αρχική οθόνη, 1: Επιβάτης, 2: Οδηγός, 3: Υπάλληλος/Διαχείριση
const ROLE_SELECTION = 0;
const ROLE_PASSENGER = 1;
const ROLE_DRIVER = 2; // ΝΕΟΣ ΡΟΛΟΣ
const ROLE_EMPLOYEE = 3; // ΝΕΟΣ ΡΟΛΟΣ

const Login = () => { 
  const [currentRole, setCurrentRole] = useState(ROLE_SELECTION);

  const renderScreen = () => {
    switch (currentRole) {
      case ROLE_PASSENGER:
        return <PassengerScreen />;
      case ROLE_DRIVER:
        return <DriverScreen />; // Επιστρέφει την οθόνη του Οδηγού
      case ROLE_EMPLOYEE:
        return <EmployeeScreen />; // Επιστρέφει την οθόνη του Υπαλλήλου
      default: // ROLE_SELECTION
        return (
          <Box sx={{ p: 5, textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom color="primary">
              Καλώς ήρθατε στο Έξυπνο Τουριστικό Λεωφορείο!
            </Typography>
            <Typography variant="h5" mb={5}>
              Επιλέξτε τον ρόλο σας για να ξεκινήσετε:
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {/* Κουμπί Επιβάτη */}
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  fullWidth
                  sx={{ py: 3, fontSize: '1.2rem' }}
                  onClick={() => setCurrentRole(ROLE_PASSENGER)}
                >
                  Τουρίστας / Επιβάτης 🚌
                </Button>
              </Grid>

              {/* Κουμπί Οδηγού */}
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  sx={{ py: 3, fontSize: '1.2rem' }}
                  onClick={() => setCurrentRole(ROLE_DRIVER)}
                >
                  Οδηγός 🚦
                </Button>
              </Grid>
              
              {/* Κουμπί Υπαλλήλου (Διαχείριση) */}
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  color="error" // Χρησιμοποιούμε άλλο χρώμα για διαφοροποίηση
                  size="large"
                  fullWidth
                  sx={{ py: 3, fontSize: '1.2rem' }}
                  onClick={() => setCurrentRole(ROLE_EMPLOYEE)}
                >
                  Υπάλληλος / Διαχείριση ⚙️
                </Button>
              </Grid>
            </Grid>
          </Box>
        );
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Κουμπί Επιστροφής στην αρχική οθόνη */}
        {currentRole !== ROLE_SELECTION && (
          <Button onClick={() => setCurrentRole(ROLE_SELECTION)} variant="outlined" sx={{ mb: 2 }}>
            ← Επιστροφή στην Επιλογή Ρόλου
          </Button>
        )}
        
        {renderScreen()}
      </Box>
    </Container>
  );
};

export default Login;