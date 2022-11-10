import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const theme = createTheme();

function PageLayout({ children }) {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default PageLayout;
