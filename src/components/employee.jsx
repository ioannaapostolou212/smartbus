import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const EmployeeScreen = () => { 
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{
        height: '80vh',
        backgroundColor: '#795548', // Καφέ (για διαχείριση συστημάτων)
        color: 'white',
        p: 4,
        borderRadius: 2,
        textAlign: 'center'
      }}>
        <Typography variant="h3" gutterBottom>
          Υπάλληλος: Σύστημα Διαχείρισης Λεωφορείου
        </Typography>
        <Typography variant="h6">
          (Η σελίδα είναι κενή - Θα προστεθούν λειτουργίες: Διαχείριση Οροφής & Ενέργειας, Ρομπότ Καθαρισμού)
        </Typography>
      </Box>
    </Container>
  );
};

export default EmployeeScreen;