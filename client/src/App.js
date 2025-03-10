import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Calculator from './components/Calculator';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Language</InputLabel>
              <Select
                value={language}
                label="Language"
                onChange={handleLanguageChange}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">हिंदी</MenuItem>
                <MenuItem value="bn">বাংলা</MenuItem>
                <MenuItem value="ta">தமிழ்</MenuItem>
                <MenuItem value="te">తెలుగు</MenuItem>
                <MenuItem value="kn">ಕನ್ನಡ</MenuItem>
                <MenuItem value="ml">മലയാളം</MenuItem>
                <MenuItem value="mr">मराठी</MenuItem>
                <MenuItem value="gu">ગુજરાતી</MenuItem>
                <MenuItem value="pa">ਪੰਜਾਬੀ</MenuItem>
              </Select>
            </FormControl>
            <Calculator />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 