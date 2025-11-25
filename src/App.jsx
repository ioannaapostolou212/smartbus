import React from 'react';
import Login from './components/login'; 
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Ορίζουμε το βασικό μας θέμα για το Material-UI
const smartBusTheme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Πράσινο
    },
    secondary: {
      main: '#2196f3', // Μπλε
    },
    error: {
      main: '#f44336', // Κόκκινο για τον υπάλληλο
    },
    background: {
      default: '#f4f6f8',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={smartBusTheme}>
      <CssBaseline />
      <Login /> 
    </ThemeProvider>
  );
}

export default App;
