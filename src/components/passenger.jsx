import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const PassengerScreen = () => { // Το component ονομάζεται PassengerScreen
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{
        height: '80vh',
        backgroundColor: '#004d40', 
        color: 'white',
        p: 4,
        borderRadius: 2,
        textAlign: 'center'
      }}>
        <Typography variant="h3" gutterBottom>
          Επιβάτης: Έξυπνο Τουριστικό Λεωφορείο
        </Typography>
        <Typography variant="h6">
          (Η σελίδα είναι κενή - Θα προστεθούν λειτουργίες: Θέα, Αξιοθέατα, Παραγγελίες)
        </Typography>
        {/* Εδώ θα μπουν όλα τα μελλοντικά components των επιβατών */}
      </Box>
    </Container>
  );
};

export default PassengerScreen; // Export με το όνομα PassengerScreen