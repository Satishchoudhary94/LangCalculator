import React, { useState } from 'react';
import { Box, Grid, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { convertNumber, convertOperator } from '../utils/numberConverter';

const Calculator = () => {
  const { t, i18n } = useTranslation();
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const currentLanguage = i18n.language;

  const calculate = (num1, operator, num2) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    switch (operator) {
      case '+':
        return (n1 + n2).toString();
      case '-':
        return (n1 - n2).toString();
      case '*':
        return (n1 * n2).toString();
      case '/':
        if (n2 === 0) {
          throw new Error('Division by zero');
        }
        return (n1 / n2).toString();
      default:
        throw new Error('Invalid operator');
    }
  };

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + ' ' + operator + ' ');
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      const [num1, operator, num2] = equation.split(' ');
      const result = calculate(num1, operator, display);
      setDisplay(result);
      setEquation('');
    } catch (error) {
      setDisplay('Error');
      setEquation('');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const getDisplayValue = () => {
    if (display === 'Error') return t('error');
    return convertNumber(display, currentLanguage);
  };

  const getEquationValue = () => {
    if (!equation) return '';
    const [num1, operator, num2] = equation.split(' ');
    return `${convertNumber(num1, currentLanguage)} ${convertOperator(operator, currentLanguage)} ${num2 ? convertNumber(num2, currentLanguage) : ''}`;
  };

  const buttons = [
    { label: convertNumber('7', currentLanguage), onClick: () => handleNumber('7') },
    { label: convertNumber('8', currentLanguage), onClick: () => handleNumber('8') },
    { label: convertNumber('9', currentLanguage), onClick: () => handleNumber('9') },
    { label: convertOperator('/', currentLanguage), onClick: () => handleOperator('/') },
    { label: convertNumber('4', currentLanguage), onClick: () => handleNumber('4') },
    { label: convertNumber('5', currentLanguage), onClick: () => handleNumber('5') },
    { label: convertNumber('6', currentLanguage), onClick: () => handleNumber('6') },
    { label: convertOperator('*', currentLanguage), onClick: () => handleOperator('*') },
    { label: convertNumber('1', currentLanguage), onClick: () => handleNumber('1') },
    { label: convertNumber('2', currentLanguage), onClick: () => handleNumber('2') },
    { label: convertNumber('3', currentLanguage), onClick: () => handleNumber('3') },
    { label: convertOperator('-', currentLanguage), onClick: () => handleOperator('-') },
    { label: convertNumber('0', currentLanguage), onClick: () => handleNumber('0') },
    { label: '.', onClick: handleDecimal },
    { label: '=', onClick: handleEqual },
    { label: convertOperator('+', currentLanguage), onClick: () => handleOperator('+') },
  ];

  return (
    <Box>
      <TextField
        fullWidth
        variant="outlined"
        value={getEquationValue() + ' ' + getDisplayValue()}
        InputProps={{ readOnly: true }}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleClear}
          >
            {t('clear')}
          </Button>
        </Grid>
        {buttons.map((button, index) => (
          <Grid item xs={3} key={index}>
            <Button
              fullWidth
              variant="contained"
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Calculator; 