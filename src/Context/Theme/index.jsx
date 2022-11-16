import { colors, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeStore = (props) => {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      default: {
        main: mode ? colors.grey[900] : colors.grey[100],
      },
      primary: {
        main: mode ? colors.red[400] : colors.red[800],
      },
      secondary: {
        main: mode ? colors.teal[200] : colors.teal[800],
      },
    },
  });
  const handleChangeTheme = () => {
    setMode(!mode);
  };
  return (
    <ThemeContext.Provider value={{ mode, handleChangeTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };