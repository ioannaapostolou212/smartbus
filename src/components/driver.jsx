import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const DriverScreen = () => { // Αλλάζουμε το όνομα του component για να είναι πιο ακριβές
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{
        height: '80vh',
        backgroundColor: '#1a237e', // Σκούρο μπλε (για κέντρο ελέγχου οδήγησης)
        color: 'white',
        p: 4,
        borderRadius: 2,
        textAlign: 'center'
      }}>
        <Typography variant="h3" gutterBottom>
          Οδηγός: Βοήθεια Οδήγησης & Ρύθμιση Θερμοκρασίας
        </Typography>
        <Typography variant="h6">
          (Η σελίδα είναι κενή - Θα προστεθούν λειτουργίες: Οδηγική Υποστήριξη, Θερμοκρασία, Έλεγχος Επιβίβασης/Αποβίβασης)
        </Typography>
      </Box>
    </Container>
  );
};

export default DriverScreen;