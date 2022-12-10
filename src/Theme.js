import { createTheme } from '@mui/material/styles';
import { Component } from 'react';

const redDh = "#EB174B";
const whiteDh = '#f3f2f5';
const blackDh ='#1A2E35';
const greyDh = '4A4C4F';

export const theme = createTheme({

  palette: {

    // mode: 'dark',
    common: {
      red: redDh,
      white: whiteDh,
      black: blackDh,
    },
    primary: {
      main: whiteDh,
    },
    secondary: {
      main: redDh,
    },
    info: {
      main: redDh,
    },
    contrastThreshold: 4,
    tonalOffset: 0.5,
  },

  typography: {
    h3: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 400,
    }
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: {variant: 'red-btn'},
          style: {
            backgroundColor: redDh,
            color: whiteDh,
            fullWidth: true,
            ':hover': {
              bgcolor: greyDh,
            }
          },
        }
      ]
    },
  },

});

