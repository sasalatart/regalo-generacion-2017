import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from './Landing';
import theme from '../lib/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </MuiThemeProvider>
  );
}

export default App;
